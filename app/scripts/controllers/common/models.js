'use strict';

/**
 * @ngdoc function
 * @name farfetchApp.controller:CommonModelsCtrl
 * @description
 * # CommonModelsCtrl
 * Controller of the farfetchApp
 */
angular.module('farfetchApp')
  .controller('CommonModelsCtrl', function ($scope, Product) {

    $scope.objects = {
      'product': Product
    };

    $scope.pagination = {
      'page': 1,
      'pageSize': 6
    };

    $scope.model = {
      getModel: function (model) { // generic model GET
        $scope.objects[model].query(function(data){
          $scope[model] = data;
          $scope[model].count = data.length;
          $scope.pagination.totalPages = Math.ceil(data.length / $scope.pagination.pageSize); // total pages is the objects returned length / pageSize, rounded up
        });

      }
    }
  });
