/// <reference path="../typings/index.d.ts" />

class DDO implements ng.IDirective {
	scope = {};
	restrict = 'E';
	controller = todoListController;
	controllerAs = 'ctrl';
	templateUrl = 'template/todo.html';
}

class todoListController {
	public text:string;
  public time:string;
  private id: number;

	public todos = [
    {
      id: 1,
      text:'learn angular',
      time: 'aaaaaaa',
      done:true
    },
    {
      id: 2,
      text:'build an angular app',
      time: "aaaaaaaaaa",
      done:false
    }
  ];

  constructor() {
    this.id = 3
  }

	//あとでtodoServiceに分ける｡
	public add(): void {
    this.todos.push({id: this.id ++ ,text:this.text , time: this.time, done:false});
	}

	public edit(index: number): void {
	  console.log("aaaaa");
    var target = this.todos[index];
    target.text = 'edit';
  }

	public delete(todo): void {
	  console.log(this.text);
    this.todos = this.todos.filter(t => t !== todo)
 };

}

(function(){
	angular
	.module('app',['ui.router'])
	.directive('todoList', () => new DDO())
})();
