'use strict'

const isEncoding = Buffer.isEncoding
Buffer.isEncoding = function (encoding) {
  if (encoding !== 'base64url') {
    return isEncoding(encoding)
  }
  return false
}

require('./constructor.test')
require('./create.test')
require('./integration.test')
require('./secret.test')
require('./secretSync.test')
require('./verify.test')
