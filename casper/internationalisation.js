casper.test.begin('Page title is in italian', 1, function(test) {

  casper.start('http://store.diesel.com/it').then(function() {
    test.assertTitle("Diesel Online Store: jeans, abbigliamento, scarpe, borse e orologi");
  }).run(function() {
    test.done();
  });

});


casper.run();