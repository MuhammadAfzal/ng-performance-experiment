import { Pipe, PipeTransform, inject } from '@angular/core';
import { UtilsService } from './utils';

@Pipe({
  name: 'heavyCalc',
  standalone: true,
  pure: true, // This is the key: it memoizes results based on input
})
export class HeavyCalcPipe implements PipeTransform {
  private utils = inject(UtilsService);

  transform(value: number): number {
    // This will now only log once per unique ID unless the ID changes
    return this.utils.heavyCalculation(value);
  }
}
