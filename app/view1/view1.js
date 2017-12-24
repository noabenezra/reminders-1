'use strict';

var app = angular.module('view1', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('view1', 
      {
            url: '/view1',       
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl as vm'
        });
}])


  app.controller('View1Ctrl', ['$state' ,function ($state) {
    var vm = this;
    vm.reminder={ title:"", description:"", duedate:"", reminderId:null };
    vm.clickedEdit = false;
    vm.editReminder = editReminder;

    var text = localStorage.getItem("testJSON");
    vm.arrayOfReminders = JSON.parse(text);
    function editReminder(reminderId) {   
      $state.go('view2', { reminderId: reminderId });
    };

 
  }]);

   
