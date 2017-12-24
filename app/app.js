'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'view1',
  'view2',
  'myApp.version',
  'ui.router'
]).
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/view1");
  }]);
