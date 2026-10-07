'use strict'

const { test } = require('node:test')
const Tokens = require('..')

require('./polyfill')

test('Tokens.constructor: instantiating Tokens with a non string hmacKey should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ hmacKey: 123 }), new TypeError('option hmacKey must be a supported hmac key'))
})

test('Tokens.secret: should create a secret', t => {
  t.plan(3)

  const { promise, resolve } = Promise.withResolvers()

  new Tokens({ hmacKey: 'foo' }).secret(function (err, secret) {
    t.assert.ifError(err)
    t.assert.ok(typeof secret === 'string')
    t.assert.deepStrictEqual(secret.length, 24)

    resolve()
  })

  return promise
})

test('Tokens.verify: should return `true` with valid tokens', t => {
  t.plan(1)

  const secret = new Tokens({ hmacKey: 'foo' }).secretSync()
  const token = new Tokens({ hmacKey: 'foo' }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(secret, token), true)
})

test('Tokens.verify: should return `false` with invalid secret', t => {
  t.plan(5)

  const secret = new Tokens({ hmacKey: 'foo' }).secretSync()
  const token = new Tokens({ hmacKey: 'foo' }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(new Tokens().secretSync(), token), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify('invalid', token), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify([]), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify('invalid'), false)
})

test('Tokens.verify: should return `false` with invalid tokens', t => {
  t.plan(4)

  const secret = new Tokens({ hmacKey: 'foo' }).secretSync()
  const token = new Tokens({ hmacKey: 'foo' }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify('invalid', token), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(secret, undefined), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(secret, []), false)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(secret, 'hi'), false)
})

test('Tokens.verify: should return `false` with different hmac key', t => {
  t.plan(2)

  const secret = new Tokens({ hmacKey: 'foo' }).secretSync()
  const token = new Tokens({ hmacKey: 'foo' }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'foo' }).verify(secret, token), true)
  t.assert.deepStrictEqual(new Tokens({ hmacKey: 'bar' }).verify(secret, token), false)
})
