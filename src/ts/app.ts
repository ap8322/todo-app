/// <reference path="../typings/tsd.d.ts" />

class DDO implements ng.IDirective {
  scope = {};
  restrict = 'E';
  controller = todoListController;
  templateUrl = 'template/todo.html';
  controllerAs = 'ctrl';
}

class todoListController {
  public title: string;
  public todos = [
          {text:'learn angular', done:true},
          {text:'build an angular app', done:false}];

  constructor(){
      this.hello()
  }

  private hello(): void {
      this.title = 'TODO';
  }

  public add(): void {
      this.todos.push({text:this.text})
  }
}

(function(){
  angular
    .module('app', [])
    .directive('todoList', () => new DDO())
})();
