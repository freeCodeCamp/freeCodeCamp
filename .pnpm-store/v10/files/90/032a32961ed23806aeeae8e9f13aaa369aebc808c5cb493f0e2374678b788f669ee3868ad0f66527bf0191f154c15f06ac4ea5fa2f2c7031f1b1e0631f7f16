'use strict'

const { test } = require('node:test')
const errors = require('http-errors')
const JSONStream = require('JSONStream')
const Readable = require('node:stream').Readable
const split = require('split2')
const Fastify = require('..')
const { kDisableRequestLogging } = require('../lib/symbols.js')

test('Destroying streams prematurely should call abort method', (t, testDone) => {
  t.plan(7)

  let fastify = null
  const logStream = split(JSON.parse)
  try {
    fastify = Fastify({
      logger: {
        stream: logStream,
        level: 'info'
      }
    })
  } catch (e) {
    t.assert.fail()
  }
  const stream = require('node:stream')
  const http = require('node:http')

  // Test that "premature close" errors are logged with level warn
  logStream.on('data', line => {
    if (line.res) {
      t.assert.strictEqual(line.msg, 'stream closed prematurely')
      t.assert.strictEqual(line.level, 30)
      testDone()
    }
  })

  fastify.get('/', function (request, reply) {
    t.assert.ok('Received request')

    let sent = false
    const reallyLongStream = new stream.Readable({
      read: function () {
        if (!sent) {
          this.push(Buffer.from('hello\n'))
        }
        sent = true
      }
    })
    reallyLongStream.destroy = undefined
    reallyLongStream.close = undefined
    reallyLongStream.abort = () => t.assert.ok('called')
    reply.send(reallyLongStream)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.after(() => { fastify.close() })

    const port = fastify.server.address().port

    http.get(`http://localhost:${port}`, function (response) {
      t.assert.strictEqual(response.statusCode, 200)
      response.on('readable', function () {
        response.destroy()
      })
      // Node bug? Node never emits 'close' here.
      response.on('aborted', function () {
        t.assert.ok('Response closed')
      })
    })
  })
})

test('Destroying streams prematurely, log is disabled', (t, testDone) => {
  t.plan(4)

  let fastify = null
  try {
    fastify = Fastify({
      logger: false
    })
  } catch (e) {
    t.assert.fail()
  }
  const stream = require('node:stream')
  const http = require('node:http')

  fastify.get('/', function (request, reply) {
    reply.log[kDisableRequestLogging] = true

    let sent = false
    const reallyLongStream = new stream.Readable({
      read: function () {
        if (!sent) {
          this.push(Buffer.from('hello\n'))
        }
        sent = true
      }
    })
    reallyLongStream.destroy = true
    reallyLongStream.close = () => {
      t.assert.ok('called')
      testDone()
    }
    reply.send(reallyLongStream)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.after(() => { fastify.close() })

    const port = fastify.server.address().port

    http.get(`http://localhost:${port}`, function (response) {
      t.assert.strictEqual(response.statusCode, 200)
      response.on('readable', function () {
        response.destroy()
      })
      // Node bug? Node never emits 'close' here.
      response.on('aborted', function () {
        t.assert.ok('Response closed')
      })
    })
  })
})

test('should respond with a stream1', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    const stream = JSONStream.stringify()
    reply.code(200).type('application/json').send(stream)
    stream.write({ hello: 'world' })
    stream.end({ a: 42 })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const response = await fetch(fastifyServer)
  t.assert.ok(response.ok)
  t.assert.strictEqual(response.headers.get('content-type'), 'application/json')
  t.assert.strictEqual(response.status, 200)
  const body = await response.text()
  t.assert.deepStrictEqual(JSON.parse(body), [{ hello: 'world' }, { a: 42 }])
})

test('return a 404 if the stream emits a 404 error', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    t.assert.ok('Received request')

    const reallyLongStream = new Readable({
      read: function () {
        setImmediate(() => {
          this.emit('error', new errors.NotFound())
        })
      }
    })

    reply.send(reallyLongStream)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const response = await fetch(fastifyServer)
  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.headers.get('content-type'), 'application/json; charset=utf-8')
  t.assert.strictEqual(response.status, 404)
})
