'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $firebaseArray, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
    $scope.product = {
    "images" : [
    {"image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg"},
    {"image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg"},
    {"image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/194929/colorburst-700x700.jpg"}

  ] };

// Get a reference to our posts
var ref = new Firebase("https://boiling-torch-5034.firebaseio.com/properties");

debugger;
/*Three-way data bindings are amazing for simple key / value data. However, there are many times when an array would be more practical, such as when managing a collection of messages. This is done using the $firebaseArray service.

We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:
*/
 $scope.data = $firebaseArray(ref);

localStorage.setItem('label2', 'Squad');




  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

}
);
