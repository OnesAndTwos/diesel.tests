module.exports = (function () {

  function ItemPage(test) {
    this._test = test;
  }

  ItemPage.prototype.selectWaist = function (waist) {
    this._test.click('a[rel="Waist"]')
        .click('li[data-selection="' + waist + '"]').wait(2000);

    return this;
  };

  ItemPage.prototype.selectLength = function (length) {
    this._test.click('a[data-item-code10="36539858RK"]')
        .click('li[data-selection="' + length +'"]').wait(2000);

    return this;
  };

  ItemPage.prototype.addToCart = function () {
    this._test.execute(function() {
      $('.addToCart').click();
    }).wait(2000);

    return this;
  };

  ItemPage.prototype.assertProductPageIs = function (productName) {
    this._test.assert.text('.titolo.sideDesc').is(productName);

    return this;
  };

  ItemPage.prototype.assertCartContains = function (items) {
    this._test.assert.text('#itemInCartNumber').is('1');

    return this;
  };

  return ItemPage;

})();