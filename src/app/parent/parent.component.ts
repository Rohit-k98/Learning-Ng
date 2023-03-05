import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
//import { Child1Service } from '../child1/game1/services/child1.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  //providers: [Child1Service]
})
export class ParentComponent {

  //Sending to child
  message = ''
  response = ''

  baapBete = new FormGroup<any>({
    sandesh: new FormControl('')
  })

  fromChild(value: any) {
    this.response = value;
  }

  toChild(value: any) {
    // console.dir(value.sandesh)
    this.message = value.sandesh;
  }


  // To use a service every component needs to have an instance of that service injected/intialised****

  // We are creating a instance of service/service class in our component
  // callService = new Child1Service(); //Rather than doing that we can use dependency injection**********

  //Showing Dependency Inject for this service
  // constructor(private callService: Child1Service,) {           //> via constructor() we can pass an instance of a service : see inside ()
  //   //> constructor will not read Child1Service so we need to definde in providers[] of component : see line 7
  // }                                                         //> That's it with this setting (line 7,27) we can replace line 24, and start using dependency Injection *****       




  // constructor() {
  //   
  // }



}
