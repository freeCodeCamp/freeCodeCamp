'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const h2url = require('h2url')

const alpha = { res: 'alpha' }
const beta = { res: 'beta' }

const { buildCertificate } = require('../build-certificate')
test.before(buildCertificate)

test('A route supports host constraints under http2 protocol and secure connection', async (t) => {
  t.plan(5)

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

  const constrain = 'fastify.dev'

  fastify.route({
    method: 'GET',
    url: '/',
    handler: function (_, reply) {
      reply.code(200).send(alpha)
    }
  })
  fastify.route({
    method: 'GET',
    url: '/beta',
    constraints: { host: constrain },
    handler: function (_, reply) {
      reply.code(200).send(beta)
    }
  })
  fastify.route({
    method: 'GET',
    url: '/hostname_port',
    constraints: { host: constrain },
    handler: function (req, reply) {
      reply.code(200).send({ ...beta, hostname: req.hostname })
    }
  })
  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('https get request - no constrain', async (t) => {
    t.plan(3)

    const url = `https://localhost:${fastify.server.address().port}`
    const res = await h2url.concat({ url })

    t.assert.strictEqual(res.headers[':status'], 200)
    t.assert.strictEqual(res.headers['content-length'], '' + JSON.stringify(alpha).length)
    t.assert.deepStrictEqual(JSON.parse(res.body), alpha)
  })

  await t.test('https get request - constrain', async (t) => {
    t.plan(3)

    const url = `https://localhost:${fastify.server.address().port}/beta`
    const res = await h2url.concat({
      url,
      headers: {
        ':authority': constrain
      }
    })

    t.assert.strictEqual(res.headers[':status'], 200)
    t.assert.strictEqual(res.headers['content-length'], '' + JSON.stringify(beta).length)
    t.assert.deepStrictEqual(JSON.parse(res.body), beta)
  })

  await t.test('https get request - constrain - not found', async (t) => {
    t.plan(1)

    const url = `https://localhost:${fastify.server.address().port}/beta`
    const res = await h2url.concat({
      url
    })

    t.assert.strictEqual(res.headers[':status'], 404)
  })
  await t.test('https get request - constrain - verify hostname and port from request', async (t) => {
    t.plan(1)

    const url = `https://localhost:${fastify.server.address().port}/hostname_port`
    const res = await h2url.concat({
      url,
      headers: {
        ':authority': constrain
      }
    })
    const body = JSON.parse(res.body)
    t.assert.strictEqual(body.hostname, constrain)
  })
})
