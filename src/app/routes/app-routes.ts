import {Routes} from '@angular/router';


export const APP_ROUTES_CONFIG: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('../modules/home/home.module').then(module => module.HomeModule)},
  {
    path: 'salesOrder',
    loadChildren: () => import('../modules/sales-order/sales-order.module').then(module => module.SalesOrderModule)},
  {
    path: 'administration',
    loadChildren: () => import('../modules/administration/administration.module').then(module => module.AdministrationModule)
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
