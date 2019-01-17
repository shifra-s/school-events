import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService) { 
    console.log('EventListComponent instantiated');
  }

  ngOnInit() {
    console.log('ProjectListComponent ngOnInit')
    //gets events from the service
    this.events = this.eventsService.get();
  }

  deleteChild(id: number) {
    this.eventsService.delete(id);
  }
}


