import { Component, signal } from '@angular/core';
import { HeavyWidgetComponent } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [HeavyWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = 0;
}
