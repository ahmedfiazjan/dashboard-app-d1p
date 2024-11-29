import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardData } from '../../../../core/services/data.service';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="detail-view" [class.open]="isOpen">
      <div class="detail-view__header">
        <h2>Details</h2>
        <button mat-icon-button (click)="onClose.emit()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      @if (loading) {
        <div class="detail-view__loading">
          <mat-spinner diameter="30"></mat-spinner>
        </div>
      }

      @if (item) {
        <div class="detail-view__content">
          <div class="detail-view__title">
            <h3>{{item.title}}</h3>
            <span class="status-badge" [class]="item.status">
              {{item.status}}
            </span>
          </div>

          <div class="detail-view__meta">
            <span class="timestamp">
              Last updated: {{item.lastUpdated | date:'MMM d, yyyy, h:mm a'}}
            </span>
            <p class="description">{{item.description}}</p>
          </div>

          <div class="metrics-grid">
            <div class="metric-card">
              <div class="metric-label">Views</div>
              <div class="metric-value">{{item.metrics.views}}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Conversions</div>
              <div class="metric-value">{{item.metrics.conversions}}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Revenue</div>
              <div class="metric-value">{{item.metrics.revenue | currency}}</div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .detail-view {
      position: fixed;
      top: 64px; // Height of header
      right: 0;
      bottom: 0;
      width: 400px;
      background: white;
      box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 1000;
      display: flex;
      flex-direction: column;

      &.open {
        transform: translateX(0);
      }

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid #e5e7eb;

        h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
        }
      }

      &__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
      }

      &__content {
        padding: 24px 20px;
        overflow-y: auto;
        flex: 1;
      }

      &__title {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 16px;

        h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #111827;
        }
      }

      &__meta {
        margin-bottom: 24px;

        .timestamp {
          display: block;
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 12px;
        }

        .description {
          font-size: 14px;
          line-height: 1.5;
          color: #374151;
          margin: 0;
        }
      }
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .metric-card {
      background: #F9FAFB;
      border-radius: 8px;
      padding: 16px;
      text-align: center;

      .metric-label {
        font-size: 14px;
        color: #6B7280;
        margin-bottom: 8px;
      }

      .metric-value {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }
    }

    .status-badge {
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;

      &.active {
        background: #ecfdf5;
        color: #065f46;
      }

      &.pending {
        background: #fffbeb;
        color: #92400e;
      }

      &.inactive {
        background: #fef2f2;
        color: #991b1b;
      }
    }
  `]
})
export class DetailViewComponent {
  @Input() item?: DashboardData;
  @Input() loading = false;
  @Input() isOpen = false;
  @Output() onClose = new EventEmitter<void>();
}
