import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-layout">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-layout {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  `]
})
export class MainLayoutComponent {}
