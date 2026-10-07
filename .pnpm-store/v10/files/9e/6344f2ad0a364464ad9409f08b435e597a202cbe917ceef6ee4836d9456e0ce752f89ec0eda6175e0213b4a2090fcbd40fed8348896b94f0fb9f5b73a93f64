'use strict'

const { test } = require('node:test')
const { createWarning } = require('..')
const { withResolvers } = require('./promise')

test('emit should emit a given code only once', t => {
  t.plan(4)

  const { promise, resolve } = withResolvers()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.deepStrictEqual(warning.name, 'TestDeprecation')
    t.assert.deepStrictEqual(warning.code, 'CODE')
    t.assert.deepStrictEqual(warning.message, 'Hello world')
    t.assert.ok(warn.emitted)
  }

  const warn = createWarning({
    name: 'TestDeprecation',
    code: 'CODE',
    message: 'Hello world'
  })
  warn()
  warn()
  setImmediate(() => {
    process.removeListener('warning', onWarning)
    resolve()
  })

  return promise
})
