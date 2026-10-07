'use strict'

const { test } = require('node:test')

test('should import as default', t => {
  t.plan(2)
  const fastify = require('..')
  t.assert.ok(fastify)
  t.assert.strictEqual(typeof fastify, 'function')
})

test('should import as esm', t => {
  t.plan(2)
  const { fastify } = require('..')
  t.assert.ok(fastify)
  t.assert.strictEqual(typeof fastify, 'function')
})
