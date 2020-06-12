import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-introduction',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { 
    
  }
  ngOnInit(): void {
  }
}