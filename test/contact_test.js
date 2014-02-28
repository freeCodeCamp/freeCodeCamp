var chai = require('chai');
var should = chai.should();
var app = require('../app.js');
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });


describe('GET /contact', function() {

  it('should refuse partial form submissions', function(done) {
    browser.visit('/contact', function() {
      browser
        .fill('name', 'Clementine')
        .fill('message', 'The Walking Dead')
        .pressButton('Send', function() {
          browser.success.should.be.true;
          should.exist(browser.query('.alert-danger'));
          done();
        });
    });
  });
});
