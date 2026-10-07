'use strict'

const { test } = require('node:test')
const querystring = require('node:querystring')
const Fastify = require('..')

test('Custom querystring parser', async t => {
  t.plan(7)

  const fastify = Fastify({
    querystringParser: function (str) {
      t.assert.strictEqual(str, 'foo=bar&baz=faz')
      return querystring.parse(str)
    }
  })

  fastify.get('/', (req, reply) => {
    t.assert.deepEqual(req.query, {
      foo: 'bar',
      baz: 'faz'
    })
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}?foo=bar&baz=faz`)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)

  const injectResponse = await fastify.inject({
    method: 'GET',
    url: `${fastifyServer}?foo=bar&baz=faz`
  })
  t.assert.strictEqual(injectResponse.statusCode, 200)
})

test('Custom querystring parser should be called also if there is nothing to parse', async t => {
  t.plan(7)

  const fastify = Fastify({
    querystringParser: function (str) {
      t.assert.strictEqual(str, '')
      return querystring.parse(str)
    }
  })

  fastify.get('/', (req, reply) => {
    t.assert.deepEqual(req.query, {})
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)

  const injectResponse = await fastify.inject({
    method: 'GET',
    url: fastifyServer
  })
  t.assert.strictEqual(injectResponse.statusCode, 200)
})

test('Querystring without value', async t => {
  t.plan(7)

  const fastify = Fastify({
    querystringParser: function (str) {
      t.assert.strictEqual(str, 'foo')
      return querystring.parse(str)
    }
  })

  fastify.get('/', (req, reply) => {
    t.assert.deepEqual(req.query, { foo: '' })
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}?foo`)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)

  const injectResponse = await fastify.inject({
    method: 'GET',
    url: `${fastifyServer}?foo`
  })
  t.assert.strictEqual(injectResponse.statusCode, 200)
})

test('Custom querystring parser should be a function', t => {
  t.plan(1)

  try {
    Fastify({
      querystringParser: 10
    })
    t.assert.fail('Should throw')
  } catch (err) {
    t.assert.strictEqual(
      err.message,
      "querystringParser option should be a function, instead got 'number'"
    )
  }
})

test('Custom querystring parser should be a function', t => {
  t.plan(1)

  try {
    Fastify({
      routerOptions: {
        querystringParser: 10
      }
    })
    t.fail('Should throw')
  } catch (err) {
    t.assert.equal(
      err.message,
      "querystringParser option should be a function, instead got 'number'"
    )
  }
})
