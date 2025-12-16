import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserDetails],
  templateUrl: './app.html',
})
export class App {
  showDetails = false;
  // Initial list of users
  users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' },
  ];

  // Simulates a data refresh (e.g., from an API)
  // By creating a NEW array reference, we trigger a full re-render
  refreshData() {
    console.log('Refreshing data...');
    // this.users = [
    //   { id: 1, name: 'Alice', role: 'Admin' },
    //   { id: 3, name: 'Charlie', role: 'Manager' }, // Only Charlie changed
    //   { id: 2, name: 'Bob', role: 'User' },
    // ];

    // Use map to create a BRAND NEW array with BRAND NEW object references
    this.users = this.users.map((user) => ({ ...user }));
    console.log('New object references created for every user!');
  }

  shuffleUsers() {
    // Randomly shuffle the list
    this.users = [...this.users].sort(() => Math.random() - 0.5);
    console.log('Users shuffled!');
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(`View Toggled: ${this.showDetails ? 'Showing' : 'Hidden'}`);
  }
}
