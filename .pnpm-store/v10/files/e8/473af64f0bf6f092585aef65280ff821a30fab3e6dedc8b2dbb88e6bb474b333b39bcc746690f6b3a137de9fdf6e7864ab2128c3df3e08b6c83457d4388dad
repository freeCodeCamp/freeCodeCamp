'use strict'

// Inspired by node-cookie-signature
// https://github.com/tj/node-cookie-signature
//
// The MIT License
// Copyright (c) 2012–2022 LearnBoost <tj@learnboost.com> and other contributors;

const crypto = require('node:crypto')

const base64PaddingRE = /=/gu

function Signer (secrets, algorithm = 'sha256') {
  if (!(this instanceof Signer)) {
    return new Signer(secrets, algorithm)
  }

  this.secrets = Array.isArray(secrets) ? secrets : [secrets]
  this.signingKey = this.secrets[0]
  this.algorithm = algorithm

  validateSecrets(this.secrets)
  validateAlgorithm(this.algorithm)
}

function validateSecrets (secrets) {
  for (let i = 0; i < secrets.length; ++i) {
    const secret = secrets[i]
    if (typeof secret !== 'string' && Buffer.isBuffer(secret) === false) {
      throw new TypeError('Secret key must be a string or Buffer.')
    }
  }
}

function validateAlgorithm (algorithm) {
  // validate that the algorithm is supported by the node runtime
  try {
    crypto.createHmac(algorithm, crypto.randomBytes(16))
  } catch {
    throw new TypeError(`Algorithm ${algorithm} not supported.`)
  }
}

function _sign (value, secret, algorithm) {
  if (typeof value !== 'string') {
    throw new TypeError('Cookie value must be provided as a string.')
  }
  return value + '.' + crypto
    .createHmac(algorithm, secret)
    .update(value)
    .digest('base64')
    // remove base64 padding (=) as it has special meaning in cookies
    .replace(base64PaddingRE, '')
}

function _unsign (signedValue, secrets, algorithm) {
  if (typeof signedValue !== 'string') {
    throw new TypeError('Signed cookie string must be provided.')
  }
  const value = signedValue.slice(0, signedValue.lastIndexOf('.'))
  const actual = Buffer.from(signedValue.slice(signedValue.lastIndexOf('.') + 1))

  for (let i = 0; i < secrets.length; ++i) {
    const secret = secrets[i]
    const expected = Buffer.from(crypto
      .createHmac(algorithm, secret)
      .update(value)
      .digest('base64')
      // remove base64 padding (=) as it has special meaning in cookies
      .replace(base64PaddingRE, ''))
    if (
      expected.length === actual.length &&
      crypto.timingSafeEqual(expected, actual)
    ) {
      return {
        valid: true,
        renew: secret !== secrets[0],
        value
      }
    }
  }

  return {
    valid: false,
    renew: false,
    value: null
  }
}

Signer.prototype.sign = function (value) {
  return _sign(value, this.signingKey, this.algorithm)
}

Signer.prototype.unsign = function (signedValue) {
  return _unsign(signedValue, this.secrets, this.algorithm)
}

function sign (value, secret, algorithm = 'sha256') {
  const secrets = Array.isArray(secret) ? secret : [secret]

  validateSecrets(secrets)

  return _sign(value, secrets[0], algorithm)
}

function unsign (signedValue, secret, algorithm = 'sha256') {
  const secrets = Array.isArray(secret) ? secret : [secret]

  validateSecrets(secrets)

  return _unsign(signedValue, secrets, algorithm)
}

module.exports = Signer
module.exports.signerFactory = Signer
module.exports.Signer = Signer
module.exports.sign = sign
module.exports.unsign = unsign
