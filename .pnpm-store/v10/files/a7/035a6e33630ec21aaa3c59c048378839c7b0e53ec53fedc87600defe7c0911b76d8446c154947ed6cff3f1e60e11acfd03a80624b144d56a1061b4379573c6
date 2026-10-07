'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const h2url = require('h2url')
const msg = { hello: 'world' }

test('http2 HEAD test', async (t) => {
  let fastify
  try {
    fastify = Fastify({
      http2: true
    })
    t.assert.ok(true, 'http2 successfully loaded')
  } catch (e) {
    t.assert.fail('http2 loading failed')
  }

  fastify.all('/', function (req, reply) {
    reply.code(200).send(msg)
  })
  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('http HEAD request', async (t) => {
    t.plan(1)

    const url = `http://localhost:${fastify.server.address().port}`
    const res = await h2url.concat({ url, method: 'HEAD' })

    t.assert.strictEqual(res.headers[':status'], 200)
  })
})
