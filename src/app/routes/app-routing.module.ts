import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_ROUTES_CONFIG} from './app-routes';


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES_CONFIG)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
