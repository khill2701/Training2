'use strict';
angular.module('App').controller('weekly_dealsController', function ($scope, $state, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = new Firebase(FURL);
  $scope.product = {
    "images": [
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" },
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" },
      { "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg" }

    ]
  };

  //to storedata
  var hey = localStorage.getItem('deal_date');
  var deal_url = localStorage.getItem('deal_url');

  // Get a reference to our posts
  var ref = new Firebase(deal_url+"/deals/" + hey);

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




}
);
