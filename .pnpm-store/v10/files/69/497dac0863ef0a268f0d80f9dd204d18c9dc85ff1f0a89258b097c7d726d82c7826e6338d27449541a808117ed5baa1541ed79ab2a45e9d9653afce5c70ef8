'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const h2url = require('h2url')
const msg = { hello: 'world' }

const { buildCertificate } = require('../build-certificate')
const { Agent } = require('undici')
test.before(buildCertificate)

test('secure with fallback', async (t) => {
  t.plan(6)

  let fastify
  try {
    fastify = Fastify({
      http2: true,
      https: {
        allowHTTP1: true,
        key: global.context.key,
        cert: global.context.cert
      }
    })
    t.assert.ok(true, 'Key/cert successfully loaded')
  } catch (e) {
    t.assert.fail('Key/cert loading failed')
  }

  fastify.get('/', function (req, reply) {
    reply.code(200).send(msg)
  })

  fastify.post('/', function (req, reply) {
    reply.code(200).send(req.body)
  })

  fastify.get('/error', async function (req, reply) {
    throw new Error('kaboom')
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  await t.test('https get error', async (t) => {
    t.plan(1)

    const url = `${fastifyServer}/error`
    const res = await h2url.concat({ url })

    t.assert.strictEqual(res.headers[':status'], 500)
  })

  await t.test('https post', async (t) => {
    t.plan(2)

    const res = await h2url.concat({
      url: fastifyServer,
      method: 'POST',
      body: JSON.stringify({ hello: 'http2' }),
      headers: {
        'content-type': 'application/json'
      }
    })

    t.assert.strictEqual(res.headers[':status'], 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'http2' })
  })

  await t.test('https get request', async (t) => {
    t.plan(3)

    const res = await h2url.concat({ url: fastifyServer })

    t.assert.strictEqual(res.headers[':status'], 200)
    t.assert.strictEqual(res.headers['content-length'], '' + JSON.stringify(msg).length)
    t.assert.deepStrictEqual(JSON.parse(res.body), msg)
  })

  await t.test('http1 get request', async t => {
    t.plan(4)

    const result = await fetch(fastifyServer, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })

    const body = await result.text()
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), msg)
  })

  await t.test('http1 get error', async t => {
    t.plan(2)

    const result = await fetch(`${fastifyServer}/error`, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })

    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 500)
  })
})
