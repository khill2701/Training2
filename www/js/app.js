'Use Strict';
angular.module('App', ['ionic', 'ngStorage', 'ngCordova', 'firebase', 'ngMessages', 'ngAnimate'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'views/favorites/favorites.html',
        controller: 'favoritesController'
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
      .state('comments', {
        url: '/comments',
        templateUrl: 'views/comments/comments.html',
        controller: 'commentsController'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome/welcome.html',
        controller: 'welcomeController'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeController'
      })
      ;
    $urlRouterProvider.otherwise("/login"); //This is the launch page
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
