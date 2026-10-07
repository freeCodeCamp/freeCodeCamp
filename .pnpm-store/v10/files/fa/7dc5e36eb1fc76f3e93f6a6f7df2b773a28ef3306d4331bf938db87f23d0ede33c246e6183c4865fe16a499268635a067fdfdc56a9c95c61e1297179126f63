'use strict'

const Fastify = require('..')
const http = require('node:http')
const { test } = require('node:test')

test('keepAliveTimeout', t => {
  t.plan(6)

  try {
    Fastify({ keepAliveTimeout: 1.3 })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  try {
    Fastify({ keepAliveTimeout: [] })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  const httpServer = Fastify({ keepAliveTimeout: 1 }).server
  t.assert.strictEqual(httpServer.keepAliveTimeout, 1)

  const httpsServer = Fastify({ keepAliveTimeout: 2, https: {} }).server
  t.assert.strictEqual(httpsServer.keepAliveTimeout, 2)

  const http2Server = Fastify({ keepAliveTimeout: 3, http2: true }).server
  t.assert.notStrictEqual(http2Server.keepAliveTimeout, 3)

  const serverFactory = (handler, _) => {
    const server = http.createServer((req, res) => {
      handler(req, res)
    })
    server.keepAliveTimeout = 5
    return server
  }
  const customServer = Fastify({ keepAliveTimeout: 4, serverFactory }).server
  t.assert.strictEqual(customServer.keepAliveTimeout, 5)
})
