import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private reservaService: ReservasService,
  ){
    
  }

  ngOnInit(): void {
    const user: any = 'A00004';
    this.cargarReservas(user);
  }

  cargarReservas(idUser: string){
    this.reservaService.misReservas(idUser).subscribe((reservas:any) => {
      console.log('Reservas que obtengo: ', reservas )
    });
  }

}
