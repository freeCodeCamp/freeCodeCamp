'use strict'

const { test, before } = require('node:test')
const helper = require('./helper')
const Fastify = require('..')
const http = require('node:http')
const split = require('split2')
const append = require('vary').append

process.removeAllListeners('warning')

let localhost
before(async function () {
  [localhost] = await helper.getLoopbackHost()
})

test('Should register a versioned route (inject)', (t, done) => {
  t.plan(11)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.0'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.1'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Should register a versioned route via route constraints', (t, done) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Should register the same route with different versions', (t, done) => {
  t.plan(8)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send('1.2.0')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.3.0' },
    handler: (req, reply) => {
      reply.send('1.3.0')
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, '1.3.0')
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, '1.2.0')
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '2.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('The versioned route should take precedence', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ winter: 'is coming' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Versioned route but not version header should return a 404', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Should register a versioned route (server)', async t => {
  t.plan(5)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result1 = await fetch(fastifyServer, {
    headers: {
      'Accept-Version': '1.x'
    }
  })
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.json()
  t.assert.deepStrictEqual(body1, { hello: 'world' })

  const result2 = await fetch(fastifyServer, {
    headers: {
      'Accept-Version': '2.x'
    }
  })

  t.assert.ok(!result2.ok)
  t.assert.strictEqual(result2.status, 404)
})

test('Shorthand route declaration', (t, done) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.get('/', { constraints: { version: '1.2.0' } }, (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.2.1'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('The not found handler should not erase the Accept-Version header', (t, done) => {
  t.plan(13)
  const fastify = Fastify()

  fastify.addHook('onRequest', function (req, reply, done) {
    t.assert.deepStrictEqual(req.headers['accept-version'], '2.x')
    done()
  })

  fastify.addHook('preValidation', function (req, reply, done) {
    t.assert.deepStrictEqual(req.headers['accept-version'], '2.x')
    done()
  })

  fastify.addHook('preHandler', function (req, reply, done) {
    t.assert.deepStrictEqual(req.headers['accept-version'], '2.x')
    done()
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.setNotFoundHandler(function (req, reply) {
    t.assert.deepStrictEqual(req.headers['accept-version'], '2.x')
    // we check if the symbol is exposed on key or not
    for (const key in req.headers) {
      t.assert.deepStrictEqual(typeof key, 'string')
    }

    for (const key of Object.keys(req.headers)) {
      t.assert.deepStrictEqual(typeof key, 'string')
    }

    reply.code(404).send('not found handler')
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '2.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'not found handler')
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Bad accept version (inject)', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': 'a.b.c'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': 12
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Bad accept version (server)', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result1 = await fetch(fastifyServer, {
    headers: {
      'Accept-Version': 'a.b.c'
    }
  })
  t.assert.ok(!result1.ok)
  t.assert.strictEqual(result1.status, 404)

  const result2 = await fetch(fastifyServer, {
    headers: {
      'Accept-Version': '12'
    }
  })
  t.assert.ok(!result2.ok)
  t.assert.strictEqual(result2.status, 404)
})

test('test log stream', (t, done) => {
  t.plan(3)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    logger: {
      stream,
      level: 'info'
    }
  })

  fastify.get('/', { constraints: { version: '1.2.0' } }, function (req, reply) {
    reply.send(new Error('kaboom'))
  })

  fastify.listen({ port: 0, host: localhost }, err => {
    t.assert.ifError(err)
    t.after(() => { fastify.close() })

    http.get({
      host: fastify.server.address().hostname,
      port: fastify.server.address().port,
      path: '/',
      method: 'GET',
      headers: {
        'Accept-Version': '1.x'
      }
    })

    stream.once('data', listenAtLogLine => {
      stream.once('data', line => {
        t.assert.strictEqual(line.req.version, '1.x')
        stream.once('data', line => {
          t.assert.strictEqual(line.req.version, '1.x')
          done()
        })
      })
    })
  })
})

test('Should register a versioned route with custom versioning strategy', (t, done) => {
  t.plan(8)

  const customVersioning = {
    name: 'version',
    storage: function () {
      const versions = {}
      return {
        get: (version) => { return versions[version] || null },
        set: (version, store) => { versions[version] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers.accept
    },
    mustMatchWhenDerived: true,
    validate: () => true
  }

  const fastify = Fastify({
    constraints: {
      version: customVersioning
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: 'application/vnd.example.api+json;version=2' },
    handler: (req, reply) => {
      reply.send({ hello: 'from route v2' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: 'application/vnd.example.api+json;version=3' },
    handler: (req, reply) => {
      reply.send({ hello: 'from route v3' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      Accept: 'application/vnd.example.api+json;version=2'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from route v2' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      Accept: 'application/vnd.example.api+json;version=3'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from route v3' })
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      Accept: 'application/vnd.example.api+json;version=4'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Vary header check (for documentation example)', (t, done) => {
  t.plan(8)
  const fastify = Fastify()
  fastify.addHook('onSend', async (req, reply) => {
    if (req.headers['accept-version']) { // or the custom header you are using
      let value = reply.getHeader('Vary') || ''
      const header = Array.isArray(value) ? value.join(', ') : String(value)
      if ((value = append(header, 'Accept-Version'))) { // or the custom header you are using
        reply.header('Vary', value)
      }
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.2.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: {
      'Accept-Version': '1.x'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.vary, 'Accept-Version')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers.vary, undefined)
    done()
  })
})
