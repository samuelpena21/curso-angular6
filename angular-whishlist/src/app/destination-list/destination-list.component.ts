import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TravelDestination } from '../models/travel-destination.model';
import { DestinationApiClient } from '../models/destination-api-client.model';
import { AppState } from '../app.module';
import { select, Store } from '@ngrx/store';
import { ChoosenFavoriteAction, NewDestinationAction } from '../models/travel-destination-state.model'


@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<TravelDestination>
  updates: string[];
  all;
  constructor(public destinationApiClient: DestinationApiClient, public store: Store<AppState>) { 
    this.onItemAdded = new EventEmitter();
    this.updates = [];
  
  };

  ngOnInit(): void {
    this.store.select(state => state.destination)
    .subscribe(data => {
      let d = data.favorite;
      if(d != null) {
        this.updates.push("You have been choosen:" + d.name);
      }
    });
    this.store.select(state => state.destination.items).subscribe(items => this.all = items);
  }; 

  saved(d: TravelDestination) {
   this.destinationApiClient.add(d);
   this.onItemAdded.emit(d);
  //  this.store.dispatch(new NewDestinationAction(d))
  }

  selected(d: TravelDestination){
    this.destinationApiClient.select(d);
    // this.store.dispatch(new ChoosenFavoriteAction(d))
  }

  getAll() {

  }
}
