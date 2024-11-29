import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active" class="nav-item">
        <mat-icon matListItemIcon>dashboard</mat-icon>
        <span matListItemTitle>Overview</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
      background: white;
      border-right: 1px solid rgba(0, 0, 0, 0.08);
    }

    .nav-item {
      height: 48px;
      color: #6b7280;

      &:hover {
        background: #f3f4f6;
      }

      mat-icon {
        color: #6b7280;
        margin-right: 12px;
      }
    }

    .active {
      color: #2563eb;
      background: #eff6ff;

      mat-icon {
        color: #2563eb;
      }
    }
  `]
})
export class SidebarComponent {}
