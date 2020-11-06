import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TravelDestination } from '../models/travel-destination.model';
import { DestinationApiClient } from '../models/destination-api-client.model';


@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<TravelDestination>

  constructor(public destinationApiClient: DestinationApiClient) { 
    this.onItemAdded = new EventEmitter();
  };

  ngOnInit(): void {}; 

  saved(d: TravelDestination) {
   this.destinationApiClient.add(d);
   this.onItemAdded.emit(d);
   console.log('launched event')
  }

  selected(d: TravelDestination){
    this.destinationApiClient.getAll().forEach((x) => x.setSelected(false));
    d.setSelected(true);
  }
}
