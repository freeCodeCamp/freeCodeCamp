'use strict'

const { test } = require('node:test')
const { request } = require('undici')
const Fastify = require('../..')

const { buildCertificate } = require('../build-certificate')
const { Agent } = require('undici')
test.before(buildCertificate)

test('https', async (t) => {
  t.plan(3)

  let fastify
  try {
    fastify = Fastify({
      https: {
        key: global.context.key,
        cert: global.context.cert
      }
    })
    t.assert.ok('Key/cert successfully loaded')
  } catch (e) {
    t.assert.fail('Key/cert loading failed')
  }

  fastify.get('/', function (req, reply) {
    reply.code(200).send({ hello: 'world' })
  })

  fastify.get('/proto', function (req, reply) {
    reply.code(200).send({ proto: req.protocol })
  })

  await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })

  await t.test('https get request', async t => {
    t.plan(4)
    const result = await fetch('https://localhost:' + fastify.server.address().port, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('https get request without trust proxy - protocol', async t => {
    t.plan(3)
    const result1 = await fetch(`${'https://localhost:' + fastify.server.address().port}/proto`, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })
    t.assert.ok(result1.ok)
    t.assert.deepStrictEqual(await result1.json(), { proto: 'https' })

    const result2 = await fetch(`${'https://localhost:' + fastify.server.address().port}/proto`, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      }),
      headers: {
        'x-forwarded-proto': 'lorem'
      }
    })
    t.assert.deepStrictEqual(await result2.json(), { proto: 'https' })
  })
})

test('https - headers', async (t) => {
  t.plan(3)
  let fastify
  try {
    fastify = Fastify({
      https: {
        key: global.context.key,
        cert: global.context.cert
      }
    })
    t.assert.ok('Key/cert successfully loaded')
  } catch (e) {
    t.assert.fail('Key/cert loading failed')
  }

  fastify.get('/', function (req, reply) {
    reply.code(200).send({ hello: 'world', hostname: req.hostname, port: req.port })
  })

  t.after(async () => { await fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('https get request', async t => {
    t.plan(3)
    const result = await fetch('https://localhost:' + fastify.server.address().port, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.json(), { hostname: 'localhost', port: fastify.server.address().port, hello: 'world' })
  })

  await t.test('https get request - test port fall back', async t => {
    t.plan(2)

    const result = await request('https://localhost:' + fastify.server.address().port, {
      method: 'GET',
      headers: {
        host: 'fastify.test'
      },
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })

    t.assert.strictEqual(result.statusCode, 200)
    t.assert.deepStrictEqual(await result.body.json(), { hello: 'world', hostname: 'fastify.test', port: null })
  })
})
