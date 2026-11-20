import { Component, OnInit } from '@angular/core';
import { mobileArr } from 'src/app/const/mobileArr';
import { ImobileArr } from 'src/app/model/interface';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileInfo : ImobileArr[] = mobileArr
  constructor() { }

  ngOnInit(): void {
  }

}
