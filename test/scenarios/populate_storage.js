describe('Populate Storage', function() {

  it('should add one product to the bag and one to the wishlist', function() {
    browser.get(browser.params.url);
    browser.params.clickButton('btn_add_to_bag_1');
    browser.params.clickButton('btn_add_to_wishlist_1');

    expect($('[ng-show=showNotification]').isDisplayed()).toBeTruthy();
  });

  it('should navigate to page 3', function(){
    browser.params.clickButton('a_page_3');
  });

  it('should add one more product to the bag', function(){
    browser.params.clickButton('btn_add_to_bag_13');

    expect($('[ng-show=showNotification]').isDisplayed()).toBeTruthy();
  });
});
