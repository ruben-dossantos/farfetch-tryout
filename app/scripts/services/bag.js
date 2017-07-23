'use strict';

/**
 * @ngdoc service
 * @name farfetchApp.bag
 * @description
 * # bag
 * Factory in the farfetchApp.
 */
angular.module('farfetchApp')
  .factory('Bag', function () {

    var bag = [];

    return {
      getBag: function () {
        return bag;

      },
      setBag: function (newBag) {
        bag = newBag;
      }
    };
  });
