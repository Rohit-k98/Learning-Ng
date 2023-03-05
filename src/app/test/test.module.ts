import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestRoutingModule } from './test-routing.module';
import { AbcComponent } from './abc/abc.component';


@NgModule({
  declarations: [
    AbcComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    HttpClientModule,
  ],
  //providers: [Child1Service]
})
export class TestModule { }
