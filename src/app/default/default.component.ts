import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  ngOnInit(): void {
  }
  outputValue = ''
  form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkMeOut: [null, [Validators.required]]

    })
  }




  getPersonDetails() {
    console.log(this.form.value);
  }
  getEmailValue() {
    console.log(this.form.get('email')?.value);
  }
  title = 'LearningNG';
  something = 'Still trying to find out something'

  getDataFromChild(data: any) {
    // console.log(data);
    this.outputValue = data;
  }
  AgeValue: any
  NameValue: any = ''
  valid: boolean = true;
  regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  formSubmit(item: any) {
    console.log(item)
  }

  validateForm(item: any) {
    if (item.Name == "/^[a-z ,.'-]+$/i" && item.Age > 0) {
      this.valid = false;
    }
  }
  element = [{type:'server',name:'dwServer',content:'CsGo, PUBG and More'}];
  serverElements = [{type:'server',name:'dwServer',content:'CsGo, PUBG and More'}];
  newServerName = '';
  newServerContent = '';
  
  onAddServer() {
    this.element.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
    console.log(this.element)
  }
  
  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
