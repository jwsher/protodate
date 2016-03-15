'use strict';

angular.module('protonightDateApp')
  .controller('MainCtrl', function ($scope, $http, $window) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.developerSignup=function() {
      $window.location='/signup?type=developer';
    };
    $scope.ideaGuySignup=function() {
      $window.location='/signup?type=ideaguy';
    };
  });
