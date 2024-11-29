import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

export interface UserProfile {
  name: string;
  role: string;
  avatar?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar class="header">
      <button mat-icon-button (click)="toggleSidebar.emit()" class="header__menu-btn">
        <mat-icon>menu</mat-icon>
      </button>

      <span class="header__title">{{ title }}</span>

      <div class="header__actions">
        <button mat-icon-button class="header__action-btn">
          <mat-icon>notifications</mat-icon>
        </button>
        <button mat-icon-button class="header__action-btn">
          <mat-icon>help</mat-icon>
        </button>
        <div class="header__profile">
          <span class="header__user-name">{{ userProfile?.name }}</span>
          <button mat-icon-button [matMenuTriggerFor]="profileMenu" class="header__avatar">
            <mat-icon>account_circle</mat-icon>
          </button>
          <mat-menu #profileMenu="matMenu" class="header__profile-menu">
            <button mat-menu-item>
              <mat-icon>person</mat-icon>
              <span>Profile</span>
            </button>
            <mat-divider></mat-divider>
            <button mat-menu-item>
              <mat-icon>exit_to_app</mat-icon>
              <span>Sign Out</span>
            </button>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      background: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding: 0 16px;
      height: 64px;

      &__menu-btn {
        margin-right: 16px;
      }

      &__title {
        font-size: 20px;
        font-weight: 500;
        color: #1a1f36; // Dark enterprise text color
      }

      &__actions {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      &__action-btn {
        color: #6b7280;
      }

      &__profile {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid rgba(0, 0, 0, 0.08);
      }

      &__user-name {
        font-size: 14px;
        color: #374151;
      }

      &__avatar {
        background: #f3f4f6;
        border-radius: 50%;
      }
    }
  `]
})
export class HeaderComponent {
  @Input() title = 'Dashboard';
  @Input() userProfile?: UserProfile;
  @Output() toggleSidebar = new EventEmitter<void>();
}
