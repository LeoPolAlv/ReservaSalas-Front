import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main/main-routing.module';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/main'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
