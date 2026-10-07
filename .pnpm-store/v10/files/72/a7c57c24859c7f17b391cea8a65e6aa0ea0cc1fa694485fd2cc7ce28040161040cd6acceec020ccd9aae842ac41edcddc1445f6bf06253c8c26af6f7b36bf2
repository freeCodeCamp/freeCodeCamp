'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const https = require('node:https')
const dns = require('node:dns').promises
const { buildCertificate } = require('../build-certificate')
const { Agent } = require('undici')

async function setup () {
  await buildCertificate()

  const localAddresses = await dns.lookup('localhost', { all: true })

  test('Should support a custom https server', { skip: localAddresses.length < 1 }, async t => {
    t.plan(5)

    const fastify = Fastify({
      serverFactory: (handler, opts) => {
        t.assert.ok(opts.serverFactory, 'it is called once for localhost')

        const options = {
          key: global.context.key,
          cert: global.context.cert
        }

        const server = https.createServer(options, (req, res) => {
          req.custom = true
          handler(req, res)
        })

        return server
      }
    })

    t.after(() => { fastify.close() })

    fastify.get('/', (req, reply) => {
      t.assert.ok(req.raw.custom)
      reply.send({ hello: 'world' })
    })

    await fastify.listen({ port: 0 })

    const result = await fetch('https://localhost:' + fastify.server.address().port, {
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false
        }
      })
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
  })
}

setup()
