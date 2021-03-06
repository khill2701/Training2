'use strict';
angular.module('App').controller('favoritesController', function ($scope, $state, $ionicSideMenuDelegate, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
    var ref = new Firebase(FURL);
    $scope.product;

        $scope.location = localStorage.getItem('location');

    // Get a reference to our posts
    var ref = new Firebase("https://boiling-torch-5034.firebaseio.com/"+ $scope.location);


    /*Three-way data bindings are amazing for simple key/value data. However, there are many times when an array would be more practical, such as when managing a collection of messages. This is done using the $firebaseArray service.
    
    We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:
    */
    $scope.words = localStorage.getItem('favoritesInfo');
    $scope.data = $firebaseArray(ref);

    $scope.containsComparator = function (expected, actual) {
        return actual.indexOf(expected) > -1;
    };
    $scope.disableClick = function (n) {
        localStorage.setItem('labelz', n);

    }


    $scope.logOut = function () {
        Auth.logout();
        $location.path("/login");
    }

  		$scope.goBack = function () {
        $ionicHistory.goBack();
    }
    $scope.openMenu = function () {
        $location.path('/menu');
    }


}
);
