'use strict'

const { test } = require('tap')
const boot = require('..')

test('not taking done does not throw error.', (t) => {
  t.plan(2)

  const app = boot()

  app.use(noDone).ready((err) => {
    t.notOk(err, 'no error')
  })

  function noDone (s, opts) {
    t.pass('did not throw')
  }
})
