'use strict'

const http = require('node:http')
const { test } = require('node:test')
const Fastify = require('..')

test('requestTimeout passed to server', t => {
  t.plan(5)

  try {
    Fastify({ requestTimeout: 500.1 })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  try {
    Fastify({ requestTimeout: [] })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  const httpServer = Fastify({ requestTimeout: 1000 }).server
  t.assert.strictEqual(httpServer.requestTimeout, 1000)

  const httpsServer = Fastify({ requestTimeout: 1000, https: true }).server
  t.assert.strictEqual(httpsServer.requestTimeout, 1000)

  const serverFactory = (handler, _) => {
    const server = http.createServer((req, res) => {
      handler(req, res)
    })
    server.requestTimeout = 5000
    return server
  }
  const customServer = Fastify({ requestTimeout: 4000, serverFactory }).server
  t.assert.strictEqual(customServer.requestTimeout, 5000)
})

test('requestTimeout should be set', async (t) => {
  t.plan(1)

  const initialConfig = Fastify({ requestTimeout: 5000 }).initialConfig
  t.assert.strictEqual(initialConfig.requestTimeout, 5000)
})

test('requestTimeout should 0', async (t) => {
  t.plan(1)

  const initialConfig = Fastify().initialConfig
  t.assert.strictEqual(initialConfig.requestTimeout, 0)
})
