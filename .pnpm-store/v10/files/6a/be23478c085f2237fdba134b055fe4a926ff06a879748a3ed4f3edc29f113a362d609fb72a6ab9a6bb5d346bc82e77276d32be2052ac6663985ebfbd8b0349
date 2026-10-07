/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error

/**
 * Based on implementations by Gary Court and Austin Appleby, 2011, MIT.
 * @preserve-header
 */
'use strict';

var BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
 * @param {string} key A UTF-16 or ASCII string
 * @return {string} a base62 murmur hash
 */

function murmurHash(str) {
  /* eslint-disable no-bitwise */
  var length = str.length;
  var rem = length & 3;
  var len = length ^ rem;
  var h = 0;
  var i = 0;
  var k;

  while (i !== len) {
    var ch4 = str.charCodeAt(i + 3);
    k = str.charCodeAt(i) ^ str.charCodeAt(i + 1) << 8 ^ str.charCodeAt(i + 2) << 16 ^ (ch4 & 0xff) << 24 ^ (ch4 & 0xff00) >> 8;
    i += 4;
    k = k * 0x2d51 + (k & 0xffff) * 0xcc9e0000 >>> 0;
    k = k << 15 | k >>> 17;
    k = k * 0x3593 + (k & 0xffff) * 0x1b870000 >>> 0;
    h ^= k;
    h = h << 13 | h >>> 19;
    h = h * 5 + 0xe6546b64 >>> 0;
  }

  k = 0;

  switch (rem) {
    /* eslint-disable no-fallthrough */
    case 3:
      k ^= str.charCodeAt(len + 2) << 16;

    case 2:
      k ^= str.charCodeAt(len + 1) << 8;

    case 1:
      k ^= str.charCodeAt(len);
      k = k * 0x2d51 + (k & 0xffff) * 0xcc9e0000 >>> 0;
      k = k << 15 | k >>> 17;
      k = k * 0x3593 + (k & 0xffff) * 0x1b870000 >>> 0;
      h ^= k;
  }

  h ^= length;
  h ^= h >>> 16;
  h = h * 0xca6b + (h & 0xffff) * 0x85eb0000 >>> 0;
  h ^= h >>> 13;
  h = h * 0xae35 + (h & 0xffff) * 0xc2b20000 >>> 0;
  h ^= h >>> 16;
  h >>>= 0;

  if (!h) {
    return '0';
  }

  var s = '';

  while (h) {
    var d = h % 62;
    s = BASE62[d] + s;
    h = (h - d) / 62;
  }

  return s;
}

module.exports = murmurHash;