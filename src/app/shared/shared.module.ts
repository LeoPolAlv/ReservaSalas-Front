import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DialogoEmergenteComponent } from './dialogo-emergente/dialogo-emergente.component';

@NgModule({
  declarations: [
    CalendarComponent,
    DialogoEmergenteComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FullCalendarModule, // register FullCalendar with your app
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class SharedModule { }
