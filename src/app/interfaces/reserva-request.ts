export interface ReservaRequest {
    fecha_reserva: Date; 
	fecha_hasta: Date;
    titulo: string;
	descripcion: string;
	das_user: string;
	id_sala: number;
}
