'use strict'

const { test } = require('node:test')
const Tokens = require('..')

test('.create() and verify() with validity: should return `true` with valid tokens', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ validity: 3600 }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ validity: 3600 }).verify(secret, token), true)
})

test('.create() and verify() with validity: should return `false` if current time is outside the validity interval', t => {
  t.plan(1)

  const fn = Date.now
  const now = Date.now()
  t.after(() => { Date.now = fn })

  const secret = new Tokens().secretSync()
  Date.now = function () { return now }
  const token = new Tokens({ validity: 3600 }).create(secret)

  Date.now = function () { return now + 3601 }
  t.assert.deepStrictEqual(new Tokens({ validity: 3600 }).verify(secret, token), false)
})

test('.create() and verify() with validity: should return `true` if current time is at the max of the validity interval', t => {
  t.plan(1)

  const fn = Date.now
  const now = Date.now()
  t.after(() => { Date.now = fn })

  Date.now = function () { return now }
  const secret = new Tokens().secretSync()
  Date.now = function () { return now + 3600 }
  const token = new Tokens({ validity: 3600 }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ validity: 3600 }).verify(secret, token), true, { secret, token, now })
})

test('.create() and verify() with validity: should return `false` for tokens with no date', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens().create(secret)

  t.assert.deepStrictEqual(new Tokens({ validity: 3600 }).verify(secret, token), false)
})

test('.create() and verify() with user info: should return `true` with valid tokens', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true }).create(secret, 'foobar')

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, 'foobar'), true)
})

test('.create() and verify() with user info: should return `false` if userInfo does not match', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true }).create(secret, 'foo')

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, 'foobar'), false)
})

test('.create() and verify() with user info: should return `false` if userInfo is not set in verify', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true }).create(secret, 'foo')

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token), false)
})

test('.create() and verify() with user info: should return `false` if userInfo is not a string in verify', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true }).create(secret, 'foo')

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, {}), false)
})

test('.create() and verify() with user info: should return `false` for tokens with no userInfo', t => {
  t.plan(1)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: false }).create(secret)

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, 'foo'), false)
})

test('.create() and verify() with validity: should return `false` for edge case', t => {
  t.plan(1)

  const secret = 'EA3SsAG5xtf42T6JJ7AbG7dj'
  const token = 'Sp5S2HvW-VV0ZStW3LNhD9ELehQVwzTBK7Is'

  t.assert.deepStrictEqual(new Tokens({ validity: 3600 }).verify(secret, token), false)
})

test('.create() and verify() with user info: should return false for edge case', t => {
  t.plan(1)

  const secret = 'VotAvu5relpVeoVGif78oCjf'
  const token = '5Zmd5CxB-5jfruZ8pbOXRrtSCWFZhCaTFdMk'

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, 'foo'), false)
})

test('.create() and verify() with user info: should return false for edge case', t => {
  t.plan(1)

  const secret = '5ZbtVlGipiWKCS028ySrZJjk'
  const token = 'PFPrCHKG-L_2yksIX8xmWpcnV-QJGmsndHC8'

  t.assert.deepStrictEqual(new Tokens({ userInfo: true }).verify(secret, token, 'foo'), false)
})

test('.create() and verify() with validity: should use by default sha256 as algorithm', t => {
  t.plan(2)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true }).create(secret, 'foobar')

  t.assert.deepStrictEqual(token.length, 96)
  t.assert.deepStrictEqual(new Tokens({ userInfo: true, algorithm: 'sha256' }).verify(secret, token, 'foobar'), true)
})

test('.create() and verify() with validity: should be able to set sha1 as algorithm', t => {
  t.plan(2)

  const secret = new Tokens().secretSync()
  const token = new Tokens({ userInfo: true, algorithm: 'sha1' }).create(secret, 'foobar')

  t.assert.deepStrictEqual(token.length, 64)
  t.assert.deepStrictEqual(new Tokens({ userInfo: true, algorithm: 'sha1' }).verify(secret, token, 'foobar'), true)
})
