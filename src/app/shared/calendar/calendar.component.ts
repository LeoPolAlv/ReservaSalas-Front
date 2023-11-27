import { ChangeDetectorRef, Component } from '@angular/core';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventChangeArg, EventContentArg, formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './events-utils';

import { ReservaRequest } from 'src/app/interfaces/reserva-request';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogoEmergenteComponent } from '../dialogo-emergente/dialogo-emergente.component';
import { TitDescReserva } from 'src/app/interfaces/tit-desc-reserva';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  calendarVisible = true;
  tituloRes: string = "";
  descripcionRes: string = "";
  fechaStart: Date = new Date();
  fechaEnd: Date = new Date();
  //displayModal: boolean = false;

  private nuevaReserva: ReservaRequest = 
  {
    fecha_reserva: new Date(), 
	  fecha_hasta:  new Date(),
    titulo: "",
	  descripcion: "",
	  das_user: "",
	  id_sala: 0
  };

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      //right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      right: 'timeGridWeek,timeGridDay,listWeek',
    }, 
    titleFormat:{
      year: 'numeric', month: 'long'
    },
    locale: 'es',
    buttonText: {
      today:    'Hoy',
      //month:    'Mes',
      week:     'Semana',
      day:      'Dia',
      list:     'Mis reservas'
    },
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      //meridiem: 'lowercase',
      hour12: false
    },
    hiddenDays:[0,6], //ocultamos el sabado y domingo
    dayHeaderFormat: {
      weekday:'long',
      day:'numeric'
      //dateStyle:'medium'
    },
    allDaySlot: false,
    showNonCurrentDates: false,
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventChange: this.handleEventChange.bind(this),
    eventAdd: this.handlerEventAdd.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  currentEvents: EventApi[] = [];

  ref: DynamicDialogRef | undefined;
  
  constructor(private changeDetector: ChangeDetectorRef,
              public dialogService: DialogService,
              private reservaServicio: ReservasService
              ){
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    //const title = prompt('Please enter a new title for your event');
    console.log("He elegido una fecha para una reserva: ", selectInfo);
    const calendarApi = selectInfo.view.calendar;

    console.log('fecha inicio', selectInfo.start);
    console.log('fecha Fin:', selectInfo.end);
    this.fechaStart = selectInfo.start;
    this.fechaEnd = selectInfo.end;
    calendarApi.unselect(); // clear date selection

    //this.displayModal=true;
    //const calendarApi = selectInfo.view.calendar;
    

    this.ref = this.dialogService.open(DialogoEmergenteComponent, { header: 'Informa Campos',closable: false});

    this.ref.onClose.subscribe((datos) => {
      console.log("Datos que me devuelven: ", datos);

      this.tituloRes = datos.tituloRes;
      this.descripcionRes = datos.descripcionRes;
      console.log("Valor trasmitido: ", this.tituloRes);
      console.log("Valor trasmitido: ", this.descripcionRes);

      if (datos) {
        calendarApi.addEvent({
          id: createEventId(),
          title: `${datos.tituloRes} - ${datos.descripcionRes}`,
          //display: data.descripcionRes,
          //title: "Titulo nuevo",
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          color:'green'
        }); 
      }
    });

    /**/
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log("Estoy borrando un evento");
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEventChange(info: EventChangeArg){
    console.log("El evento ha cambiado: ", info.event._instance?.range);
  }

  handleEvents(events: EventApi[]) {
    console.log("Estoy en eventset")
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  hagoEvento(evento: any){
    console.log("Hago evento: ", evento);
    //this.displayModal = true;
  }
  
  /*showModalDialog() {
    //this.displayModal = true;
    this.tituloRes = "";
    this.descripcionRes = "";
  }*/

  handlerEventAdd(evento: any){
    console.log("Añadiendo evento: ", evento);

    this.nuevaReserva.titulo = this.tituloRes;
    this.nuevaReserva.descripcion = this.descripcionRes;
    this.nuevaReserva.fecha_reserva = new Date(this.fechaStart);
    this.nuevaReserva.fecha_hasta = new Date(this.fechaEnd);
    this.nuevaReserva.das_user = "A00001";
    this.nuevaReserva.id_sala = 2;

    console.log("Nueva reseva a insertar: ", this.nuevaReserva);

    this.reservaServicio.nuevaReserva(this.nuevaReserva).subscribe({
      next: data => {console.log("Datos devueltos: ", data)},
      error: err =>  {console.log("Error Devuelto: ", err)},
    });
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
