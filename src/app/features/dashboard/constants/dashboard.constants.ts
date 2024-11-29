export const DASHBOARD_CONFIG = {
  defaultTitle: 'Dashboard',
  refreshInterval: 30000, // 30 seconds
  tablePageSize: 10,
  metrics: {
    views: { label: 'Views', icon: 'visibility' },
    conversions: { label: 'Conversions', icon: 'swap_horiz' },
    revenue: { label: 'Revenue', icon: 'attach_money' }
  }
};

export const NAVIGATION_ITEMS = [
  {
    label: 'Overview',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    label: 'Reports',
    icon: 'assessment',
    children: [
      { label: 'Daily', route: '/dashboard/reports/daily' },
      { label: 'Weekly', route: '/dashboard/reports/weekly' }
    ]
  }
];
