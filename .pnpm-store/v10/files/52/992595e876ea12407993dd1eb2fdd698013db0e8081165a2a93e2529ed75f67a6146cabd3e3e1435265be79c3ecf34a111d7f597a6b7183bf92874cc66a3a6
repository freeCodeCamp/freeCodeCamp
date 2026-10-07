var crypto = require('crypto')
if (typeof crypto.publicEncrypt !== 'function') {
  crypto = require('./browser')
}
exports.publicEncrypt = crypto.publicEncrypt
exports.privateDecrypt = crypto.privateDecrypt

if (typeof crypto.privateEncrypt !== 'function') {
  exports.privateEncrypt = require('./browser').privateEncrypt
} else {
  exports.privateEncrypt = crypto.privateEncrypt
}

if (typeof crypto.publicDecrypt !== 'function') {
  exports.publicDecrypt = require('./browser').publicDecrypt
} else {
  exports.publicDecrypt = crypto.publicDecrypt
}
