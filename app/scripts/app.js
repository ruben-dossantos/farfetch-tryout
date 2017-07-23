'use strict';

/**
 * @ngdoc overview
 * @name farfetchApp
 * @description
 * # farfetchApp
 *
 * Main module of the application.
 */
angular
  .module('farfetchApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/bag', {
        templateUrl: 'views/bag.html',
        controller: 'BagCtrl',
        controllerAs: 'bag'
      })
      .when('/wishlist', {
        templateUrl: 'views/wishlist.html',
        controller: 'WishlistCtrl',
        controllerAs: 'wishlist'
      })
      .otherwise({
        redirectTo: '/'
      });
    localStorageServiceProvider.setPrefix('farfetch');
  });
