import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent, data: { layout: 'default' } },
  { path: 'user', component: UserComponent, data: { layout: 'default' } },
  { path: '', redirectTo: '/admin', pathMatch: 'full', data: { layout: 'default' } },
  { 
    path: '**', 
    component: PageNotFoundComponent,
    data: { layout: 'none' }
  }
];