'use strict';
angular.module('App').controller('clubsController', function ($scope, $ionicHistory) {

	
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
});