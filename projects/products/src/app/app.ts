import { Component, inject } from '@angular/core';
import { UtilsService } from 'shared-ui';
import { HeavyCalcPipe } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [HeavyCalcPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private utils = inject(UtilsService);

  // Generate 50 items. 50 items * 10ms delay = 500ms lag on every check!
  productIds = Array.from({ length: 50 }, (_, i) => i + 1);

  // This is the function being called from the template
  // getCalculatedValue(id: number): number {
  //   return this.utils.heavyCalculation(id);
  // }

  // A simple method to trigger Change Detection
  triggerRefresh() {
    console.log('Change detection triggered!');
    // Even doing nothing here triggers a re-render cycle
  }
}
