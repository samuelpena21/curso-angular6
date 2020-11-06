import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationListComponent } from './destination-list/destination-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DestinationListComponent},
  { path: 'destination', component: DestinationDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
