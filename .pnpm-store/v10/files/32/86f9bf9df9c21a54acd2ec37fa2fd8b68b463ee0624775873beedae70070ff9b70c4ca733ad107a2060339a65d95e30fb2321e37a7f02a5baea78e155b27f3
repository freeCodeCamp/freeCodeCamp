'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const h2url = require('h2url')
const msg = { hello: 'world' }

const { buildCertificate } = require('../build-certificate')
test.before(buildCertificate)

test('secure', async (t) => {
  t.plan(4)

  let fastify
  try {
    fastify = Fastify({
      http2: true,
      https: {
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
  fastify.get('/proto', function (req, reply) {
    reply.code(200).send({ proto: req.protocol })
  })
  fastify.get('/hostname_port', function (req, reply) {
    reply.code(200).send({ hostname: req.hostname, port: req.port })
  })

  t.after(() => { fastify.close() })
  await fastify.listen({ port: 0 })

  await t.test('https get request', async (t) => {
    t.plan(3)

    const url = `https://localhost:${fastify.server.address().port}`
    const res = await h2url.concat({ url })

    t.assert.strictEqual(res.headers[':status'], 200)
    t.assert.strictEqual(res.headers['content-length'], '' + JSON.stringify(msg).length)
    t.assert.deepStrictEqual(JSON.parse(res.body), msg)
  })

  await t.test('https get request without trust proxy - protocol', async (t) => {
    t.plan(2)

    const url = `https://localhost:${fastify.server.address().port}/proto`
    t.assert.deepStrictEqual(JSON.parse((await h2url.concat({ url })).body), { proto: 'https' })
    t.assert.deepStrictEqual(JSON.parse((await h2url.concat({ url, headers: { 'X-Forwarded-Proto': 'lorem' } })).body), { proto: 'https' })
  })
  await t.test('https get request - test hostname and port', async (t) => {
    t.plan(2)

    const url = `https://localhost:${fastify.server.address().port}/hostname_port`
    const parsedbody = JSON.parse((await h2url.concat({ url })).body)
    t.assert.strictEqual(parsedbody.hostname, 'localhost')
    t.assert.strictEqual(parsedbody.port, fastify.server.address().port)
  })
})
