import { Dialog } from '@angular/cdk/dialog';
import { Component, ContentChild, Input, TemplateRef, inject } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  template: `
    <div></div>
  `,
  styles: ``
})
export class ModalComponent {
  dialog = inject(Dialog);

  @Input() set isOpen(value: boolean) {
    if (value) {
      this.dialog.open(this.template, { panelClass: 'dialog-container' });
    } else {
      this.dialog.closeAll();
    }
  }

  @ContentChild(TemplateRef, { static: false}) template!: TemplateRef<any>;
}
