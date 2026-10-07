'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const h2url = require('h2url')
const msg = { hello: 'world' }

test('http2 unknown http method', async t => {
  const fastify = Fastify({
    http2: true
  })

  fastify.get('/', function (req, reply) {
    reply.code(200).send(msg)
  })

  t.after(() => { fastify.close() })
  await fastify.listen({ port: 0 })

  await t.test('http UNKNOWN_METHOD request', async (t) => {
    t.plan(2)

    const url = `http://localhost:${fastify.server.address().port}`
    const res = await h2url.concat({ url, method: 'UNKNOWN_METHOD' })

    t.assert.strictEqual(res.headers[':status'], 404)
    t.assert.deepStrictEqual(JSON.parse(res.body), {
      statusCode: 404,
      code: 'FST_ERR_NOT_FOUND',
      error: 'Not Found',
      message: 'Not Found'
    })
  })
})
