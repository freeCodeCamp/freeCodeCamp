'use strict'

const { test } = require('tap')
const boot = require('..')

test('after does not await itself', async (t) => {
  t.plan(3)

  const app = {}
  boot(app)

  app.use(async (app) => {
    t.pass('plugin init')
  })
  app.after(() => app)
  t.pass('reachable')

  await app.ready()
  t.pass('reachable')
})
