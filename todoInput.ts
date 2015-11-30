import { Component, View, Inject, FORM_DIRECTIVES } from 'angular2/angular2';
import { TodoService, TodoModel } from './todoService.ts';

@Component({
	selector: 'todo-input'
})

@View({
	directives: [FORM_DIRECTIVES],
	template: `
		<form (ng-submit)="addTodo()">
			<input type="text" [(ng-model)]="todoModel.title"/>
		</form>
	`
})

export class TodoInput {
	todoModel:TodoModel = new TodoModel();
	todoService;
	constructor(
		@Inject(TodoService) todoService
	) {
		this.todoService = todoService;
		console.log(todoService);

	}

	addTodo() {
		this.todoService.addTodo(this.todoModel);
		this.todoModel = new TodoModel();
	}

}