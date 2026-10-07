'use strict';

const assert = require('assert');
const utils = require('../');

describe('utils', () => {
  it('should convert to array', () => {
    assert.deepEqual(utils.toArray('1234', 'hex'), [ 0x12, 0x34 ]);
    assert.deepEqual(utils.toArray('1234'), [ 49, 50, 51, 52 ]);
    assert.deepEqual(utils.toArray('1234', 'utf8'), [ 49, 50, 51, 52 ]);
    assert.deepEqual(utils.toArray('\u1234234'), [ 18, 52, 50, 51, 52 ]);
    assert.deepEqual(utils.toArray([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ]);
  });

  it('should zero pad byte to hex', () => {
    assert.equal(utils.zero2('0'), '00');
    assert.equal(utils.zero2('01'), '01');
  });

  it('should convert to hex', () => {
    assert.equal(utils.toHex([ 0, 1, 2, 3 ]), '00010203');
  });

  it('should encode', () => {
    assert.deepEqual(utils.encode([ 0, 1, 2, 3 ]), [ 0, 1, 2, 3 ]);
    assert.deepEqual(utils.encode([ 0, 1, 2, 3 ], 'hex'), '00010203');
  });
});
