'use strict'

const { test } = require('node:test')
const net = require('node:net')
const Fastify = require('..')
const { Readable } = require('node:stream')
const { kTimeoutTimer, kOnAbort } = require('../lib/symbols')

// --- Option validation ---

test('server-level handlerTimeout defaults to 0 in initialConfig', t => {
  t.plan(1)
  const fastify = Fastify()
  t.assert.strictEqual(fastify.initialConfig.handlerTimeout, 0)
})

test('server-level handlerTimeout: 5000 is accepted and exposed in initialConfig', t => {
  t.plan(1)
  const fastify = Fastify({ handlerTimeout: 5000 })
  t.assert.strictEqual(fastify.initialConfig.handlerTimeout, 5000)
})

test('route-level handlerTimeout rejects invalid values', async t => {
  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.get('/a', { handlerTimeout: 'fast' }, async () => 'ok')
  }, { code: 'FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT' })

  t.assert.throws(() => {
    fastify.get('/b', { handlerTimeout: -1 }, async () => 'ok')
  }, { code: 'FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT' })

  t.assert.throws(() => {
    fastify.get('/c', { handlerTimeout: 1.5 }, async () => 'ok')
  }, { code: 'FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT' })

  t.assert.throws(() => {
    fastify.get('/d', { handlerTimeout: 0 }, async () => 'ok')
  }, { code: 'FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT' })
})

// --- Lazy signal without handlerTimeout ---

test('when handlerTimeout is 0 (default), request.signal is lazily created', async t => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/', async (request) => {
    const signal = request.signal
    t.assert.ok(signal instanceof AbortSignal)
    t.assert.strictEqual(signal.aborted, false)
    return { ok: true }
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 200)
})

test('client disconnect aborts lazily created signal (no handlerTimeout)', async t => {
  t.plan(1)

  const fastify = Fastify()
  let signalAborted = false

  fastify.get('/', async (request) => {
    await new Promise((resolve) => {
      request.signal.addEventListener('abort', () => {
        signalAborted = true
        resolve()
      })
    })
    return 'should not reach'
  })

  await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const address = fastify.server.address()
  await new Promise((resolve) => {
    const client = net.connect(address.port, () => {
      client.write('GET / HTTP/1.1\r\nHost: localhost\r\n\r\n')
      setTimeout(() => {
        client.destroy()
        setTimeout(resolve, 100)
      }, 50)
    })
  })

  t.assert.strictEqual(signalAborted, true)
})

// --- Basic timeout behavior ---

test('slow handler returns 503 with FST_ERR_HANDLER_TIMEOUT', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', { handlerTimeout: 50 }, async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return 'too late'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 503)
  t.assert.strictEqual(JSON.parse(res.payload).code, 'FST_ERR_HANDLER_TIMEOUT')
})

test('fast handler completes normally with 200', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', { handlerTimeout: 5000 }, async () => {
    return { hello: 'world' }
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
})

// --- Per-route override ---

test('route-level handlerTimeout overrides server default', async t => {
  t.plan(4)
  const fastify = Fastify({ handlerTimeout: 5000 })

  fastify.get('/slow', { handlerTimeout: 50 }, async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return 'too late'
  })

  fastify.get('/fast', async () => {
    return { ok: true }
  })

  const resSlow = await fastify.inject({ method: 'GET', url: '/slow' })
  t.assert.strictEqual(resSlow.statusCode, 503)
  t.assert.strictEqual(JSON.parse(resSlow.payload).code, 'FST_ERR_HANDLER_TIMEOUT')

  const resFast = await fastify.inject({ method: 'GET', url: '/fast' })
  t.assert.strictEqual(resFast.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(resFast.payload), { ok: true })
})

// --- request.signal behavior ---

test('request.signal is an AbortSignal when handlerTimeout > 0', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', { handlerTimeout: 5000 }, async (request) => {
    t.assert.ok(request.signal instanceof AbortSignal)
    t.assert.strictEqual(request.signal.aborted, false)
    return 'ok'
  })

  await fastify.inject({ method: 'GET', url: '/' })
})

test('request.signal aborts when timeout fires with reason', async t => {
  t.plan(2)
  const fastify = Fastify()

  let signalReason = null
  fastify.get('/', { handlerTimeout: 50 }, async (request) => {
    request.signal.addEventListener('abort', () => {
      signalReason = request.signal.reason
    })
    await new Promise(resolve => setTimeout(resolve, 500))
    return 'too late'
  })

  await fastify.inject({ method: 'GET', url: '/' })
  t.assert.ok(signalReason !== null)
  t.assert.strictEqual(signalReason.code, 'FST_ERR_HANDLER_TIMEOUT')
})

// --- Streaming response ---

test('streaming response: timer clears when response finishes', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.get('/', { handlerTimeout: 5000 }, async (request, reply) => {
    const stream = new Readable({
      read () {
        this.push('hello')
        this.push(null)
      }
    })
    reply.type('text/plain').send(stream)
    return reply
  })

  await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const address = fastify.server.address()
  const res = await fetch(`http://localhost:${address.port}/`)
  t.assert.strictEqual(res.status, 200)
})

// --- SSE with reply.hijack() ---

test('reply.hijack() clears timeout timer', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.get('/', { handlerTimeout: 100 }, async (request, reply) => {
    reply.hijack()
    // Write after the original timeout would have fired
    await new Promise(resolve => setTimeout(resolve, 200))
    reply.raw.writeHead(200, { 'Content-Type': 'text/plain' })
    reply.raw.end('hijacked response')
  })

  await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const address = fastify.server.address()
  const res = await fetch(`http://localhost:${address.port}/`)
  t.assert.strictEqual(res.status, 200)
})

// --- Error handler integration ---

test('route-level errorHandler receives FST_ERR_HANDLER_TIMEOUT', async t => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/', {
    handlerTimeout: 50,
    errorHandler: (error, request, reply) => {
      t.assert.strictEqual(error.code, 'FST_ERR_HANDLER_TIMEOUT')
      reply.code(504).send({ custom: 'timeout' })
    }
  }, async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return 'too late'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 504)
  t.assert.deepStrictEqual(JSON.parse(res.payload), { custom: 'timeout' })
})

// --- Timer cleanup / no leaks ---

test('timer is cleaned up after fast response (no leak)', async t => {
  t.plan(3)
  const fastify = Fastify()

  let capturedRequest
  fastify.get('/', { handlerTimeout: 60000 }, async (request) => {
    capturedRequest = request
    return 'fast'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 200)
  // Timer and listener should be cleaned up
  t.assert.strictEqual(capturedRequest[kTimeoutTimer], null)
  t.assert.strictEqual(capturedRequest[kOnAbort], null)
})

// --- routeOptions exposure ---

test('request.routeOptions.handlerTimeout reflects configured value', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', { handlerTimeout: 3000 }, async (request) => {
    t.assert.strictEqual(request.routeOptions.handlerTimeout, 3000)
    return 'ok'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 200)
})

test('request.routeOptions.handlerTimeout reflects server default', async t => {
  t.plan(2)
  const fastify = Fastify({ handlerTimeout: 7000 })

  fastify.get('/', async (request) => {
    t.assert.strictEqual(request.routeOptions.handlerTimeout, 7000)
    return 'ok'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 200)
})

// --- Client disconnect aborts signal ---

test('client disconnect aborts request.signal', async t => {
  t.plan(1)

  const fastify = Fastify()
  let signalAborted = false

  fastify.get('/', { handlerTimeout: 5000 }, async (request) => {
    await new Promise((resolve) => {
      request.signal.addEventListener('abort', () => {
        signalAborted = true
        resolve()
      })
    })
    return 'should not reach'
  })

  await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const address = fastify.server.address()
  await new Promise((resolve) => {
    const client = net.connect(address.port, () => {
      client.write('GET / HTTP/1.1\r\nHost: localhost\r\n\r\n')
      setTimeout(() => {
        client.destroy()
        // Give the server time to process the close event
        setTimeout(resolve, 100)
      }, 50)
    })
  })

  t.assert.strictEqual(signalAborted, true)
})

// --- Race: handler completes just as timeout fires ---

test('no double-send when handler completes near timeout boundary', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', { handlerTimeout: 50 }, async (request, reply) => {
    // Respond just before timeout
    await new Promise(resolve => setTimeout(resolve, 40))
    reply.send({ ok: true })
    return reply
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  // Should get either 200 or 503 depending on race, but never crash
  t.assert.ok(res.statusCode === 200 || res.statusCode === 503)
  // Verify response is valid JSON regardless of which won the race
  t.assert.ok(JSON.parse(res.payload))
})

// --- Server default inherited by routes ---

test('routes inherit server-level handlerTimeout', async t => {
  t.plan(3)
  const fastify = Fastify({ handlerTimeout: 50 })

  fastify.get('/', async (request) => {
    // Verify the signal is present (inherited from server default)
    t.assert.ok(request.signal instanceof AbortSignal)
    await new Promise(resolve => setTimeout(resolve, 500))
    return 'too late'
  })

  const res = await fastify.inject({ method: 'GET', url: '/' })
  t.assert.strictEqual(res.statusCode, 503)
  t.assert.strictEqual(JSON.parse(res.payload).code, 'FST_ERR_HANDLER_TIMEOUT')
})
