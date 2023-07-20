import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { UserComponent } from './components/pages/user/user.component';
import { EditComponent } from './components/pages/edit/edit.component';
import {AdministrationRoutingModule} from './routes/administration-routing.module';



@NgModule({
  declarations: [
    AdministrationComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
