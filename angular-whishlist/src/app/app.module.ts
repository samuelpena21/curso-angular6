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


@NgModule({
  declarations: [
    AppComponent,
    TravelDestinationComponent,
    DestinationListComponent,
    DestinationDetailsComponent,
    FormTravelDestinationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ DestinationApiClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
