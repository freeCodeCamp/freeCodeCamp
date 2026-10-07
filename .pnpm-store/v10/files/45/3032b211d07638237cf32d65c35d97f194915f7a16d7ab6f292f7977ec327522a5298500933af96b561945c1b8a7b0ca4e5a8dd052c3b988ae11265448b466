"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createContentDigest = void 0;
var _crypto = _interopRequireDefault(require("crypto"));
var _nodeObjectHash = _interopRequireDefault(require("node-object-hash"));
const hasher = (0, _nodeObjectHash.default)({
  coerce: false,
  alg: `md5`,
  enc: `hex`,
  sort: {
    map: true,
    object: true,
    array: false,
    set: false
  }
});
const hashPrimitive = input => _crypto.default.createHash(`md5`).update(input).digest(`hex`);

/**
 * Hashes an input using md5 hash of hexadecimal digest.
 *
 * @param input The input to encrypt
 * @return The content digest
 */

const createContentDigest = input => {
  if (typeof input === `object` && !Buffer.isBuffer(input)) {
    return hasher.hash(input);
  }
  return hashPrimitive(input);
};
exports.createContentDigest = createContentDigest;