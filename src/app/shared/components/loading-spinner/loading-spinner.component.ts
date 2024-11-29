import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="spinner">Loading...</div>',
  styles: ['.spinner { text-align: center; }']
})
export class LoadingSpinnerComponent {}
