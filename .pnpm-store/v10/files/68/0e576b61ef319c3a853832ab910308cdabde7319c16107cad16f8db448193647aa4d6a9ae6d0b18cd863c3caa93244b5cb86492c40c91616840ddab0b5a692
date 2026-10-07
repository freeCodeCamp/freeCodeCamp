'use strict'

const { test } = require('node:test')
const { createWarning } = require('../')
const { withResolvers } = require('./promise')

test('a limited warning can be re-set', t => {
  t.plan(4)

  const { promise, resolve } = withResolvers()
  let count = 0
  process.on('warning', onWarning)
  function onWarning () {
    count++
  }

  const warn = createWarning({
    name: 'TestDeprecation',
    code: 'CODE',
    message: 'Hello world'
  })

  warn()
  t.assert.ok(warn.emitted)

  warn()
  t.assert.ok(warn.emitted)

  warn.emitted = false
  warn()
  t.assert.ok(warn.emitted)

  setImmediate(() => {
    t.assert.deepStrictEqual(count, 2)
    process.removeListener('warning', onWarning)
    resolve()
  })

  return promise
})
