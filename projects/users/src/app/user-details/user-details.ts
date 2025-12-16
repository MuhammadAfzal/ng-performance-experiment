import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails implements OnInit {
  ngOnInit() {
    // BUG: This subscription is never closed!
    // It will keep running even after the component is removed from the DOM.
    interval(1000).subscribe((val) => {
      console.log('Ghost Subscription running... Value:', val);
    });
  }
}
