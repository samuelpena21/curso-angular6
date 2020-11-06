import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
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
