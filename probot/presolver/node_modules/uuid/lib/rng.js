// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = require('crypto');

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};
