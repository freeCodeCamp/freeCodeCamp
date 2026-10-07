'use strict'

const { test } = require('node:test')
const proxyquire = require('proxyquire')
const fs = require('node:fs')
const Readable = require('node:stream').Readable
const Fastify = require('..')

test('should destroy stream when response is ended', async (t) => {
  t.plan(3)
  const stream = require('node:stream')
  const fastify = Fastify()

  fastify.get('/error', function (req, reply) {
    const reallyLongStream = new stream.Readable({
      read: function () { },
      destroy: function (err, callback) {
        t.assert.ok('called')
        callback(err)
      }
    })
    reply.code(200).send(reallyLongStream)
    reply.raw.end(Buffer.from('hello\n'))
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const response = await fetch(`${fastifyServer}/error`)
  t.assert.ok(response.ok)
  t.assert.strictEqual(response.status, 200)
})

test('should mark reply as sent before pumping the payload stream into response for async route handler', async (t) => {
  t.plan(2)
  t.after(() => fastify.close())

  const handleRequest = proxyquire('../lib/handle-request', {
    './wrap-thenable': (thenable, reply) => {
      thenable.then(function (payload) {
        t.assert.strictEqual(reply.sent, true)
      })
    }
  })

  const route = proxyquire('../lib/route', {
    './handle-request': handleRequest
  })

  const Fastify = proxyquire('..', {
    './lib/route': route
  })

  const fastify = Fastify()

  fastify.get('/', async function (req, reply) {
    const stream = fs.createReadStream(__filename, 'utf8')
    return reply.code(200).send(stream)
  })

  const res = await fastify.inject({
    url: '/',
    method: 'GET'
  })
  t.assert.strictEqual(res.payload, fs.readFileSync(__filename, 'utf8'))
})

test('reply.send handles aborted requests', (t, done) => {
  t.plan(2)

  const spyLogger = {
    level: 'error',
    fatal: () => { },
    error: () => {
      t.assert.fail('should not log an error')
    },
    warn: () => { },
    info: () => { },
    debug: () => { },
    trace: () => { },
    child: () => { return spyLogger }
  }
  const fastify = Fastify({
    loggerInstance: spyLogger
  })

  fastify.get('/', (req, reply) => {
    setTimeout(() => {
      const stream = new Readable({
        read: function () {
          this.push(null)
        }
      })
      reply.send(stream)
    }, 6)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.after(() => fastify.close())

    const port = fastify.server.address().port
    const http = require('node:http')
    const req = http.get(`http://localhost:${port}`)
      .on('error', (err) => {
        t.assert.strictEqual(err.code, 'ECONNRESET')
        done()
      })

    setTimeout(() => {
      req.destroy()
    }, 1)
  })
})

test('request terminated should not crash fastify', (t, done) => {
  t.plan(10)

  const spyLogger = {
    level: 'error',
    fatal: () => { },
    error: () => {
      t.assert.fail('should not log an error')
    },
    warn: () => { },
    info: () => { },
    debug: () => { },
    trace: () => { },
    child: () => { return spyLogger }
  }
  const fastify = Fastify({
    loggerInstance: spyLogger
  })

  fastify.get('/', async (req, reply) => {
    const stream = new Readable()
    stream._read = () => { }
    reply.header('content-type', 'text/html; charset=utf-8')
    reply.header('transfer-encoding', 'chunked')
    stream.push('<h1>HTML</h1>')

    reply.send(stream)

    await new Promise((resolve) => { setTimeout(resolve, 100).unref() })

    stream.push('<h1>should display on second stream</h1>')
    stream.push(null)
    return reply
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.after(() => fastify.close())

    const port = fastify.server.address().port
    const http = require('node:http')
    const req = http.get(`http://localhost:${port}`, function (res) {
      const { statusCode, headers } = res
      t.assert.strictEqual(statusCode, 200)
      t.assert.strictEqual(headers['content-type'], 'text/html; charset=utf-8')
      t.assert.strictEqual(headers['transfer-encoding'], 'chunked')
      res.on('data', function (chunk) {
        t.assert.strictEqual(chunk.toString(), '<h1>HTML</h1>')
      })

      setTimeout(() => {
        req.destroy()

        // the server is not crash, we can connect it
        http.get(`http://localhost:${port}`, function (res) {
          const { statusCode, headers } = res
          t.assert.strictEqual(statusCode, 200)
          t.assert.strictEqual(headers['content-type'], 'text/html; charset=utf-8')
          t.assert.strictEqual(headers['transfer-encoding'], 'chunked')
          let payload = ''
          res.on('data', function (chunk) {
            payload += chunk.toString()
          })
          res.on('end', function () {
            t.assert.strictEqual(payload, '<h1>HTML</h1><h1>should display on second stream</h1>')
            t.assert.ok('should end properly')
            done()
          })
        })
      }, 1)
    })
  })
})
