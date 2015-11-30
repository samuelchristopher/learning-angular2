import { Component, View } from 'angular2/angular2';
import { TodoService } from './todoService.ts';

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<input type="text" #log-me/>
		<button (click)="onClick(logMe.value)">Log input</button>
	`
})

export class TodoInput {
	constructor(
		public todoService: TodoService
	) {
		console.log(todoService);

	}

	onClick (value) {
		this.todoService.addTodo(value);
		console.log(this.todoService.todos);
	}
}