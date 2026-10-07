'use strict'

const { test, describe } = require('node:test')
const Fastify = require('..')
const { Readable } = require('node:stream')
const { createHash } = require('node:crypto')
const { sleep } = require('./helper')

test('send trailers when payload is empty string', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      done(null, 'custom-etag')
    })
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('send trailers when payload is empty buffer', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      done(null, 'custom-etag')
    })
    reply.send(Buffer.alloc(0))
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('send trailers when payload is undefined', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      done(null, 'custom-etag')
    })
    reply.send(undefined)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('send trailers when payload is json', (t, testDone) => {
  t.plan(7)

  const fastify = Fastify()
  const data = JSON.stringify({ hello: 'world' })
  const hash = createHash('md5')
  hash.update(data)
  const md5 = hash.digest('hex')

  fastify.get('/', function (request, reply) {
    reply.trailer('Content-MD5', function (reply, payload, done) {
      t.assert.strictEqual(data, payload)
      const hash = createHash('md5')
      hash.update(payload)
      done(null, hash.digest('hex'))
    })
    reply.send(data)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    t.assert.strictEqual(res.headers.trailer, 'content-md5')
    t.assert.strictEqual(res.trailers['content-md5'], md5)
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('send trailers when payload is stream', (t, testDone) => {
  t.plan(7)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      t.assert.deepStrictEqual(payload, null)
      done(null, 'custom-etag')
    })
    const stream = Readable.from([JSON.stringify({ hello: 'world' })])
    reply.send(stream)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('send trailers when using async-await', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', async function (reply, payload) {
      return 'custom-etag'
    })
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('error in trailers should be ignored', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      done('error')
    })
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.ok(!res.trailers['etag'])
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

describe('trailer handler counter', () => {
  const data = JSON.stringify({ hello: 'world' })
  const hash = createHash('md5')
  hash.update(data)
  const md5 = hash.digest('hex')

  test('callback with timeout', (t, testDone) => {
    t.plan(9)
    const fastify = Fastify()

    fastify.get('/', function (request, reply) {
      reply.trailer('Return-Early', function (reply, payload, done) {
        t.assert.strictEqual(data, payload)
        done(null, 'return')
      })
      reply.trailer('Content-MD5', function (reply, payload, done) {
        t.assert.strictEqual(data, payload)
        const hash = createHash('md5')
        hash.update(payload)
        setTimeout(() => {
          done(null, hash.digest('hex'))
        }, 500)
      })
      reply.send(data)
    })

    fastify.inject({
      method: 'GET',
      url: '/'
    }, (error, res) => {
      t.assert.ifError(error)
      t.assert.strictEqual(res.statusCode, 200)
      t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
      t.assert.strictEqual(res.headers.trailer, 'return-early content-md5')
      t.assert.strictEqual(res.trailers['return-early'], 'return')
      t.assert.strictEqual(res.trailers['content-md5'], md5)
      t.assert.ok(!res.headers['content-length'])
      testDone()
    })
  })

  test('async-await', (t, testDone) => {
    t.plan(9)
    const fastify = Fastify()

    fastify.get('/', function (request, reply) {
      reply.trailer('Return-Early', async function (reply, payload) {
        t.assert.strictEqual(data, payload)
        return 'return'
      })
      reply.trailer('Content-MD5', async function (reply, payload) {
        t.assert.strictEqual(data, payload)
        const hash = createHash('md5')
        hash.update(payload)
        await sleep(500)
        return hash.digest('hex')
      })
      reply.send(data)
    })

    fastify.inject({
      method: 'GET',
      url: '/'
    }, (error, res) => {
      t.assert.ifError(error)
      t.assert.strictEqual(res.statusCode, 200)
      t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
      t.assert.strictEqual(res.headers.trailer, 'return-early content-md5')
      t.assert.strictEqual(res.trailers['return-early'], 'return')
      t.assert.strictEqual(res.trailers['content-md5'], md5)
      t.assert.ok(!res.headers['content-length'])
      testDone()
    })
  })
})

test('removeTrailer', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.removeTrailer('ETag') // remove nothing
    reply.trailer('ETag', function (reply, payload, done) {
      done(null, 'custom-etag')
    })
    reply.trailer('Should-Not-Call', function (reply, payload, done) {
      t.assert.fail('it should not called as this trailer is removed')
      done(null, 'should-not-call')
    })
    reply.removeTrailer('Should-Not-Call')
    reply.send(undefined)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.trailers['should-not-call'])
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('remove all trailers', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.trailer('ETag', function (reply, payload, done) {
      t.assert.fail('it should not called as this trailer is removed')
      done(null, 'custom-etag')
    })
    reply.removeTrailer('ETag')
    reply.trailer('Should-Not-Call', function (reply, payload, done) {
      t.assert.fail('it should not called as this trailer is removed')
      done(null, 'should-not-call')
    })
    reply.removeTrailer('Should-Not-Call')
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.ok(!res.headers.trailer)
    t.assert.ok(!res.trailers.etag)
    t.assert.ok(!res.trailers['should-not-call'])
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('hasTrailer', (t, testDone) => {
  t.plan(10)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    t.assert.strictEqual(reply.hasTrailer('ETag'), false)
    reply.trailer('ETag', function (reply, payload, done) {
      done(null, 'custom-etag')
    })
    t.assert.strictEqual(reply.hasTrailer('ETag'), true)
    reply.trailer('Should-Not-Call', function (reply, payload, done) {
      t.assert.fail('it should not called as this trailer is removed')
      done(null, 'should-not-call')
    })
    t.assert.strictEqual(reply.hasTrailer('Should-Not-Call'), true)
    reply.removeTrailer('Should-Not-Call')
    t.assert.strictEqual(reply.hasTrailer('Should-Not-Call'), false)
    reply.send(undefined)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.trailer, 'etag')
    t.assert.strictEqual(res.trailers.etag, 'custom-etag')
    t.assert.ok(!res.trailers['should-not-call'])
    t.assert.ok(!res.headers['content-length'])
    testDone()
  })
})

test('throw error when trailer header name is not allowed', (t, testDone) => {
  const INVALID_TRAILERS = [
    'transfer-encoding',
    'content-length',
    'host',
    'cache-control',
    'max-forwards',
    'te',
    'authorization',
    'set-cookie',
    'content-encoding',
    'content-type',
    'content-range',
    'trailer'
  ]
  t.plan(INVALID_TRAILERS.length + 2)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    for (const key of INVALID_TRAILERS) {
      try {
        reply.trailer(key, () => { })
      } catch (err) {
        t.assert.strictEqual(err.message, `Called reply.trailer with an invalid header name: ${key}`)
      }
    }
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('throw error when trailer header value is not function', (t, testDone) => {
  const INVALID_TRAILERS_VALUE = [
    undefined,
    null,
    true,
    false,
    'invalid',
    [],
    new Date(),
    {}
  ]
  t.plan(INVALID_TRAILERS_VALUE.length + 2)

  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    for (const value of INVALID_TRAILERS_VALUE) {
      try {
        reply.trailer('invalid', value)
      } catch (err) {
        t.assert.strictEqual(err.message, `Called reply.trailer('invalid', fn) with an invalid type: ${typeof value}. Expected a function.`)
      }
    }
    reply.send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})
