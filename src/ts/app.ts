/// <reference path="../typings/tsd.d.ts" />

class DDO implements ng.IDirective {
	scope = {};
	restrict = 'E';
	controller = todoListController;
	controllerAs = 'ctrl';
	templateUrl = 'template/todo.html';
}

class todoListController {
	public text:string;

	public todos = [
		{
			text:'learn angular',
			time: this.getDate(),
			done:true
		},
		{
			text:'build an angular app',
			time: this.getDate(),
			done:false
		}
	];

	constructor() {}

	//あとでtodoServiceに分ける｡
	public add(): void {
		this.todos.push({text:this.text , time: this.getDate(), done:false});
	}

	public getDate(): string{
		var date: Date= new Date();
		return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	}

	public delete(): void{}
}

(function(){
	angular
	.module('app', [])
	.directive('todoList', () => new DDO())
})();
