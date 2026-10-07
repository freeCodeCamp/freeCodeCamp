'use strict'

const { AsyncLocalStorage } = require('node:async_hooks')
const { test } = require('node:test')
const Fastify = require('..')

test('Async Local Storage test', async (t) => {
  t.plan(12)
  if (!AsyncLocalStorage) {
    t.skip('AsyncLocalStorage not available, skipping test')
    process.exit(0)
  }

  const storage = new AsyncLocalStorage()
  const app = Fastify({ logger: false })

  t.after(() => app.close())

  let counter = 0
  app.addHook('onRequest', (req, reply, next) => {
    const id = counter++
    storage.run({ id }, next)
  })

  app.get('/', function (request, reply) {
    t.assert.ok(storage.getStore())
    const id = storage.getStore().id
    reply.send({ id })
  })

  app.post('/', function (request, reply) {
    t.assert.ok(storage.getStore())
    const id = storage.getStore().id
    reply.send({ id })
  })

  const fastifyServer = await app.listen({ port: 0 })

  // First POST request
  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hello: 'world' })
  })
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.deepStrictEqual(await result1.json(), { id: 0 })

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hello: 'world' })
  })
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.deepStrictEqual(await result2.json(), { id: 1 })

  // GET request
  const result3 = await fetch(fastifyServer, {
    method: 'GET'
  })
  t.assert.ok(result3.ok)
  t.assert.strictEqual(result3.status, 200)
  t.assert.deepStrictEqual(await result3.json(), { id: 2 })
})
