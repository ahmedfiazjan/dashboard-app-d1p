import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './components/content/content.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      }
    ]
  }
];
