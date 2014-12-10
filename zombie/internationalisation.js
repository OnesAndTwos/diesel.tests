var Browser = require('zombie');
var assert  = require('assert');
var should = require('should');

Browser.localhost('http://store.diesel.com');

var browser = Browser.create();

describe('Internationalisation', function() {

  it('Page is in italian', function (done) {

    browser.visit('/it/subhome/diesel/uomo', function (error) {
      assert.ifError(error);
      browser.text('title').should.eql('Diesel - Diesel Online Store');
      done();
    });

  });

  it('Page is in english', function (done) {
    //
    browser.visit('/gb/subhome/diesel/men', function (error) {
      assert.ifError(error)
      browser.text('title').should.eql('Diesel - Diesel Online Store');
      done();
    });

  });

});