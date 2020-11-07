import { BehaviorSubject, Subject } from 'rxjs';
import { TravelDestination } from './travel-destination.model';

export class DestinationApiClient {
    destinations:TravelDestination[];
    current: Subject<TravelDestination> = new BehaviorSubject<TravelDestination>(null);

	constructor() {
       this.destinations = [];
	}
	add(d:TravelDestination){
	  this.destinations.push(d);
	}
	getAll(){
	  return this.destinations;
    }
    getById(id: string): TravelDestination {
        return this.destinations.filter(function(d) {return d.id.toString() === id; })[0];
    }
    select(d: TravelDestination){
        this.destinations.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }
    subscribeOnChange(fn){
        this.current.subscribe(fn);
    }
}