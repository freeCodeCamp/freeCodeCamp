'use strict';

const baseEncodeTables = {
  26: 'abcdefghijklmnopqrstuvwxyz',
  32: '123456789abcdefghjkmnpqrstuvwxyz', // no 0lio
  36: '0123456789abcdefghijklmnopqrstuvwxyz',
  49: 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ', // no lIO
  52: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ', // no 0lIO
  62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
};

function encodeBufferToBase(buffer, base) {
  const encodeTable = baseEncodeTables[base];
  if (!encodeTable) {
    throw new Error('Unknown encoding base' + base);
  }

  const readLength = buffer.length;
  const Big = require('big.js');

  Big.RM = Big.DP = 0;
  let b = new Big(0);

  for (let i = readLength - 1; i >= 0; i--) {
    b = b.times(256).plus(buffer[i]);
  }

  let output = '';
  while (b.gt(0)) {
    output = encodeTable[b.mod(base)] + output;
    b = b.div(base);
  }

  Big.DP = 20;
  Big.RM = 1;

  return output;
}

let createMd4 = undefined;
let BatchedHash = undefined;

function getHashDigest(buffer, hashType, digestType, maxLength) {
  hashType = hashType || 'md4';
  maxLength = maxLength || 9999;

  let hash;

  try {
    hash = require('crypto').createHash(hashType);
  } catch (error) {
    if (error.code === 'ERR_OSSL_EVP_UNSUPPORTED' && hashType === 'md4') {
      if (createMd4 === undefined) {
        createMd4 = require('./hash/md4');

        if (BatchedHash === undefined) {
          BatchedHash = require('./hash/BatchedHash');
        }
      }

      hash = new BatchedHash(createMd4());
    }

    if (!hash) {
      throw error;
    }
  }

  hash.update(buffer);

  if (
    digestType === 'base26' ||
    digestType === 'base32' ||
    digestType === 'base36' ||
    digestType === 'base49' ||
    digestType === 'base52' ||
    digestType === 'base58' ||
    digestType === 'base62'
  ) {
    return encodeBufferToBase(hash.digest(), digestType.substr(4)).substr(
      0,
      maxLength
    );
  } else {
    return hash.digest(digestType || 'hex').substr(0, maxLength);
  }
}

module.exports = getHashDigest;
