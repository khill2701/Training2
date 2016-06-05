'Use Strict';
angular.module('App').controller('menuController', function ($scope, $ionicHistory, $ionicSideMenuDelegate, $state, $cordovaOauth, $localStorage, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils) {


  $scope.typeOptions = [
    { name: 'Atlanta, Ga', value: 'Atlanta, Ga' },
    { name: 'New Orleans, La', value: 'New Orleans, La' },
    { name: 'Raleigh, Nc', value: 'Raleigh, Nc' }
  ];

  $scope.showSelectValue = function (mySelect) {
    console.log(mySelect);

    switch (mySelect) {
      case "Atlanta, Ga":
        $scope.form = { type: $scope.typeOptions[0].value };
        break;
      case "New Orleans, La":
        $scope.form = { type: $scope.typeOptions[1].value };
        break;
      case "Raleigh, Nc":
        $scope.form = { type: $scope.typeOptions[2].value };
        break;
      default:
        $scope.form = { type: $scope.typeOptions[0].value };
    }
  }
  $scope.form = { type: $scope.typeOptions[0].value };




  $scope.SelectCity = function () {

  }

  $scope.goBack = function () {
    $location.path('/home');

  }
  $scope.openClubs = function () {
    $location.path('/clubs');
  }

  $scope.openFavorites = function () {
    $location.path('/favorites');
  }

  $scope.openAllMoves = function () {
    $location.path('/home');
  }

  $scope.openBars = function () {

    localStorage.setItem('tag', 'rap');

    $location.path('/bars');
  }

  $scope.logOut = function () {
    Auth.logout();
    $location.path('/login');
  }

  $scope.moveItem = function (item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    { id: 0 },
    { id: 1 },


  ];
}
);
