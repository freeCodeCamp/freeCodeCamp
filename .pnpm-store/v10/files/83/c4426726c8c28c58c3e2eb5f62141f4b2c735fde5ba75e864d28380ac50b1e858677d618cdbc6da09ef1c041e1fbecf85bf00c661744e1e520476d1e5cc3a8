'use strict'

const tap = require('tap')
const noop = require('./noop')

tap.test('is a function', async t => {
  t.type(noop, Function)
})

tap.test('does nothing', async t => {
  t.equal(noop('stuff'), undefined)
})
