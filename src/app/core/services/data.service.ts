import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, delay, finalize, of } from 'rxjs';

export interface DashboardData {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'pending' | 'inactive';
  lastUpdated: string;
  metrics: {
    views: number;
    conversions: number;
    revenue: number;
  };
}

const MOCK_DATA: DashboardData[] = [
  {
    id: 1,
    title: 'Sales Dashboard',
    description: 'Monthly sales performance overview',
    status: 'active',
    lastUpdated: '2024-03-20T10:00:00',
    metrics: {
      views: 1200,
      conversions: 85,
      revenue: 12500
    }
  },
  {
    id: 2,
    title: 'Marketing Campaign',
    description: 'Q1 Marketing campaign results',
    status: 'pending',
    lastUpdated: '2024-03-19T15:30:00',
    metrics: {
      views: 3500,
      conversions: 120,
      revenue: 8900
    }
  },
  {
    id: 3,
    title: 'Customer Feedback',
    description: 'Customer satisfaction survey results',
    status: 'active',
    lastUpdated: '2024-03-18T09:15:00',
    metrics: {
      views: 850,
      conversions: 45,
      revenue: 5600
    }
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getData(): Observable<DashboardData[]> {
    this.loadingSubject.next(true);

    // Simulate API call with delay
    return of(MOCK_DATA).pipe(
      delay(1500), // Add 1.5s delay to simulate network request
      finalize(() => this.loadingSubject.next(false))
    );
  }

  getDataById(id: number): Observable<DashboardData | undefined> {
    this.loadingSubject.next(true);

    return of(MOCK_DATA.find(item => item.id === id)).pipe(
      delay(800), // Shorter delay for single item
      finalize(() => this.loadingSubject.next(false))
    );
  }
}
