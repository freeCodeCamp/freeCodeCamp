'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')
const fs = require('node:fs')
const { Readable } = require('node:stream')
const { fetch: undiciFetch } = require('undici')
const http = require('node:http')
const { setTimeout: sleep } = require('node:timers/promises')

test('should response with a ReadableStream', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    const stream = fs.createReadStream(__filename)
    reply.code(200).send(Readable.toWeb(stream))
  })

  const {
    statusCode,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  const expected = await fs.promises.readFile(__filename)

  t.assert.strictEqual(statusCode, 200)
  t.assert.strictEqual(expected.toString(), body.toString())
})

test('should response with a Response', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    const stream = fs.createReadStream(__filename)
    reply.send(new Response(Readable.toWeb(stream), {
      status: 200,
      headers: {
        hello: 'world'
      }
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  const expected = await fs.promises.readFile(__filename)

  t.assert.strictEqual(statusCode, 200)
  t.assert.strictEqual(expected.toString(), body.toString())
  t.assert.strictEqual(headers.hello, 'world')
})

test('should response with a Response 204', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send(new Response(null, {
      status: 204,
      headers: {
        hello: 'world'
      }
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(statusCode, 204)
  t.assert.strictEqual(body, '')
  t.assert.strictEqual(headers.hello, 'world')
})

test('should response with a Response 304', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send(new Response(null, {
      status: 304,
      headers: {
        hello: 'world'
      }
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(statusCode, 304)
  t.assert.strictEqual(body, '')
  t.assert.strictEqual(headers.hello, 'world')
})

test('should response with a Response without body', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send(new Response(null, {
      status: 200,
      headers: {
        hello: 'world'
      }
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(statusCode, 200)
  t.assert.strictEqual(body, '')
  t.assert.strictEqual(headers.hello, 'world')
})

test('able to use in onSend hook - ReadableStream', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    const stream = fs.createReadStream(__filename)
    reply.code(500).send(Readable.toWeb(stream))
  })

  fastify.addHook('onSend', (request, reply, payload, done) => {
    t.assert.strictEqual(Object.prototype.toString.call(payload), '[object ReadableStream]')
    done(null, new Response(payload, {
      status: 200,
      headers: {
        hello: 'world'
      }
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  const expected = await fs.promises.readFile(__filename)

  t.assert.strictEqual(statusCode, 200)
  t.assert.strictEqual(expected.toString(), body.toString())
  t.assert.strictEqual(headers.hello, 'world')
})

test('able to use in onSend hook - Response', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    const stream = fs.createReadStream(__filename)
    reply.send(new Response(Readable.toWeb(stream), {
      status: 500,
      headers: {
        hello: 'world'
      }
    }))
  })

  fastify.addHook('onSend', (request, reply, payload, done) => {
    t.assert.strictEqual(Object.prototype.toString.call(payload), '[object Response]')
    done(null, new Response(payload.body, {
      status: 200,
      headers: payload.headers
    }))
  })

  const {
    statusCode,
    headers,
    body
  } = await fastify.inject({ method: 'GET', path: '/' })

  const expected = await fs.promises.readFile(__filename)

  t.assert.strictEqual(statusCode, 200)
  t.assert.strictEqual(expected.toString(), body.toString())
  t.assert.strictEqual(headers.hello, 'world')
})

test('Error when Response.bodyUsed', async (t) => {
  t.plan(4)

  const expected = await fs.promises.readFile(__filename)

  const fastify = Fastify()

  fastify.get('/', async function (request, reply) {
    const stream = fs.createReadStream(__filename)
    const response = new Response(Readable.toWeb(stream), {
      status: 200,
      headers: {
        hello: 'world'
      }
    })
    const file = await response.text()
    t.assert.strictEqual(expected.toString(), file)
    t.assert.strictEqual(response.bodyUsed, true)
    return reply.send(response)
  })

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 500)
  const body = response.json()
  t.assert.strictEqual(body.code, 'FST_ERR_REP_RESPONSE_BODY_CONSUMED')
})

test('Error when Response.body.locked', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', async function (request, reply) {
    const stream = Readable.toWeb(fs.createReadStream(__filename))
    const response = new Response(stream, {
      status: 200,
      headers: {
        hello: 'world'
      }
    })
    stream.getReader()
    t.assert.strictEqual(stream.locked, true)
    return reply.send(response)
  })

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 500)
  const body = response.json()
  t.assert.strictEqual(body.code, 'FST_ERR_REP_READABLE_STREAM_LOCKED')
})

test('Error when ReadableStream.locked', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', async function (request, reply) {
    const stream = Readable.toWeb(fs.createReadStream(__filename))
    stream.getReader()
    t.assert.strictEqual(stream.locked, true)
    return reply.send(stream)
  })

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 500)
  const body = response.json()
  t.assert.strictEqual(body.code, 'FST_ERR_REP_READABLE_STREAM_LOCKED')
})

test('allow to pipe with fetch', async (t) => {
  t.plan(2)
  const abortController = new AbortController()
  const { signal } = abortController

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    abortController.abort()
  })

  fastify.get('/', function (request, reply) {
    return fetch(`${fastify.listeningOrigin}/fetch`, {
      method: 'GET',
      signal
    })
  })

  fastify.get('/fetch', function async (request, reply) {
    reply.code(200).send({ ok: true })
  })

  await fastify.listen()

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), { ok: true })
})

test('allow to pipe with undici.fetch', async (t) => {
  t.plan(2)
  const abortController = new AbortController()
  const { signal } = abortController

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    abortController.abort()
  })

  fastify.get('/', function (request, reply) {
    return undiciFetch(`${fastify.listeningOrigin}/fetch`, {
      method: 'GET',
      signal
    })
  })

  fastify.get('/fetch', function (request, reply) {
    reply.code(200).send({ ok: true })
  })

  await fastify.listen()

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), { ok: true })
})

test('WebStream error before headers sent should trigger error handler', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    const stream = new ReadableStream({
      start (controller) {
        controller.error(new Error('stream error'))
      }
    })
    reply.send(stream)
  })

  const response = await fastify.inject({ method: 'GET', path: '/' })

  t.assert.strictEqual(response.statusCode, 500)
  t.assert.strictEqual(response.json().message, 'stream error')
})

test('WebStream error after headers sent should destroy response', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (request, reply) {
    const stream = new ReadableStream({
      start (controller) {
        controller.enqueue('hello')
      },
      pull (controller) {
        setTimeout(() => {
          controller.error(new Error('stream error'))
        }, 10)
      }
    })
    reply.header('content-type', 'text/plain').send(stream)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    let finished = false
    http.get(`http://localhost:${fastify.server.address().port}`, (res) => {
      res.on('close', () => {
        if (!finished) {
          finished = true
          t.assert.ok('response closed')
          done()
        }
      })
      res.resume()
    })
  })
})

test('WebStream should cancel reader when response is destroyed', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  let readerCancelled = false

  fastify.get('/', function (request, reply) {
    const stream = new ReadableStream({
      start (controller) {
        controller.enqueue('hello')
      },
      pull (controller) {
        return new Promise(() => {})
      },
      cancel () {
        readerCancelled = true
      }
    })
    reply.header('content-type', 'text/plain').send(stream)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const req = http.get(`http://localhost:${fastify.server.address().port}`, (res) => {
      res.once('data', () => {
        req.destroy()
        setTimeout(() => {
          t.assert.strictEqual(readerCancelled, true)
          done()
        }, 50)
      })
    })
  })
})

test('WebStream should respect backpressure', async (t) => {
  t.plan(3)

  const fastify = Fastify()
  t.after(() => fastify.close())

  let drainEmittedAt = 0
  let secondWriteAt = 0
  let resolveSecondWrite
  const secondWrite = new Promise((resolve) => {
    resolveSecondWrite = resolve
  })

  fastify.get('/', function (request, reply) {
    const raw = reply.raw
    const originalWrite = raw.write.bind(raw)
    const bufferedChunks = []
    let wroteFirstChunk = false

    raw.once('drain', () => {
      for (const bufferedChunk of bufferedChunks) {
        originalWrite(bufferedChunk)
      }
    })

    raw.write = function (chunk, encoding, cb) {
      if (!wroteFirstChunk) {
        wroteFirstChunk = true
        bufferedChunks.push(Buffer.from(chunk))
        sleep(100).then(() => {
          drainEmittedAt = Date.now()
          raw.emit('drain')
        })
        if (typeof cb === 'function') {
          cb()
        }
        return false
      }
      if (!secondWriteAt) {
        secondWriteAt = Date.now()
        resolveSecondWrite()
      }
      return originalWrite(chunk, encoding, cb)
    }

    const stream = new ReadableStream({
      start (controller) {
        controller.enqueue(Buffer.from('chunk-1'))
      },
      pull (controller) {
        controller.enqueue(Buffer.from('chunk-2'))
        controller.close()
      }
    })

    reply.header('content-type', 'text/plain').send(stream)
  })

  await fastify.listen({ port: 0 })

  const response = await undiciFetch(`http://localhost:${fastify.server.address().port}/`)
  const bodyPromise = response.text()

  await secondWrite
  await sleep(120)
  const body = await bodyPromise

  t.assert.strictEqual(response.status, 200)
  t.assert.strictEqual(body, 'chunk-1chunk-2')
  t.assert.ok(secondWriteAt >= drainEmittedAt)
})

test('WebStream should stop reading on drain after response destroy', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  let cancelCalled = false
  let resolveCancel
  const cancelPromise = new Promise((resolve) => {
    resolveCancel = resolve
  })

  fastify.get('/', function (request, reply) {
    const raw = reply.raw
    const originalWrite = raw.write.bind(raw)
    let firstWrite = true

    raw.write = function (chunk, encoding, cb) {
      if (firstWrite) {
        firstWrite = false
        if (typeof cb === 'function') {
          cb()
        }
        queueMicrotask(() => {
          raw.destroy()
          raw.emit('drain')
        })
        return false
      }
      return originalWrite(chunk, encoding, cb)
    }

    const stream = new ReadableStream({
      start (controller) {
        controller.enqueue(Buffer.from('chunk-1'))
      },
      pull (controller) {
        controller.enqueue(Buffer.from('chunk-2'))
        controller.close()
      },
      cancel () {
        cancelCalled = true
        resolveCancel()
      }
    })

    reply.header('content-type', 'text/plain').send(stream)
  })

  await new Promise((resolve, reject) => {
    fastify.listen({ port: 0 }, err => {
      if (err) return reject(err)
      resolve()
    })
  })

  await new Promise((resolve, reject) => {
    const req = http.get(`http://localhost:${fastify.server.address().port}/`, (res) => {
      res.once('close', resolve)
      res.resume()
    })
    req.once('error', (err) => {
      if (err.code === 'ECONNRESET') {
        resolve()
      } else {
        reject(err)
      }
    })
  })

  await cancelPromise
  t.assert.ok(true, 'response interrupted as expected')
  t.assert.strictEqual(cancelCalled, true)
})

test('WebStream should warn when headers already sent', async (t) => {
  t.plan(2)

  let warnCalled = false
  const spyLogger = {
    level: 'warn',
    fatal: () => { },
    error: () => { },
    warn: (msg) => {
      if (typeof msg === 'string' && msg.includes('use res.writeHead in stream mode')) {
        warnCalled = true
      }
    },
    info: () => { },
    debug: () => { },
    trace: () => { },
    child: () => spyLogger
  }

  const fastify = Fastify({ loggerInstance: spyLogger })
  t.after(() => fastify.close())

  fastify.get('/', function (request, reply) {
    reply.raw.writeHead(200, { 'content-type': 'text/plain' })
    const stream = new ReadableStream({
      start (controller) {
        controller.enqueue('hello')
        controller.close()
      }
    })
    reply.send(stream)
  })

  await fastify.listen({ port: 0 })

  const response = await fetch(`http://localhost:${fastify.server.address().port}/`)
  t.assert.strictEqual(response.status, 200)
  t.assert.strictEqual(warnCalled, true)
})
