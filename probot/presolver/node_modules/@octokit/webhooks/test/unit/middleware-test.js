const simple = require('simple-mock')
const test = require('tap').test

const middleware = require('../../middleware/middleware')
const state = {}

test('next() callback', t => {
  const next = simple.spy()

  middleware(state, { method: 'POST', url: '/foo' }, {}, next)
  t.is(next.callCount, 1)
  t.end()
})
