'use strict';

describe('Controller: CommonFunctionsCtrl', function () {

  // load the controller's module
  beforeEach(module('farfetchApp'));

  var CommonFunctionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommonFunctionsCtrl = $controller('CommonFunctionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.global.getObjectFromStorage().length).toBe(0);
  });
});
