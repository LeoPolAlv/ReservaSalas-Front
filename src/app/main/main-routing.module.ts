import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user/user-routing.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  //{
    {
      path: 'user', 
      //canActivate: [AuthGuard],
      component: MainComponent,
      loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
    },
    /*{
      path: 'admin', 
      canActivate: [AuthGuard, RolesGuard],
      component: PagesComponent,
      loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
    },
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
