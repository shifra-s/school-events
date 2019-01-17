import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  @Input() event: Event;
  @Output() deleteEvent:EventEmitter<number> = new  EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

}

