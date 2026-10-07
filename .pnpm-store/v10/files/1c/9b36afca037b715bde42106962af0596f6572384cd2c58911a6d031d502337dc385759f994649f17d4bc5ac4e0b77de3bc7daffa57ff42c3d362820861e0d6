'use strict'

/* eslint no-prototype-builtins: off */

const { test } = require('tap')
const boot = require('../boot')

test('onReadyTimeout', async (t) => {
  const app = boot({}, {
    timeout: 10, // 10 ms
    autostart: false
  })

  app.use(function one (innerApp, opts, next) {
    t.pass('loaded')
    innerApp.ready(function readyNoResolve (err, done) {
      t.notOk(err)
      t.pass('first ready called')
      // Do not call done() to timeout
    })
    next()
  })

  await app.start()

  try {
    await app.ready()
    t.fail('should throw')
  } catch (err) {
    t.equal(err.message, 'Plugin did not start in time: \'readyNoResolve\'. You may have forgotten to call \'done\' function or to resolve a Promise')
    // And not Plugin did not start in time: 'bound _encapsulateThreeParam'. You may have forgotten to call 'done' function or to resolve a Promise
  }
})
