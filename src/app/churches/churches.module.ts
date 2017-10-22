import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { ChurchManagementComponent } from './church-management/church-management.component';
import {ChurchRoutingModule} from './church-routing.module';
import {EventsService} from './events/events.service';
import { EventItemComponent } from './events/event-item.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ChurchRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARyxAxAnkF4bg9tWzYvBtawD_R22Xaajg'
    })
  ],
  declarations: [EventsComponent, ChurchManagementComponent, EventItemComponent, EventItemComponent, EventEditComponent],
  providers: [EventsService],

})
export class ChurchesModule { }
