'use strict'

function oldBrowser () {
  throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11')
}
var safeBuffer = require('safe-buffer')
var randombytes = require('randombytes')
var Buffer = safeBuffer.Buffer
var kBufferMaxLength = safeBuffer.kMaxLength
var crypto = global.crypto || global.msCrypto
var kMaxUint32 = Math.pow(2, 32) - 1
function assertOffset (offset, length) {
  if (typeof offset !== 'number' || offset !== offset) { // eslint-disable-line no-self-compare
    throw new TypeError('offset must be a number')
  }

  if (offset > kMaxUint32 || offset < 0) {
    throw new TypeError('offset must be a uint32')
  }

  if (offset > kBufferMaxLength || offset > length) {
    throw new RangeError('offset out of range')
  }
}

function assertSize (size, offset, length) {
  if (typeof size !== 'number' || size !== size) { // eslint-disable-line no-self-compare
    throw new TypeError('size must be a number')
  }

  if (size > kMaxUint32 || size < 0) {
    throw new TypeError('size must be a uint32')
  }

  if (size + offset > length || size > kBufferMaxLength) {
    throw new RangeError('buffer too small')
  }
}
if ((crypto && crypto.getRandomValues) || !process.browser) {
  exports.randomFill = randomFill
  exports.randomFillSync = randomFillSync
} else {
  exports.randomFill = oldBrowser
  exports.randomFillSync = oldBrowser
}
function randomFill (buf, offset, size, cb) {
  if (!Buffer.isBuffer(buf) && !(buf instanceof global.Uint8Array)) {
    throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
  }

  if (typeof offset === 'function') {
    cb = offset
    offset = 0
    size = buf.length
  } else if (typeof size === 'function') {
    cb = size
    size = buf.length - offset
  } else if (typeof cb !== 'function') {
    throw new TypeError('"cb" argument must be a function')
  }
  assertOffset(offset, buf.length)
  assertSize(size, offset, buf.length)
  return actualFill(buf, offset, size, cb)
}

function actualFill (buf, offset, size, cb) {
  if (process.browser) {
    var ourBuf = buf.buffer
    var uint = new Uint8Array(ourBuf, offset, size)
    crypto.getRandomValues(uint)
    if (cb) {
      process.nextTick(function () {
        cb(null, buf)
      })
      return
    }
    return buf
  }
  if (cb) {
    randombytes(size, function (err, bytes) {
      if (err) {
        return cb(err)
      }
      bytes.copy(buf, offset)
      cb(null, buf)
    })
    return
  }
  var bytes = randombytes(size)
  bytes.copy(buf, offset)
  return buf
}
function randomFillSync (buf, offset, size) {
  if (typeof offset === 'undefined') {
    offset = 0
  }
  if (!Buffer.isBuffer(buf) && !(buf instanceof global.Uint8Array)) {
    throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
  }

  assertOffset(offset, buf.length)

  if (size === undefined) size = buf.length - offset

  assertSize(size, offset, buf.length)

  return actualFill(buf, offset, size)
}
