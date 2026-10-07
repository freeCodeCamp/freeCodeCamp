'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('route error handler overrides global custom error handler', async t => {
  t.plan(3)

  const fastify = Fastify()

  const customGlobalErrorHandler = (error, request, reply) => {
    t.assert.ifError(error)
    reply.code(429).send({ message: 'Too much coffee' })
  }

  const customRouteErrorHandler = (error, request, reply) => {
    t.assert.strictEqual(error.message, 'Wrong Pot Error')
    reply.code(418).send({
      message: 'Make a brew',
      statusCode: 418,
      error: 'Wrong Pot Error'
    })
  }

  fastify.setErrorHandler(customGlobalErrorHandler)

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, res) => {
      res.send(new Error('Wrong Pot Error'))
    },
    errorHandler: customRouteErrorHandler
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/more-coffee'
  })
  t.assert.strictEqual(res.statusCode, 418)
  t.assert.deepStrictEqual(JSON.parse(res.payload), {
    message: 'Make a brew',
    statusCode: 418,
    error: 'Wrong Pot Error'
  })
})

test('throws when route with empty url', async t => {
  t.plan(1)

  const fastify = Fastify()
  try {
    fastify.route({
      method: 'GET',
      url: '',
      handler: (req, res) => {
        res.send('hi!')
      }
    })
  } catch (err) {
    t.assert.strictEqual(err.message, 'The path could not be empty')
  }
})

test('throws when route with empty url in shorthand declaration', async t => {
  t.plan(1)

  const fastify = Fastify()
  try {
    fastify.get(
      '',
      async function handler () { return {} }
    )
  } catch (err) {
    t.assert.strictEqual(err.message, 'The path could not be empty')
  }
})

test('throws when route-level error handler is not a function', t => {
  t.plan(1)

  const fastify = Fastify()

  try {
    fastify.route({
      method: 'GET',
      url: '/tea',
      handler: (req, res) => {
        res.send('hi!')
      },
      errorHandler: 'teapot'
    })
  } catch (err) {
    t.assert.strictEqual(err.message, 'Error Handler for GET:/tea route, if defined, must be a function')
  }
})

test('route child logger factory overrides default child logger factory', async t => {
  t.plan(2)

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

  const res = await fastify.inject({
    method: 'GET',
    url: '/coffee'
  })

  t.assert.strictEqual(res.statusCode, 200)
})
