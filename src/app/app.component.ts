import { Component, ElementRef, ViewChild } from "@angular/core";
import { TodosStoreService } from "./todos-store.service";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>

    <input
      (keyup.enter)="onAddTodo(todoTitleInput.value)"
      #todoTitleInput
      type="text"
      placeholder="Todo title..."
    />

    <button (click)="onAddTodo(todoTitleInput.value)">ADD</button>

    <div class="all-todos">
      <p>Uncompleted todos:</p>

      <app-todo
        *ngFor="let todo of todosStore.uncompletedTodos$ | async"
        [todo]="todo"
        (complete)="todosStore.setCompleted(todo.id, $event)"
        (remove)="todosStore.removeTodo($event)"
      ></app-todo>
    </div>

    <hr />

    <div class="all-todos">
      <p>Completed todos:</p>

      <app-todo
        *ngFor="let todo of todosStore.completedTodos$ | async"
        [todo]="todo"
        (complete)="todosStore.setCompleted(todo.id, $event)"
        (remove)="todosStore.removeTodo($event)"
      ></app-todo>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  @ViewChild("todoTitleInput") todoTitleInput: ElementRef;
  constructor(public todosStore: TodosStoreService) {}

  onAddTodo(title: string) {
    this.todosStore.addTodo(title);
    this.todoTitleInput.nativeElement.value = "";
  }
}
