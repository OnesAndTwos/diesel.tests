var Checkout = require('./checkout');

module.exports = (function () {

  function ItemPage(test) {
    this.test = test;
  }

  ItemPage.prototype.selectFirstWaist = function () {
    this.test
        .click('a[rel="Waist"]')
        .click('.defaultSizeW:first-child')
        .wait(1000);

    return this;
  };

  ItemPage.prototype.selectFirstLength = function () {
    this.test
        .click('a[rel="Length"]')
        .click('.defaultSizeL:first-child')
        .wait(1000);

    return this;
  };

  ItemPage.prototype.addToCart = function () {
    this.test.execute(function() {
      $('.addToCart').click();
    }).wait(1000);

    return this;
  };

  ItemPage.prototype.addDefaultItemToCart = function () {
    this.selectFirstWaist();
    this.selectFirstLength();
    this.addToCart();

    return this;
  };

  ItemPage.prototype.proceedToCheckout = function () {
    this.test.click('#goToCart')

    return new Checkout(this.test);
  };

  ItemPage.prototype.assertProductPageIs = function (productName) {
    this.test.assert.text('.titolo.sideDesc').is(productName);

    return this;
  };

  ItemPage.prototype.assertCartContains = function (items) {
    this.test.assert.text('#itemInCartNumber').is(items);

    return this;
  };

  return ItemPage;

})();