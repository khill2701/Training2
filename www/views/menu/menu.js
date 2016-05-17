'Use Strict';
angular.module('App').controller('menuController', function ($scope, $ionicHistory, $ionicSideMenuDelegate, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  
 $scope.goBack = function () {
    $location.path('/home');
 
  }
   $scope.logOut = function () {
        Auth.logout();
        $location.path("/login");
    } 
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    

  ];
}
);
