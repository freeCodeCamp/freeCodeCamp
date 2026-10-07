'use strict'

const { test } = require('node:test')
const Tokens = require('..')

test('Tokens.constructor: instantiating Tokens with a string for saltLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ saltLength: 'bogus' }), new TypeError('option saltLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with a numeric string for saltLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ saltLength: '5' }), new TypeError('option saltLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with NaN for saltLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ saltLength: NaN }), new TypeError('option saltLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with Infinity for saltLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ saltLength: Infinity }), new TypeError('option saltLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with a string for secretLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ secretLength: 'bogus' }), new TypeError('option secretLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with a numeric string for secretLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ secretLength: '5' }), new TypeError('option secretLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with NaN for secretLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ secretLength: NaN }), new TypeError('option secretLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with Infinity for secretLength should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ secretLength: Infinity }), new TypeError('option secretLength must be finite number > 1'))
})

test('Tokens.constructor: instantiating Tokens with a string for validity should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ validity: 'bogus' }), new TypeError('option validity must be finite number > 0'))
})

test('Tokens.constructor: instantiating Tokens with a numeric string for validity should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ validity: '5' }), new TypeError('option validity must be finite number > 0'))
})

test('Tokens.constructor: instantiating Tokens with NaN for validity should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ validity: NaN }), new TypeError('option validity must be finite number > 0'))
})

test('Tokens.constructor: instantiating Tokens with Infinity for validity should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ validity: Infinity }), new TypeError('option validity must be finite number > 0'))
})

test('Tokens.constructor: instantiating Tokens with a non-boolean for userInfo should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ userInfo: 'bogus' }), new TypeError('option userInfo must be a boolean'))
})

test('Tokens.constructor: instantiating Tokens without new creates still the Tokens-Instance', t => {
  t.plan(1)
  t.assert.ok(Tokens() instanceof Tokens, true)
})

test('Tokens.constructor: instantiating Tokens with "invalid" for algorithm should throw', t => {
  t.plan(1)
  t.assert.throws(() => new Tokens({ algorithm: 'invalid' }), new TypeError('option algorithm must be a supported hash-algorithm'))
})
