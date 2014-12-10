module.exports = (function () {

  function ItemPage(test) {
    this.test = test;
  }

  ItemPage.prototype.selectWaist = function (waist) {
    this.test.click('a[rel="Waist"]')
        .click('li[data-selection="' + waist + '"]').wait(2000);

    return this;
  };

  ItemPage.prototype.selectLength = function (length) {
    this.test.click('a[data-item-code10="36539858RK"]')
        .click('li[data-selection="' + length +'"]').wait(2000);

    return this;
  };

  ItemPage.prototype.addToCart = function () {
    this.test.execute(function() {
      $('.addToCart').click();
    }).wait(2000);

    return this;
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