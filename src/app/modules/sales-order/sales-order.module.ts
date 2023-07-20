import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalesOrderRoutingModule} from './routes/sales-order-routing.module';
import { SalesOrderComponent } from './sales-order.component';



@NgModule({
  declarations: [
    SalesOrderComponent
  ],
  imports: [
    CommonModule,
    SalesOrderRoutingModule
  ]
})
export class SalesOrderModule { }
