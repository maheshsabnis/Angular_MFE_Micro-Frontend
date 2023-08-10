import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
}, {
  path:'inventorylist',
  loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
