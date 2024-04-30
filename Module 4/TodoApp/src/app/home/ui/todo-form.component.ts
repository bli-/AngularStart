import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <form [formGroup]="todoForm" (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())">
    <input type="text" formControlName="title" placeholder="title..." />
    <input
      type="text"
      formControlName="description"
      placeholder="description..."
    />
    <button [disabled]="!todoForm.valid" type="submit">Add todo</button>
  </form>
  `,
})
export class TodoFormComponent {
  @Output() todoSubmitted = new EventEmitter<CreateTodo>();
  private fb = inject(FormBuilder);


  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
