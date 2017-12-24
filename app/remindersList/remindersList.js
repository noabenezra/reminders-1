'use strict';

var app = angular.module('remindersList', ['ui.router','addAReminder'])

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('remindersList',
    {
      url: '/remindersList',
      templateUrl: 'remindersList/remindersList.html',
      controller: 'RemindersListCtrl as vm'
    });
}])

app.controller('RemindersListCtrl', function ($state,reminderServer) {
  var vm = this;
  vm.listOfReminders=[];
  vm.editReminder = editReminder;

  init();
  function init() {
    reminderServer.getReminders().then(function (resp) {
      vm.listOfReminders = resp.data;
  });

  }



  function editReminder(reminderId) {debugger;
    debugger;
    $state.go('addAReminder', { reminderId: reminderId});
  };


});



