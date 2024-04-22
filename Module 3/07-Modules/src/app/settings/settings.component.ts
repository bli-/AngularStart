import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RandomColor } from '../shared/random-color.directive';

@Component({
  selector: 'app-settings',
  template: `<p>I am the settings component</p>`,
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
      },
    ])
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}