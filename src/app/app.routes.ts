import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'details/:owner/:repoName',
    loadComponent: () =>
      import('./detail-page/detail-page.component').then(
        (m) => m.DetailPageComponent
      ),
  },
];
