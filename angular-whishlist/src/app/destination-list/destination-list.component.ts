import { Component, OnInit } from '@angular/core';
import { TravelDestination } from '../models/travel-destination.model';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  destinations: TravelDestination[];
  constructor() { 
    this.destinations = [];
  };

  ngOnInit(): void {}; 

  save(name: string, url: string):boolean {
    var destination = new TravelDestination(name, url);
    this.destinations.push(destination)
    return false;
  }

}
