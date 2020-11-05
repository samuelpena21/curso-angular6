import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  destinations: string[];
  constructor() { 
    this.destinations = ['Barahona', 'Santo Domingo', 'La Romana', 'Samana', 'Santiago'];
  };

  ngOnInit(): void {}; 

}
