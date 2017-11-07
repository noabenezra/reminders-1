'use strict';

var app = angular.module('myApp.view2', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vm'
  });
}])



app.service('reminderServer', function () {
  this.reminders = []; debugger;
  var counter=0;
  this.addNewReminder = function (title, description, dueDate)
   { 
    this.reminders.push({ Title: title, Description: description, DueDate: dueDate, Counter: counter });
    counter++;
    var myJSON = JSON.stringify(this.reminders);
    localStorage.setItem("testJSON", myJSON);
  }
});

app.controller('View2Ctrl', function (reminderServer) {
  var vm = this;
  vm.newReminder = newReminder;
  function newReminder()
   {
    reminderServer.addNewReminder(vm.title, vm.description, vm.duedate);
    vm.title = '';
    vm.description = '';
    vm.duedate = '';
  };

});
