import { BehaviorSubject, Subject } from 'rxjs';
import { AppState } from '../app.module';
import { TravelDestination } from './travel-destination.model';
import { Store } from '@ngrx/store';
import { ChoosenFavoriteAction, NewDestinationAction } from './travel-destination-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinationApiClient {
	constructor(public store: Store<AppState>) {
       
	}
	add(d:TravelDestination){
	  this.store.dispatch(new NewDestinationAction(d));
	}

    select(d: TravelDestination){
        this.store.dispatch(new ChoosenFavoriteAction(d));
    }
}