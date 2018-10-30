var md5 = require('./md5.js');
var assert = require('assert');

describe('md5', function () {

  it('should throw an error for `undefined`', function() {
    assert.throws(function() {
      md5(undefined);
    });
  });

  it('should throw an error for `null`', function() {
    assert.throws(function() {
      md5(null);
    });
  });

  it('should return the expected MD5 hash for "message"', function() {
    assert.equal('78e731027d8fd50ed642340b7c9a63b3', md5('message'));
  });

  it('should not return the same hash for random numbers twice', function() {
    var msg1 = Math.floor((Math.random() * 100000) + 1) + (new Date).getTime();
    var msg2 = Math.floor((Math.random() * 100000) + 1) + (new Date).getTime();

    if (msg1 !== msg2) {
      assert.notEqual(md5(msg1), md5(msg2));
    } else {
      assert.equal(md5(msg1), md5(msg1));
    }
  });

  it('should support Node.js Buffers', function() {
    var buffer = new Buffer('message áßäöü', 'utf8');

    assert.equal(md5(buffer), md5('message áßäöü'));
  })

  it('should be able to use a binary encoded string', function() {
    var hash1 = md5('abc', { asString: true });
    var hash2 = md5(hash1 + 'a', { asString: true, encoding : 'binary' });
    var hash3 = md5(hash1 + 'a', { encoding : 'binary' });
    assert.equal(hash3, '131f0ac52813044f5110e4aec638c169');
  });
});
