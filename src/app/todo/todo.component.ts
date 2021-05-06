import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todo.model";

@Component({
  selector: "app-todo",
  template: `
    <div class="todo-container">
      <input
        type="checkbox"
        [checked]="todo.isCompleted"
        (change)="complete.emit($event.target.checked)"
      />
      <span [ngClass]="{ completed: todo.isCompleted }" class="todo-title">
        {{ todo.title }}
      </span>

      <button (click)="remove.emit(todo.id)">X</button>
    </div>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
