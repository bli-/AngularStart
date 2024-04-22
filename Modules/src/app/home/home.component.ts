import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RandomColor, RandomColorModule } from '../shared/random-color.directive';
import { ReversePipe, ReversePipeModule } from '../shared/reverse.pipe';
import { WelcomeComponent } from './ui/welcome.component';

@Component({
  selector: 'app-home',
  template: `
    <app-welcome
      [name]="user.name"
      (cookiesAccepted)="handleCookies()"
    ></app-welcome>
    <p>I am the home component</p>
    <p randomColor>{{ 'reverse me ' | reverse }}</p>
  `,
})
export class HomeComponent {
  user = {
    name: 'Josh',
  };

  handleCookies() {
    console.log('do something');
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    RandomColorModule,
    ReversePipeModule
  ],
  declarations: [HomeComponent, WelcomeComponent],
})
export class HomeModule {}