import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { AppState } from '../app.module';
import { TravelDestination } from '../models/travel-destination.model';
import { Store } from '@ngrx/store';
import { VoteDownAction, VoteUpAction } from '../models/travel-destination-state.model';

@Component({
  selector: 'app-travel-destination',
  templateUrl: './travel-destination.component.html',
  styleUrls: ['./travel-destination.component.css']
})
export class TravelDestinationComponent implements OnInit {

  @Input() destination: TravelDestination;
  @Input() position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4'; 
  @Output() clicked: EventEmitter<TravelDestination>

  constructor(public store: Store<AppState>) {
    this.clicked = new EventEmitter();
   }

  ngOnInit(): void {
  }

  go() {
    this.clicked.emit(this.destination);
    return false;
  }

  voteUp(){
    this.store.dispatch(new VoteUpAction(this.destination));
    return false;
  }

  voteDown(){
    this.store.dispatch(new VoteDownAction(this.destination));
    return false;
  }

}
