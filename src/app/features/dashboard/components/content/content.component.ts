import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService, DashboardData } from '../../../../core/services/data.service';
import { DetailViewComponent } from '../detail-view/detail-view.component';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    DetailViewComponent
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private dataService = inject(DataService);
  protected loading$ = this.dataService.loading$;
  protected selectedItem?: DashboardData;

  @Input() items: DashboardData[] = [];
  @Output() itemSelected = new EventEmitter<DashboardData>();

  displayedColumns = ['id', 'title', 'status'];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe({
      next: (data: DashboardData[]) => {
        this.items = data;
      }
    });
  }

  onItemSelect(item: DashboardData): void {
    this.dataService.getDataById(item.id).subscribe({
      next: (detailedItem: DashboardData | undefined) => {
        if (detailedItem) {
          this.selectedItem = detailedItem;
          this.itemSelected.emit(detailedItem);
        }
      }
    });
  }

  onClose(): void {
    this.selectedItem = undefined;
  }
}
