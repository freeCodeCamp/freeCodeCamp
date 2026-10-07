'use strict'

const Fastify = require('..')
const { test } = require('node:test')

test('proto-poisoning error', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', (request, reply) => {
    t.assert.fail('handler should not be called')
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "__proto__": { "a": 42 } }'
  })

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 400)
})

test('proto-poisoning remove', async (t) => {
  t.plan(3)

  const fastify = Fastify({ onProtoPoisoning: 'remove' })

  t.after(() => fastify.close())

  fastify.post('/', (request, reply) => {
    t.assert.strictEqual(undefined, Object.assign({}, request.body).a)
    reply.send({ ok: true })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "__proto__": { "a": 42 }, "b": 42 }'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})

test('proto-poisoning ignore', async (t) => {
  t.plan(3)

  const fastify = Fastify({ onProtoPoisoning: 'ignore' })

  fastify.post('/', (request, reply) => {
    t.assert.strictEqual(42, Object.assign({}, request.body).a)
    reply.send({ ok: true })
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "__proto__": { "a": 42 }, "b": 42 }'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})

test('constructor-poisoning error (default in v3)', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', (request, reply) => {
    reply.send('ok')
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "constructor": { "prototype": { "foo": "bar" } } }'
  })

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 400)
})

test('constructor-poisoning error', async (t) => {
  t.plan(2)

  const fastify = Fastify({ onConstructorPoisoning: 'error' })

  t.after(() => fastify.close())

  fastify.post('/', (request, reply) => {
    t.assert.fail('handler should not be called')
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "constructor": { "prototype": { "foo": "bar" } } }'
  })

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 400)
})

test('constructor-poisoning remove', async (t) => {
  t.plan(3)

  const fastify = Fastify({ onConstructorPoisoning: 'remove' })

  t.after(() => fastify.close())

  fastify.post('/', (request, reply) => {
    t.assert.strictEqual(undefined, Object.assign({}, request.body).foo)
    reply.send({ ok: true })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ "constructor": { "prototype": { "foo": "bar" } } }'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})
