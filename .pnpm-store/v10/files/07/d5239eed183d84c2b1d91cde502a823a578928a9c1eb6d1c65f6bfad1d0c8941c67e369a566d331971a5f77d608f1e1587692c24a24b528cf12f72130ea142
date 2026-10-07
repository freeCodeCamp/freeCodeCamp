'use strict'

const { test } = require('node:test')
const factory = require('../')

const noop = function () {}

test('issue-63', (t) => {
  t.plan(2)

  const fmw = factory()

  t.assert.throws(function () {
    fmw.on('GET', '/foo/:id(a', noop)
  })

  try {
    fmw.on('GET', '/foo/:id(a', noop)
    t.assert.fail('should fail')
  } catch (err) {
    t.assert.equal(err.message, 'Invalid regexp expression in "/foo/:id(a"')
  }
})
