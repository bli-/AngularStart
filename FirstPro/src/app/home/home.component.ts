import { Component } from '@angular/core';
import { WelcomeComponent } from './ui/welcome.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-welcome/>
    <ng-template #myTemplate let-greeting="greeting">
      <p>{{greeting}} there</p>
    </ng-template>

    <ng-container
      *ngTemplateOutlet="myTemplate; context: { greeting: 'Hi' }"
    ></ng-container>
    <ng-container
      *ngTemplateOutlet="myTemplate; context: { greeting: 'Hello' }"
    ></ng-container>
    <ng-container
      *ngTemplateOutlet="myTemplate; context: { greeting: 'Yo' }"
    ></ng-container>
  `,
  imports: [CommonModule, WelcomeComponent]
})
export class HomeComponent {
}
