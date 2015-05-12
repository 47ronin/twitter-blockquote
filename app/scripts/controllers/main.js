'use strict';

/**
 * @ngdoc function
 * @name twitterBlockquoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterBlockquoteApp
 */
angular.module('twitterBlockquoteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  
  .controller('tweetCtrl', function ($scope, $http) {
  	$http.get('/twitter.php')
	.success(function (data) {
		$scope.tweet = data;
		$scope.createdAt = data.created_at;
		$scope.text = data.text;
		$scope.name = data.user.name;
		$scope.profileImage = data.user.profile_image_url;
		$scope.screenName = '@' + data.user.screen_name;
	})
	.error(function (data) {
		// Error-handling
	});
  });
