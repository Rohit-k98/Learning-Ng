import { Component, OnInit } from '@angular/core';
import { Child1Service } from './services/child1.service';
import { ReactiveFormsModule, FormsModule, FormControlName, Validator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  Name: any;

  constructor(private cs: Child1Service, private fb: FormBuilder) { }

  comp = "Game1Component"

  revealComp() {
    this.cs.showCompName(this.comp);
  }

  ngOnInit(): void {

    //Disabled to understand basic services****

    // this.child1Service.getChild1Information().subscribe((res) => {

    // })
  }
  //For a Form *******

  // AgeValue: any;
  // NameValue: any;
  // valid: boolean = false;
  // regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  // validateForm() {
  //   if (!this.regName.test(this.AgeValue) && this.AgeValue > 0) {
  //     this.valid = true;
  //   }
  // }

  // Export class Game1Component{
  //   randomForm= new FormGroup({
  //     Name=new  FormControl('');
  //     Age= new  FormControl('');

  //   })
  // }

  //    *****************

}

