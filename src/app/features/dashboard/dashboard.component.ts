import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, UserProfile } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardData } from '../../core/services/data.service';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  template: `
    <div class="dashboard">
      <app-header
        [title]="title()"
        [userProfile]="userProfile()"
        (toggleSidebar)="toggleSidebar()">
      </app-header>

      <mat-sidenav-container class="dashboard__container">
        <mat-sidenav
          #sidenav
          [mode]="'side'"
          [opened]="sidebarOpen()"
          class="dashboard__sidenav">
          <app-sidebar></app-sidebar>
        </mat-sidenav>

        <mat-sidenav-content class="dashboard__content">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .dashboard {
      display: flex;
      flex-direction: column;
      height: 100vh;

      &__container {
        flex: 1;
      }

      &__sidenav {
        width: 250px;
      }

      &__content {
        padding: 20px;
      }
    }
  `]
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);
  protected sidebarOpen = this.dashboardService.sidebarOpen;

  title = signal('Dashboard');
  userProfile = signal<UserProfile>({
    name: 'John Doe',
    role: 'Admin'
  });

  dashboardItems = signal<DashboardData[]>([]);

  toggleSidebar(): void {
    this.dashboardService.toggleSidebar();
  }

  onItemSelected(item: DashboardData): void {
    console.log('Selected item:', item);
  }
}
