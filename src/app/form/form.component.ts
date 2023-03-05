import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userData: any = [];

  name = new FormControl('');

  fullNameForm = new FormGroup<any>({
    firstName: new FormControl('Summner'),
    lastName: new FormControl('Garlic')
  })


  updateName() {
    debugger;
    this.name.setValue('DeadWalker');
  }
  resetName() {
    this.name.setValue('');
  }

  updatefullNameForm() {
    this.fullNameForm.patchValue({
      firstName: 'Some',
      lastName: 'One',
    })
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // console.log('FirstName : ',
    //   this.fullNameForm.get('firstName')?.value
    // )
    // console.log("Before adding form value")
    // console.log(this.fullNameForm.value);

    // console.log("After adding form value");
    // this.updatefullNameForm();
    // console.log(this.fullNameForm.value);

    // setting particular form value
    // this.fullNameForm.get('firstName')?.patchValue('Rounit')

    //adding dynamic control
    // let control: FormControl = new FormControl(9835825087)

    this.fullNameForm.addControl('phone', new FormControl(9835825087));
    // console.log(this.fullNameForm.value);
  }

  fbForm = this.fb.group({
    User: [''],
    Password: ['']
  })

  addUserData() {
    this.userData.push(this.fbForm.value);
    console.log(this.userData)
    this.fbForm.reset({})
  }
}
