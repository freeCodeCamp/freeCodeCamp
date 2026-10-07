'use strict';

const assert = require('assert');
const HmacDRBG = require('../');
const hash = require('hash.js');

describe('Hmac_DRBG', () => {
  it('should support hmac-drbg-sha256', () => {
    function doDrbg(opt) {
      const drbg = HmacDRBG({
        hash: hash.sha256,
        entropy: opt.entropy,
        entropyEnc: 'utf8',
        nonce: opt.nonce,
        nonceEnc: 'utf8',
        pers: opt.pers,
        persEnc: 'utf8'
      });
      return drbg.generate(opt.size, 'hex');
    }

    const test = [
      {
        entropy: 'totally random0123456789',
        nonce: 'secret nonce',
        pers: 'my drbg',
        size: 32,
        res: '018ec5f8e08c41e5ac974eb129ac297c5388ee1864324fa13d9b15cf98d9a157'
      },
      {
        entropy: 'totally random0123456789',
        nonce: 'secret nonce',
        pers: null,
        size: 32,
        res: 'ed5d61ecf0ef38258e62f03bbb49f19f2cd07ba5145a840d83b134d5963b3633'
      }
    ];
    for (let i = 0; i < test.length; i++)
      assert.equal(doDrbg(test[i]), test[i].res);
  });

  describe('NIST vector', function() {
    require('./fixtures/hmac-drbg-nist.json').forEach(function (opt) {
      it('should not fail at ' + opt.name, function() {
        const drbg = HmacDRBG({
          hash: hash.sha256,
          entropy: opt.entropy,
          nonce: opt.nonce,
          pers: opt.pers
        });

        let last;
        for (let i = 0; i < opt.add.length; i++) {
          let add = opt.add[i];
          last = drbg.generate(opt.expected.length / 2, 'hex', add);
        }
        assert.equal(last, opt.expected);
      });
    });
  });

  describe('reseeding', function() {
    it('should reseed', function() {
      const entropy = 'totally random string with many chars that I typed ' +
                      'in agony';
      const nonce = 'nonce';
      const pers = 'pers';

      const original = HmacDRBG({
        hash: hash.sha256,
        entropy,
        nonce,
        pers
      });
      const reseeded = HmacDRBG({
        hash: hash.sha256,
        entropy,
        nonce,
        pers
      });

      assert.strictEqual(original.generate(32, 'hex'),
                         reseeded.generate(32, 'hex'));

      reseeded.reseed('another absolutely random string');

      assert.notEqual(original.generate(32, 'hex'),
                      reseeded.generate(32, 'hex'));
    });
  });
});
