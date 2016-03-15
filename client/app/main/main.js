'use strict';

angular.module('protonightDateApp')
   .config(function ($stateProvider) {
    $stateProvider
      .state('date', {
        url: '/date',
        templateUrl: 'app/date/date.html',
        controller: 'DateCtrl'
      });
  }) .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  })
  .config(function ($stateProvider) {
            $stateProvider
              .state('signup', {
                url: '/signup',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignupCtrl'
              });
          });
