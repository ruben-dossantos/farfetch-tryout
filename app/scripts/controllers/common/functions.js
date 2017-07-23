'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:CommonFunctionsCtrl
 * @description
 * # CommonFunctionsCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('CommonFunctionsCtrl', function ($scope, $controller, $interval, localStorageService, Bag, Wishlist, Times) {

    angular.extend(this, $controller('CommonModelsCtrl', {$scope: $scope}));

    $scope.global = {
      getObjectFromStorage: function(type) {
        return (localStorageService.get(type)) ? JSON.parse(localStorageService.get(type)) : [];
      },
      setObjectToStorage: function(type, object) {
        localStorageService.set(type, JSON.stringify(object));
      },
      isProductInStorage: function(storage, product){
        var array = $scope.global.getObjectFromStorage(storage);
        for(var i = 0; i < array.length; i++){
          if(array[i].id === product.id){
            return true; }
        }
        return false;
      },
      addToWishlist: function(product){
        var wishlist = $scope.global.getObjectFromStorage('wishlist');
        if(!$scope.global.isProductInStorage('wishlist', product)) { // wishlist is designed to have only one product of each
          wishlist.push(product);
          $scope.global.setObjectToStorage('wishlist', wishlist);
          Wishlist.setWishlist(wishlist);
          $scope.global.showNotification('Product added to the wishlist');
          return true;
        } else{
          return false;
        }
      },
      addToBag: function(product){
        var bag = $scope.global.getObjectFromStorage('bag');
        if(!$scope.global.isProductInStorage('bag', product)) { // bag is designed to have only one product of each
          bag.push(product);
          $scope.global.setObjectToStorage('bag', bag);
          Bag.setBag(bag);
          $scope.global.showNotification('Product added to the bag');
          return true;
        } else {
          return false;
        }
      },
      removeFromBag: function(product){
        var tempBag = $scope.global.getObjectFromStorage('bag');
        $scope.bagProducts = []; // start empty
        for(var i=0; i< tempBag.length; i++){
          if(tempBag[i].id !== product.id){
            $scope.bagProducts.push(tempBag[i]); // fill with products different from the chosen
          }
        }
        $scope.global.setObjectToStorage('bag', $scope.bagProducts);
        Bag.setBag($scope.bagProducts);
        $scope.global.showNotification('Product removed from the bag');
      },
      sumBag: function(){ // helper function to sum the prices within the bag
        var sum = 0;
        angular.forEach($scope.global.getObjectFromStorage('bag'), function(product){
          sum = sum + parseInt(product.price);
        });
        return sum;
      },
      getNumber: function(number) { // helper function to create an array for pagination purposes. Angular ng-repeat needs an array to repeat its contents
        return new Array(number);
      },
      previousPage: function(){
        if($scope.pagination.page > 1) { // we can't go to page 0 and below
          $scope.pagination.page = $scope.pagination.page - 1;
        }
      },
      nextPage: function(){
        if($scope.pagination.page < $scope.pagination.totalPages) { // we can't go higher than the total pages
          $scope.pagination.page = $scope.pagination.page + 1;
        }
      },
      changePage: function(page){ // when we change $scope.pagination.page, its watcher will fire and re-paginate the model
        $scope.pagination.page = page;
      },
      showNotification: function(notification){
        $scope.showNotification = true;
        $scope.notification = notification;
        $interval(function(){ $scope.showNotification = false; }, Times.notificationTimeout); // after show notification, hide it
      },
      showError: function(error){
        $scope.showError = true;
        $scope.error = error;
        $interval(function(){ $scope.showError= false; }, Times.errorTimeout); // after showing error, hide it
      }
    };

    Bag.setBag($scope.global.getObjectFromStorage('bag')); // put bag contents in a shared factory to use in navbar controller
    Wishlist.setWishlist($scope.global.getObjectFromStorage('wishlist')); // put wishlist contents in a shared factory to use in navbar controller

  });
