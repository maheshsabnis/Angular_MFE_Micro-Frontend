import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/app.customer.model';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
   Customers:Array<Customer>;

   constructor(){
      this.Customers = new Array<Customer>();
   }

   ngOnInit(): void {
       this.Customers.push(new Customer(101,'Mahesh','mahesh@abc.com', 123456));
       this.Customers.push(new Customer(102,'Tejas','tejas@abc.com', 223456));
       this.Customers.push(new Customer(103,'Vivek','vivek@abc.com', 323456));
       this.Customers.push(new Customer(104,'Satish','satish@abc.com', 423456));
       this.Customers.push(new Customer(105,'Mukesh','mukesh@abc.com', 523456));
       this.Customers.push(new Customer(106,'Sandeep','sandeep@abc.com', 623456));
       this.Customers.push(new Customer(107,'Vinay','vinay@abc.com', 723456));
       this.Customers.push(new Customer(108,'Tushar','tushar@abc.com', 823456));
       this.Customers.push(new Customer(109,'Kaustubh','kaustubh@abc.com', 923456));
       this.Customers.push(new Customer(110,'Aditya','aditya@abc.com', 213456));
   }
}
