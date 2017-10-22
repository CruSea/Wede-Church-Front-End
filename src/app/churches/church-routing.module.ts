import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ChurchManagementComponent } from './church-management/church-management.component';
import {EventsComponent} from './events/events.component';

const routes: Routes = [
  {
    path: 'church-management',
    component: ChurchManagementComponent,
    data: {
      title: 'Church Management'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: 'Event'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChurchRoutingModule {}
