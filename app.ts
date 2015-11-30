import { bootstrap, Component, View } from 'angular2/angular2';

@Component({
	selector: 'my-app'
})

@View({
	template: `<div>Hello</div>`
})

class App {
	
}

bootstrap(App);