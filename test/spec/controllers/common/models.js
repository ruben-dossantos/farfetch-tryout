'use strict';

describe('Controller: CommonModelsCtrl', function () {

  // load the controller's module
  beforeEach(module('farfetchApp'));

  var CommonModelsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommonModelsCtrl = $controller('CommonModelsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.pagination.pageSize).toBe(6);
    expect(scope.pagination.page).toBe(1);
  });
});
