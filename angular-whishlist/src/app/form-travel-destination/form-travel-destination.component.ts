import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged,switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';


import { TravelDestination } from '../models/travel-destination.model';

@Component({
  selector: 'app-form-travel-destination',
  templateUrl: './form-travel-destination.component.html',
  styleUrls: ['./form-travel-destination.component.css']
})
export class FormTravelDestinationComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<TravelDestination>;
  fg: FormGroup;
  minLong = 3;
  searchResult: string[];

  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.compose([
        Validators.required,
        this.nameValidatorWithParameters(this.minLong)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log();
    } )
  }

  ngOnInit(): void {
    let elemName = <HTMLInputElement>document.getElementById('name'); //Elegimos el elemento del html
    //subscribirno cuando nos presionan tecla
    fromEvent(elemName, 'input') //Pipe sirve para operaciones en serie
      .pipe(
          map((e: KeyboardEvent) => (e.target as HTMLInputElement).value), //Cada evento del teclado tiene un target
          filter(text => text.length > 2), //Entra ese string si tiene más de 2 caracteres
          debounceTime(200),
          distinctUntilChanged(),
          switchMap((text: string) => ajax('/assets/data.json'))
        ).subscribe(ajaxResponse => this.searchResult = ajaxResponse.response);
  }

  save(name: string, url: string): boolean {
    const d = new TravelDestination(name, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nameValidator(control: FormGroup): { [s: string]: boolean } {
    let l = control.value.toString().trim().length;
    if(l>0 && l<5){
      return {invalidName: true}
    }

    return null; 
  }

  nameValidatorWithParameters(minLong: number): ValidatorFn {
    return (control: FormControl): {[s: string]: boolean} | null => {
      let l = control.value.toString().trim().length;
      if(l > 0 && l < minLong){
        return {minLongName: true}
      }
        return null;
    }
  }
}
