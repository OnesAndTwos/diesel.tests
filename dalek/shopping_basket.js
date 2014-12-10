var DenimPage = require ('./page_model/denim_page');

module.exports = {

  'Add denim to a shopping basket (raw)': function (test) {

    test.open('http://store.diesel.com/gb/men/onlinestore/denim')
        .click('a[data-item-code10="36539858RK"]')
        .waitForElement('.itemSidebar')
        .assert.text('.titolo.sideDesc').is('SLEENKER 0830E')
        .click('a[rel="Waist"]')
        .click('li[data-selection="SizeW:27W"]')
        .click('a[rel="Length"]')
        .click('li[data-selection="SizeL:32L"]')
        .wait(2000)
        .execute(function() {
          $('.addToCart').click();
        })
        .wait(2000)
        .assert.text('#itemInCartNumber').is('1')
        .done();

  },

  'Add denim to a shopping basket (page model)': function (test) {

    var itemPage = new DenimPage(test)
        .clickProduct('36539858RK')
        .assertProductPageIs('SLEENKER 0830E');

    itemPage
        .selectLength('SizeL:32L')
        .selectWaist('SizeW:27W')
        .addToCart()
        .assertCartContains(1);

    test.done();

  }

};