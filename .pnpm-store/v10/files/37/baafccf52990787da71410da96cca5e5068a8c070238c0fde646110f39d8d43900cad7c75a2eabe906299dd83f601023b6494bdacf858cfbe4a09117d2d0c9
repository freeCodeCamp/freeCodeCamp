'use strict'

const { test } = require('node:test')
const Tokens = require('..')

test('Tokens.create: should require secret', t => {
  t.plan(1)

  t.assert.throws(() => new Tokens().create(), new TypeError('argument secret is required'))
})

test('Tokens.create: should reject non-string secret', t => {
  t.plan(1)

  t.assert.throws(() => new Tokens().create(42), new TypeError('argument secret is required'))
})

test('Tokens.create: should reject empty string secret', t => {
  t.plan(1)

  t.assert.throws(() => new Tokens().create(''), new TypeError('argument secret is required'))
})

test('Tokens.create: should create a token', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  t.assert.ok(typeof new Tokens().create(secret) === 'string')
})

test('Tokens.create: should always be the same length', t => {
  t.plan(1001)

  const secret = new Tokens().secretSync()
  const tokenLength = new Tokens().create(secret).length

  t.assert.deepStrictEqual(tokenLength, 52)

  for (let i = 0; i < 1000; i++) {
    t.assert.deepStrictEqual(new Tokens().create(secret).length, tokenLength)
  }
})

test('Tokens.create: should not contain /, +, or =', t => {
  t.plan(4000)

  for (let i = 0; i < 1000; i++) {
    const token = new Tokens().create(new Tokens().secretSync())
    t.assert.ok(!token.includes('/'))
    t.assert.ok(!token.includes('+'))
    t.assert.ok(!token.includes('='))
    t.assert.ok(token.split('-').length - 1 >= 1, token)
  }
})

test('Tokens.create: with userInfo should not contain /, +, or =', t => {
  t.plan(4000)

  for (let i = 0; i < 1000; i++) {
    const token = new Tokens({ userInfo: true }).create(new Tokens().secretSync(), 'foo')
    t.assert.ok(!token.includes('/'))
    t.assert.ok(!token.includes('+'))
    t.assert.ok(!token.includes('='))
    t.assert.ok(token.split('-').length - 1 >= 2, token)
  }
})

test('Tokens.create: with validity should not contain /, +, or =', t => {
  t.plan(4000)

  for (let i = 0; i < 1000; i++) {
    const token = new Tokens({ validity: 3600 }).create(new Tokens().secretSync())
    t.assert.ok(!token.includes('/'))
    t.assert.ok(!token.includes('+'))
    t.assert.ok(!token.includes('='))
    t.assert.ok(token.split('-').length - 1 >= 2, token)
  }
})

test('Tokens.create: with validity and userInfo should not contain /, +, or =', t => {
  t.plan(4000)

  for (let i = 0; i < 1000; i++) {
    const token = new Tokens({ validity: 3600, userInfo: true }).create(new Tokens().secretSync(), 'foo')
    t.assert.ok(!token.includes('/'))
    t.assert.ok(!token.includes('+'))
    t.assert.ok(!token.includes('='))
    t.assert.ok(token.split('-').length - 1 >= 3, token)
  }
})

test('Tokens.create: should not collide', t => {
  t.plan(1000)

  const tokenSet = new Set()

  for (let i = 0; i < 1000; i++) {
    const token = new Tokens().create(new Tokens().secretSync())
    t.assert.ok(!tokenSet.has(token))
    tokenSet.add(token)
  }
})

test('.create(): should reject undefined string userInfo (create)', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()

  t.assert.throws(() => new Tokens({ userInfo: true }).create(secret), new TypeError('argument userInfo is required to be a string'))
})
