import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatIconModule, ReactiveFormsModule],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'gulf-test';
}
