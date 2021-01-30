import { Component, OnInit } from '@angular/core';
import { CovidstatsService } from '../covidstats.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public covidstatsService: CovidstatsService) { }

  ngOnInit(): void {
  }

}
