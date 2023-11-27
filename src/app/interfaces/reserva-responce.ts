export interface ReservaResponce {
    idReserva: number;
    //Indica si una reserva esta activa
    activa: boolean;
    //Fecha de la reserva
    fechaReserva: string;
    //Fecha cuando finaliza la reserva.
    fechaHasta: string;
    titulo: string;
    descripcion: string;
    usuario: String;
    sala: number;
}
