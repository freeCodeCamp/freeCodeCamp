'use strict'

const { test } = require('node:test')
const handleRequest = require('../../lib/handle-request')
const internals = require('../../lib/handle-request')[Symbol.for('internals')]
const Request = require('../../lib/request')
const Reply = require('../../lib/reply')
const { kRouteContext } = require('../../lib/symbols')
const buildSchema = require('../../lib/validation').compileSchemasForValidation

const Ajv = require('ajv')
const ajv = new Ajv({ coerceTypes: true })

function schemaValidator ({ schema, method, url, httpPart }) {
  const validateFunction = ajv.compile(schema)
  const fn = function (body) {
    const isOk = validateFunction(body)
    if (isOk) return
    return false
  }
  fn.errors = []
  return fn
}

test('handleRequest function - sent reply', t => {
  t.plan(1)
  const request = {}
  const reply = { sent: true }
  const res = handleRequest(null, request, reply)
  t.assert.strictEqual(res, undefined)
})

test('handleRequest function - invoke with error', t => {
  t.plan(1)
  const request = {}
  const reply = {}
  reply.send = (err) => t.assert.strictEqual(err.message, 'Kaboom')
  handleRequest(new Error('Kaboom'), request, reply)
})

test('handler function - invalid schema', t => {
  t.plan(1)
  const res = {}
  res.log = { error: () => {}, info: () => {} }
  const context = {
    config: {
      method: 'GET',
      url: '/an-url'
    },
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'number' }
        }
      }
    },
    errorHandler: { func: () => { t.assert.ok('errorHandler called') } },
    handler: () => {},
    Reply,
    Request,
    preValidation: [],
    preHandler: [],
    onSend: [],
    onError: [],
    attachValidation: false,
    schemaErrorFormatter: () => new Error()
  }
  buildSchema(context, schemaValidator)
  const request = {
    body: { hello: 'world' },
    [kRouteContext]: context
  }
  internals.handler(request, new Reply(res, request))
})

test('handler function - reply', t => {
  t.plan(3)
  const res = {}
  res.end = () => {
    t.assert.strictEqual(res.statusCode, 204)
    t.assert.ok(true)
  }
  res.writeHead = () => {}
  const context = {
    handler: (req, reply) => {
      t.assert.strictEqual(typeof reply, 'object')
      reply.code(204)
      reply.send(undefined)
    },
    Reply,
    Request,
    preValidation: [],
    preHandler: [],
    onSend: [],
    onError: [],
    config: {
      url: '',
      method: ''
    }
  }
  buildSchema(context, schemaValidator)
  internals.handler({ [kRouteContext]: context }, new Reply(res, { [kRouteContext]: context }))
})

test('handler function - preValidationCallback with finished response', t => {
  t.plan(0)
  const res = {}
  // Be sure to check only `writableEnded` where is available
  res.writableEnded = true
  res.end = () => {
    t.assert.fail()
  }
  res.writeHead = () => {}
  const context = {
    handler: (req, reply) => {
      t.assert.fail()
      reply.send(undefined)
    },
    Reply,
    Request,
    preValidation: null,
    preHandler: [],
    onSend: [],
    onError: []
  }
  buildSchema(context, schemaValidator)
  internals.handler({ [kRouteContext]: context }, new Reply(res, { [kRouteContext]: context }))
})

test('request should be defined in onSend Hook on post request with content type application/json', async t => {
  t.plan(6)
  const fastify = require('../..')()

  t.after(() => {
    fastify.close()
  })

  fastify.addHook('onSend', (request, reply, payload, done) => {
    t.assert.ok(request)
    t.assert.ok(request.raw)
    t.assert.ok(request.id)
    t.assert.ok(request.params)
    t.assert.ok(request.query)
    done()
  })
  fastify.post('/', (request, reply) => {
    reply.send(200)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })

  t.assert.strictEqual(result.status, 400)
})

test('request should be defined in onSend Hook on post request with content type application/x-www-form-urlencoded', async t => {
  t.plan(5)
  const fastify = require('../..')()

  t.after(() => {
    fastify.close()
  })

  fastify.addHook('onSend', (request, reply, payload, done) => {
    t.assert.ok(request)
    t.assert.ok(request.raw)
    t.assert.ok(request.params)
    t.assert.ok(request.query)
    done()
  })
  fastify.post('/', (request, reply) => {
    reply.send(200)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  // a 415 error is expected because of missing content type parser
  t.assert.strictEqual(result.status, 415)
})

test('request should be defined in onSend Hook on options request with content type application/x-www-form-urlencoded', async t => {
  t.plan(15)
  const fastify = require('../..')()

  t.after(() => {
    fastify.close()
  })

  fastify.addHook('onSend', (request, reply, payload, done) => {
    t.assert.ok(request)
    t.assert.ok(request.raw)
    t.assert.ok(request.params)
    t.assert.ok(request.query)
    done()
  })
  fastify.options('/', (request, reply) => {
    reply.send(200)
  })

  // Test 1: OPTIONS with body and content-type header
  const result1 = await fastify.inject({
    method: 'OPTIONS',
    url: '/',
    body: 'first-name=OPTIONS&last-name=METHOD',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  // Content-Type is not supported
  t.assert.strictEqual(result1.statusCode, 415)

  // Test 2: OPTIONS with content-type header only (no body)
  const result2 = await fastify.inject({
    method: 'OPTIONS',
    url: '/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  // Content-Type is not supported
  t.assert.strictEqual(result2.statusCode, 415)

  // Test 3: OPTIONS with body but no content-type header
  const result3 = await fastify.inject({
    method: 'OPTIONS',
    url: '/',
    body: 'first-name=OPTIONS&last-name=METHOD'
  })

  // No content-type with payload
  t.assert.strictEqual(result3.statusCode, 415)
})

test('request should respond with an error if an unserialized payload is sent inside an async handler', async t => {
  t.plan(2)

  const fastify = require('../..')()

  fastify.get('/', (request, reply) => {
    reply.type('text/html')
    return Promise.resolve(request.headers)
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/'
  })

  t.assert.strictEqual(res.statusCode, 500)
  t.assert.deepStrictEqual(JSON.parse(res.payload), {
    error: 'Internal Server Error',
    code: 'FST_ERR_REP_INVALID_PAYLOAD_TYPE',
    message: 'Attempted to send payload of invalid type \'object\'. Expected a string or Buffer.',
    statusCode: 500
  })
})
