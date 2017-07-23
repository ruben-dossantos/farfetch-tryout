'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('MainCtrl', function ($scope, $controller) {

    angular.extend(this, $controller('CommonFunctionsCtrl', {$scope: $scope}));

    $scope.filteredProducts = []; // as we receive all products, we need to filter them through pagination

    angular.extend($scope.global, {
      isProductInBagClass: function(product){
        if($scope.global.isProductInStorage('bag', product)) { // if product is in bag, return button specific class
          return 'button--in-cart';
        }
      },
      isProductInWishlistClass: function(product){
        if($scope.global.isProductInStorage('wishlist', product)) { // if product is in wishlist, return button specific  class
          return 'product__wishlisted-button';
        }
      }
    });

    $scope.model.getModel('product');

    $scope.$watch('product', function(){ // watcher method which notices changes in the $scope.product (it is updated when we GET)
      if($scope.product){
        $scope.filteredProducts = $scope.product.slice(($scope.pagination.page - 1) * $scope.pagination.pageSize, $scope.pagination.pageSize * $scope.pagination.page); // we filter that model for pagination purposes
      }
    });

    $scope.$watch('pagination.page', function () { // watcher method which notices changes in the $scope.pagination.page model
      if($scope.product){
        $scope.filteredProducts = $scope.product.slice(($scope.pagination.page - 1) * $scope.pagination.pageSize, $scope.pagination.pageSize * $scope.pagination.page); // we filter the product model with the current page information
      }
    });

  });
