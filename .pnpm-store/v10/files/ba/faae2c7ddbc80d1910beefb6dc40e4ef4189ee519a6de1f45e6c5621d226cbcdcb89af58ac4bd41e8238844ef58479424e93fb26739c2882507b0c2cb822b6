exports.publicEncrypt = require('./publicEncrypt')
exports.privateDecrypt = require('./privateDecrypt')

exports.privateEncrypt = function privateEncrypt (key, buf) {
  return exports.publicEncrypt(key, buf, true)
}

exports.publicDecrypt = function publicDecrypt (key, buf) {
  return exports.privateDecrypt(key, buf, true)
}
