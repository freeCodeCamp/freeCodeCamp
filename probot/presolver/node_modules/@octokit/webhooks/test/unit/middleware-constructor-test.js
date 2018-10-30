const test = require('tap').test

const Middleware = require('../../middleware')

test('options: none', t => {
  t.throws(Middleware)
  t.end()
})
