import {Routes} from '@angular/router';
import {AdministrationComponent} from '../administration.component';
import {EditComponent} from '../components/pages/edit/edit.component';
import {UserComponent} from '../components/pages/user/user.component';
import {AdministrationGuard} from '../guards/administration.guard';


export let ADMINISTRATION_ROUTES_CONFIG: Routes;
ADMINISTRATION_ROUTES_CONFIG = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'users', component: UserComponent
      },
      {
        path: 'users/:id', component: UserComponent
      },
      {
        path: 'edit', component: EditComponent, canDeactivate: [AdministrationGuard]
      }
    ]
  },
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
];
