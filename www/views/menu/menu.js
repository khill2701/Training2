'Use Strict';
angular.module('App').controller('menuController', function ($scope, $ionicHistory, $ionicSideMenuDelegate, $state, $cordovaOauth, $localStorage, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  $scope.$on('$ionicView.enter', function () {

    $scope.typeOptions = [
      { name: 'Atlanta, Ga', value: 'Atlanta, Ga' },
      { name: 'New Orleans, La', value: 'New Orleans, La' },
      { name: 'Raleigh, Nc', value: 'Raleigh, Nc' }
    ];
    if (!localStorage.getItem('location')) {

      $scope.form = { type: $scope.typeOptions[0].value };
      localStorage.setItem('display_location', "Atlanta, Ga");

    }

    switch (localStorage.getItem('location')) {
      case "georgia":

        $scope.form = { type: $scope.typeOptions[0].value };
        localStorage.setItem('display_location', "Atlanta, Ga");

        break;
      case "louisiana":

        $scope.form = { type: $scope.typeOptions[1].value };
        localStorage.setItem('display_location', "New Orleans, La");

        break;
      case "north_carolina":

        $scope.form = { type: $scope.typeOptions[2].value };
        localStorage.setItem('display_location', "Raleigh, Nc");

        break;
    }


    $scope.showSelectValue = function (mySelect) {
      console.log(mySelect);

      switch (mySelect) {
        case "Atlanta, Ga":

          $scope.form = { type: $scope.typeOptions[0].value };
          localStorage.setItem('location', "georgia");
          localStorage.setItem('display_location', "Atlanta, Ga");

          break;
        case "New Orleans, La":

          $scope.form = { type: $scope.typeOptions[1].value };
          localStorage.setItem('location', "louisiana");
          localStorage.setItem('display_location', "New Orleans, La");

          break;
        case "Raleigh, Nc":

          $scope.form = { type: $scope.typeOptions[2].value };
          localStorage.setItem('location', "north_carolina");
          localStorage.setItem('display_location', "Raleigh, Nc");
          break;
      }
    }






    $scope.SelectCity = function () {

    }


    $scope.goBack = function () {
      $location.path('/home');

    }
    $scope.openClubs = function () {
      localStorage.setItem('tag', 'club');
      $location.path('/home');
    }

    $scope.openFavorites = function () {
      $location.path('/favorites');
    }

    $scope.openAllMoves = function () {
      localStorage.setItem('tag', '');
      $location.path('/home');


    }

    $scope.openBars = function () {

      localStorage.setItem('tag', 'bar');

      $location.path('/home');
    }
    $scope.sendEmail = function () {

      window.open('mailto:whatzthemoveapp@gmail.com?subject=Share%20A%20Move&body=Name:%0AWebsite:%0AAddress:%0APhone%20Number:');

    }

    $scope.logOut = function () {
      Auth.logout();
      $location.path('/login');
      window.open('mailto:test@example.com');

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
  });


});
