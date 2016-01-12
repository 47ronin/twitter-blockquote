'use strict';

/**
 * @ngdoc function
 * @name twitterBlockquoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterBlockquoteApp
 */
angular.module('twitterBlockquoteApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }) // end controller
	.controller('tweetCtrl', function($scope, $q, tweetService) {
		$scope.tweet;
		tweetService.initialize();
		$scope.loadTweet = function() {
			tweetService.getTweet()
			.then(function(data) {
				$scope.tweet = data;
				$scope.createdAt = new Date(Date.parse(data.created_at));
				$scope.text = data.text;
				$scope.userName = data.user.name;
				$scope.profileImage = data.user.profile_image_url;
				$scope.screenName = '@' + data.user.screen_name;
			}); // end getTweet
		}; // end scope loadTweet
		$scope.loadTweet();
	}) // end controller
	.factory('tweetService', function($q) {
		var authorizationResult = false;

		return {
			initialize: function() {
				OAuth.initialize('PUBLIC_KEY', {cache:true});
				authorizationResult = OAuth.create('twitter');

				// if not connected, try once:
				var deferred = $q.defer();
				OAuth.popup('twitter', {cache:true}, function(error, result) {
					if (!error) {
						authorizationResult = result;
						deferred.resolve();
					} else {
						// catch error
					}
				});
				return deferred.promise;
			}, // end initialize
			getTweet: function() {
				var deferred = $q.defer();
				var promise = authorizationResult.get('https://api.twitter.com/1.1/statuses/show.json?id=601441096279797762')
					.done(function(data) {
						deferred.resolve(data);
					});
				return deferred.promise;
			} // end getTweet
		}; // end return
	}); // end factory
