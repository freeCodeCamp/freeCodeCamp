'use strict'

const { test } = require('tap')
const indexes = require('../lib/indexes')

for (const index of Object.keys(indexes)) {
  test(`${index} is lock free`, function (t) {
    t.equal(Atomics.isLockFree(indexes[index]), true)
    t.end()
  })
}
