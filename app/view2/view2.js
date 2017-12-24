'use strict';

var app = angular.module('view2', ['ui.router', 'view1'])

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('view2',
    {
      url: '/view2/:reminderId',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl as vm'

    });
}])



app.service('reminderServer', function ($http) {
  this.reminderId = 0;
  this.reminders = JSON.parse(localStorage.getItem("testJSON"));

  this.addOrUpdateNewReminder = function (title, description, dueDate, newReminderId) {

    /*$http({
      method: 'GET',
      url: '//localhost/Reminders/api/values/5',
      params:{title: title, description: description, dueDate:dueDate}
    }).then(function successCallback(response) {
     
    }, function errorCallback(response) {
    });*/
    $http({
      method: 'POST',
      url: '//localhost/Reminders/api/values',
      params: { title: title, description: description, dueDate: dueDate }
    }).then(function successCallback(response) {

    }, function errorCallback(response) {
    });


  }
});



app.controller('View2Ctrl', function (reminderServer, $stateParams) {
  var vm = this;
  vm.reminderId = null;
  vm.reminder = { title: "", description: "", duedate: "", reminderId: null };
  var text = localStorage.getItem("testJSON");
  vm.arrayOfReminders = JSON.parse(text);



  vm.newReminder = newReminder;

  init();
  function init() {
    if ($stateParams.reminderId) {
      vm.reminderId = $stateParams.reminderId;
      vm.reminder.title = vm.arrayOfReminders[vm.reminderId].Title;
      vm.reminder.description = vm.arrayOfReminders[vm.reminderId].Description;
      vm.reminder.duedate = new Date(vm.arrayOfReminders[vm.reminderId].DueDate);
    }
  }

  function newReminder() {
    reminderServer.addOrUpdateNewReminder(vm.reminder.title, vm.reminder.description, vm.reminder.duedate, vm.reminderId);
    vm.reminder.title = '';
    vm.reminder.description = '';
    vm.reminder.duedate = '';
  };

});
