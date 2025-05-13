import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FlightsComponent } from './pages/flights/flights.component';
import { ServicesComponent } from './pages/services/services.component';
import { PersonnelComponent } from './pages/personnel/personnel.component';

const routes: Routes = [
  { path: '', redirectTo: 'flights', pathMatch: 'full' },  // Cuando cargues localhost:4200, redirige a /flights
  //{ path: 'flights', component: FlightsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'personnel', component: PersonnelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
