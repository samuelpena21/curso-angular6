import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-destination',
  templateUrl: './travel-destination.component.html',
  styleUrls: ['./travel-destination.component.css']
})
export class TravelDestinationComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
