'use strict';

var assert = require('assert');
var crypto = require('crypto');
var Buffer = require('buffer').Buffer;

var des = require('../');

var fixtures = require('./fixtures');
var bin = fixtures.bin;

describe('DES-EDE-CBC', function() {
  var CBC = des.CBC.instantiate(des.EDE);

  describe('encryption/decryption', function() {
    var vectors = [
      {
        key: new Array(4).join('133457799bbcdff1'),
        iv: '0102030405060708',
        input: '0123456789abcdef'
      },
      {
        key: new Array(4).join('0000000000000000'),
        iv: 'ffffffffffffffff',
        input: '0000000000000000'
      },
      {
        key: new Array(4).join('a3a3a3a3b3b3b3b3'),
        iv: 'cdcdcdcdcdcdcdcd',
        input: 'cccccccccccccccc'
      },
      {
        key: new Array(4).join('deadbeefabbadead'),
        iv: 'a0da0da0da0da0da',
        input: '0102030405060708090a'
      },
      {
        key: 'aabbccddeeff0011' + '1111222233334444' + 'ffffeeeeddddcccc',
        iv: 'fefefefefefefefe',
        input: '0102030405060708090a0102030405060708090a0102030405060708090a' +
               '0102030405060708090a0102030405060607080a0102030405060708090a'
      }
    ];

     vectors.forEach(function(vec, i) {
      it('should encrypt vector ' + i, function() {
        var key = Buffer.from(vec.key, 'hex');
        var iv = Buffer.from(vec.iv, 'hex');
        var input = Buffer.from(vec.input, 'hex');

        var enc = CBC.create({
          type: 'encrypt',
          key: key,
          iv: iv
        });
        var out = Buffer.from(enc.update(input).concat(enc.final()));

        var cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
        var expected = Buffer.concat([ cipher.update(input), cipher.final() ]);

        assert.deepEqual(out, expected);

        var dec = CBC.create({
          type: 'decrypt',
          key: key,
          iv: iv
        });
        assert.deepEqual(Buffer.from(dec.update(out).concat(dec.final())),
                         input);
      });
    });
    vectors.forEach(function(vec, i) {
      it('should decrypt without unpadding vector ' + i, function() {
        var key = Buffer.from(vec.key, 'hex');
        var iv = Buffer.from(vec.iv, 'hex');
        var input = Buffer.from(vec.input, 'hex');

        var enc = CBC.create({
          type: 'encrypt',
          key: key,
          iv: iv,
        });

        var out = Buffer.from(enc.update(input).concat(enc.final()));

        var cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
        var expected = Buffer.concat([ cipher.update(input), cipher.final() ]);

        assert.deepEqual(out, expected);

        var dec = CBC.create({
          type: 'decrypt',
          key: key,
          iv: iv,
          padding: false
        });

        var decipher = crypto.createDecipheriv('des-ede3-cbc', key, iv);
        decipher.setAutoPadding(false);
        expected = Buffer.concat([ decipher.update(out), decipher.final() ]);
        assert.deepEqual(Buffer.from(dec.update(out).concat(dec.final())),
                         Buffer.from(expected));
      });
    });
  });
});
