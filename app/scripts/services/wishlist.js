'use strict';

/**
 * @ngdoc service
 * @name farfetchApp.wishlist
 * @description
 * # wishlist
 * Factory in the farfetchApp.
 */
angular.module('farfetchApp')
  .factory('Wishlist', function () {
    var wishlist = [];

    return {
      getWishlist: function () {
        return wishlist;

      },
      setWishlist: function (newWishlist) {
        wishlist = newWishlist;
      }
    };
  });
