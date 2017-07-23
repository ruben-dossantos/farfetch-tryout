'use strict';

/**
 * @ngdoc service
 * @name farfetchApp.product
 * @description
 * # product
 * Factory in the farfetchApp.
 */
angular.module('farfetchApp')
  .factory('Product', function ($resource) {
    return $resource('scripts/mock/:productId.json', {}, {
      query: {
        method: 'GET',
        params: {productId: 'products'},
        isArray: true
      }
    });
  });
