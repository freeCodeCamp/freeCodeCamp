'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('route child logger factory does not affect other routes', async t => {
  t.plan(4)

  const fastify = Fastify()

  const customRouteChildLogger = (logger, bindings, opts, req) => {
    const child = logger.child(bindings, opts)
    child.customLog = function (message) {
      t.assert.strictEqual(message, 'custom')
    }
    return child
  }

  fastify.route({
    method: 'GET',
    path: '/coffee',
    handler: (req, res) => {
      req.log.customLog('custom')
      res.send()
    },
    childLoggerFactory: customRouteChildLogger
  })

  fastify.route({
    method: 'GET',
    path: '/tea',
    handler: (req, res) => {
      t.assert.ok(req.log.customLog instanceof Function)
      res.send()
    }
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/coffee'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/tea'
  })
  t.assert.strictEqual(res.statusCode, 200)
})
test('route child logger factory overrides global custom error handler', async t => {
  t.plan(4)

  const fastify = Fastify()

  const customGlobalChildLogger = (logger, bindings, opts, req) => {
    const child = logger.child(bindings, opts)
    child.globalLog = function (message) {
      t.assert.strictEqual(message, 'global')
    }
    return child
  }
  const customRouteChildLogger = (logger, bindings, opts, req) => {
    const child = logger.child(bindings, opts)
    child.customLog = function (message) {
      t.assert.strictEqual(message, 'custom')
    }
    return child
  }

  fastify.setChildLoggerFactory(customGlobalChildLogger)

  fastify.route({
    method: 'GET',
    path: '/coffee',
    handler: (req, res) => {
      req.log.customLog('custom')
      res.send()
    },
    childLoggerFactory: customRouteChildLogger
  })
  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, res) => {
      req.log.globalLog('global')
      res.send()
    }
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/coffee'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/more-coffee'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Creates a HEAD route for each GET one (default)', async t => {
  t.plan(6)

  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, reply) => {
      reply.send({ here: 'is coffee' })
    }
  })

  fastify.route({
    method: 'GET',
    path: '/some-light',
    handler: (req, reply) => {
      reply.send('Get some light!')
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/some-light'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
  t.assert.strictEqual(res.body, '')
})

test('Do not create a HEAD route for each GET one (exposeHeadRoutes: false)', async t => {
  t.plan(2)

  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, reply) => {
      reply.send({ here: 'is coffee' })
    }
  })

  fastify.route({
    method: 'GET',
    path: '/some-light',
    handler: (req, reply) => {
      reply.send('Get some light!')
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  })
  t.assert.strictEqual(res.statusCode, 404)

  res = await fastify.inject({
    method: 'HEAD',
    url: '/some-light'
  })
  t.assert.strictEqual(res.statusCode, 404)
})

test('Creates a HEAD route for each GET one', async t => {
  t.plan(6)

  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, reply) => {
      reply.send({ here: 'is coffee' })
    }
  })

  fastify.route({
    method: 'GET',
    path: '/some-light',
    handler: (req, reply) => {
      reply.send('Get some light!')
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/some-light'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
  t.assert.strictEqual(res.body, '')
})
