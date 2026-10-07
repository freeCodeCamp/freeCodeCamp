'use strict'

const { Readable } = require('node:stream')
const { test } = require('node:test')
const fp = require('fastify-plugin')
const Fastify = require('..')

test('Should accept a custom genReqId function', (t, done) => {
  t.plan(4)

  const fastify = Fastify({
    genReqId: function (req) {
      return 'a'
    }
  })

  t.after(() => fastify.close())
  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    fastify.inject({
      method: 'GET',
      url: `http://localhost:${fastify.server.address().port}`
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(payload.id, 'a')
      done()
    })
  })
})

test('Custom genReqId function gets raw request as argument', (t, done) => {
  t.plan(9)

  const REQUEST_ID = 'REQ-1234'

  const fastify = Fastify({
    genReqId: function (req) {
      t.assert.strictEqual('id' in req, false)
      t.assert.strictEqual('raw' in req, false)
      t.assert.ok(req instanceof Readable)
      // http.IncomingMessage does have `rawHeaders` property, but FastifyRequest does not
      const index = req.rawHeaders.indexOf('x-request-id')
      const xReqId = req.rawHeaders[index + 1]
      t.assert.strictEqual(xReqId, REQUEST_ID)
      t.assert.strictEqual(req.headers['x-request-id'], REQUEST_ID)
      return xReqId
    }
  })
  t.after(() => fastify.close())

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    fastify.inject({
      method: 'GET',
      headers: {
        'x-request-id': REQUEST_ID
      },
      url: `http://localhost:${fastify.server.address().port}`
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(payload.id, REQUEST_ID)
      done()
    })
  })
})

test('Should handle properly requestIdHeader option', t => {
  t.plan(4)

  t.assert.strictEqual(Fastify({ requestIdHeader: '' }).initialConfig.requestIdHeader, false)
  t.assert.strictEqual(Fastify({ requestIdHeader: false }).initialConfig.requestIdHeader, false)
  t.assert.strictEqual(Fastify({ requestIdHeader: true }).initialConfig.requestIdHeader, 'request-id')
  t.assert.strictEqual(Fastify({ requestIdHeader: 'x-request-id' }).initialConfig.requestIdHeader, 'x-request-id')
})

test('Should accept option to set genReqId with setGenReqId option', (t, done) => {
  t.plan(9)

  const fastify = Fastify({
    genReqId: function (req) {
      return 'base'
    }
  })

  t.after(() => fastify.close())

  fastify.register(function (instance, opts, next) {
    instance.setGenReqId(function (req) {
      return 'foo'
    })
    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }, { prefix: 'foo' })

  fastify.register(function (instance, opts, next) {
    instance.setGenReqId(function (req) {
      return 'bar'
    })
    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }, { prefix: 'bar' })

  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  let pending = 3

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'base')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'foo')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/bar'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'bar')
    completed()
  })
})

test('Should encapsulate setGenReqId', (t, done) => {
  t.plan(12)

  const fastify = Fastify({
    genReqId: function (req) {
      return 'base'
    }
  })

  t.after(() => fastify.close())
  const bazInstance = function (instance, opts, next) {
    instance.register(barInstance, { prefix: 'baz' })

    instance.setGenReqId(function (req) {
      return 'baz'
    })
    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }

  const barInstance = function (instance, opts, next) {
    instance.setGenReqId(function (req) {
      return 'bar'
    })
    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }

  const fooInstance = function (instance, opts, next) {
    instance.register(bazInstance, { prefix: 'baz' })
    instance.register(barInstance, { prefix: 'bar' })

    instance.setGenReqId(function (req) {
      return 'foo'
    })

    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }

  fastify.register(fooInstance, { prefix: 'foo' })

  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  let pending = 4

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'base')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'foo')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo/bar'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'bar')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo/baz'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'baz')
    completed()
  })
})

test('Should not alter parent of genReqId', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  t.after(() => fastify.close())
  const fooInstance = function (instance, opts, next) {
    instance.setGenReqId(function (req) {
      return 'foo'
    })

    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }

  fastify.register(fooInstance, { prefix: 'foo' })

  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  let pending = 2

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'req-1')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'foo')
    completed()
  })
})

test('Should have child instance user parent genReqId', (t, done) => {
  t.plan(6)

  const fastify = Fastify({
    genReqId: function (req) {
      return 'foo'
    }
  })
  t.after(() => fastify.close())

  const fooInstance = function (instance, opts, next) {
    instance.get('/', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    next()
  }

  fastify.register(fooInstance, { prefix: 'foo' })

  fastify.get('/', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  let pending = 2

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'foo')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/foo'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'foo')
    completed()
  })
})

test('genReqId set on root scope when using fastify-plugin', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(fp(function (fastify, options, done) {
    fastify.setGenReqId(function (req) {
      return 'not-encapsulated'
    })
    fastify.get('/not-encapsulated-1', (req, reply) => {
      t.assert.ok(req.id)
      reply.send({ id: req.id })
    })
    done()
  }))

  fastify.get('/not-encapsulated-2', (req, reply) => {
    t.assert.ok(req.id)
    reply.send({ id: req.id })
  })

  let pending = 2

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.inject({
    method: 'GET',
    url: '/not-encapsulated-1'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'not-encapsulated')
    completed()
  })

  fastify.inject({
    method: 'GET',
    url: '/not-encapsulated-2'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.strictEqual(payload.id, 'not-encapsulated')
    completed()
  })
})
