/// <reference path="../typings/index.d.ts" />

class DDO implements ng.IDirective {
	scope = {};
	restrict = 'E';
	controller = todoListController;
	controllerAs = 'ctrl';
	templateUrl = 'template/todo.html';
}

class todoListController {
	private text:string;
  private time:string;
  private search: string;
  private filterType: string;
  private editedTodo: Object;
  private editText:string;
  private editTime:string;

	private todos = [];

  constructor() {}

  public filter() {
    if (this.filterType === "doing"){
      return {done : false,text: this.search}
    } else if (this.filterType === "done"){
      return {done : true,text: this.search}
    } else {
      return {text: this.search}
    }
  }

	//あとでtodoServiceに分ける｡
	public add(): void {
    this.todos.push({text:this.text , time: this.time, done:false});
	}

	public edit(index: number): void {
    var target = this.todos[index];
    target.text = this.editText;
    target.time = this.editTime;

    this.editText = null;
    this.time = null;
    this.changeViewMode();
  }

  public changeEditMode(todo):void{
    this.editedTodo = todo;
    this.editText = todo.text;
    this.editTime = todo.time;
  }

  public changeViewMode(){
    this.editedTodo = null
  }

	public delete(todo): void {
    this.todos = this.todos.filter(t => t !== todo)
 };

}

(function(){
	angular
	.module('app',['ui.router'])
	.directive('todoList', () => new DDO())
})();
