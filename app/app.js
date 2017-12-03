'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'view1',
  'view2',
  'myApp.version',
  'ui.router'
]).
config(['$locationProvider', '$stateProvider','$urlRouterProvider', function($locationProvider, $stateProvider,$urlRouterProvider) {debugger;
  $locationProvider.hashPrefix('!');

 $urlRouterProvider.otherwise("/view1");
 //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
