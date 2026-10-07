const acceptHostStrategy = require('../lib/strategies/accept-host')

const { test } = require('node:test')

test('can get hosts by exact matches', async (t) => {
  const storage = acceptHostStrategy.storage()
  t.assert.equal(storage.get('fastify.io'), undefined)
  storage.set('fastify.io', true)
  t.assert.equal(storage.get('fastify.io'), true)
})

test('can get hosts by regexp matches', async (t) => {
  const storage = acceptHostStrategy.storage()
  t.assert.equal(storage.get('fastify.io'), undefined)
  storage.set(/.+fastify\.io/, true)
  t.assert.equal(storage.get('foo.fastify.io'), true)
  t.assert.equal(storage.get('bar.fastify.io'), true)
})

test('exact host matches take precendence over regexp matches', async (t) => {
  const storage = acceptHostStrategy.storage()
  storage.set(/.+fastify\.io/, 'wildcard')
  storage.set('auth.fastify.io', 'exact')
  t.assert.equal(storage.get('foo.fastify.io'), 'wildcard')
  t.assert.equal(storage.get('bar.fastify.io'), 'wildcard')
  t.assert.equal(storage.get('auth.fastify.io'), 'exact')
})
