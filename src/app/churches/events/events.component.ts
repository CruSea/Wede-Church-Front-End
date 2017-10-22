import { Component, OnInit, ViewChild  } from '@angular/core';
import {EventsService} from './events.service';
import {Events} from './events';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],

})
export class EventsComponent implements OnInit {
  events: Events[];

  eventsTest: Events =   new Events(5,'Super Natural Encounter Ethiopia',
    'Supernatural Encounter Ethiopia በአዲስ አበባ ከ5000 በላይ የከተማዋን መጋቢዎች በአንድ ያሰባሰበ እጅግ ልዮ፣ ብዙ የተማርንበት፣ እጅግ ብዙ ያወቅንበት፣ ብዙ የተጠቀምንበት ልዮ ፀጋን የመካፈል ጊዜ ነበር።',
    'Addis Ababa Stadium','https://i.ytimg.com/vi/qIRWqaiEIJk/maxresdefault.jpg');

  dummyEvent: Events[] = [
    new Events(1,'Super Natural Encounter Ethiopia',
      'Supernatural Encounter Ethiopia በአዲስ አበባ ከ5000 በላይ የከተማዋን መጋቢዎች በአንድ ያሰባሰበ እጅግ ልዮ፣ ብዙ የተማርንበት፣ እጅግ ብዙ ያወቅንበት፣ ብዙ የተጠቀምንበት ልዮ ፀጋን የመካፈል ጊዜ ነበር።',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/qIRWqaiEIJk/maxresdefault.jpg'),

    new Events(2,'ትላንት ከታዘብኩት ነገር እስቲ ትንሽ ልበል....',
      'የመልክቴን ዋና ሀሳብ ግን አትዘንጉት (Sara Christ Tube) እግዚአብሔር ግዜ ሰጥቶኝ በቤተል ቸርች የተዘጋጀውን የነብይ እስራኤልን ፕሮግራም ለመካፈል ትላንት ሄድኩኝ። ግን ለ 2p.m የሚጀምር ፕሮግራም ገና በ11:00am. ቤቱ ሞልቶ በር ተዘግቷል።',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/rIZeADALWWw/maxresdefault.jpg'),

    new Events(3,'GREAT NEWS FOR SOUTH AFRICA!!',
      'Supernatural Encounter Ethiopia በአዲስ አበባ ከ5000 በላይ የከተማዋን መጋቢዎች በአንድ ያሰባሰበ እጅግ ልዮ፣ ብዙ የተማርንበት፣ እጅግ ብዙ ያወቅንበት፣ ብዙ የተጠቀምንበት ልዮ ፀጋን የመካፈል ጊዜ ነበር።',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/ebZITNRUmEg/maxresdefault.jpg'),

    new Events(4,'Super Natural Encounter Ethiopia',
      'Supernatural Encounter Ethiopia በአዲስ አበባ ከ5000 በላይ የከተማዋን መጋቢዎች በአንድ ያሰባሰበ እጅግ ልዮ፣ ብዙ የተማርንበት፣ እጅግ ብዙ ያወቅንበት፣ ብዙ የተጠቀምንበት ልዮ ፀጋን የመካፈል ጊዜ ነበር።',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/YlZ8kDyGZx4/maxresdefault.jpg'),



    new Events(5,'Super Natural Encounter Ethiopia',
      'Supernatural Encounter Ethiopia በአዲስ አበባ ከ5000 በላይ የከተማዋን መጋቢዎች በአንድ ያሰባሰበ እጅግ ልዮ፣ ብዙ የተማርንበት፣ እጅግ ብዙ ያወቅንበት፣ ብዙ የተጠቀምንበት ልዮ ፀጋን የመካፈል ጊዜ ነበር።',
      'Addis Ababa Stadium','https://i.ytimg.com/vi/qIRWqaiEIJk/maxresdefault.jpg')

  ];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
        console.log(data)
      });
  }


}


