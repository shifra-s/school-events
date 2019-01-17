import { Injectable } from '@angular/core';
import { Event } from '../models/event.model'
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsList: Event[];
    constructor() {
        console.log('ProjectService instansiated');
      
      this.eventsList =  [
        {
        id: 1,
        name: 'event 1',
        date: new Date(2019, 7, 4),
        duration: 2,
        classes: ['6', '7', '8']
      }, {
        id: 2,
        name: 'event 2',
        date: new Date(2019, 8, 10),
        duration: 3,
        classes: ['5', '8']
      }, {
        id: 3,
        name: 'event 3',
        date: new Date(2019, 8, 3),
        duration: 4,
        classes: ['4', '5']
      }, {
        id: 4,
        name: 'event 4',
        date: new Date(2019, 5, 2),
        duration: 1,
        classes: ['9', '10']
      }
    ];
  }

  delete(id: number) {
     
    debugger;
    const idx = this.eventsList.findIndex(p => p.id == id);
    this.eventsList.splice(idx, 1);
   }
  get(): Event[] {
    console.log('get method of ProjectService invoked')
    return this.eventsList;
  }
}






