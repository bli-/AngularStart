import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <p>Hi, {{ name }}!</p>
    <p>Do you accept the yummy cookies?</p>
    <button (click)="cookiesAccepted.emit(true)">I do!</button>
  `,
})
export class WelcomeComponent {
  @Input() name = 'friend';
  @Output() cookiesAccepted = new EventEmitter();
}