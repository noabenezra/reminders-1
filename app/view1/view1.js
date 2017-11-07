'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl as vm'
    });
  }])

  .controller('View1Ctrl', [function () {
    var vm = this;
    vm.clickedEdit = false;
    vm.editReminder = editReminder;
    vm.saveEditReminder = saveEditReminder;
    var text = localStorage.getItem("testJSON");
    vm.arrayOfReminders = JSON.parse(text);

    function editReminder(counterReminder) {
      vm.clickedEdit = true;
      debugger;
      if (counterReminder == vm.arrayOfReminders[counterReminder].Counter) {
        vm.title = vm.arrayOfReminders[counterReminder].Title;
        vm.description = vm.arrayOfReminders[counterReminder].Description;
        vm.duedate = new Date(vm.arrayOfReminders[counterReminder].DueDate);
      }
    };

    function saveEditReminder(counterReminder) {
debugger;
      vm.arrayOfReminders[counterReminder].Title= vm.title;
       vm.arrayOfReminders[counterReminder].Description= vm.description;
         vm.arrayOfReminders[counterReminder].DueDate=vm.duedate;
         
    }




  }]);