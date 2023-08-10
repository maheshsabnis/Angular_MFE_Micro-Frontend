import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path: 'orderslist',
  loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
