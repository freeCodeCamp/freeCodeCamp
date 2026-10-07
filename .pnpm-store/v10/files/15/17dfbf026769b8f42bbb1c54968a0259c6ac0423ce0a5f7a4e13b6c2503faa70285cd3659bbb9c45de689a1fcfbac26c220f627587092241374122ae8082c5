'use strict'

const { test } = require('tap')
const boot = require('..')

test('calling done twice does not throw error', (t) => {
  t.plan(2)

  const app = boot()

  app
    .use(twiceDone)
    .ready((err) => {
      t.notOk(err, 'no error')
    })

  function twiceDone (s, opts, done) {
    done()
    done()
    t.pass('did not throw')
  }
})
