'use strict'

const { test } = require('tap')
const { isPromiseLike } = require('../../lib/is-promise-like')

test('isPromiseLike', (t) => {
  t.plan(9)

  t.equal(isPromiseLike(1), false)
  t.equal(isPromiseLike('function'), false)
  t.equal(isPromiseLike({}), false)
  t.equal(isPromiseLike([]), false)
  t.equal(isPromiseLike(null), false)

  t.equal(isPromiseLike(function () {}), false)
  t.equal(isPromiseLike(new Promise((resolve) => resolve)), true)
  t.equal(isPromiseLike(Promise.resolve()), true)

  t.equal(isPromiseLike({ then: () => {} }), true)
})
