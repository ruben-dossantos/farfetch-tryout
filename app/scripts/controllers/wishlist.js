'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('WishlistCtrl', function ($scope, $controller, Wishlist) {
    angular.extend(this, $controller('CommonFunctionsCtrl', {$scope: $scope}));

    $scope.wishlistProducts = Wishlist.getWishlist();

    angular.extend($scope.global, {
      removeFromWishlist: function(product){
        var tempWishlist = $scope.global.getObjectFromStorage('wishlist');
        $scope.wishlistProducts = []; // start empty
        for(var i=0; i< tempWishlist.length; i++){
          if(tempWishlist[i].id !== product.id){
            $scope.wishlistProducts.push(tempWishlist[i]); // fill with products different from the chosen
          }
        }
        $scope.global.setObjectToStorage('wishlist', $scope.wishlistProducts);
        Wishlist.setWishlist($scope.wishlistProducts);
        $scope.global.showNotification('Product removed from the wishlist');
      },
      moveToBag: function(product){
        var success = $scope.global.addToBag(product);
        if(success) { // only remove if it was possible to add to bag
          $scope.global.removeFromWishlist(product);
        } else { // as it was already there we show an error
          $scope.global.showError('Product already in the bag');
        }
      }
    });
  });
