'use strict'

const test = require('tap').test
const { createWarning } = require('..')

test('emit should emit a given code only once', t => {
  t.plan(4)

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.equal(warning.name, 'TestDeprecation')
    t.equal(warning.code, 'CODE')
    t.equal(warning.message, 'Hello world')
    t.ok(warn.emitted)
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
    t.end()
  })
})
