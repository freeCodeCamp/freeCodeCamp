'use strict';
/* global describe it */

var assert = require('assert');
var crypto = require('crypto');
var hash = require('../');

describe('Hash', function() {
  function test(fn, cases) {
    for (var i = 0; i < cases.length; i++) {
      var msg = cases[i][0];
      var res = cases[i][1];
      var enc = cases[i][2];

      var dgst = fn().update(msg, enc).digest('hex');
      assert.equal(dgst, res);

      // Split message
      dgst = fn().update(msg.slice(0, 2), enc)
        .update(msg.slice(2), enc)
        .digest('hex');
      assert.equal(dgst, res);
    }
  }

  it('should support sha256', function() {
    assert.equal(hash.sha256.blockSize, 512);
    assert.equal(hash.sha256.outSize, 256);

    test(hash.sha256, [
      [ 'abc',
        'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1' ],
      [ 'deadbeef',
        '5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953',
        'hex' ],
    ]);
  });

  it('should support sha224', function() {
    assert.equal(hash.sha224.blockSize, 512);
    assert.equal(hash.sha224.outSize, 224);

    test(hash.sha224, [
      [ 'abc',
        '23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '75388b16512776cc5dba5da1fd890150b0c6455cb4f58b1952522525' ],
      [ 'deadbeef',
        '55b9eee5f60cc362ddc07676f620372611e22272f60fdbec94f243f8',
        'hex' ],
    ]);
  });

  it('should support ripemd160', function() {
    assert.equal(hash.ripemd160.blockSize, 512);
    assert.equal(hash.ripemd160.outSize, 160);

    test(hash.ripemd160, [
      [ '', '9c1185a5c5e9fc54612808977ee8f548b2258d31'],
      [ 'abc',
        '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc' ],
      [ 'message digest',
        '5d0689ef49d2fae572b881b123a85ffa21595f36' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '12a053384a9c0c88e405a06c27dcf49ada62eb2b' ],
      [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'b0e20b6e3116640286ed3a87a5713079b21f5189' ],
    ]);
  });

  it('should support sha1', function() {
    assert.equal(hash.sha1.blockSize, 512);
    assert.equal(hash.sha1.outSize, 160);

    test(hash.sha1, [
      [ '',
        'da39a3ee5e6b4b0d3255bfef95601890afd80709' ],
      [ 'abc',
        'a9993e364706816aba3e25717850c26c9cd0d89d' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '84983e441c3bd26ebaae4aa1f95129e5e54670f1' ],
      [ 'deadbeef',
        'd78f8bb992a56a597f6c7a1fb918bb78271367eb',
        'hex' ],
    ]);
  });

  it('should support sha512', function() {
    assert.equal(hash.sha512.blockSize, 1024);
    assert.equal(hash.sha512.outSize, 512);

    test(hash.sha512, [
      [ 'abc',
        'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a' +
            '2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
      ],
      [
        'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmn' +
          'hijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        '8e959b75dae313da8cf4f72814fc143f8f7779c6eb9f7fa17299aeadb6889018' +
          '501d289e4900f7e4331b99dec4b5433ac7d329eeb6dd26545e96e55b874be909'
      ]
    ]);
  });

  it('should support sha384', function() {
    assert.equal(hash.sha384.blockSize, 1024);
    assert.equal(hash.sha384.outSize, 384);

    test(hash.sha384, [
      [ 'abc',
        'cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed' +
            '8086072ba1e7cc2358baeca134c825a7'
      ],
      [
        'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmn' +
          'hijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        '09330c33f71147e83d192fc782cd1b4753111b173b3b05d22fa08086e3b0f712' +
          'fcc7c71a557e2db966c3e9fa91746039'
      ]
    ]);
  });

  it('handles utf8 in strings just like crypto', function() {
    const algorithm = 'sha256';
    test(hash[algorithm], [
      'hello', // one byte per character
      'привет', // two bytes per character
      '您好', // three bytes per character
      '👋', // four bytes per character
      'hello привет 您好 👋!!!' // mixed character lengths
    ].map(str => [str, crypto
      .createHash(algorithm)
      .update(str)
      .digest('hex')]));
  });

});
