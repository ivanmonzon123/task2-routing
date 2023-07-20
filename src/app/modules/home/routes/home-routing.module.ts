import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HOME_ROUTES_CONFIG} from './home-routes';


@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
