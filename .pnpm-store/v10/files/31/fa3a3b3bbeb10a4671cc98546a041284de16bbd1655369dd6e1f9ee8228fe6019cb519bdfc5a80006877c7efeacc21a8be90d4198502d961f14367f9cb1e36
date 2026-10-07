'use strict'

const { test } = require('node:test')
const Fastify = require('..')

const maxHeaderSize = 1024

test('Should return 431 if request header fields are too large', async (t) => {
  t.plan(2)

  const fastify = Fastify({ http: { maxHeaderSize } })
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (_req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'GET',
    headers: {
      'Large-Header': 'a'.repeat(maxHeaderSize)
    }
  })

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 431)

  t.after(() => fastify.close())
})

test('Should return 431 if URI is too long', async (t) => {
  t.plan(2)

  const fastify = Fastify({ http: { maxHeaderSize } })
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (_req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(`${fastifyServer}/${'a'.repeat(maxHeaderSize)}`)

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 431)

  t.after(() => fastify.close())
})
