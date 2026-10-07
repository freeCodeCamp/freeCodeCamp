'use strict'

const { test } = require('node:test')
const split = require('split2')
const Fastify = require('..')

test('Destroying streams prematurely', (t, testDone) => {
  t.plan(6)

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

    reply.send(reallyLongStream)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.after(() => fastify.close())

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

test('Destroying streams prematurely should call close method', (t, testDone) => {
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

test('Destroying streams prematurely should call close method when destroy is not a function', (t, testDone) => {
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
