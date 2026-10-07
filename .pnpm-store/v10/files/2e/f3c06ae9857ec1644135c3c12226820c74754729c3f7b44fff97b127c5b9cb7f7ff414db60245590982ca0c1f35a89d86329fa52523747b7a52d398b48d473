'use strict'

const { test } = require('node:test')
const { createWarning } = require('../')
const { withResolvers } = require('./promise')

test('emit should set the emitted state', t => {
  t.plan(3)

  const { promise, resolve } = withResolvers()

  process.on('warning', onWarning)
  function onWarning () {
    t.fail('should not be called')
  }

  const warn = createWarning({
    name: 'TestDeprecation',
    code: 'CODE',
    message: 'Hello world'
  })
  t.assert.ok(!warn.emitted)
  warn.emitted = true
  t.assert.ok(warn.emitted)

  warn()
  t.assert.ok(warn.emitted)

  setImmediate(() => {
    process.removeListener('warning', onWarning)
    resolve()
  })

  return promise
})
