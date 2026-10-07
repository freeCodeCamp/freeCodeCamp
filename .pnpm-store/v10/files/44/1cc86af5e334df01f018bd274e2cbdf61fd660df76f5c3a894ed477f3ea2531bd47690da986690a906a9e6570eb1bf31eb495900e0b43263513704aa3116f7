'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const statusCodes = require('node:http').STATUS_CODES
const diagnostics = require('node:diagnostics_channel')

test('diagnostics channel error event should report correct status code', async (t) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let diagnosticsStatusCode

  const channel = diagnostics.channel('tracing:fastify.request.handler:error')
  const handler = (msg) => {
    diagnosticsStatusCode = msg.reply.statusCode
  }
  channel.subscribe(handler)
  t.after(() => channel.unsubscribe(handler))

  fastify.get('/', async () => {
    const err = new Error('test error')
    err.statusCode = 503
    throw err
  })

  const res = await fastify.inject('/')

  t.assert.strictEqual(res.statusCode, 503)
  t.assert.strictEqual(diagnosticsStatusCode, 503, 'diagnostics channel should report correct status code')
  t.assert.strictEqual(diagnosticsStatusCode, res.statusCode, 'diagnostics status should match response status')
})

test('diagnostics channel error event should report 500 for errors without status', async (t) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let diagnosticsStatusCode

  const channel = diagnostics.channel('tracing:fastify.request.handler:error')
  const handler = (msg) => {
    diagnosticsStatusCode = msg.reply.statusCode
  }
  channel.subscribe(handler)
  t.after(() => channel.unsubscribe(handler))

  fastify.get('/', async () => {
    throw new Error('plain error without status')
  })

  const res = await fastify.inject('/')

  t.assert.strictEqual(res.statusCode, 500)
  t.assert.strictEqual(diagnosticsStatusCode, 500, 'diagnostics channel should report 500 for plain errors')
  t.assert.strictEqual(diagnosticsStatusCode, res.statusCode, 'diagnostics status should match response status')
})

test('diagnostics channel error event should report correct status with custom error handler', async (t) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let diagnosticsStatusCode

  const channel = diagnostics.channel('tracing:fastify.request.handler:error')
  const handler = (msg) => {
    diagnosticsStatusCode = msg.reply.statusCode
  }
  channel.subscribe(handler)
  t.after(() => channel.unsubscribe(handler))

  fastify.setErrorHandler((error, request, reply) => {
    reply.status(503).send({ error: error.message })
  })

  fastify.get('/', async () => {
    throw new Error('handler error')
  })

  const res = await fastify.inject('/')

  // Note: The diagnostics channel fires before the custom error handler runs,
  // so it reports 500 (default) rather than 503 (set by custom handler).
  // This is expected behavior - the error channel reports the initial error state.
  t.assert.strictEqual(res.statusCode, 503)
  t.assert.strictEqual(diagnosticsStatusCode, 500, 'diagnostics channel reports status before custom handler')
  t.assert.notStrictEqual(diagnosticsStatusCode, res.statusCode, 'custom handler can change status after diagnostics')
})

test('Error.status property support', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  const err = new Error('winter is coming')
  err.status = 418

  diagnostics.subscribe('tracing:fastify.request.handler:error', (msg) => {
    t.assert.strictEqual(msg.error.message, 'winter is coming')
  })

  fastify.get('/', () => {
    return Promise.reject(err)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 418)
    t.assert.deepStrictEqual(
      {
        error: statusCodes['418'],
        message: err.message,
        statusCode: 418
      },
      JSON.parse(res.payload)
    )
    done()
  })
})
