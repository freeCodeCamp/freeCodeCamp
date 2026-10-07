'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')

test('Should register a host constrained route', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.dev'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.test'
      }
    })

    t.assert.strictEqual(res.statusCode, 404)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Should register the same route with host constraints', async t => {
  t.plan(5)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.send('fastify.dev')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.test' },
    handler: (req, reply) => {
      reply.send('fastify.test')
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.dev'
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'fastify.dev')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.test'
      }
    })

    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'fastify.test')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fancy.ca'
      }
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Should allow registering custom constrained routes', async t => {
  t.plan(5)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify({ constraints: { secret: constraint } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'alpha'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from alpha' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'beta'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from beta' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'gamma'
      }
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Should allow registering custom constrained routes outside constructor', async t => {
  t.plan(5)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()
  fastify.addConstraintStrategy(constraint)

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'alpha'
      }
    })

    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from alpha' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'beta'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from beta' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'gamma'
      }
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Custom constrained routes registered also for HEAD method generated by fastify', (t, done) => {
  t.plan(3)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify({ constraints: { secret: constraint } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'mySecret' },
    handler: (req, reply) => {
      reply.send('from mySecret - my length is 31')
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/',
    headers: {
      'X-Secret': 'mySecret'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.headers['content-length'], '31')
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Custom constrained routes registered with addConstraintStrategy apply also for HEAD method generated by fastify', (t, done) => {
  t.plan(3)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()
  fastify.addConstraintStrategy(constraint)

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'mySecret' },
    handler: (req, reply) => {
      reply.send('from mySecret - my length is 31')
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/',
    headers: {
      'X-Secret': 'mySecret'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.headers['content-length'], '31')
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Add a constraint strategy after fastify instance was started', (t, done) => {
  t.plan(4)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => { reply.send('ok') }
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'ok')
    t.assert.strictEqual(res.statusCode, 200)

    t.assert.throws(
      () => fastify.addConstraintStrategy(constraint)
    )
    done()
  })
})

test('Add a constraint strategy should throw an error if there already exist custom strategy with the same name', t => {
  t.plan(1)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()

  fastify.addConstraintStrategy(constraint)
  t.assert.throws(
    () => fastify.addConstraintStrategy(constraint),
    /^Error: There already exists a custom constraint with the name secret.$/
  )
})

test('Add a constraint strategy shouldn\'t throw an error if default constraint with the same name isn\'t used', t => {
  t.plan(1)

  const constraint = {
    name: 'version',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()
  fastify.addConstraintStrategy(constraint)

  t.assert.ok(true)
})

test('Add a constraint strategy should throw an error if default constraint with the same name is used', t => {
  t.plan(1)

  const constraint = {
    name: 'version',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.0.0' },
    handler: (req, reply) => {
      reply.send('ok')
    }
  })

  t.assert.throws(
    () => fastify.addConstraintStrategy(constraint),
    /^Error: There already exists a route with version constraint.$/
  )
})

test('The hasConstraintStrategy should return false for default constraints until they are used', t => {
  t.plan(6)

  const fastify = Fastify()

  t.assert.strictEqual(fastify.hasConstraintStrategy('version'), false)
  t.assert.strictEqual(fastify.hasConstraintStrategy('host'), false)

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.send({ hello: 'from any other domain' })
    }
  })

  t.assert.strictEqual(fastify.hasConstraintStrategy('version'), false)
  t.assert.strictEqual(fastify.hasConstraintStrategy('host'), true)

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { version: '1.0.0' },
    handler: (req, reply) => {
      reply.send({ hello: 'from any other domain' })
    }
  })

  t.assert.strictEqual(fastify.hasConstraintStrategy('version'), true)
  t.assert.strictEqual(fastify.hasConstraintStrategy('host'), true)
})

test('The hasConstraintStrategy should return true if there already exist a custom constraint with the same name', t => {
  t.plan(2)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify()

  t.assert.strictEqual(fastify.hasConstraintStrategy('secret'), false)
  fastify.addConstraintStrategy(constraint)
  t.assert.strictEqual(fastify.hasConstraintStrategy('secret'), true)
})

test('Should allow registering an unconstrained route after a constrained route', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.send({ hello: 'from fastify.dev' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'from any other domain' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.dev'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from fastify.dev' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'fastify.test'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from any other domain' })
    t.assert.strictEqual(res.statusCode, 200)
  }
})

test('Should allow registering constrained routes in a prefixed plugin', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(async (scope, opts) => {
    scope.route({
      method: 'GET',
      constraints: { host: 'fastify.dev' },
      path: '/route',
      handler: (req, reply) => {
        reply.send({ ok: true })
      }
    })
  }, { prefix: '/prefix' })

  fastify.inject({
    method: 'GET',
    url: '/prefix/route',
    headers: {
      host: 'fastify.dev'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { ok: true })
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Should allow registering a constrained GET route after a constrained HEAD route', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.route({
    method: 'HEAD',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.header('content-type', 'text/plain')
      reply.send('custom HEAD response')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.send({ hello: 'from any other domain' })
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/',
    headers: {
      host: 'fastify.dev'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'custom HEAD response')
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Should allow registering a constrained GET route after an unconstrained HEAD route', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.route({
    method: 'HEAD',
    url: '/',
    handler: (req, reply) => {
      reply.header('content-type', 'text/plain')
      reply.send('HEAD response: length is about 33')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: 'fastify.dev' },
    handler: (req, reply) => {
      reply.header('content-type', 'text/plain')
      reply.send('Hello from constrains: length is about 41')
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/',
    headers: {
      host: 'fastify.dev'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.headers['content-length'], '41')
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Will not try to re-createprefixed HEAD route if it already exists and exposeHeadRoutes is true for constrained routes', async (t) => {
  t.plan(1)

  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.register((scope, opts, next) => {
    scope.route({
      method: 'HEAD',
      path: '/route',
      constraints: { host: 'fastify.dev' },
      handler: (req, reply) => {
        reply.header('content-type', 'text/plain')
        reply.send('custom HEAD response')
      }
    })
    scope.route({
      method: 'GET',
      path: '/route',
      constraints: { host: 'fastify.dev' },
      handler: (req, reply) => {
        reply.send({ ok: true })
      }
    })

    next()
  }, { prefix: '/prefix' })

  await fastify.ready()

  t.assert.ok(true)
})

test('allows separate constrained and unconstrained HEAD routes', async (t) => {
  t.plan(1)

  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.register((scope, opts, next) => {
    scope.route({
      method: 'HEAD',
      path: '/route',
      handler: (req, reply) => {
        reply.header('content-type', 'text/plain')
        reply.send('unconstrained HEAD response')
      }
    })

    scope.route({
      method: 'HEAD',
      path: '/route',
      constraints: { host: 'fastify.dev' },
      handler: (req, reply) => {
        reply.header('content-type', 'text/plain')
        reply.send('constrained HEAD response')
      }
    })

    scope.route({
      method: 'GET',
      path: '/route',
      constraints: { host: 'fastify.dev' },
      handler: (req, reply) => {
        reply.send({ ok: true })
      }
    })

    next()
  }, { prefix: '/prefix' })

  await fastify.ready()

  t.assert.ok(true)
})

test('allow async constraints', async (t) => {
  t.plan(5)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(null, req.headers['x-secret'])
    },
    validate () { return true }
  }

  const fastify = Fastify({ constraints: { secret: constraint } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'alpha' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { hello: 'from alpha' })
    t.assert.strictEqual(statusCode, 200)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'beta' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { hello: 'from beta' })
    t.assert.strictEqual(statusCode, 200)
  }
  {
    const { statusCode } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'gamma' } })
    t.assert.strictEqual(statusCode, 404)
  }
})

test('error in async constraints', async (t) => {
  t.plan(8)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const fastify = Fastify({ constraints: { secret: constraint } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'alpha' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'beta' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'gamma' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/' })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
})

test('Allow regex constraints in routes', async t => {
  t.plan(3)

  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { host: /.*\.fastify\.dev$/ },
    handler: (req, reply) => {
      reply.send({ hello: 'from fastify dev domain' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'dev.fastify.dev'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from fastify dev domain' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        host: 'google.com'
      }
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Should allow registering custom rotuerOptions constrained routes', async t => {
  t.plan(5)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify({ routerOptions: { constraints: { secret: constraint } } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'alpha'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from alpha' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'beta'
      }
    })
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'from beta' })
    t.assert.strictEqual(res.statusCode, 200)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        'X-Secret': 'gamma'
      }
    })
    t.assert.strictEqual(res.statusCode, 404)
  }
})

test('Custom rotuerOptions constrained routes registered also for HEAD method generated by fastify', (t, done) => {
  t.plan(3)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers['x-secret']
    },
    validate () { return true }
  }

  const fastify = Fastify({ routerOptions: { constraints: { secret: constraint } } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'mySecret' },
    handler: (req, reply) => {
      reply.send('from mySecret - my length is 31')
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/',
    headers: {
      'X-Secret': 'mySecret'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.headers['content-length'], '31')
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('allow async rotuerOptions constraints', async (t) => {
  t.plan(5)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(null, req.headers['x-secret'])
    },
    validate () { return true }
  }

  const fastify = Fastify({ routerOptions: { constraints: { secret: constraint } } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'alpha' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { hello: 'from alpha' })
    t.assert.strictEqual(statusCode, 200)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'beta' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { hello: 'from beta' })
    t.assert.strictEqual(statusCode, 200)
  }
  {
    const { statusCode } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'gamma' } })
    t.assert.strictEqual(statusCode, 404)
  }
})

test('error in async rotuerOptions constraints', async (t) => {
  t.plan(8)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const fastify = Fastify({ routerOptions: { constraints: { secret: constraint } } })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'beta' },
    handler: (req, reply) => {
      reply.send({ hello: 'from beta' })
    }
  })

  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'alpha' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'beta' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/', headers: { 'X-Secret': 'gamma' } })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
  {
    const { statusCode, payload } = await fastify.inject({ method: 'GET', path: '/' })
    t.assert.deepStrictEqual(JSON.parse(payload), { error: 'Internal Server Error', message: 'Unexpected error from async constraint', statusCode: 500 })
    t.assert.strictEqual(statusCode, 500)
  }
})
