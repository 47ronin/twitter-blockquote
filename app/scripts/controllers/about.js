'use strict';

/**
 * @ngdoc function
 * @name twitterBlockquoteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twitterBlockquoteApp
 */
angular.module('twitterBlockquoteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
