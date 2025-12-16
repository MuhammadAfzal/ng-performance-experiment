import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'shared-heavy-widget',
  standalone: true,
  template: `<div class="p-4 bg-red-100 border border-red-500">I am a heavy widget!</div>`,
})
export class HeavyWidgetComponent implements DoCheck {
  ngDoCheck() {
    console.log('HeavyWidget checked by Angular');
  }
}
