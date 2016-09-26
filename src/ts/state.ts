/// <reference path="../typings/index.d.ts" />

import IStateProvider = angular.ui.IStateProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;

angular.module('app')
  .config(($stateProvider: IStateProvider ,$urlRouterProvider: IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('list',{
        url:'/',
        template:'<todo-list></todo-list>'
      });
  });
