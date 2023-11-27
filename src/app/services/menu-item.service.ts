import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItems } from '../interfaces/menuItems';
import { environment } from 'src/environments/environment.development';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(
    private http: HttpClient,
  ) 
  { }

  public obtenermenu(){
    //console.log('Usuario en servicio: ', usuario);
    const url_acceso = `${URL}/items/tipo`
    return this.http.get<any>(url_acceso,{params: {tipo: "USER"}});
  }
}
