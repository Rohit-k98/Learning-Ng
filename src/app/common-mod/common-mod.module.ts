import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form/data-form.component';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DataFormComponent]
})
export class CommonModModule { }
