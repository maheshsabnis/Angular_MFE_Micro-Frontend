import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../models/app.inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
   InventoryList:Array<Inventory>;

   constructor(){
     this.InventoryList= new Array<Inventory>();
   }

   ngOnInit(): void {
    this.InventoryList.push(new Inventory(1, 'Laptop',123000,100));
    this.InventoryList.push(new Inventory(2, 'Desktop',23000,80));
    this.InventoryList.push(new Inventory(3, 'RAM',33000,20));
    this.InventoryList.push(new Inventory(4, 'Power Adapter',3000,30));
    this.InventoryList.push(new Inventory(5, 'Pen Drive',500,70));
    this.InventoryList.push(new Inventory(6, 'HDD',23000,10));
    this.InventoryList.push(new Inventory(7, 'SSD',63000,40));
    this.InventoryList.push(new Inventory(8, 'Monitor',2000,30));
    this.InventoryList.push(new Inventory(9, 'Hyper Drive',7000,50));
    this.InventoryList.push(new Inventory(10, 'Charger Cable',1000,90));
    this.InventoryList.push(new Inventory(11, 'USB Cable',600,30));
    this.InventoryList.push(new Inventory(12, 'Headphone',1000,60));
    this.InventoryList.push(new Inventory(13, 'Mobile Charger',900,80));
    this.InventoryList.push(new Inventory(14, 'Extended Monitor',13000,30));
    this.InventoryList.push(new Inventory(15, 'Printer',3600,90));
   }
}
