'use strict';

angular.module('protonightDateApp')
  .controller('SignupCtrl', function ($scope, $http, $window,$location) {
    /**
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    **/
    $scope.identity = $location.search().type;
    $scope.developerSignup=function() {
      $window.location='/signup/?type=developer';
      };
    $scope.ideaGuySignup=function() {
      $window.location='/signup/?type=ideaguy';
    };
    $scope.ideaSignup=function() {
      $window.location='/auth/facebook/?type=ideaguy';
    }
    $scope.developerSignup=function() {
      $window.location='/auth/facebook/?type=developer';
    }
  });
