'use strict'

const stream = require('node:stream')

const t = require('node:test')
const split = require('split2')
const pino = require('pino')

const Fastify = require('../../fastify')
const helper = require('../helper')
const { once, on } = stream
const { request } = require('./logger-test-utils')
const { partialDeepStrictEqual } = require('../toolkit')

t.test('logging', { timeout: 60000 }, async (t) => {
  let localhost
  let localhostForURL

  t.plan(14)

  t.before(async function () {
    [localhost, localhostForURL] = await helper.getLoopbackHost()
  })

  await t.test('The default 404 handler logs the incoming request', async (t) => {
    const lines = ['incoming request', 'Route GET:/not-found not found', 'request completed']
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'trace' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/not-found' })
      t.assert.strictEqual(response.statusCode, 404)
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.strictEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('should not rely on raw request to log errors', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())
    fastify.get('/error', function (req, reply) {
      t.assert.ok(req.log)
      reply.status(415).send(new Error('something happened'))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { level: 30, msg: 'incoming request' },
      { res: { statusCode: 415 }, msg: 'something happened' },
      { res: { statusCode: 415 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 1)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/error')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should log the error if no error handler is defined', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/error', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(new Error('a generic error'))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { msg: 'incoming request' },
      { level: 50, msg: 'a generic error' },
      { res: { statusCode: 500 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 1)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/error')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should log as info if error status code >= 400 and < 500 if no error handler is defined', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/400', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(Object.assign(new Error('a 400 error'), { statusCode: 400 }))
    })
    fastify.get('/503', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(Object.assign(new Error('a 503 error'), { statusCode: 503 }))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { msg: 'incoming request' },
      { level: 30, msg: 'a 400 error' },
      { res: { statusCode: 400 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 1)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/400')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should log as error if error status code >= 500 if no error handler is defined', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())
    fastify.get('/503', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(Object.assign(new Error('a 503 error'), { statusCode: 503 }))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { msg: 'incoming request' },
      { level: 50, msg: 'a 503 error' },
      { res: { statusCode: 503 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 1)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/503')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should not log the error if error handler is defined and it does not error', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())
    fastify.get('/error', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(new Error('something happened'))
    })
    fastify.setErrorHandler((err, req, reply) => {
      t.assert.ok(err)
      reply.send('something bad happened')
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { level: 30, msg: 'incoming request' },
      { res: { statusCode: 200 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 2)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/error')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('reply.send logs an error if called twice in a row', async (t) => {
    const lines = [
      'incoming request',
      'request completed',
      'Reply was already sent, did you forget to "return reply" in "/" (GET)?',
      'Reply was already sent, did you forget to "return reply" in "/" (GET)?'
    ]
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)
    const loggerInstance = pino(stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      reply.send({ hello: 'world' })
      reply.send({ hello: 'world2' })
      reply.send({ hello: 'world3' })
    })

    const response = await fastify.inject({ method: 'GET', url: '/' })
    const body = await response.json()
    t.assert.ok(partialDeepStrictEqual(body, { hello: 'world' }))

    for await (const [line] of on(stream, 'data')) {
      t.assert.strictEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('should not log incoming request and outgoing response when disabled', async (t) => {
    t.plan(1)
    const stream = split(JSON.parse)
    const fastify = Fastify({ disableRequestLogging: true, logger: { level: 'info', stream } })
    t.after(() => fastify.close())

    fastify.get('/500', (req, reply) => {
      reply.code(500).send(Error('500 error'))
    })

    await fastify.ready()

    await fastify.inject({ method: 'GET', url: '/500' })

    // no more readable data
    t.assert.strictEqual(stream.readableLength, 0)
  })

  await t.test('should not log incoming request, outgoing response  and route not found for 404 onBadUrl when disabled', async (t) => {
    t.plan(1)
    const stream = split(JSON.parse)
    const fastify = Fastify({ disableRequestLogging: true, logger: { level: 'info', stream } })
    t.after(() => fastify.close())

    await fastify.ready()

    await fastify.inject({ method: 'GET', url: '/%c0' })

    // no more readable data
    t.assert.strictEqual(stream.readableLength, 0)
  })

  await t.test('should log incoming request and outgoing response based on disableRequestLogging function', async (t) => {
    const lines = [
      'incoming request',
      'request completed'
    ]
    t.plan(lines.length)

    const stream = split(JSON.parse)
    const loggerInstance = pino(stream)

    const fastify = Fastify({
      disableRequestLogging: (request) => {
        return request.url !== '/not-logged'
      },
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/logged', (req, reply) => {
      return reply.code(200).send({})
    })

    fastify.get('/not-logged', (req, reply) => {
      return reply.code(200).send({})
    })

    await fastify.ready()

    await fastify.inject({ method: 'GET', url: '/not-logged' })
    await fastify.inject({ method: 'GET', url: '/logged' })

    for await (const [line] of on(stream, 'data')) {
      t.assert.strictEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('defaults to info level', async (t) => {
    const lines = [
      { req: { method: 'GET' }, msg: 'incoming request' },
      { res: { statusCode: 200 }, msg: 'request completed' }
    ]
    t.plan(lines.length * 2 + 1)
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream
      }
    })
    t.after(() => fastify.close())

    fastify.get('/', function (req, reply) {
      t.assert.ok(req.log)
      reply.send({ hello: 'world' })
    })

    await fastify.ready()
    await fastify.listen({ port: 0 })

    await request(`http://${localhostForURL}:` + fastify.server.address().port)

    let id
    for await (const [line] of on(stream, 'data')) {
      // we skip the non-request log
      if (typeof line.reqId !== 'string') continue
      if (id === undefined && line.reqId) id = line.reqId
      if (id !== undefined && line.reqId) t.assert.strictEqual(line.reqId, id)
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('test log stream', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/', function (req, reply) {
      t.assert.ok(req.log)
      reply.send({ hello: 'world' })
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { req: { method: 'GET' }, msg: 'incoming request' },
      { res: { statusCode: 200 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 3)

    await request(`http://${localhostForURL}:` + fastify.server.address().port)

    let id
    for await (const [line] of on(stream, 'data')) {
      if (id === undefined && line.reqId) id = line.reqId
      if (id !== undefined && line.reqId) t.assert.strictEqual(line.reqId, id)
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('test error log stream', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/error', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(new Error('kaboom'))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { req: { method: 'GET' }, msg: 'incoming request' },
      { res: { statusCode: 500 }, msg: 'kaboom' },
      { res: { statusCode: 500 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 4)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/error')

    let id
    for await (const [line] of on(stream, 'data')) {
      if (id === undefined && line.reqId) id = line.reqId
      if (id !== undefined && line.reqId) t.assert.strictEqual(line.reqId, id)
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should not log the error if request logging is disabled', async (t) => {
    t.plan(4)

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      },
      disableRequestLogging: true
    })
    t.after(() => fastify.close())

    fastify.get('/error', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(new Error('a generic error'))
    })

    await fastify.ready()
    await fastify.listen({ port: 0, host: localhost })

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/error')

    {
      const [line] = await once(stream, 'data')
      t.assert.ok(typeof line.msg === 'string')
      t.assert.ok(line.msg.startsWith('Server listening at'), 'message is set')
    }

    // no more readable data
    t.assert.strictEqual(stream.readableLength, 0)
  })
})
