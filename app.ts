import { bootstrap, Component, View } from 'angular2/angular2';
import { TodoInput } from './todoInput.ts';
import { TodoService } from './todoService.ts';

@Component({
	selector: 'my-app'
})

@View({
	directives: [TodoInput]
	template: `<div><todo-input></todo-input></div>`
})

class App {
	
}

bootstrap(App, [TodoService]);