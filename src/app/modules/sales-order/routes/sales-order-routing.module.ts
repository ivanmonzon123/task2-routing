import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SALES_ORDER_ROUTES_CONFIG} from './sales-order-routes';


@NgModule({
  imports: [
    RouterModule.forChild(SALES_ORDER_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class SalesOrderRoutingModule {
}
