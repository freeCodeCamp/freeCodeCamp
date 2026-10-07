'use strict'

const { test } = require('node:test')
const Fastify = require('..')

process.removeAllListeners('warning')

test('Wrong parseAs parameter', t => {
  t.plan(2)
  const fastify = Fastify()

  try {
    fastify.addContentTypeParser('application/json', { parseAs: 'fireworks' }, () => {})
    t.assert.fail('should throw')
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_INVALID_PARSE_TYPE')
    t.assert.strictEqual(err.message, "The body parser can only parse your data as 'string' or 'buffer', you asked 'fireworks' which is not supported.")
  }
})

test('Should allow defining the bodyLimit per parser', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser(
    'x/foo',
    { parseAs: 'string', bodyLimit: 5 },
    function (req, body, done) {
      t.assert.fail('should not be invoked')
      done()
    }
  )

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '1234567890',
    headers: {
      'Content-Type': 'x/foo'
    }
  })

  t.assert.ok(!result.ok)
  t.assert.deepStrictEqual(await result.json(), {
    statusCode: 413,
    code: 'FST_ERR_CTP_BODY_TOO_LARGE',
    error: 'Payload Too Large',
    message: 'Request body is too large'
  })
})

test('route bodyLimit should take precedence over a custom parser bodyLimit', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', { bodyLimit: 5 }, (request, reply) => {
    reply.send(request.body)
  })

  fastify.addContentTypeParser(
    'x/foo',
    { parseAs: 'string', bodyLimit: 100 },
    function (req, body, done) {
      t.assert.fail('should not be invoked')
      done()
    }
  )

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '1234567890',
    headers: { 'Content-Type': 'x/foo' }
  })

  t.assert.ok(!result.ok)
  t.assert.deepStrictEqual(await result.json(), {
    statusCode: 413,
    code: 'FST_ERR_CTP_BODY_TOO_LARGE',
    error: 'Payload Too Large',
    message: 'Request body is too large'
  })
})
