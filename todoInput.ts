import { Component, View } from 'angular2/angular2';

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<input type="text" />
	`
})

export class TodoInput {}