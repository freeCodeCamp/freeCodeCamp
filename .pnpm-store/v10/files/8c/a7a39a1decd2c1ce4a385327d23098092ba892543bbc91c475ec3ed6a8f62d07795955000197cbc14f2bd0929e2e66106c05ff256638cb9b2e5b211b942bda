'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('The request id header key can be customized', async (t) => {
  t.plan(2)
  const REQUEST_ID = '42'

  const fastify = Fastify({
    requestIdHeader: 'my-custom-request-id'
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  const response = await fastify.inject({ method: 'GET', url: '/', headers: { 'my-custom-request-id': REQUEST_ID } })
  const body = await response.json()
  t.assert.strictEqual(body.id, REQUEST_ID)
})

test('The request id header key can be customized', async (t) => {
  t.plan(2)
  const REQUEST_ID = '42'

  const fastify = Fastify({
    requestIdHeader: 'my-custom-request-id'
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  const response = await fastify.inject({ method: 'GET', url: '/', headers: { 'MY-CUSTOM-REQUEST-ID': REQUEST_ID } })
  const body = await response.json()
  t.assert.strictEqual(body.id, REQUEST_ID)
})

test('The request id header key can be customized', async (t) => {
  t.plan(3)
  const REQUEST_ID = '42'

  const fastify = Fastify({
    requestIdHeader: 'my-custom-request-id'
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    headers: {
      'my-custom-request-id': REQUEST_ID
    }
  })
  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(await result.json(), { id: REQUEST_ID })
})

test('The request id header key can be customized', async (t) => {
  t.plan(3)
  const REQUEST_ID = '42'

  const fastify = Fastify({
    requestIdHeader: 'my-custom-request-id'
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    headers: {
      'MY-CUSTOM-REQUEST-ID': REQUEST_ID
    }
  })
  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(await result.json(), { id: REQUEST_ID })
})

test('The request id header key can be customized', async (t) => {
  t.plan(3)
  const REQUEST_ID = '42'

  const fastify = Fastify({
    requestIdHeader: 'MY-CUSTOM-REQUEST-ID'
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.id, REQUEST_ID)
    reply.send({ id: req.id })
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    headers: {
      'MY-CUSTOM-REQUEST-ID': REQUEST_ID
    }
  })
  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(await result.json(), { id: REQUEST_ID })
})
