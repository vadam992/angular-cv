import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('fadeLeft', [ 
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%)'}), 
        animate(1000, style({opacity: 1, transform: 'translateX(0%)'}))
      ]) 
    ]),
    trigger('fadeRight', [ 
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(100%)'}), 
        animate(1000, style({opacity: 1, transform: 'translateX(0%)'}))
      ]) 
    ])
  ]
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
