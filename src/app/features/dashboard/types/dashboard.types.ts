export interface DashboardState {
  sidebarOpen: boolean;
  selectedItem?: number;
}

export interface DashboardConfig {
  title: string;
  defaultView: 'grid' | 'list';
}
