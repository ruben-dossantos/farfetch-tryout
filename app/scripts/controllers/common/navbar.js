'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:CommonNavbarCtrl
 * @description
 * # CommonNavbarCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('CommonNavbarCtrl', function ($scope, $controller, Bag, Wishlist) {

    angular.extend(this, $controller('CommonFunctionsCtrl', {$scope: $scope}));

    $scope.bag = Bag.getBag();
    $scope.wishlist = Wishlist.getWishlist();

    $scope.$watch(function() { return Bag.getBag(); }, function(newVal, oldVal){ // watcher method which notices changes in the Bag factory
      //noinspection JSValidateTypes
      if(newVal !== oldVal){
        $scope.bag = newVal;
      }
    });

    $scope.$watch(function() { return Wishlist.getWishlist(); }, function(newVal, oldVal){ // watcher method which notices changes in the Wishlist factory
      //noinspection JSValidateTypes
      if(newVal !== oldVal){
        $scope.wishlist = newVal;
      }
    });

  });
