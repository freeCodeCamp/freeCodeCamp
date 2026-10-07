'use strict'

const Fastify = require('..')
const http = require('node:http')
const { test } = require('node:test')

test('connectionTimeout', async t => {
  t.plan(6)

  try {
    Fastify({ connectionTimeout: 1.3 })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  try {
    Fastify({ connectionTimeout: [] })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  const httpServer = Fastify({ connectionTimeout: 1 }).server
  t.assert.strictEqual(httpServer.timeout, 1)

  const httpsServer = Fastify({ connectionTimeout: 2, https: {} }).server
  t.assert.strictEqual(httpsServer.timeout, 2)

  const http2Server = Fastify({ connectionTimeout: 3, http2: true }).server
  t.assert.strictEqual(http2Server.timeout, 3)

  const serverFactory = (handler, _) => {
    const server = http.createServer((req, res) => {
      handler(req, res)
    })
    server.setTimeout(5)
    return server
  }
  const customServer = Fastify({ connectionTimeout: 4, serverFactory }).server
  t.assert.strictEqual(customServer.timeout, 5)
})
