import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelDestinationComponent } from './travel-destination/travel-destination.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTravelDestinationComponent } from './form-travel-destination/form-travel-destination.component';
import { DestinationApiClient } from './models/destination-api-client.model';
import { 
  initializeTravelsDestinationsState, 
  reducerTravelsDestinations, 
  TravelsDestinationsEffects, 
  TravelsDestinationsState } from './models/travel-destination-state.model';
import { ActionReducerMap, StoreModule as NgRxStoreModule, Store  } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



export interface AppState {
  destination: TravelsDestinationsState;
};

const reducers: ActionReducerMap<AppState> = {
  destination: reducerTravelsDestinations
};

const reducersInitialState = {
  destination: initializeTravelsDestinationsState()
};



@NgModule({
  declarations: [
    AppComponent,
    TravelDestinationComponent,
    DestinationListComponent,
    DestinationDetailsComponent,
    FormTravelDestinationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([TravelsDestinationsEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [ DestinationApiClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
