'use strict';
angular.module('App').controller('barsController', function ($scope, $ionicHistory, $ionicSideMenuDelegate, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

	
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
});