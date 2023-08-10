import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'customerslist',
  loadChildren:()=>import('customer-mfe/Module').then(m=>m.CustomerModule)
},{
  path:'inventorylist',
  loadChildren:()=>import('inventory-mfe/Module').then(m=>m.InventoryModule)
},{
  path:'orderslist',
  loadChildren:()=>import('orders-mfe/Module').then(m=>m.OrdersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
