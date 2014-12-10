module.exports = {

  'Add denim to a shopping basket': function (test) {

    test.open('http://store.diesel.com/gb/men/onlinestore/denim')
        .assert.attr('a[data-item-code10="36539858RK"]:first', 'data-item-code10', '36539858RK')
        .done();

  }

};