import {Routes} from '@angular/router';
import {SalesOrderComponent} from '../sales-order.component';


export const SALES_ORDER_ROUTES_CONFIG: Routes = [
  {path: '', component: SalesOrderComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
