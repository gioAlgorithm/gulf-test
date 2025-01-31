import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'details',
    loadComponent: ()=>{
      return import('./detail-page/detail-page.component').then((m)=> m.DetailPageComponent)
    }
  }
];
