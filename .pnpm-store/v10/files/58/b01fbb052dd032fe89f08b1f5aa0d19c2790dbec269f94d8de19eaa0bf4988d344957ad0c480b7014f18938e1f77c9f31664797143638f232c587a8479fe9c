'use strict'

const { test } = require('node:test')
const fp = require('../plugin')

test('anonymous function should be named composite.test0', (t) => {
  t.plan(2)
  const fn = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(fn[Symbol.for('plugin-meta')].name, 'composite.test-auto-0')
  t.assert.strictEqual(fn[Symbol.for('fastify.display-name')], 'composite.test-auto-0')
})
