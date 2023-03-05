import { Component, OnInit } from '@angular/core';
import { Child1Service } from './../../child1/game1/services/child1.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor(private childService: Child1Service) { }

  rickData: any;

  ngOnInit() {

    this.childService.getRickMorty().subscribe(data => {
      console.warn('//// PFB the data ////')
      console.log(data);
      this.rickData = data;
    })
  }
  testing = 'Working'
}
