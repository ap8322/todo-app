/// <reference path="../typings/tsd.d.ts" />

class DDO implements ng.IDirective {
  scope = {};
  restrict = 'E';
  controller = helloWorldController;
  template = '<h1>{{ctrl.title}}</h1>';
  controllerAs = 'ctrl';
}

class helloWorldController {
  private title: string;
  constructor(){
    this.hello();
  }
  private hello(): void {
      this.title = 'Hello, World!';
  }
}

(function(){
  angular
    .module('app', [])
    .directive('helloWorld', () => new DDO())
})();