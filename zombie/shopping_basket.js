var Browser = require('zombie');
var assert  = require('assert');

Browser.localhost('http://store.diesel.com');

var browser = Browser.create();

describe('Shopping Basket', function() {

  it('Can add denim', function (done) {

    browser.visit('/gb/men/onlinestore/denim', function () {
      done();
    });

  });

});