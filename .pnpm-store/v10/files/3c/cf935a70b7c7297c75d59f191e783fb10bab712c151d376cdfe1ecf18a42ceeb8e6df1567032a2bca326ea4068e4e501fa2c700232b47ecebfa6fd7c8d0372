'use strict'

const { test } = require('node:test')
const diagnostics = require('node:diagnostics_channel')
const Fastify = require('../..')
const Request = require('../../lib/request')
const Reply = require('../../lib/reply')

test('diagnostics channel async events fire in expected order', async t => {
  t.plan(18)
  let callOrder = 0
  let firstEncounteredMessage

  diagnostics.subscribe('tracing:fastify.request.handler:start', (msg) => {
    t.assert.strictEqual(callOrder++, 0)
    firstEncounteredMessage = msg
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:end', (msg) => {
    t.assert.strictEqual(callOrder++, 1)
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
    t.assert.strictEqual(msg, firstEncounteredMessage)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:asyncStart', (msg) => {
    t.assert.strictEqual(callOrder++, 2)
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
    t.assert.strictEqual(msg, firstEncounteredMessage)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:asyncEnd', (msg) => {
    t.assert.strictEqual(callOrder++, 3)
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
    t.assert.strictEqual(msg, firstEncounteredMessage)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:error', (msg) => {
    t.assert.fail('should not trigger error channel')
  })

  const fastify = Fastify()
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async function (req, reply) {
      return { hello: 'world' }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })

  const response = await fetch(fastifyServer)
  t.assert.ok(response.ok)
  t.assert.strictEqual(response.status, 200)
  const body = await response.text()
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})
