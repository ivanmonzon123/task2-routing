import {Routes} from '@angular/router';
import {HomeComponent} from '../home.component';


export const HOME_ROUTES_CONFIG: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
