'use strict'

const { test } = require('node:test')
const { createWarning } = require('..')
const { withResolvers } = require('./promise')

test('Must not overwrite config', t => {
  t.plan(1)

  function onWarning (warning) {
    t.assert.deepStrictEqual(warning.code, 'CODE_1')
  }

  const a = createWarning({
    name: 'TestWarning',
    code: 'CODE_1',
    message: 'Msg'
  })
  createWarning({
    name: 'TestWarning',
    code: 'CODE_2',
    message: 'Msg',
    unlimited: true
  })

  const { promise, resolve } = withResolvers()

  process.on('warning', onWarning)
  a('CODE_1')
  a('CODE_1')

  setImmediate(() => {
    process.removeListener('warning', onWarning)
    resolve()
  })

  return promise
})
