'use strict'

const { beforeEach, describe, test } = require('node:test')
const sinon = require('sinon')
const crypto = require('node:crypto')

const { Signer, sign, unsign } = require('../signer')

describe('default', () => {
  const secret = 'my-secret'
  const signer = Signer(secret)

  test('signer.sign should throw if there is no value provided', (t) => {
    t.plan(1)
    t.assert.throws(() => signer.sign(undefined), err => err.message === 'Cookie value must be provided as a string.')
  })

  test('sign', (t) => {
    t.plan(5)

    const input = 'some-value'
    const result = signer.sign(input)

    t.assert.strictEqual(result, sign(input, secret))
    t.assert.strictEqual(result, sign(input, [secret]))
    t.assert.strictEqual(result, sign(input, Buffer.from(secret)))
    t.assert.strictEqual(result, sign(input, [Buffer.from(secret)]))

    t.assert.throws(() => sign(undefined), err => err.message === 'Secret key must be a string or Buffer.')
  })

  test('signer.unsign', (t) => {
    t.plan(4)

    const input = signer.sign('some-value', secret)
    const result = signer.unsign(input)

    t.assert.strictEqual(result.valid, true)
    t.assert.strictEqual(result.renew, false)
    t.assert.strictEqual(result.value, 'some-value')
    t.assert.throws(() => signer.unsign(undefined), err => err.message === 'Signed cookie string must be provided.')
  })

  test('unsign', (t) => {
    t.plan(6)

    const input = sign('some-value', secret)
    const result = unsign(input, secret)

    t.assert.strictEqual(result.valid, true)
    t.assert.strictEqual(result.renew, false)
    t.assert.strictEqual(result.value, 'some-value')
    t.assert.deepStrictEqual(result, unsign(input, [secret]))
    t.assert.throws(() => unsign(undefined), err => err.message === 'Secret key must be a string or Buffer.')
    t.assert.throws(() => unsign(undefined, secret), err => err.message === 'Signed cookie string must be provided.')
  })
})

describe('key rotation', () => {
  const secret1 = 'my-secret-1'
  const secret2 = 'my-secret-2'
  const secret3 = 'my-secret-3'
  const signer = Signer([secret1, secret2, secret3])
  const signSpy = sinon.spy(crypto, 'createHmac')

  beforeEach(() => {
    signSpy.resetHistory()
  })

  test('signer.sign always signs using first key', (t) => {
    t.plan(1)

    const input = 'some-value'
    const result = signer.sign(input)

    t.assert.strictEqual(result, sign(input, secret1))
  })

  test('signer.unsign tries to decode using all keys till it finds', (t) => {
    t.plan(4)

    const input = sign('some-value', secret2)
    signSpy.resetHistory()
    const result = signer.unsign(input)

    t.assert.strictEqual(result.valid, true)
    t.assert.strictEqual(result.renew, true)
    t.assert.strictEqual(result.value, 'some-value')
    t.assert.strictEqual(signSpy.callCount, 2) // should have returned early when the right key was found
  })

  test('signer.unsign failure response', (t) => {
    t.plan(4)

    const input = sign('some-value', 'invalid-secret')
    signSpy.resetHistory()
    const result = signer.unsign(input)

    t.assert.strictEqual(result.valid, false)
    t.assert.strictEqual(result.renew, false)
    t.assert.strictEqual(result.value, null)
    t.assert.strictEqual(signSpy.callCount, 3) // should have tried all 3
  })
})

describe('Signer', () => {
  test('Signer needs a string or Buffer as secret', (t) => {
    t.plan(6)

    t.assert.throws(() => Signer(1), err => err.message === 'Secret key must be a string or Buffer.')
    t.assert.throws(() => Signer(undefined), err => err.message === 'Secret key must be a string or Buffer.')
    t.assert.doesNotThrow(() => Signer('secret'))
    t.assert.doesNotThrow(() => Signer(['secret']))
    t.assert.doesNotThrow(() => Signer(Buffer.from('deadbeef76543210', 'hex')))
    t.assert.doesNotThrow(() => Signer([Buffer.from('deadbeef76543210', 'hex')]))
  })

  test('Signer handles algorithm properly', (t) => {
    t.plan(3)

    t.assert.throws(() => Signer('secret', 'invalid'), err => err.message === 'Algorithm invalid not supported.')
    t.assert.doesNotThrow(() => Signer('secret', 'sha512'))
    t.assert.doesNotThrow(() => Signer('secret', 'sha256'))
  })
})
