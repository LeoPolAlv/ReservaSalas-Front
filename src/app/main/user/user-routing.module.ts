import { NgModule } from '@angular/core';
import { RouteConfigLoadEnd, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewreservaComponent } from './newreserva/newreserva.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newreserva', component: NewreservaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
