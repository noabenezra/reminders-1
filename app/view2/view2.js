'use strict';

var app = angular.module('view2', ['ui.router', 'view1'])

app.config(['$stateProvider', function ($stateProvider) {
  debugger;
  $stateProvider.state('view2',
    {
      url: '/view2/:reminderId',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl as vm'

    });
}])



app.service('reminderServer', function ($http) {
  debugger;
  this.reminderId = 0;
  this.reminders = JSON.parse(localStorage.getItem("testJSON"));
  
  this.addOrUpdateNewReminder = function (title, description, dueDate, newReminderId) {
    debugger;
    if (newReminderId != null) {
      this.reminders[newReminderId].Title = title;
      this.reminders[newReminderId].Description = description;
      this.reminders[newReminderId].DueDate = dueDate;
    }
    else {
      this.reminders.push({ Title: title, Description: description, DueDate: dueDate, ReminderId: this.reminderId });
      this.reminderId++;
    }
    localStorage.setItem("testJSON", JSON.stringify(this.reminders));
    /*$http({
      method: 'GET',
      url: '//localhost/Reminders/api/values/5',
      params:{title: title, description: description, dueDate:dueDate}
    }).then(function successCallback(response) {debugger;
     
    }, function errorCallback(response) {
    });*/



  }
});



app.controller('View2Ctrl', function (reminderServer, $stateParams) {
  debugger;
  var vm = this;
  vm.reminderId = null;
   vm.reminder={ title:"", description:"", duedate:"", reminderId:null };
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
