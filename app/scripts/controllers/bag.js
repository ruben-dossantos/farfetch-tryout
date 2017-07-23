'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:BagCtrl
 * @description
 * # BagCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('BagCtrl', function ($scope, $controller, Bag) {

    angular.extend(this, $controller('CommonFunctionsCtrl', {$scope: $scope}));

    $scope.bagProducts = Bag.getBag();

    angular.extend($scope.global, {
      moveToWishlist: function(product){
        var success = $scope.global.addToWishlist(product);
        if(success) { // only remove if it was possible to add to wishlist
          $scope.global.removeFromBag(product);
        } else { // as it was already there we show an error
          $scope.global.showError('Product already in the wishlist');
        }
      },
      checkout: function(){ // clean storage, factory and bagProducts
        $scope.global.setObjectToStorage('bag', []);
        Bag.setBag([]);
        $scope.bagProducts = [];
        $scope.global.showNotification('Thank you for buying with us!');
      }
    });

    $scope.$watch(function() { return Bag.getBag(); }, function(newVal, oldVal){ // watcher method which notices changes in the Bag factory
      //noinspection JSValidateTypes
      if(newVal !== oldVal){
        $scope.bagProducts = newVal;
      }
    });

  });
