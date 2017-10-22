import { Component, OnInit } from '@angular/core';
import {Church} from "./church";

@Component({
  selector: 'app-church-management',
  templateUrl: './church-management.component.html',
  styleUrls: ['./church-management.component.css']
})
export class ChurchManagementComponent implements OnInit {


  lat: number = 7.678418;
  lng: number = 38.809007;



  dummyChurch: Church[] = [
    new Church(1,'Bole Mekaneyesus Church',
      'A home for many amazing things of God',
      'Bole','https://i.ytimg.com/vi/qIRWqaiEIJk/maxresdefault.jpg', 7.688418, 38.1),

    new Church(2,'Kolfe Kalehiwot Church',
      'Miracle and sign will follow the word of God',
      'Kolfe','https://i.ytimg.com/vi/rIZeADALWWw/maxresdefault.jpg', 7.608418, 38.2),

    new Church(3,'Assemble Church 6 kilo branch',
      'A mother church for the out burst of things',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/ebZITNRUmEg/maxresdefault.jpg', 7.678418, 38.3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
