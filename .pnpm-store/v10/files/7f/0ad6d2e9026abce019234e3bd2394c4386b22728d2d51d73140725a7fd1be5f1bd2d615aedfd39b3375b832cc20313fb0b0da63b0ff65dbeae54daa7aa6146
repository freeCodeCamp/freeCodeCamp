'use strict'

const tap = require('tap')
const isObject = require('./is-object')

tap.test('returns correct answer', async t => {
  t.equal(isObject({}), true)
  t.equal(isObject([]), false)
  t.equal(isObject(42), false)
})
