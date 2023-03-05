import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ParentModule{
 }
