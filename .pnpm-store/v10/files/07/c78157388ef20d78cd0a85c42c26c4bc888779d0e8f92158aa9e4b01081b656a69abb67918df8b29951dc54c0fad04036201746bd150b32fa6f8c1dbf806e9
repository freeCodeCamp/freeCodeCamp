'use strict'

const { test } = require('tap')
const boot = require('..')
const noop = () => {}

test('boot a plugin and then execute a call after that', (t) => {
  t.plan(1)

  process.on('warning', (warning) => {
    t.fail('we should not get a warning', warning)
  })

  const app = boot()
  // eslint-disable-next-line no-var
  for (var i = 0; i < 12; i++) {
    app.on('preReady', noop)
  }

  setTimeout(() => {
    t.pass('Everything ok')
  }, 500)
})
