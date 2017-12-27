
'use strict';

var app = angular.module('func', ['ui.router'])

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('func',
    {
      url: '/func',
      templateUrl: 'func/func.html',
      controller: 'FuncCtrl as vm'

    });
}])



app.controller('FuncCtrl', function () {
  var vm = this;



  function func1() {
     return new Promise(function (resolve, reject) {
      console.log(1);
       resolve('true');
     });

   };


    function func2() {
     return new Promise(function (resolve, reject) {
      setTimeout(function(){  console.log(2);  
                              resolve('true'); 
                            }, 1000);
     
     });

   };


   function func3 () {
     return new Promise(function (resolve, reject) {
      console.log(3);
       resolve('true');
     });
 
   };

   func1().then(function () {
     return func2();
   }).then(function () { 
     return func3();
   }).then(function () { 
     console.log('finish');
   });

});
