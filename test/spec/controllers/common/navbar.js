'use strict';

describe('Controller: CommonNavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('farfetchApp'));

  var CommonNavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommonNavbarCtrl = $controller('CommonNavbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.bag.length).toBe(0);
    expect(scope.wishlist.length).toBe(0);
  });
});
