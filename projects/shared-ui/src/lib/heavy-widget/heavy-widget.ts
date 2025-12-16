import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'shared-heavy-widget',
  standalone: true,
  template: `
    <div class="p-4 bg-green-100 border border-green-500 rounded">
      Optimized Widget (Template Check: {{ logTemplateCheck() }})
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyWidgetComponent implements DoCheck {
  // fires whenever parent is checked (to see if this child needs checking)
  ngDoCheck() {
    console.log('--- ngDoCheck fired (The decision phase) ---');
  }

  // fires ONLY when the actual template/DOM is being updated
  logTemplateCheck() {
    console.log('!!! TEMPLATE CHECKED (The expensive phase) !!!');
    return new Date().toLocaleTimeString();
  }
}
