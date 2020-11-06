import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TravelDestination } from '../models/travel-destination.model';

@Component({
  selector: 'app-form-travel-destination',
  templateUrl: './form-travel-destination.component.html',
  styleUrls: ['./form-travel-destination.component.css']
})
export class FormTravelDestinationComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<TravelDestination>;
  fg: FormGroup;
  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: [''],
      url: ['']
    });
  }

  ngOnInit(): void {
  }

  save(name: string, url: string): boolean {
    const d = new TravelDestination(name, url);
    this.onItemAdded.emit(d);
    return false;
  }
}
