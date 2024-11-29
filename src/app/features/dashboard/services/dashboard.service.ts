import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private sidebarOpenSignal = signal<boolean>(true);

  readonly sidebarOpen = this.sidebarOpenSignal.asReadonly();

  toggleSidebar(): void {
    this.sidebarOpenSignal.update(state => !state);
  }
}
