import {Routes} from '@angular/router';
import {SalesOrderGuard} from '../guards/sales-order.guard';
import {SalesOrderComponent} from '../sales-order.component';


export const SALES_ORDER_ROUTES_CONFIG: Routes = [
  {path: '', component: SalesOrderComponent, canActivate: [SalesOrderGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
