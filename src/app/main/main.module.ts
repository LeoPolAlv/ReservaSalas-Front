import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    UserModule,
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
