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

app.service('hexafy', function() {
  this.myFunc = function (x) {
      return x.toString(16);
  }
});

app.controller('RemindersListCtrl', function ($state, hexafy,reminderServer) {
  var vm = this;
  vm.listOfReminders=[];
  vm.reminder = { title: "", description: "", duedate: "", reminderId: null };
  vm.editReminder = editReminder;

  init();
  function init() {
    debugger;
    reminderServer.getReminders().then(function (resp) {
      debugger;
      vm.listOfReminders = resp.data;
  });
  // vm.hex = hexafy.myFunc(255);
  }



  function editReminder(reminderId) {
    $state.go('addAReminder', { reminderId: reminderId });
  };


});



