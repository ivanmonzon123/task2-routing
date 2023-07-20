import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ADMINISTRATION_ROUTES_CONFIG} from './administration-routes';


@NgModule({
  imports: [
    RouterModule.forChild(ADMINISTRATION_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule {
}
