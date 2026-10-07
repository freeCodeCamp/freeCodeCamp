'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('case insensitive', async (t) => {
  t.plan(3)

  const fastify = Fastify({
    caseSensitive: false
  })
  t.after(() => fastify.close())

  fastify.get('/foo', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(`${fastifyServer}/FOO`)

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), {
    hello: 'world'
  })
})

test('case insensitive inject', async t => {
  t.plan(2)

  const fastify = Fastify({
    caseSensitive: false
  })
  t.after(() => fastify.close())

  fastify.get('/foo', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fastify.inject({
    method: 'GET',
    url: fastifyServer + '/FOO'
  })

  t.assert.strictEqual(result.statusCode, 200)
  t.assert.deepStrictEqual(result.json(), {
    hello: 'world'
  })
})

test('case insensitive (parametric)', async (t) => {
  t.plan(4)

  const fastify = Fastify({
    caseSensitive: false
  })
  t.after(() => fastify.close())

  fastify.get('/foo/:param', (req, reply) => {
    t.assert.strictEqual(req.params.param, 'bAr')
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(`${fastifyServer}/FoO/bAr`, {
    method: 'GET'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), {
    hello: 'world'
  })
})

test('case insensitive (wildcard)', async (t) => {
  t.plan(4)

  const fastify = Fastify({
    caseSensitive: false
  })
  t.after(() => fastify.close())

  fastify.get('/foo/*', (req, reply) => {
    t.assert.strictEqual(req.params['*'], 'bAr/baZ')
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(`${fastifyServer}/FoO/bAr/baZ`)

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), {
    hello: 'world'
  })
})
