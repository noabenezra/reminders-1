'use strict';

var app = angular.module('view2', ['ui.router', 'view1'])

app.config(['$stateProvider', function ($stateProvider) {
  debugger;
  $stateProvider.state('view2',
    {
      url: '/view2',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl as vm'

    });
}])



app.service('reminderServer', function ($http) {
  debugger;
  this.reminders = []; debugger;
  var counter = 0;
  this.addNewReminder = function (title, description, dueDate) {
    debugger;

    this.reminders.push({ Title: title, Description: description, DueDate: dueDate, Counter: counter });
    counter++;
    var myJSON = JSON.stringify(this.reminders);
    localStorage.setItem("testJSON", myJSON);
    /*$http({
      method: 'GET',
      url: '//localhost/Reminders/api/values/5',
      params:{title: title, description: description, dueDate:dueDate}
    }).then(function successCallback(response) {debugger;
     
    }, function errorCallback(response) {
    });*/






  }
});

app.controller('View2Ctrl', function (reminderServer) {
  debugger;
  var vm = this;
  vm.newReminder = newReminder;
  function newReminder() {
    debugger;
    reminderServer.addNewReminder(vm.title, vm.description, vm.duedate);
    vm.title = '';
    vm.description = '';
    vm.duedate = '';
  };

});
