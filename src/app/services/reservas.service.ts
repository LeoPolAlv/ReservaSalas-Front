import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ReservaRequest } from '../interfaces/reserva-request';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(
    private http: HttpClient
  ) 
  { }

  public misReservas(usuario: string){
    console.log('Usuario en servicio: ', usuario);
    const url_acceso = `${URL}/reserva/finduser/${usuario}`
    return this.http.get<any>(url_acceso);
  }

  public nuevaReserva(reserva: ReservaRequest){
    const url_acceso = `${URL}/reserva/new`;
    console.log("URL acceso: ", url_acceso);
    return this.http.post(url_acceso,reserva);
  }
}
