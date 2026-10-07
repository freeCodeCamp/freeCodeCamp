'use strict'

const { test } = require('node:test')
const diagnostics = require('node:diagnostics_channel')
const Fastify = require('../..')
const Request = require('../../lib/request')
const Reply = require('../../lib/reply')

test('diagnostics channel sync events fire in expected order', async t => {
  t.plan(10)
  let callOrder = 0
  let firstEncounteredMessage

  diagnostics.subscribe('tracing:fastify.request.handler:start', (msg) => {
    t.assert.strictEqual(callOrder++, 0)
    firstEncounteredMessage = msg
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:end', (msg) => {
    t.assert.ok(msg.request instanceof Request)
    t.assert.ok(msg.reply instanceof Reply)
    t.assert.strictEqual(callOrder++, 1)
    t.assert.strictEqual(msg, firstEncounteredMessage)
  })

  diagnostics.subscribe('tracing:fastify.request.handler:error', (msg) => {
    t.assert.fail('should not trigger error channel')
  })

  const fastify = Fastify()
  fastify.route({
    method: 'GET',
    url: '/',
    handler: function (req, reply) {
      setImmediate(() => reply.send({ hello: 'world' }))
    }
  })

  t.after(() => { fastify.close() })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/')
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
})
