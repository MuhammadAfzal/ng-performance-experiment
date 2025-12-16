import { Component, signal } from '@angular/core'; // Import signal
import { HeavyWidgetComponent } from 'shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeavyWidgetComponent],
  templateUrl: './app.html',
})
export class App {
  // FIX: Use a signal instead of a regular number
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1); // Atomic update
  }
}
