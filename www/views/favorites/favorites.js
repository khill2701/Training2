'use strict';
angular.module('App').controller('favoritesController', function ($scope, $ionicHistory) {

	
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
});