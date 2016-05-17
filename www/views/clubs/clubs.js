'use strict';
angular.module('App').controller('clubsController', function ($scope, $state, $ionicSideMenuDelegate, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
    var ref = new Firebase(FURL);
    $scope.product;


    // Get a reference to our posts
    var ref = new Firebase("https://boiling-torch-5034.firebaseio.com/properties");

    
    /*Three-way data bindings are amazing for simple key / value data. However, there are many times when an array would be more practical, such as when managing a collection of messages. This is done using the $firebaseArray service.
    
    We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:
    */
    $scope.data = $firebaseArray(ref);

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
        $scope.openMenu = function() {
        $location.path('/menu');   
    }
        

}
);
