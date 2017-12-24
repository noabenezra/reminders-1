'use strict';

var app = angular.module('addAReminder', ['ui.router', 'remindersList', 'ngMaterial'])

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('addAReminder',
    {
      url: '/addAReminder/:reminderId',
      templateUrl: 'addAReminder/addAReminder.html',
      controller: 'AddAReminderCtrl as vm'

    });
}])



app.service('reminderServer', function ($http, $mdToast, $q) {

  this.addOrUpdateNewReminder = function (title, description, dueDate) {
    $http({
      method: 'POST',
      url: '//localhost/Reminders/api/values',
      params: { title: title, description: description, dueDate: dueDate }
    }).then(function successCallback(response) {
      $mdToast.show($mdToast.simple().textContent('Reminder has been added!'));
    }, function errorCallback(response) {
    });
  }

  this.getReminders = function () {
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: '//localhost/Reminders/api/values',
      /* params:{title: title, description: description, dueDate:dueDate}*/
    }).then(function successCallback(response) {
      defer.resolve(response);
    }, function errorCallback(response) {
      defer.reject(response);
    });
    return defer.promise;
  }

  this.getReminder = function (reminderId) {
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: '//localhost/Reminders/api/values/5',
      params: { reminderId: reminderId }
    }).then(function successCallback(response) {
      defer.resolve(response);
    }, function errorCallback(response) {
      defer.reject(response);
    });
    return defer.promise;
  }





});



app.controller('AddAReminderCtrl', function (reminderServer, $stateParams) {
  var vm = this;
  vm.reminderId = null;
  vm.reminder = { title: "", description: "", duedate: "" };


  debugger;

  vm.newReminder = newReminder;

  init();
  function init() {
    debugger;
    if ($stateParams.reminderId ) {
      vm.reminderId = $stateParams.reminderId;
      reminderServer.getReminder(vm.reminderId).then(function (resp) {
        debugger;
        vm.reminder.title = resp.data.Title;
        vm.reminder.description = resp.data.Description;
        vm.reminder.duedate = new Date(resp.data.DueDate);
      });
    }
    debugger;
  }

  function newReminder() {
    reminderServer.addOrUpdateNewReminder(vm.reminder.title, vm.reminder.description, vm.reminder.duedate);
    vm.reminder.title = '';
    vm.reminder.description = '';
    vm.reminder.duedate = '';
  };

});
