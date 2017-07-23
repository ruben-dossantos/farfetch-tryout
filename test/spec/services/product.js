'use strict';

describe('Service: product', function () {

  // load the service's module
  beforeEach(module('farfetchApp'));

  // instantiate service
  var product;
  beforeEach(inject(function (_Product_) {
    product = _Product_;
  }));

  it('should do something', function () {
    product.query(function(data){
      expect(data.length).toBe(60);
    });

  });

});
