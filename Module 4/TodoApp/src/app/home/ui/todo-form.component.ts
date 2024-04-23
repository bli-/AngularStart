import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <form [formGroup]="todoForm">
    <input type="text" formControlName="title" placeholder="title..." />
    <input
      type="text"
      formControlName="description"
      placeholder="description..."
    />
    <button type="submit">Add todo</button>
  </form>
  `,
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
