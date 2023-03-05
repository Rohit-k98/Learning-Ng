import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CutPipe } from './cut.pipe';
import { NgSliceDirective } from './ng-slice.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DefaultComponent } from './default/default.component';
import { ParentModule } from './parent/parent.module';
import { HttpClientModule } from '@angular/common/http';
import { TestModule } from './test/test.module'
// import { RohitChildComponent } from './rohit-child/rohit-child.component';
// import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './parent/child/child.component';
// import { Child1Service } from './child1/game1/services/child1.service';
// import { Child1Module } from "./child1/child1.module";


@NgModule({
    declarations: [
        AppComponent,
        CutPipe,
        NgSliceDirective,
        FormComponent,
        DefaultComponent,
        // ParentComponent,
        // ChildComponent,
    ],
    // providers: [Child1Service],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }


