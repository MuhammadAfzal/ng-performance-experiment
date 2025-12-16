import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef)) // AUTO-CLEANUP
      .subscribe((val) => {
        console.log('Ghost Subscription running... Value:', val);
      });
  }
}
