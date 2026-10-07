'use strict'

const { test } = require('tap')
const boot = require('..')

test('catch exceptions in parent.override', (t) => {
  t.plan(2)

  const server = {}

  const app = boot(server, {
    autostart: false
  })
  app.override = function () {
    throw Error('catch it')
  }

  app
    .use(function () {})
    .start()

  app.ready(function (err) {
    t.type(err, Error)
    t.match(err, /catch it/)
  })
})
