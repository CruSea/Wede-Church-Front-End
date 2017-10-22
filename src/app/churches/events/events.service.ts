import { Injectable } from '@angular/core';
import {Events} from './events';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EventsService {

  private baseUrl = 'http://wede.api.myims.org/api/events';

  constructor(private http: Http){}

  getEvents(): Observable<Events[]> {
    return this.http.get(this.baseUrl, {headers: this.getHeaders()})
      .map(res => {
        return res.json().results.map(item => {
          return new Events(
            item.id,
            item.name,
            item.description,
            item.location,
            item.logo
          );
        });
      });
  }

  private getHeaders(){

    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    headers.append('Accept', 'application/json');

    return headers;
  }


  /*
    getEvents(): Promise<Events[]>{
      let events$ = this.http
        .get(`${this.baseUrl}/events`, {headers: this.getHeaders()})
        .toPromise()
        .then(this.mapEvent)
      return events$;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }

    mapEvent(response: Response): Events[]{

      return response.json().results.map(this.toEvent())
    }

    toEvent(r:any): Events{
      let event = <Events>({
        id: r.id,
        name: r.name,
        description: r.description,
        location: r.location
      });
      console.log('Parsed person:', event);
      return event;
    }


  */

}
