'use strict';
angular.module('App').controller('informationController', function ($scope, $state, $sce, $cordovaOauth, $localStorage, $firebaseArray, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
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

  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }
  $scope.deal_date = function (date) {
    localStorage.setItem('deal_date', date);

  }

  $scope.goHome = function () {
    $location.path('/home');
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



  $scope.removeFavorites = function (yo) {
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('favoritesInfo')) || [];
    var word = yo;

    for (var i = favorites.length - 1; i >= 0; i--) {
      if (favorites[i] === yo) {

        favorites.splice(i, 1);
        console.log("Yoooo");

        console.log(favorites[i]);
      }
    }
    //favorites.pop();
    localStorage.setItem('favoritesInfo', JSON.stringify(favorites));
    console.log(localStorage.getItem('favoritesInfo'));
  }

  $scope.searchFavorites = function (yo) {
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('favoritesInfo')) || [];
    var word = yo;
    //returns -1 if it is not found, so you can add it then.
    if (favorites.indexOf(yo) == -1) {
      return false;
    }
    console.log(localStorage.getItem('favoritesInfo'));
    return true;

  }

  $scope.like = function (yo) {
    debugger;
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('likeInfo')) || [];
    var word = yo;
    //  returns -1 if it is not found, so you can add it then.
    if (favorites.indexOf(yo) == -1) {
      var upvotesRef = new Firebase(localStorage.getItem('labelz') + '/likes');
      upvotesRef.transaction(function (current_value) {
        return (current_value || 0) + 1;
      });
      favorites.push(yo);

    }
    //favorites.pop();
    localStorage.setItem('likeInfo', JSON.stringify(favorites));
    console.log(localStorage.getItem('likeInfo'));
  }

  $scope.removeLike = function (yo) {
    debugger;
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('likeInfo')) || [];
    var word = yo;

    for (var i = favorites.length - 1; i >= 0; i--) {
      if (favorites[i] === yo) {

        favorites.splice(i, 1);
        var upvotesRef = new Firebase(localStorage.getItem('labelz') + '/likes');
        upvotesRef.transaction(function (current_value) {
          return (current_value || 0) - 1;
        });

        console.log("Yoooo");

        console.log(favorites[i]);
      }
    }
    //favorites.pop();
    localStorage.setItem('likeInfo', JSON.stringify(favorites));
    console.log(localStorage.getItem('likeInfo'));
  }

  $scope.searchLikes = function (yo) {
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    // retrieve it (Or create a blank array if there isn't any info saved yet),
    var favorites = JSON.parse(localStorage.getItem('likeInfo')) || [];
    var word = yo;
    //returns -1 if it is not found, so you can add it then.
    if (favorites.indexOf(yo) == -1) {
      return false;
    }
    console.log(localStorage.getItem('likeInfo'));
    return true;

  }

  /**  Custom Code Begins From Here   **/  
    var disqus_shortname = 'localhostabhishek';   		//shortname refers to the username you set on the  disqus site 
    var disqus_identifier = "a"; 					 	// unique identififer for a particular disqus thread 
    var disqus_url = 'http://localhost/';               // url to your source 
	var disqus_config = function () { 
	  this.language = "en";
	};
    /* * * DON'T EDIT BELOW THIS LINE * * */
	
	// Checking  if DISQUS variable is defined or not , if not defined  load ember.js
    if(!window.DISQUS)
	{
	  (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
       (document.head || document.body).appendChild(dsq);
    })();
    	
		
	}	
	
	/* * * Disqus Reset Function * * */
	
	/**   Reset Function  :  This Function is the main function whcih resets the disqus thread for different disqus_identifier  and  disqus_url  **/
    $scope.reset = function (newIdentifier, newUrl, newTitle, newLanguage) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = newIdentifier;
                this.page.url = newUrl;
                this.page.title = newTitle;
                this.language = newLanguage;
            }
        });
		
		 // window.location.href="#/app/playlists/"+newIdentifier;
 
    };

  
});
