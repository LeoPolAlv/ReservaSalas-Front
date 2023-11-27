import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { TitDescReserva } from 'src/app/interfaces/tit-desc-reserva';

@Component({
  selector: 'app-dialogo-emergente',
  templateUrl: './dialogo-emergente.component.html',
  styleUrls: ['./dialogo-emergente.component.css']
})
export class DialogoEmergenteComponent {
  titulo!:string;
  descripcion!:string;

  respuesta: TitDescReserva= {
    tituloRes: "",
    descripcionRes: ""
  };

  constructor(public ref: DynamicDialogRef){
    this.titulo = "";
    this.descripcion = "";
  }

  enviarInfo(){
    this.respuesta.tituloRes = this.titulo;
    this.respuesta.descripcionRes = this.descripcion;
   
    this.ref.close(this.respuesta);
  }
}
