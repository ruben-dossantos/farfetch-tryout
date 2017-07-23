describe('Interact with Bag', function() {

  it('should verify how many products are in the bag', function() {
    browser.params.clickButton('a_page_bag');

    element.all(by.repeater('product in bagProducts')).count().then(function(nr){
      expect(nr).toEqual(2);
    });
  });

  it('should verify the total price', function(){
    var el = element(by.css('#spn_total_price'));

    expect(el.getText()).toEqual('£385');
  });

  it('should buy the products in the bag', function(){
    browser.params.clickButton('btn_checkout');

    expect($('[ng-show=showNotification]').isDisplayed()).toBeTruthy();
  });

  it('should verify if the products were removed from the bag', function(){
    element.all(by.repeater('product in bagProducts')).count().then(function(nr){
      expect(nr).toEqual(0);
    });
  });

});
