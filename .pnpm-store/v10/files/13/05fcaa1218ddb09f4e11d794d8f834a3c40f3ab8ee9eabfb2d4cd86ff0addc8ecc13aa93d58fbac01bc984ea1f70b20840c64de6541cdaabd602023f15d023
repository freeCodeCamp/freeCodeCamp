'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const loggerUtils = require('../../lib/logger-factory')
const { serializers } = require('../../lib/logger-pino')

test('time resolution', t => {
  t.plan(2)
  t.assert.strictEqual(typeof loggerUtils.now, 'function')
  t.assert.strictEqual(typeof loggerUtils.now(), 'number')
})

test('The logger should add a unique id for every request', (t, done) => {
  const ids = []

  const fastify = Fastify()
  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    const queue = new Queue()
    for (let i = 0; i < 10; i++) {
      queue.add(checkId)
    }
    queue.add(() => {
      fastify.close()
      done()
    })
  })

  function checkId (done) {
    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.ok(ids.indexOf(payload.id) === -1, 'the id should not be duplicated')
      ids.push(payload.id)
      done()
    })
  }
})

test('The logger should not reuse request id header for req.id', (t, done) => {
  const fastify = Fastify()
  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port,
      headers: {
        'Request-Id': 'request-id-1'
      }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.ok(payload.id !== 'request-id-1', 'the request id from the header should not be returned with default configuration')
      t.assert.ok(payload.id === 'req-1') // first request id when using the default configuration
      fastify.close()
      done()
    })
  })
})

test('The logger should reuse request id header for req.id if requestIdHeader is set', (t, done) => {
  const fastify = Fastify({
    requestIdHeader: 'request-id'
  })
  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port,
      headers: {
        'Request-Id': 'request-id-1'
      }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.ok(payload.id === 'request-id-1', 'the request id from the header should be returned')
      fastify.close()
      done()
    })
  })
})

function Queue () {
  this.q = []
  this.running = false
}

Queue.prototype.add = function add (job) {
  this.q.push(job)
  if (!this.running) this.run()
}

Queue.prototype.run = function run () {
  this.running = true
  const job = this.q.shift()
  job(() => {
    if (this.q.length) {
      this.run()
    } else {
      this.running = false
    }
  })
}

test('The logger should error if both stream and file destination are given', t => {
  t.plan(2)

  const stream = require('node:stream').Writable

  try {
    Fastify({
      logger: {
        level: 'info',
        stream,
        file: '/test'
      }
    })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_LOG_INVALID_DESTINATION')
    t.assert.strictEqual(err.message, 'Cannot specify both logger.stream and logger.file options')
  }
})

test('The serializer prevent fails if the request socket is undefined', t => {
  t.plan(1)

  const serialized = serializers.req({
    method: 'GET',
    url: '/',
    socket: undefined,
    headers: {}
  })

  t.assert.deepStrictEqual(serialized, {
    method: 'GET',
    url: '/',
    version: undefined,
    host: undefined,
    remoteAddress: undefined,
    remotePort: undefined
  })
})
