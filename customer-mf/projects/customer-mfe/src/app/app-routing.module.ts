import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
/* Lazy Load the Customer Module */
const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
}, {
  path: 'customerslist',
  loadChildren:()=> import('./customer/customer.module').then(m=>m.CustomerModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
