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

   this.deleteReminder = function (reminderId) {debugger;  
    var defer = $q.defer();
     $http({
       method: 'POST',
       url: '//localhost/Reminders/api/values/7',
       params: { reminderId: reminderId}
     }).then(function successCallback(response) {debugger;
      defer.resolve(response);
     }, function errorCallback(response) {
      defer.reject(response);
     });
     return defer.promise;
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

  this.addOrUpdateAReminder = function (reminderId, title, description, dueDate) {
    debugger;
    var defer = $q.defer();
    $http({
      method: 'POST',
      url: '//localhost/Reminders/api/values/update',
      params: { reminderId: reminderId, title: title, description: description, dueDate: dueDate }
    }).then(function successCallback(response) {
      debugger;
      defer.resolve(response);
    }, function errorCallback(response) {
      defer.reject(response);
    });
    return defer.promise;
  }



});



app.controller('AddAReminderCtrl', function (reminderServer, $stateParams, $mdToast) {
  var vm = this;
  vm.reminderId = null;
  vm.reminder = { title: "", description: "", duedate: "" };
  vm.newReminder = newReminder;
  init();

  function init() {
    if ($stateParams.reminderId) {
      vm.reminderId = $stateParams.reminderId;
      reminderServer.getReminder(vm.reminderId).then(function (resp) {
        vm.reminder.title = resp.data.Title;
        vm.reminder.description = resp.data.Description;
        vm.reminder.duedate = new Date(resp.data.DueDate);
      });
    }
  }

  function newReminder() {
    if ($stateParams.reminderId) {
      reminderServer.addOrUpdateAReminder($stateParams.reminderId, vm.reminder.title, vm.reminder.description, vm.reminder.duedate).then(function (resp) {
        $mdToast.show($mdToast.simple().textContent('Reminder has been Edited!'));
      });
    }
    else {
      reminderServer.addOrUpdateAReminder(null, vm.reminder.title, vm.reminder.description, vm.reminder.duedate).then(function (resp) {
        $mdToast.show($mdToast.simple().textContent('Reminder has been added!'));
      });
    }
    vm.reminder.title = '';
    vm.reminder.description = '';
    vm.reminder.duedate = '';
  };

});
