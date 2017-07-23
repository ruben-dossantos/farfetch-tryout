describe('Interact with Wishlist', function() {

  it('should try to move one product from the wishlist to the bag and fail', function() {
    browser.params.clickButton('a_page_wishlist');

    browser.params.clickButton('a_move_bag_1');

    expect($('[ng-show=showError]').isDisplayed()).toBeTruthy();

  });

  it('should remove one product from the wishlist', function(){
    browser.params.clickButton('a_remove_wishlist_1');

    expect($('[ng-show=showNotification]').isDisplayed()).toBeTruthy();
  });

});
