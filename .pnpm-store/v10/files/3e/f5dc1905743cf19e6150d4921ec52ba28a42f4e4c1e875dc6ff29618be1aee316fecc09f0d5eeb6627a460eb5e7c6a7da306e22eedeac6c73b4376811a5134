'use strict'

const { test } = require('tap')

test('support esm import', (t) => {
  import('./esm.mjs').then(() => {
    t.pass('esm is supported')
    t.end()
  }).catch((err) => {
    process.nextTick(() => {
      throw err
    })
  })
})
