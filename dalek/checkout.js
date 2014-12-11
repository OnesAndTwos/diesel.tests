var DenimPage = require ('./page_model/denim_page');

module.exports = {

  'Checkout shopping cart': function (test) {

    var itemPage = new DenimPage(test)
        .clickProduct('36539858RK')
        .assertProductPageIs('SLEENKER 0830E');

    itemPage
        .addDefaultItemToCart()
        .proceedToCheckout();

    test.screenshot('output/bob.png');

    test.done();

  }

};