'use strict'

const { test } = require('node:test')
const proxyquire = require('proxyquire')

const Fastify = require('../../fastify')
const { createServer } = require('../../lib/server')

const handler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ data: 'Hello World!' }))
}

test('start listening', async t => {
  const { server, listen } = createServer({}, handler)
  await listen.call(Fastify(), { port: 0, host: 'localhost' })
  server.close()
  t.assert.ok(true, 'server started')
})

test('DNS errors does not stop the main server on localhost - promise interface', async t => {
  const { createServer } = proxyquire('../../lib/server', {
    'node:dns': {
      lookup: (hostname, options, cb) => {
        cb(new Error('DNS error'))
      }
    }
  })
  const { server, listen } = createServer({}, handler)
  await listen.call(Fastify(), { port: 0, host: 'localhost' })
  server.close()
  t.assert.ok(true, 'server started')
})

test('DNS errors does not stop the main server on localhost - callback interface', (t, done) => {
  t.plan(2)
  const { createServer } = proxyquire('../../lib/server', {
    'node:dns': {
      lookup: (hostname, options, cb) => {
        cb(new Error('DNS error'))
      }
    }
  })
  const { server, listen } = createServer({}, handler)
  listen.call(Fastify(), { port: 0, host: 'localhost' }, (err) => {
    t.assert.ifError(err)
    server.close()
    t.assert.ok(true, 'server started')
    done()
  })
})

test('DNS returns empty binding', (t, done) => {
  t.plan(2)
  const { createServer } = proxyquire('../../lib/server', {
    'node:dns': {
      lookup: (hostname, options, cb) => {
        cb(null, [])
      }
    }
  })
  const { server, listen } = createServer({}, handler)
  listen.call(Fastify(), { port: 0, host: 'localhost' }, (err) => {
    t.assert.ifError(err)
    server.close()
    t.assert.ok(true, 'server started')
    done()
  })
})

test('DNS returns more than two binding', (t, done) => {
  t.plan(2)
  const { createServer } = proxyquire('../../lib/server', {
    'node:dns': {
      lookup: (hostname, options, cb) => {
        cb(null, [
          { address: '::1', family: 6 },
          { address: '127.0.0.1', family: 4 },
          { address: '0.0.0.0', family: 4 }
        ])
      }
    }
  })
  const { server, listen } = createServer({}, handler)
  listen.call(Fastify(), { port: 0, host: 'localhost' }, (err) => {
    t.assert.ifError(err)
    server.close()
    t.assert.ok(true, 'server started')
    done()
  })
})
