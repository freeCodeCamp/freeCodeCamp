'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('default 413 with bodyLimit option', async (t) => {
  t.plan(3)

  const fastify = Fastify({
    bodyLimit: 10
  })

  fastify.post('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    body: {
      text: '12345678901234567890123456789012345678901234567890'
    }
  })
  t.assert.strictEqual(response.statusCode, 413)
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    error: 'Payload Too Large',
    code: 'FST_ERR_CTP_BODY_TOO_LARGE',
    message: 'Request body is too large',
    statusCode: 413
  })
})

test('default 400 with wrong content-length', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.post('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'content-length': 20
    },
    body: {
      text: '12345678901234567890123456789012345678901234567890'
    }
  })
  t.assert.strictEqual(response.statusCode, 400)
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    error: 'Bad Request',
    code: 'FST_ERR_CTP_INVALID_CONTENT_LENGTH',
    message: 'Request body size did not match Content-Length',
    statusCode: 400
  })
})

test('custom 413 with bodyLimit option', async (t) => {
  t.plan(3)

  const fastify = Fastify({
    bodyLimit: 10
  })

  fastify.post('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.setErrorHandler(function (err, request, reply) {
    reply
      .code(err.statusCode)
      .type('application/json; charset=utf-8')
      .send(err)
  })

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    body: {
      text: '12345678901234567890123456789012345678901234567890'
    }
  })
  t.assert.strictEqual(response.statusCode, 413)
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    error: 'Payload Too Large',
    code: 'FST_ERR_CTP_BODY_TOO_LARGE',
    message: 'Request body is too large',
    statusCode: 413
  })
})

test('custom 400 with wrong content-length', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.post('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.setErrorHandler(function (err, request, reply) {
    reply
      .code(err.statusCode)
      .type('application/json; charset=utf-8')
      .send(err)
  })

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'content-length': 20
    },
    body: {
      text: '12345678901234567890123456789012345678901234567890'
    }
  })
  t.assert.strictEqual(response.statusCode, 400)
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    error: 'Bad Request',
    code: 'FST_ERR_CTP_INVALID_CONTENT_LENGTH',
    message: 'Request body size did not match Content-Length',
    statusCode: 400
  })
})

test('#2214 - wrong content-length', async (t) => {
  const fastify = Fastify()

  fastify.get('/', async () => {
    const error = new Error('MY_ERROR_MESSAGE')
    error.headers = {
      'content-length': 2
    }
    throw error
  })

  const response = await fastify.inject({
    method: 'GET',
    path: '/'
  })
  t.assert.strictEqual(response.headers['content-length'], '' + response.rawPayload.length)
})

test('#2543 - wrong content-length with errorHandler', async (t) => {
  const fastify = Fastify()

  fastify.setErrorHandler((_error, _request, reply) => {
    reply.code(500).send({ message: 'longer than 2 bytes' })
  })

  fastify.get('/', async () => {
    const error = new Error('MY_ERROR_MESSAGE')
    error.headers = {
      'content-length': 2
    }
    throw error
  })

  const response = await fastify.inject({
    method: 'GET',
    path: '/'
  })
  t.assert.strictEqual(response.statusCode, 500)
  t.assert.strictEqual(response.headers['content-length'], '' + response.rawPayload.length)
  t.assert.deepStrictEqual(JSON.parse(response.payload), { message: 'longer than 2 bytes' })
})
