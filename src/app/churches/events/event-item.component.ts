import {Component, Input, OnInit} from '@angular/core';
import {Events} from './events';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styles: []
})

export class EventItemComponent implements OnInit {

  @Input() events: Events;

  constructor() { }

  ngOnInit() {
  }

}
