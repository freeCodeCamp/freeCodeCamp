'use strict';
/* global describe it */

var assert = require('assert');
var hash = require('../');

describe('Hmac', function() {
  describe('mixed test vector', function() {
    test({
      name: 'nist 1',
      key: '00010203 04050607 08090A0B 0C0D0E0F' +
           '10111213 14151617 18191A1B 1C1D1E1F 20212223 24252627' +
           '28292A2B 2C2D2E2F 30313233 34353637 38393A3B 3C3D3E3F',
      msg: 'Sample message for keylen=blocklen',
      res: '8bb9a1db9806f20df7f77b82138c7914d174d59e13dc4d0169c9057b133e1d62'
    });
    test({
      name: 'nist 2',
      key: '00010203 04050607' +
           '08090A0B 0C0D0E0F 10111213 14151617 18191A1B 1C1D1E1F',
      msg: 'Sample message for keylen<blocklen',
      res: 'a28cf43130ee696a98f14a37678b56bcfcbdd9e5cf69717fecf5480f0ebdf790'
    });
    test({
      name: 'nist 3',
      key: '00010203' +
           '04050607 08090A0B 0C0D0E0F 10111213 14151617 18191A1B' +
           '1C1D1E1F 20212223 24252627 28292A2B 2C2D2E2F 30313233' +
           '34353637 38393A3B 3C3D3E3F 40414243 44454647 48494A4B' +
           '4C4D4E4F 50515253 54555657 58595A5B 5C5D5E5F 60616263',
      msg: 'Sample message for keylen=blocklen',
      res: 'bdccb6c72ddeadb500ae768386cb38cc41c63dbb0878ddb9c7a38a431b78378d'
    });
    test({
      name: 'nist 4',
      key: '00' +
           '01020304 05060708 090A0B0C 0D0E0F10 11121314 15161718' +
           '191A1B1C 1D1E1F20 21222324 25262728 292A2B2C 2D2E2F30',
      msg: 'Sample message for keylen<blocklen, with truncated tag',
      res: '27a8b157839efeac98df070b331d593618ddb985d403c0c786d23b5d132e57c7'
    });
    test({
      name: 'regression 1',
      key: '48f38d0c6a344959cc94502b7b5e8dffb6a5f41795d9066fc9a649557167ee2f',
      msg: '1d495eef7761b65dccd0a983d2d7204fea28b5c81f1758046e062eb043755ea1',
      msgEnc: 'hex',
      res: 'cf5ad5984f9e43917aa9087380dac46e410ddc8a7731859c84e9d0f31bd43655'
    });

    function test(opt) {
      it('should not fail at ' + opt.name, function() {
        var h = hash.hmac(hash.sha256, opt.key, 'hex');
        assert.equal(h.update(opt.msg, opt.msgEnc).digest('hex'), opt.res);
        h = hash.hmac(hash.sha256, opt.key, 'hex');
        assert.equal(h
          .update(opt.msg.slice(0, 10), opt.msgEnc)
          .update(opt.msg.slice(10), opt.msgEnc)
          .digest('hex'), opt.res);
      });
    }
  });
});
