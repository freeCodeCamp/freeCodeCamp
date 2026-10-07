'use strict'

const { test } = require('node:test')
const { kRouteContext } = require('../../lib/symbols')
const Context = require('../../lib/context')

const Fastify = require('../..')

test('context', async context => {
  context.plan(1)

  await context.test('Should not contain undefined as key prop', async t => {
    t.plan(4)
    const app = Fastify()

    app.get('/', (req, reply) => {
      t.assert.ok(req[kRouteContext] instanceof Context)
      t.assert.ok(reply[kRouteContext] instanceof Context)
      t.assert.ok(!('undefined' in reply[kRouteContext]))
      t.assert.ok(!('undefined' in req[kRouteContext]))

      reply.send('hello world!')
    })

    try {
      await app.inject('/')
    } catch (e) {
      t.assert.fail(e)
    }
  })
})
