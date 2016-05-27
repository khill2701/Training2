'Use Strict';
var example = angular.module('App', ['ionic', 'ngStorage', 'ngCordova', 'firebase', 'ngMessages'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'views/favorites/favorites.html',
        controller: 'favoritesController'
      })
      .state('clubs', {
        url: '/clubs',
        templateUrl: 'views/clubs/clubs.html',
        controller: 'clubsController'
      })
      .state('bars', {
        url: '/bars',
        templateUrl: 'views/bars/bars.html',
        controller: 'barsController'
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'views/menu/menu.html',
        controller: 'menuController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'loginController'
      })
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'views/forgot/forgot.html',
        controller: 'forgotController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register/register.html',
        controller: 'registerController'
      })
      .state('information', {
        url: '/information',
        templateUrl: 'views/information/information.html',
        controller: 'informationController'
      })
      .state('weekly_deals', {
        url: '/weekly_deals',
        templateUrl: 'views/weekly_deals/weekly_deals.html',
        controller: 'weekly_dealsController'
      })
      .state('maps', {
        url: '/maps',
        templateUrl: 'views/maps/maps.html',
        controller: 'mapsController'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeController'
      })
      ;
    $urlRouterProvider.otherwise("/home"); //This is the launch page
  })
  // Changue this for your Firebase App URL.
  .constant('FURL', 'https://resplendent-inferno-4023.firebaseio.com/')
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

example.controller('MapController', function ($scope, $ionicLoading) {

  google.maps.event.addDomListener(window, 'load', function () {
    var myLatlng = new google.maps.LatLng(35.840588, -78.679976);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var myLocation = new google.maps.Marker({
      position: new google.maps.LatLng(35.840588, -78.679976),
      map: map,
      title: "My Location"
    });
    var myLocation = new google.maps.Marker({
      position: new google.maps.LatLng(35.840588, -77.679976),
      map: map,
      title: "My Location"
    });

    $scope.map = map;
  });

});

