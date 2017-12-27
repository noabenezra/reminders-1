'use strict';

var app = angular.module('remindersList', ['ui.router', 'addAReminder'])

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('remindersList',
    {
      url: '/remindersList',
      templateUrl: 'remindersList/remindersList.html',
      controller: 'RemindersListCtrl as vm'
    });
}])

app.controller('RemindersListCtrl', function ($state, reminderServer, $mdToast) {
  var vm = this;
  vm.listOfReminders = [];
  vm.editReminder = editReminder;
  vm.deleteReminder = deleteReminder;

  init();

  function init() {
    reminderServer.getReminders().then(function (resp) {
      vm.listOfReminders = resp.data;
    });
  }

  function editReminder(reminderId) {
    debugger;
    debugger;
    $state.go('addAReminderWithId', { reminderId: reminderId });
  };

  function deleteReminder(reminderId) {
    debugger;
    reminderServer.deleteReminder(reminderId).then(function (resp) {
      debugger;
      vm.listOfReminders.splice(findEntity(reminderId), 1);
      $mdToast.show($mdToast.simple().textContent('Reminder has been Deleted!'));
    });

  };

  function findEntity(reminderId) {
    debugger;
    var index = vm.listOfReminders.findIndex(function (m) {
      return m.ReminderID === reminderId;
    });
    return index;
  }



});



