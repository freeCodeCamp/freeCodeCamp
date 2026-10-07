'use strict'

const { createHook } = require('node:async_hooks')
const { test } = require('node:test')
const Fastify = require('..')

const remainingIds = new Set()

createHook({
  init (asyncId, type, triggerAsyncId, resource) {
    if (type === 'content-type-parser:run') {
      remainingIds.add(asyncId)
    }
  },
  destroy (asyncId) {
    remainingIds.delete(asyncId)
  }
})

const app = Fastify({ logger: false })

test('test async hooks', async (t) => {
  app.get('/', function (request, reply) {
    reply.send({ id: 42 })
  })

  app.post('/', function (request, reply) {
    reply.send({ id: 42 })
  })

  t.after(() => app.close())

  const fastifyServer = await app.listen({ port: 0 })

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hello: 'world' })
  })
  t.assert.strictEqual(result1.status, 200)

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hello: 'world' })
  })
  t.assert.strictEqual(result2.status, 200)

  const result3 = await fetch(fastifyServer)
  t.assert.strictEqual(result3.status, 200)
  t.assert.strictEqual(remainingIds.size, 0)
})
