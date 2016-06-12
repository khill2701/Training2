'use strict';
angular.module('App').controller('homeController', function ($scope, $state, $ionicSideMenuDelegate, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory, $ionicLoading,$timeout) {
    $scope.$on('$ionicView.enter', function () {


        var ref = new Firebase(FURL);
        $scope.product;
        $scope.location = localStorage.getItem('location');
        // Default location
        if (!$scope.location) {
            $scope.tag = '';
            $scope.display_location = 'North Carolina';
            $scope.location = 'north_carolina';
        } else {
            $scope.tag = localStorage.getItem('tag');
            $scope.display_location = localStorage.getItem('display_location');
        }



        // Get a reference to our posts
        var ref = new Firebase("https://boiling-torch-5034.firebaseio.com/" + $scope.location);


        /*Three-way data bindings are amazing for simple key / value data. However, there are many times when an array would be more practical, such as when managing a collection of messages. This is done using the $firebaseArray service.
        
        We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:
        */
        $scope.data = $firebaseArray(ref);


        $scope.disableClick = function (n) {
            localStorage.setItem('labelz', n);

        }
        // Setup the loader
        $ionicLoading.show({
            content: 'Loading',
            template: '<ion-spinner icon="bubbles"></ion-spinner>', //http://ionicframework.com/docs/api/directive/ionSpinner/
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
        $timeout(function () {
            $ionicLoading.hide();
        }, 2500);

        $scope.goToFavorites = function () {
            $location.path("/favorites");
        }

        $scope.logOut = function () {
            Auth.logout();
            $location.path("/login");
        }
        $scope.show = function () {
            $ionicLoading.show({
                template: 'Loading...'
            }).then(function () {
                console.log("The loading indicator is now displayed");
            });
        };
        $scope.hide = function () {
            $ionicLoading.hide().then(function () {
                console.log("The loading indicator is now hidden");
            });
        };
        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
        $scope.openMenu = function () {
            $location.path('/menu');
        }
    });




}
);
