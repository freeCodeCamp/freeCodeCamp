'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const symbols = require('../lib/symbols.js')
const { FastifyError } = require('@fastify/error')

test('default 500', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      message: 'kaboom',
      statusCode: 500
    })
    done()
  })
})

test('default 500 with non-error string', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    throw 'kaboom' // eslint-disable-line no-throw-literal
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
    t.assert.deepStrictEqual(res.payload, 'kaboom')
    done()
  })
})

test('default 500 with non-error symbol', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    throw Symbol('error')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(res.payload, '')
    done()
  })
})

test('default 500 with non-error false', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    throw false // eslint-disable-line no-throw-literal
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(res.payload, 'false')
    done()
  })
})

test('default 500 with non-error null', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    throw null // eslint-disable-line no-throw-literal
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(res.payload, 'null')
    done()
  })
})

test('custom 500', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.setErrorHandler(function (err, request, reply) {
    t.assert.ok(typeof request === 'object')
    t.assert.ok(request instanceof fastify[symbols.kRequest].parent)
    reply
      .code(500)
      .type('text/plain')
      .send('an error happened: ' + err.message)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain')
    t.assert.deepStrictEqual(res.payload.toString(), 'an error happened: kaboom')
    done()
  })
})

test('encapsulated 500', async t => {
  t.plan(8)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.register(function (f, opts, done) {
    f.get('/', function (req, reply) {
      reply.send(new Error('kaboom'))
    })

    f.setErrorHandler(function (err, request, reply) {
      t.assert.ok(typeof request === 'object')
      t.assert.ok(request instanceof fastify[symbols.kRequest].parent)
      reply
        .code(500)
        .type('text/plain')
        .send('an error happened: ' + err.message)
    })

    done()
  }, { prefix: 'test' })

  {
    const response = await fastify.inject({
      method: 'GET',
      url: '/test'
    })

    t.assert.strictEqual(response.statusCode, 500)
    t.assert.strictEqual(response.headers['content-type'], 'text/plain')
    t.assert.deepStrictEqual(response.payload.toString(), 'an error happened: kaboom')
  }

  {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    })

    t.assert.strictEqual(response.statusCode, 500)
    t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(JSON.parse(response.payload), {
      error: 'Internal Server Error',
      message: 'kaboom',
      statusCode: 500
    })
  }
})

test('custom 500 with hooks', (t, done) => {
  t.plan(7)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.setErrorHandler(function (err, request, reply) {
    reply
      .code(500)
      .type('text/plain')
      .send('an error happened: ' + err.message)
  })

  fastify.addHook('onSend', (req, res, payload, done) => {
    t.assert.ok('called', 'onSend')
    done()
  })
  fastify.addHook('onRequest', (req, res, done) => {
    t.assert.ok('called', 'onRequest')
    done()
  })
  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called', 'onResponse')
    done()
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain')
    t.assert.deepStrictEqual(res.payload.toString(), 'an error happened: kaboom')
    done()
  })
})

test('cannot set errorHandler after binding', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    try {
      fastify.setErrorHandler(() => { })
      t.assert.fail()
    } catch (e) {
      t.assert.ok(true)
    } finally {
      done()
    }
  })
})

test('cannot set childLoggerFactory after binding', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    try {
      fastify.setChildLoggerFactory(() => { })
      t.assert.fail()
    } catch (e) {
      t.assert.ok(true)
    } finally {
      done()
    }
  })
})

test('catch synchronous errors', (t, done) => {
  t.plan(3)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.setErrorHandler((_, req, reply) => {
    throw new Error('kaboom2')
  })

  fastify.post('/', function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({ hello: 'world' }).substring(0, 5)
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(res.json(), {
      error: 'Internal Server Error',
      message: 'kaboom2',
      statusCode: 500
    })
    done()
  })
})

test('custom 500 with non-error and custom errorHandler', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/', function (req, reply) {
    throw 'kaboom' // eslint-disable-line no-throw-literal
  })

  fastify.setErrorHandler(function (err, request, reply) {
    t.assert.ok(typeof request === 'object')
    t.assert.ok(request instanceof fastify[symbols.kRequest].parent)
    reply
      .code(500)
      .type('text/plain')
      .send('an error happened: ' + err.message)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain')
    t.assert.deepStrictEqual(res.payload, 'an error happened: undefined')
    done()
  })
})

test('custom 500 with FastifyError detection', (t, done) => {
  t.plan(18)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.get('/string', function (req, reply) {
    throw 'kaboom' // eslint-disable-line no-throw-literal
  })

  fastify.get('/native-error', function (req, reply) {
    throw new Error('kaboom')
  })

  fastify.get('/fastify-error', function (req, reply) {
    throw new FastifyError('kaboom')
  })

  fastify.setErrorHandler(function (err, request, reply) {
    t.assert.ok(typeof request === 'object')
    t.assert.ok(request instanceof fastify[symbols.kRequest].parent)
    if (err instanceof FastifyError) {
      reply
        .code(500)
        .type('text/plain')
        .send('FastifyError thrown')
    } else if (err instanceof Error) {
      reply
        .code(500)
        .type('text/plain')
        .send('Error thrown')
    } else {
      reply
        .code(500)
        .type('text/plain')
        .send('Primitive thrown')
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/string'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain')
    t.assert.deepStrictEqual(res.payload, 'Primitive thrown')

    fastify.inject({
      method: 'GET',
      url: '/native-error'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 500)
      t.assert.strictEqual(res.headers['content-type'], 'text/plain')
      t.assert.deepStrictEqual(res.payload, 'Error thrown')

      fastify.inject({
        method: 'GET',
        url: '/fastify-error'
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.strictEqual(res.statusCode, 500)
        t.assert.strictEqual(res.headers['content-type'], 'text/plain')
        t.assert.deepStrictEqual(res.payload, 'FastifyError thrown')
        done()
      })
    })
  })
})
