'use strict';
angular.module('App').controller('informationController', function ($scope, $state, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = new Firebase(FURL);
  $scope.product = {
    "images": [
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" },
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" },
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" }

    ]
  };

  //to storedata
  var hey = localStorage.getItem('labelz');
  console.log(hey);

  // Get a reference to our posts
  var ref = new Firebase(hey);

  /*Three-way data bindings are amazing for simple key / value data. However, there are many times when an array would be more practical, such as when managing a collection of messages. This is done using the $firebaseArray service.
  
  We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:
  */
  //$scope.data = $firebaseObject(ref);

  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  $scope.redirectToGoogle = function () {
    $window.open('https://www.google.com', '_blank');
  };

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }
  $scope.deal_date = function (date) {
    localStorage.setItem('deal_date', date);

  }

  $scope.favorites = function (yo) {
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('favoritesInfo')) || [];
    var word = yo;
    //  returns -1 if it is not found, so you can add it then.
if (favorites.indexOf(yo) == -1) {
    favorites.push(yo);
}
//favorites.pop();
    localStorage.setItem('favoritesInfo', JSON.stringify(favorites));
    console.log(localStorage.getItem('favoritesInfo'));
  }

  $scope.searchFavorites = function (yo) {
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('favoritesInfo')) || [];
    var word = yo;
    // Iterate every array item
    for (var index = 0; index < favorites.length; index++) {
      // If current array item equals itemToRemove then
      if (favorites[index] === "Lucky 13's") {
        return true;
      }
    }
    return true;

  }

}
);
