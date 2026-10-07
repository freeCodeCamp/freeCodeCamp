'use strict'

const net = require('node:net')
const { test } = require('node:test')
const Fastify = require('..')

test('maxRequestsPerSocket', (t, done) => {
  t.plan(8)

  const fastify = Fastify({ maxRequestsPerSocket: 2 })
  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, function (err) {
    t.assert.ifError(err)

    const port = fastify.server.address().port
    const client = net.createConnection({ port }, () => {
      client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

      client.once('data', data => {
        t.assert.match(data.toString(), /Connection:\s*keep-alive/i)
        t.assert.match(data.toString(), /Keep-Alive:\s*timeout=\d+/i)
        t.assert.match(data.toString(), /200 OK/i)

        client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

        client.once('data', data => {
          t.assert.match(data.toString(), /Connection:\s*close/i)
          t.assert.match(data.toString(), /200 OK/i)

          client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

          client.once('data', data => {
            t.assert.match(data.toString(), /Connection:\s*close/i)
            t.assert.match(data.toString(), /503 Service Unavailable/i)
            client.end()
            fastify.close()
            done()
          })
        })
      })
    })
  })
})

test('maxRequestsPerSocket zero should behave same as null', (t, done) => {
  t.plan(10)

  const fastify = Fastify({ maxRequestsPerSocket: 0 })
  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, function (err) {
    t.assert.ifError(err)

    const port = fastify.server.address().port
    const client = net.createConnection({ port }, () => {
      client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

      client.once('data', data => {
        t.assert.match(data.toString(), /Connection:\s*keep-alive/i)
        t.assert.match(data.toString(), /Keep-Alive:\s*timeout=\d+/i)
        t.assert.match(data.toString(), /200 OK/i)

        client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

        client.once('data', data => {
          t.assert.match(data.toString(), /Connection:\s*keep-alive/i)
          t.assert.match(data.toString(), /Keep-Alive:\s*timeout=\d+/i)
          t.assert.match(data.toString(), /200 OK/i)

          client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

          client.once('data', data => {
            t.assert.match(data.toString(), /Connection:\s*keep-alive/i)
            t.assert.match(data.toString(), /Keep-Alive:\s*timeout=\d+/i)
            t.assert.match(data.toString(), /200 OK/i)
            client.end()
            fastify.close()
            done()
          })
        })
      })
    })
  })
})

test('maxRequestsPerSocket should be set', async (t) => {
  t.plan(1)

  const initialConfig = Fastify({ maxRequestsPerSocket: 5 }).initialConfig
  t.assert.deepStrictEqual(initialConfig.maxRequestsPerSocket, 5)
})

test('maxRequestsPerSocket should 0', async (t) => {
  t.plan(1)

  const initialConfig = Fastify().initialConfig
  t.assert.deepStrictEqual(initialConfig.maxRequestsPerSocket, 0)
})

test('requestTimeout passed to server', t => {
  t.plan(2)

  const httpServer = Fastify({ maxRequestsPerSocket: 5 }).server
  t.assert.strictEqual(httpServer.maxRequestsPerSocket, 5)

  const httpsServer = Fastify({ maxRequestsPerSocket: 5, https: true }).server
  t.assert.strictEqual(httpsServer.maxRequestsPerSocket, 5)
})
