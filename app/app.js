'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'remindersList',
  'addAReminder',
  'ui.router',
  'ngMaterial'
]).
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/remindersList");
  }]);
