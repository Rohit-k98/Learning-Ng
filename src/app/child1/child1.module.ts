import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game1Component } from './game1/game1.component';
import { Child1Service } from './game1/services/child1.service';
import { ChildRoutingModule } from './child-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    Game1Component
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    HttpClientModule,
  ],
  providers: [Child1Service]
})
export class Child1Module { }
