import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/navbar/navbar.component').then(
        (m) => m.NavbarComponent
      ),
      children:[
        {
          path: 'tasks',
          loadComponent: () =>
            import('./pages/tasks/tasks.component').then(
              (m) => m.TasksComponent
            ),
        },
        {
          path: 'tasks/:name',
          loadComponent: () =>
            import('./pages/home/home.component').then(
              (m) => m.HomeComponent
            ),
        },
      ]
  },
];
