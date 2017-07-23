// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'test/scenarios/populate_storage.js',
    'test/scenarios/interact_with_wishlist.js',
    'test/scenarios/interact_with_bag.js'
  ],
  capabilities : {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  onPrepare: function() {
    //noinspection JSUnresolvedFunction
    browser.manage().window().setSize(1600, 1000);
  },
  params: {
    url: 'http://localhost:9000',
    clickButton: function (str_btn){
      var EC = protractor.ExpectedConditions;
      var button = $("#" + str_btn);
      var isClickable = EC.elementToBeClickable(button);

      //noinspection JSUnresolvedFunction
      browser.wait(isClickable, 2000); //wait for an element to become clickable
      button.click();
    }
  }
};
