'use strict'

const { test } = require('node:test')
const http = require('node:http')
const dns = require('node:dns').promises
const Fastify = require('..')
const { FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE } = require('../lib/errors')

async function setup () {
  const localAddresses = await dns.lookup('localhost', { all: true })

  test('Should support a custom http server', { skip: localAddresses.length < 1 }, async t => {
    t.plan(5)

    const fastify = Fastify({
      serverFactory: (handler, opts) => {
        t.assert.ok(opts.serverFactory, 'it is called once for localhost')

        const server = http.createServer((req, res) => {
          req.custom = true
          handler(req, res)
        })

        return server
      }
    })

    t.after(() => fastify.close())
    fastify.get('/', (req, reply) => {
      t.assert.ok(req.raw.custom)
      reply.send({ hello: 'world' })
    })

    await fastify.listen({ port: 0 })

    const response = await fetch('http://localhost:' + fastify.server.address().port, {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  test('Should not allow forceCloseConnection=idle if the server does not support closeIdleConnections', t => {
    t.plan(1)

    t.assert.throws(
      () => {
        Fastify({
          forceCloseConnections: 'idle',
          serverFactory (handler, opts) {
            return {
              on () {

              }
            }
          }
        })
      },
      FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE,
      "Cannot set forceCloseConnections to 'idle' as your HTTP server does not support closeIdleConnections method"
    )
  })

  test('Should accept user defined serverFactory and ignore secondary server creation', async t => {
    const server = http.createServer(() => { })
    t.after(() => new Promise(resolve => server.close(resolve)))
    const app = Fastify({
      serverFactory: () => server
    })
    await t.assert.doesNotReject(async () => { await app.listen({ port: 0 }) })
  })

  test('Should not call close on the server if it has not created it', async t => {
    const server = http.createServer()

    const serverFactory = (handler, opts) => {
      server.on('request', handler)
      return server
    }

    const fastify = Fastify({ serverFactory })

    fastify.get('/', (req, reply) => {
      reply.send({ hello: 'world' })
    })

    await fastify.ready()

    await new Promise((resolve, reject) => {
      server.listen(0)
      server.on('listening', resolve)
      server.on('error', reject)
    })

    const address = server.address()
    t.assert.strictEqual(server.listening, true)
    await fastify.close()

    t.assert.strictEqual(server.listening, true)
    t.assert.deepStrictEqual(server.address(), address)
    t.assert.deepStrictEqual(fastify.addresses(), [address])

    await new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    })
    t.assert.strictEqual(server.listening, false)
    t.assert.deepStrictEqual(server.address(), null)
  })
}

setup()
