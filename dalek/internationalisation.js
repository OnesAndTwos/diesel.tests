module.exports = {

  'Page title is in italian': function (test) {

    test.open('http://store.diesel.com/it')
        .assert.title().is('Diesel Online Store: jeans, abbigliamento, scarpe, borse e orologi')
        .done();

  },

  'Page title is in english': function (test) {

    test.open('http://store.diesel.com/gb')
        .assert.title().is('Diesel Online Store: jeans, clothing, shoes, bags and watches')
        .done();

  }

};