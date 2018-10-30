module.exports = verify

const crypto = require('crypto')
const Buffer = require('buffer').Buffer

const timingSafeEqualPolyfill = require('buffer-equal-constant-time')

const sign = require('../sign')

function verify (secret, eventPayload, signature) {
  if (!secret || !eventPayload || !signature) {
    throw new TypeError('secret, eventPayload & signature required')
  }

  const signatureBuffer = Buffer.from(signature)
  const verificationBuffer = Buffer.from(sign(secret, eventPayload))

  if (signatureBuffer.length !== verificationBuffer.length) {
    return false
  }

  return timingSafeEqual(signatureBuffer, verificationBuffer)
}

/* istanbul ignore next */
function timingSafeEqual (signatureBuffer, verificationBuffer) {
  // crypto.verificationBuffer was added in Node 6.6
  // https://nodejs.org/docs/latest-v6.x/api/crypto.html#crypto_crypto_timingsafeequal_a_b
  if ('timingSafeEqual' in crypto) {
    return crypto.timingSafeEqual(signatureBuffer, verificationBuffer)
  }

  return timingSafeEqualPolyfill(signatureBuffer, verificationBuffer)
}
