'use strict'

const { test } = require('tap')
const boot = require('../..')

test('should print the time tree', (t) => {
  t.plan(2)
  const app = boot()

  app.use(function first (instance, opts, cb) {
    const out = instance.prettyPrint().split('\n')
    t.equal(out[0], 'root -1 ms')
    t.equal(out[1], '└── first -1 ms')
    cb()
  })
})
