import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Child1Module } from '../../child1.module';
@Injectable({
  providedIn: 'root'
})
export class Child1Service {
  constructor(private http: HttpClient) { }

  // getChild1Information() {
  //   return this.http.get(``);
  // }

  getRickMorty() {
    console.log('Getting Rick & Morty Data')
    return this.http.get('https://rickandmortyapi.com/api/character');
  }


  //uNDERSTANDING SERVICES

  objectService = {
    name: 'Component',
    type: 'Html',
    technology: 'Angular'
  }

  showCompName(compName: string) {
    alert('You are in ' + compName + '. Thanks! ');
  }
}
