'use strict'

const { test } = require('node:test')
const Tokens = require('..')

require('./polyfill')

test('Tokens.secret: should reject bad callback', t => {
  t.plan(1)

  t.assert.throws(() => new Tokens().secret(42), new TypeError('argument callback must be a function'))
})

test('Tokens.secret: should create a secret', t => {
  t.plan(3)

  const { promise, resolve } = Promise.withResolvers()

  new Tokens().secret(function (err, secret) {
    t.assert.ifError(err)
    t.assert.ok(typeof secret === 'string')
    t.assert.deepStrictEqual(secret.length, 24)

    resolve()
  })

  return promise
})

test('Tokens.secret: with global Promise', async t => {
  t.plan(2)

  const secret = await new Tokens().secret()

  t.assert.ok(typeof secret === 'string')
  t.assert.deepStrictEqual(secret.length, 24)
})

test('Tokens.secret: without global Promise', t => {
  t.plan(1)

  const promise = Promise
  global.Promise = undefined
  t.after(() => { global.Promise = promise })

  t.assert.throws(() => new Tokens().secret(), new TypeError('argument callback is required'))
})

test('Tokens.secret: without global Promise should reject bad callback', t => {
  t.plan(1)

  const promise = Promise
  global.Promise = undefined
  t.after(() => { global.Promise = promise })
  t.assert.throws(() => new Tokens().secret(42), new TypeError('argument callback must be a function'))
})

test('Tokens.secret: should not contain /, +, or =, Promise', async t => {
  t.plan(3000)

  for (let i = 0; i < 1000; i++) {
    const secret = await new Tokens().secret()
    t.assert.ok(!secret.includes('/'))
    t.assert.ok(!secret.includes('+'))
    t.assert.ok(!secret.includes('='))
  }
})

test('Tokens.secret: should not contain /, +, or =, callback', async t => {
  t.plan(4000)

  for (let i = 0; i < 1000; i++) {
    const { promise, resolve } = Promise.withResolvers()

    new Tokens().secret(function (err, secret) {
      t.assert.ifError(err)
      t.assert.ok(!secret.includes('/'))
      t.assert.ok(!secret.includes('+'))
      t.assert.ok(!secret.includes('='))

      resolve()
    })

    await promise
  }
})

const mockRandomBytes = (t) => {
  const crypto = require('node:crypto')
  let oldCrypto
  t.before(() => {
    oldCrypto = crypto.randomBytes.bind(crypto)
    crypto.randomBytes = (_size, cb) => {
      cb(new Error('oh no'))
    }
  })
  t.after(() => {
    crypto.randomBytes = oldCrypto
  })
}

test('Tokens.secret: should handle error, Promise', async t => {
  t.plan(2)

  mockRandomBytes(t)

  try {
    await new Tokens().secret()
  } catch (err) {
    t.assert.ok(err instanceof Error)
    t.assert.ok(err.message === 'oh no')
  }
})

test('Tokens.secret: should handle error, callback', t => {
  t.plan(2)

  mockRandomBytes(t)

  const { promise, resolve } = Promise.withResolvers()

  new Tokens().secret(function (err, _secret) {
    t.assert.ok(err instanceof Error)
    t.assert.ok(err.message === 'oh no')

    resolve()
  })

  return promise
})
