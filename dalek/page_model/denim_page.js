var ItemPage = require ('./item_page');

module.exports = (function () {

  function DenimPage(test) {
    this._test = test.open('http://store.diesel.com/gb/men/onlinestore/denim');
  }

  DenimPage.prototype.clickProduct = function (code10) {
    this._test.click('a[data-item-code10="36539858RK"]')
        .waitForElement('.itemSidebar');

    return new ItemPage(this._test);
  };

  return DenimPage;

})();