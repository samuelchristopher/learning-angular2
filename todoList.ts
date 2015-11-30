import { Component, View, NgFor } from 'angular2/angular2';
import { TodoService } from './todoService.ts';

@Component({
	selector: 'todo-list'
})

@View({
	directives: [ NgFor ]
	template: `
		<div>
			<div *ng-for="#todo of todoService.todos">
				{{ todo }}
			</div>
		</div>
	`
})

export class TodoList {
	constructor(
		public todoService: TodoService
	) {

	}

}