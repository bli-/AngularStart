import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: ` <p>{{ value }}</p> `,
})
export class HomeComponent implements OnInit {
  value = 1;

  ngOnInit() {
    setInterval(() => this.value++, 1000);
  }
}
