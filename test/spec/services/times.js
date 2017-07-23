'use strict';

describe('Service: times', function () {

  // load the service's module
  beforeEach(module('farfetchApp'));

  // instantiate service
  var times;
  beforeEach(inject(function (_Times_) {
    times = _Times_;
  }));

  it('should do something', function () {
    expect(times.notificationTimeout).toBe(4000);
  });

  it('should do something', function () {
    expect(times.errorTimeout).toBe(10000);
  });

});
