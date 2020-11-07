import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Observable(observer => {
    setInterval(()=> observer.next(new Date().toString()) ,1000);
  });
  title = 'angular-whishlist';
  add(title: HTMLInputElement){
    console.log(title.value);
  }
}