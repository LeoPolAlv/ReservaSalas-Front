import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { NewreservaComponent } from './newreserva/newreserva.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    NewreservaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
    //UserRoutingModule
  ]
})
export class UserModule { }
