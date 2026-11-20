import { Component, Input, OnInit } from '@angular/core';
import { ImobileArr } from 'src/app/model/interface';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {

  @Input() mobileInfo !: ImobileArr[]
  constructor() { }

  ngOnInit(): void {
  }

}
