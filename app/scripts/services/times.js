'use strict';

/**
 * @ngdoc service
 * @name farfetchApp.times
 * @description
 * # times
 * Constant in the farfetchApp.
 */
angular.module('farfetchApp')
  .constant('Times', {
    notificationTimeout: 4000,
    errorTimeout: 10000
  });
