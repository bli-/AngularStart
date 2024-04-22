import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <p>{{ name }}</p>
    <button (click)="changeName()">Change name</button>
  `,
})
export class HomeComponent {
  name = 'Josh';

  changeName() {
    this.name = 'Kathy';
  }
}
