'use strict';

var app = angular.module('view1', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) { debugger; 
      $stateProvider.state('view1', 
      {
            url: '/view1',       
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl as vm'
        });



}])



  app.controller('View1Ctrl', ['$state' ,function ($state) {debugger;
    var vm = this;
    vm.clickedEdit = false;
    vm.editReminder = editReminder;
    vm.saveEditReminder = saveEditReminder;
    var text = localStorage.getItem("testJSON");
    vm.arrayOfReminders = JSON.parse(text);

    function editReminder(counterReminder) {debugger;


      vm.clickedEdit = true;
      debugger;
     
      if (counterReminder == vm.arrayOfReminders[counterReminder].Counter) {
        vm.title = vm.arrayOfReminders[counterReminder].Title;
        vm.description = vm.arrayOfReminders[counterReminder].Description;
        vm.duedate = new Date(vm.arrayOfReminders[counterReminder].DueDate);
      }

      $state.go('view2', { counterReminder: counterReminder });
    };

    function saveEditReminder(counterReminder) {
    debugger;
      vm.arrayOfReminders[counterReminder].Title= vm.title;
       vm.arrayOfReminders[counterReminder].Description= vm.description;
         vm.arrayOfReminders[counterReminder].DueDate=vm.duedate;
         
    }




  }]);

   
