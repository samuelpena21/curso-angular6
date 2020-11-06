import { TravelDestination } from './travel-destination.model';

export class DestinationApiClient {
	destinations:TravelDestination[];
	constructor() {
       this.destinations = [];
	}
	add(d:TravelDestination){
	  this.destinations.push(d);
	}
	getAll(){
	  return this.destinations;
    }
}