'use strict'

const { test } = require('node:test')
const joi = require('joi')
const Fastify = require('..')

test('does not mutate joi schemas', (t, done) => {
  t.plan(5)

  const fastify = Fastify()
  function validatorCompiler ({ schema, method, url, httpPart }) {
    // Needed to extract the params part,
    // without the JSON-schema encapsulation
    // that is automatically added by the short
    // form of params.
    schema = joi.object(schema.properties)

    return validateHttpData

    function validateHttpData (data) {
      return schema.validate(data)
    }
  }

  fastify.setValidatorCompiler(validatorCompiler)

  fastify.route({
    path: '/foo/:an_id',
    method: 'GET',
    schema: {
      params: { an_id: joi.number() }
    },
    handler (req, res) {
      t.assert.strictEqual(Object.keys(req.params).length, 1)
      t.assert.strictEqual(req.params.an_id, '42')
      res.send({ hello: 'world' })
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/foo/42'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { hello: 'world' })
    done()
  })
})

test('multiple routes with one schema', (t, done) => {
  t.plan(2)

  const fastify = Fastify()

  const schema = {
    query: {
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    }
  }

  fastify.route({
    schema,
    method: 'GET',
    path: '/first/:id',
    handler (req, res) {
      res.send({ hello: 'world' })
    }
  })

  fastify.route({
    schema,
    method: 'GET',
    path: '/second/:id',
    handler (req, res) {
      res.send({ hello: 'world' })
    }
  })

  fastify.ready(error => {
    t.assert.ifError(error)
    t.assert.deepStrictEqual(schema, schema)
    done()
  })
})

test('route error handler overrides default error handler', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  const customRouteErrorHandler = (error, request, reply) => {
    t.assert.strictEqual(error.message, 'Wrong Pot Error')

    reply.code(418).send({
      message: 'Make a brew',
      statusCode: 418,
      error: 'Wrong Pot Error'
    })
  }

  fastify.route({
    method: 'GET',
    path: '/coffee',
    handler: (req, res) => {
      res.send(new Error('Wrong Pot Error'))
    },
    errorHandler: customRouteErrorHandler
  })

  fastify.inject({
    method: 'GET',
    url: '/coffee'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 418)
    t.assert.deepStrictEqual(res.json(), {
      message: 'Make a brew',
      statusCode: 418,
      error: 'Wrong Pot Error'
    })
    done()
  })
})

test('route error handler does not affect other routes', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  const customRouteErrorHandler = (error, request, reply) => {
    t.assert.strictEqual(error.message, 'Wrong Pot Error')

    reply.code(418).send({
      message: 'Make a brew',
      statusCode: 418,
      error: 'Wrong Pot Error'
    })
  }

  fastify.route({
    method: 'GET',
    path: '/coffee',
    handler: (req, res) => {
      res.send(new Error('Wrong Pot Error'))
    },
    errorHandler: customRouteErrorHandler
  })

  fastify.route({
    method: 'GET',
    path: '/tea',
    handler: (req, res) => {
      res.send(new Error('No tea today'))
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/tea'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(res.json(), {
      message: 'No tea today',
      statusCode: 500,
      error: 'Internal Server Error'
    })
    done()
  })
})

test('async error handler for a route', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  const customRouteErrorHandler = async (error, request, reply) => {
    t.assert.strictEqual(error.message, 'Delayed Pot Error')
    reply.code(418)
    return {
      message: 'Make a brew sometime later',
      statusCode: 418,
      error: 'Delayed Pot Error'
    }
  }

  fastify.route({
    method: 'GET',
    path: '/late-coffee',
    handler: (req, res) => {
      res.send(new Error('Delayed Pot Error'))
    },
    errorHandler: customRouteErrorHandler
  })

  fastify.inject({
    method: 'GET',
    url: '/late-coffee'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 418)
    t.assert.deepStrictEqual(res.json(), {
      message: 'Make a brew sometime later',
      statusCode: 418,
      error: 'Delayed Pot Error'
    })
    done()
  })
})
