'use strict'

/* eslint no-prototype-builtins: off */

const { test } = require('tap')
const boot = require('..')

test('do not load', async (t) => {
  const app = boot({}, { timeout: 10 })

  app.use(first)

  async function first (s, opts) {
    await s.use(second)
  }

  async function second (s, opts) {
    await s.use(third)
  }

  function third (s, opts) {
    return new Promise((resolve, reject) => {
      // no resolve
    })
  }

  try {
    await app.start()
    t.fail('should throw')
  } catch (err) {
    t.equal(err.message, 'Plugin did not start in time: \'third\'. You may have forgotten to call \'done\' function or to resolve a Promise')
  }
})
