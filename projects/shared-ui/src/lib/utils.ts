import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  // Simulates a heavy calculation that blocks the main thread
  heavyCalculation(value: number): number {
    console.log('Heavy Calculation Running...'); // To see it firing in console
    const start = performance.now();
    while (performance.now() - start < 10) {} // 10ms intentional lag
    return value * 100;
  }
}
