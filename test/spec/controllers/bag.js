'use strict';

describe('Controller: BagCtrl', function () {

  // load the controller's module
  beforeEach(module('farfetchApp'));

  var BagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BagCtrl = $controller('BagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have bag products attached to the scope', function () {
    expect(scope.bagProducts.length).toBe(0);
  });
});
