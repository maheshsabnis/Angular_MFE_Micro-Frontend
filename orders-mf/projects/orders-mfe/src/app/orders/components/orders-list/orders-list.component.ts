import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/orders.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
   Orders:Array<Order>;

   constructor(){
    this.Orders = new Array<Order>();
   }

  ngOnInit(): void {
      this.Orders.push(new Order('Ord-10001', 'Laptop', 'Mahesh'));
      this.Orders.push(new Order('Ord-10002', 'Desktop', 'Tejas'));
      this.Orders.push(new Order('Ord-10003', 'RAM', 'Vivek'));
      this.Orders.push(new Order('Ord-10004', 'Printer', 'Kaustubh'));
      this.Orders.push(new Order('Ord-10005', 'HDD', 'Tejas'));
      this.Orders.push(new Order('Ord-10006', 'SSD', 'Satish'));
      this.Orders.push(new Order('Ord-10007', 'Laptop', 'Mukesh'));
      this.Orders.push(new Order('Ord-10008', 'SSD', 'Mahesh'));
      this.Orders.push(new Order('Ord-10009', 'HDD', 'Tejas'));
      this.Orders.push(new Order('Ord-10010', 'Printer', 'Mukesh'));
  }
}
