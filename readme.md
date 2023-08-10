# The Customer MFE App

- Open the command terminal and create an Angular workspace for the first micro-frontend application. Run the following command to create a workspace for customer-mf .

ng new customer-mf --create-application false --skip-tests

- Navigate to customer-mf directory  and create a project 

ng g app auth-mfe --skip-tests --routing


 

- Add a  component named Add a home component to the application. to the application.

ng g c components/home --project customer-mfe

- Generate a feture module in the customer-mfe project

ng g module --project customer-mfe --routing customer

- Add the component named CustomerList in this feture module 

ng g c --project customer-mfe --module customer customer/components/CustomerList

- Add the ROute for the CustomerList in customer-routing.module.ts

````javascript
const routes: Routes = [{
  path: 'customers',
  component: CustomerListComponent
}];
````

- Now lets modify the app-routing.module.ts for Lazy Loading the CustomerModule as follows

````javascript
/* Lazy Load the Customer Module */
const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
}, {
  path: 'customerslist',
  loadChildren:()=> import('./customer/customer.module').then(m=>m.CustomerModule)
}];
````

- Now Let's install the boostrap and jQuery for applying Styles

npm install bootstrap jquery

- Modify the angular.json ton load the bootstrap and jquery

````javascript
        "styles": [
              "projects/customer-mfe/src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
        "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
````
- Let's add a new folder named 'models' in the customer-mfe project in the following folder path
'customer-mfe/src/app'

- In this 'models' folder add a code file named 'app.customer.model.ts' and in this filer add new class named 'Customer' as follows

````javascript
export class Customer{
  constructor(
    public CustomerId: number,
    public CustomerName: string,
    public Email: string,
    public Mobile: number
  ){}
}
````
- Let's modify the CustomerListComponent and Customer-list.component.html to display customer's data 

````javascript
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
````

- The UI for the CustomerList component is as follows

````html
<h2>List of Customer List</h2>

<table class="table table-bordered table-striped table-warning">
    <thead>
        <tr>
          <th>Customer Id</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
    </thead>
    <tbody>>
        <tr *ngFor="let customer of Customers">
           <td>{{customer.CustomerId}}</td>
           <td>{{customer.CustomerName}}</td>
           <td>{{customer.Email}}</td>
           <td>{{customer.Mobile}}</td>
        </tr>
    </tbody>
</table>
````

- Modify the app.component.html as follows

````html
<nav class="navbar navbar-expand-lg bg-primary bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Customer Micro-Frontend</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="customerslist/customers">Customer List</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>

````
# Now let's Configure the application with module federation

- Install the Module federation plugin to the application. Install  the @angular-architects/module-federation based on the Angular CLI. 
 
- Here we need to make sure that the project name must be specified for project name as remote that will be running on the port and loaded remotely.

- In our case we are using the port 4200

ng add @angular-architects/module-federation --type remote --project customer-mfe --port 4200

- This command will add webpack.prod.config.js, webpack.config.js and bootstrap.ts files. The tsconfig.json, tsconfig.app.json, angular.json, package.json, and main.ts files will be updated 

- Modify the webpack.config.js file as follows to export the CustomerModule

````javascript
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'customer-mfe',
  exposes: {
    './Module': './projects/customer-mfe/src/app/customer/customer.module.ts',
  },
  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },
});
````
- Let's run the application and make sure that the app is running
ng serve --port 4200


# The Inventory MFE App

- Open the command terminal and create an Angular workspace for the first micro-frontend application. Run the following command to create a workspace for inventory-mf .

ng new inventory-mf --create-application false --skip-tests

- Navigate to inventory-mf directory  and create a project 

ng g app inventory-mfe --skip-tests --routing

- Add a  component named Add a home component to the application. to the application.

ng g c components/home --project inventory-mfe

- Generate a feture module in the inventory-mfe project

ng g module --project inventory-mfe --routing inventory

- Add the component named InventoryList in this feture module 

ng g c --project inventory-mfe --module inventory inventory/components/InventoryList

- As done for Customer MFE  Application install bootstrap and jQuery packages in the Inventty app and also make changes in angular.json and also make changes in inventoty-routing.module.ts and inventory.module.ts

- In the inventory-mfe application add a new folder named 'models' in the following path  projects/inventory-mfe/src/app/inventory/models
- In this folder add a new file named 'app.inventory.model.ts'
- In this file add the Inventory class as shown in the following code

````javascript
export class Inventory {
  constructor(
    public ItemId:number,
    public ItemName: string,
    public UnitPrice: number,
    public AvailableQuantity:number
  ){}
}
````
- Modify the 'InventoryListComponent' component as shown in the following code

````javascript
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
````

- Modify the invemtory-list.component.html as shown in the following code

````html
<h1>The Inventory List</h1>

<table class="table table-bordered table-striped">
   <thead class="table-danger">
      <tr>
         <th>Item Id</th>
         <th>Item Name</th>
         <th>Unit Quantity</th>
         <th>Available Quantity</th>
      </tr>
   </thead>
   <tbody class="table-dark">
      <tr *ngFor="let inventory of InventoryList">
          <td>{{inventory.ItemId}}</td>
          <td>{{inventory.ItemName}}</td>
          <td>{{inventory.UnitPrice}}</td>
          <td>{{inventory.AvailableQuantity}}</td>
      </tr>
   </tbody>
</table>

````
- Modify the inventory-routing.module.ts for route
````javascript
const routes: Routes = [{
  path:'inventory',
  component: InventoryListComponent
}];

````
- modify the app-routing.module.ts for inventory-mfe project to lazy load the inventory.module and hence the InventoryListComponent

````javascript
const routes: Routes = [{
  path:'',
  component:HomeComponent
}, {
  path:'inventorylist',
  loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)
}];
````


- Now modify the project for Module Federation for port 4300

- ng add @angular-architects/module-federation --type remote --project inventory-mfe --port 4300

- Modify the webpack.config.js file to export the inventory module as shown in the follwing code

````javascript
exposes: {
    './Module': './projects/inventory-mfe/src/app/inventory/inventory.module.ts',
  },

````


# The Orders MFE App

- Open the command terminal and create an Angular workspace for the first micro-frontend application. Run the following command to create a workspace for orders-mf .

ng new orders-mf --create-application false --skip-tests

- Navigate to inventory-mf directory  and create a project 

ng g app orders-mfe --skip-tests --routing

- Add a  component named Add a home component to the application. to the application.

ng g c components/home --project orders-mfe

- Generate a feture module in the orders-mfe project

ng g module --project orders-mfe --routing orders

- Add the component named InventoryList in this feture module 

ng g c --project orders-mfe --module orders orders/components/OrdersList

- install the jQuery and Bootstrap

npm install jquery bootstrap

- modify the angular.json to load bootstrap and jquery

````javascript
 "styles": [
              "projects/orders-mfe/src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
````

- Once the orders-mfe project is created, with HomeComponant and the  featured module named OrdersModule added in it, modify the orders-routing.module.ts for defining route for OrdersListComponent as shown in following code
````javascript
const routes: Routes = [{
  path:'order',
  component:OrdersListComponent
}];
````

- Modify the app-routing.module.ts for lazy loading of the the OrdersModule as shown in the following code

````javascript
const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path: 'orderslist',
  loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
}];
````

- In the orders-mfe project add the 'models' folder in the 'projects/orders-list/src/app' folder path. IN this folder add a new code file and name it as orders.model.ts and in this code file add the code as follows

````javascript
export class Order {
   constructor(
    public OrderId: string,
    public ItemName: string,
    public CustomerName: string
   ){}
}

````

- Modify the OrdersListComponent in the orders-list.component.ts file as shown in the following code

````javascript
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
````

- Modify the 'orders-list.component.html' file with HTML markup as shown in the following code

````html
<h1>List of Orders</h1>
<table class="table table-bordered table-striped">
  <thead>
     <tr class="table-primary">
        <th>Order Id</th>
        <th>Item Name</th>
        <th>Customer Name</th>
     </tr>
  </thead>
  <tbody class="table-dark">
       <tr *ngFor="let order of Orders">
         <td>{{order.OrderId}}</td>
         <td>{{order.ItemName}}</td>
         <td>{{order.CustomerName}}</td>
       </tr>
  </tbody>
</table>
````

- Modify the app.component.html of the orders-mef project to show routing links for the OrdersList component as shown in following markup

````html
<nav class="navbar navbar-expand-lg bg-primary bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Orders MFE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="orderslist/order">Books</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>

````

 - Now modify the project for Module Federation for port 4300

- ng add @angular-architects/module-federation --type remote --project orders-mfe --port 4400

- Modify the webpack.config.js file to export the inventory module as shown in the follwing code

````javascript
exposes: {
    './Module': './projects/orders-mfe/src/app/orders/orders.module.ts',
  },

````

# Creating the Shell Project

- Since all of our individual applications are ready, now we will create a shell project. This project will host all the individual applications with the Module Federations. All the exposed modules from the running applications will be loased here.


- Open the command or terminal window and create an Angular workspace for a shell application. Run the following command to create a workspace for ecomm-host 

ng new ecomm-host --create-application false --skip-tests

- navigate to the ecomm-host folder and run the following commans to create the shell application named ecomm-shell

ng g app ecomm-shell --skip-tests --routing

- add a home component in this app
ng g c components/home --project ecomm-shell

- add the bootstrap and jquery for this app
npm install jquery bootstrap

- modify the angular.json for jquery and bootstrap, the very same configuration as we have done in the orders, inventiry, and customer apps

- modify the app-routing.module.ts to define routes for HomeComponent

- Configure the Shell project for Module Federation for port 5200 as shown in the following command

ng add @angular-architects/module-federation@ --type host --project ecomm-shell --port 5200

- Now the Most important step here is to configure is the wepack.config.js file to make sure that all exposed Federated MOdules like Customers, Inventory, and Orders to be defines as remote in to the shell application, so that when these projects and shell application is running , views from these exposed modules can be loaded in the shell application. 
Make sure that you read the 'name' attribute value from Module Federation Plugin property and use it in the 'remote' of the wepack.config.js in the shell application 
The webpack.config.js shows the configuration as follows

````javascript
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "customer-mfe": "http://localhost:4200/remoteEntry.js",
    "inventory-mfe": "http://localhost:4300/remoteEntry.js",
    "orders-mfe": "http://localhost:4400/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
  },

});

````
- In the 'src' folder of the Shell project add a new file named 'decl.d.ts' to declare the remote module so that when we use the in the route table with lazy loading, the angular will not generate any error. The code is shown as follows

````javascript
declare module 'customer-mfe/Module';
declare module 'inventory-mfe/Module';
declare module 'orders-mfe/Module';

````



- Now, modify the app-routing.module.ts to define routing for the exposed module as shonw in the following code

````javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'cust',
  loadChildren:()=>import('customer-mfe/Module').then(m=>m.CustomerModule)
},{
  path:'inventory',
  loadChildren:()=>import('inventory-mfe/Module').then(m=>m.InventoryModule)
},{
  path:'order',
  loadChildren:()=>import('orders-mfe/Module').then(m=>m.OrdersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

````

````html
<h3>PLEASE NOTE, you can even add the dynamic routes in app-routing.moduel.ts file of the Shell project. This will prevent the modifications in webpack.config.js file.</h3>

````

- Replace the code from the app.component.html to show routing for the Federated modules as shown in the following markup

````html


<nav class="navbar navbar-expand-lg bg-primary bg-body-tertiary" data-bs-theme="dark">

  <div class="container-fluid">

    <a class="navbar-brand" href="#">E-Commerce Shell App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="customerslist/customers">Customers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="inventorylist/inventory">Inventory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="orderslist/order">Orders</a>
        </li>



      </ul>
    </div>
  </div>
</nav>
<div class="container form-group">
  <label for="">
    <strong>Enter Search String Here </strong>
  </label>
  <input type="text" class="form-control" placeholder="Enter the search">
</div>
<div class="container">
  <router-outlet></router-outlet>
</div>

````












