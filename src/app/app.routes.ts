import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./layout/base/base.component'),
},
{
    path: '**',
    redirectTo: 'about'
}

];
