'use strict'

const { test } = require('node:test')
const { createWarning } = require('..')
const { withResolvers } = require('./promise')

test('emit should emit a given code unlimited times', t => {
  t.plan(50)

  let runs = 0
  const expectedRun = []
  const times = 10

  const { promise, resolve } = withResolvers()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.deepStrictEqual(warning.name, 'TestDeprecation')
    t.assert.deepStrictEqual(warning.code, 'CODE')
    t.assert.deepStrictEqual(warning.message, 'Hello world')
    t.assert.ok(warn.emitted)
    t.assert.deepStrictEqual(runs++, expectedRun.shift())
  }

  const warn = createWarning({
    name: 'TestDeprecation',
    code: 'CODE',
    message: 'Hello world',
    unlimited: true
  })

  for (let i = 0; i < times; i++) {
    expectedRun.push(i)
    warn()
  }
  setImmediate(() => {
    process.removeListener('warning', onWarning)
    resolve()
  })

  return promise
})
