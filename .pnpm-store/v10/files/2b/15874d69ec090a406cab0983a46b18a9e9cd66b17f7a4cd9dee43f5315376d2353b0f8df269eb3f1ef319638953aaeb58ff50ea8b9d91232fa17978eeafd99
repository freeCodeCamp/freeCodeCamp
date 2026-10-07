/**
 * utilities for hashing config objects.
 * basically iteratively updates hash with a JSON-like format
 */

'use strict';

exports.__esModule = true;

const createHash = require('crypto').createHash;

const stringify = JSON.stringify;

/** @type {import('./hash').default} */
function hashify(value, hash) {
  if (!hash) { hash = createHash('sha256'); }

  if (Array.isArray(value)) {
    hashArray(value, hash);
  } else if (typeof value === 'function') {
    hash.update(String(value));
  } else if (value instanceof Object) {
    hashObject(value, hash);
  } else {
    hash.update(stringify(value) || 'undefined');
  }

  return hash;
}
exports.default = hashify;

/** @type {import('./hash').hashArray} */
function hashArray(array, hash) {
  if (!hash) { hash = createHash('sha256'); }

  hash.update('[');
  for (let i = 0; i < array.length; i++) {
    hashify(array[i], hash);
    hash.update(',');
  }
  hash.update(']');

  return hash;
}
hashify.array = hashArray;
exports.hashArray = hashArray;

/** @type {import('./hash').hashObject} */
function hashObject(object, optionalHash) {
  const hash = optionalHash || createHash('sha256');

  hash.update('{');
  Object.keys(object).sort().forEach((key) => {
    hash.update(stringify(key));
    hash.update(':');
    // @ts-expect-error the key is guaranteed to exist on the object here
    hashify(object[key], hash);
    hash.update(',');
  });
  hash.update('}');

  return hash;
}
hashify.object = hashObject;
exports.hashObject = hashObject;

