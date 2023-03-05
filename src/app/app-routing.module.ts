import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { FormComponent } from './form/form.component';


//Using Lazy loading so no need to use these ⬇️

// import { FormComponent } from './form/form.component';
// import { ChildComponent } from './parent/child/child.component';
// import { ParentComponent } from './parent/parent.component';
// import { RohitChildComponent } from './rohit-child/rohit-child.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'Parent', loadChildren: () => import('./parent/parent-routing.module')
      .then(mod => mod.ParentRoutingModule)
  },
  { path: 'form', component: FormComponent },
  {
    path: 'test', loadChildren: () => import('./test/test-routing.module')
      .then(mod => mod.TestRoutingModule)
  },
  {
    path: 'child', loadChildren: () => import('./child1/child-routing.module')
      .then(mod => mod.ChildRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

