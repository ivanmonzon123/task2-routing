import {Routes} from '@angular/router';
import {AdministrationComponent} from '../administration.component';
import {EditComponent} from '../components/pages/edit/edit.component';
import {UserComponent} from '../components/pages/user/user.component';


export const ADMINISTRATION_ROUTES_CONFIG: Routes = [
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
        path: 'edit', component: EditComponent
      }
    ]
  },
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
];
