'use strict'

const stream = require('node:stream')

const t = require('node:test')
const split = require('split2')

const Fastify = require('../../fastify')
const helper = require('../helper')
const { on } = stream
const { request } = require('./logger-test-utils')
const { partialDeepStrictEqual } = require('../toolkit')

t.test('request', { timeout: 60000 }, async (t) => {
  let localhost

  t.plan(7)
  t.before(async function () {
    [localhost] = await helper.getLoopbackHost()
  })

  await t.test('The request id header key can be customized', async (t) => {
    const lines = ['incoming request', 'some log message', 'request completed']
    t.plan(lines.length * 2 + 2)
    const REQUEST_ID = '42'

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: { stream, level: 'info' },
      requestIdHeader: 'my-custom-request-id'
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      t.assert.strictEqual(req.id, REQUEST_ID)
      req.log.info('some log message')
      reply.send({ id: req.id })
    })

    const response = await fastify.inject({ method: 'GET', url: '/', headers: { 'my-custom-request-id': REQUEST_ID } })
    const body = await response.json()
    t.assert.strictEqual(body.id, REQUEST_ID)

    for await (const [line] of on(stream, 'data')) {
      t.assert.strictEqual(line.reqId, REQUEST_ID)
      t.assert.strictEqual(line.msg, lines.shift(), 'message is set')
      if (lines.length === 0) break
    }
  })

  await t.test('The request id header key can be ignored', async (t) => {
    const lines = ['incoming request', 'some log message', 'request completed']
    t.plan(lines.length * 2 + 2)
    const REQUEST_ID = 'ignore-me'

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: { stream, level: 'info' },
      requestIdHeader: false
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      t.assert.strictEqual(req.id, 'req-1')
      req.log.info('some log message')
      reply.send({ id: req.id })
    })
    const response = await fastify.inject({ method: 'GET', url: '/', headers: { 'request-id': REQUEST_ID } })
    const body = await response.json()
    t.assert.strictEqual(body.id, 'req-1')

    for await (const [line] of on(stream, 'data')) {
      t.assert.strictEqual(line.reqId, 'req-1')
      t.assert.strictEqual(line.msg, lines.shift(), 'message is set')
      if (lines.length === 0) break
    }
  })

  await t.test('The request id header key can be customized along with a custom id generator', async (t) => {
    const REQUEST_ID = '42'
    const matches = [
      { reqId: REQUEST_ID, msg: 'incoming request' },
      { reqId: REQUEST_ID, msg: 'some log message' },
      { reqId: REQUEST_ID, msg: 'request completed' },
      { reqId: 'foo', msg: 'incoming request' },
      { reqId: 'foo', msg: 'some log message 2' },
      { reqId: 'foo', msg: 'request completed' }
    ]
    t.plan(matches.length + 4)

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: { stream, level: 'info' },
      requestIdHeader: 'my-custom-request-id',
      genReqId (req) {
        return 'foo'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/one', (req, reply) => {
      t.assert.strictEqual(req.id, REQUEST_ID)
      req.log.info('some log message')
      reply.send({ id: req.id })
    })

    fastify.get('/two', (req, reply) => {
      t.assert.strictEqual(req.id, 'foo')
      req.log.info('some log message 2')
      reply.send({ id: req.id })
    })

    {
      const response = await fastify.inject({ method: 'GET', url: '/one', headers: { 'my-custom-request-id': REQUEST_ID } })
      const body = await response.json()
      t.assert.strictEqual(body.id, REQUEST_ID)
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/two' })
      const body = await response.json()
      t.assert.strictEqual(body.id, 'foo')
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, matches.shift()))
      if (matches.length === 0) break
    }
  })

  await t.test('The request id header key can be ignored along with a custom id generator', async (t) => {
    const REQUEST_ID = 'ignore-me'
    const matches = [
      { reqId: 'foo', msg: 'incoming request' },
      { reqId: 'foo', msg: 'some log message' },
      { reqId: 'foo', msg: 'request completed' },
      { reqId: 'foo', msg: 'incoming request' },
      { reqId: 'foo', msg: 'some log message 2' },
      { reqId: 'foo', msg: 'request completed' }
    ]
    t.plan(matches.length + 4)

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: { stream, level: 'info' },
      requestIdHeader: false,
      genReqId (req) {
        return 'foo'
      }
    })
    t.after(() => fastify.close())

    fastify.get('/one', (req, reply) => {
      t.assert.strictEqual(req.id, 'foo')
      req.log.info('some log message')
      reply.send({ id: req.id })
    })

    fastify.get('/two', (req, reply) => {
      t.assert.strictEqual(req.id, 'foo')
      req.log.info('some log message 2')
      reply.send({ id: req.id })
    })

    {
      const response = await fastify.inject({ method: 'GET', url: '/one', headers: { 'request-id': REQUEST_ID } })
      const body = await response.json()
      t.assert.strictEqual(body.id, 'foo')
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/two' })
      const body = await response.json()
      t.assert.strictEqual(body.id, 'foo')
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, matches.shift()))
      if (matches.length === 0) break
    }
  })

  await t.test('The request id log label can be changed', async (t) => {
    const REQUEST_ID = '42'
    const matches = [
      { traceId: REQUEST_ID, msg: 'incoming request' },
      { traceId: REQUEST_ID, msg: 'some log message' },
      { traceId: REQUEST_ID, msg: 'request completed' }
    ]
    t.plan(matches.length + 2)

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: { stream, level: 'info' },
      requestIdHeader: 'my-custom-request-id',
      requestIdLogLabel: 'traceId'
    })
    t.after(() => fastify.close())

    fastify.get('/one', (req, reply) => {
      t.assert.strictEqual(req.id, REQUEST_ID)
      req.log.info('some log message')
      reply.send({ id: req.id })
    })

    {
      const response = await fastify.inject({ method: 'GET', url: '/one', headers: { 'my-custom-request-id': REQUEST_ID } })
      const body = await response.json()
      t.assert.strictEqual(body.id, REQUEST_ID)
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, matches.shift()))
      if (matches.length === 0) break
    }
  })

  await t.test('should redact the authorization header if so specified', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        redact: ['req.headers.authorization'],
        level: 'info',
        serializers: {
          req (req) {
            return {
              method: req.method,
              url: req.url,
              headers: req.headers,
              hostname: req.hostname,
              remoteAddress: req.ip,
              remotePort: req.socket.remotePort
            }
          }
        }
      }
    })
    t.after(() => fastify.close())

    fastify.get('/', function (req, reply) {
      t.assert.deepStrictEqual(req.headers.authorization, 'Bearer abcde')
      reply.send({ hello: 'world' })
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })

    const lines = [
      { msg: `Server listening at ${server}` },
      { req: { headers: { authorization: '[Redacted]' } }, msg: 'incoming request' },
      { res: { statusCode: 200 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 3)

    await request({
      method: 'GET',
      path: '/',
      host: localhost,
      port: fastify.server.address().port,
      headers: {
        authorization: 'Bearer abcde'
      }
    }, function (response, body) {
      t.assert.strictEqual(response.statusCode, 200)
      t.assert.deepStrictEqual(body, JSON.stringify({ hello: 'world' }))
    })

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should not throw error when serializing custom req', (t) => {
    t.plan(1)

    const lines = []
    const dest = new stream.Writable({
      write: function (chunk, enc, cb) {
        lines.push(JSON.parse(chunk))
        cb()
      }
    })
    const fastify = Fastify({ logger: { level: 'info', stream: dest } })
    t.after(() => fastify.close())

    fastify.log.info({ req: {} })

    t.assert.deepStrictEqual(lines[0].req, {})
  })
})
