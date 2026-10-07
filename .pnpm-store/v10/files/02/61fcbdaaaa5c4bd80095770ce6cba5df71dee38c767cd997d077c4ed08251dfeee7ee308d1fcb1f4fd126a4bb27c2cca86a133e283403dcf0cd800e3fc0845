'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const {
  FST_ERR_INSTANCE_ALREADY_LISTENING,
  FST_ERR_ROUTE_METHOD_INVALID
} = require('../lib/errors')
const { getServerUrl } = require('./helper')

test('route', async t => {
  t.plan(10)

  await t.test('route - get', async (t) => {
    t.plan(4)

    const fastify = Fastify()
    t.assert.doesNotThrow(() =>
      fastify.route({
        method: 'GET',
        url: '/',
        schema: {
          response: {
            '2xx': {
              type: 'object',
              properties: {
                hello: {
                  type: 'string'
                }
              }
            }
          }
        },
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      })
    )

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const response = await fetch(getServerUrl(fastify) + '/')
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('missing schema - route', async (t) => {
    t.plan(4)

    const fastify = Fastify()
    t.assert.doesNotThrow(() =>
      fastify.route({
        method: 'GET',
        url: '/missing',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      })
    )

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const response = await fetch(getServerUrl(fastify) + '/missing')
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('invalid handler attribute - route', t => {
    t.plan(1)

    const fastify = Fastify()
    t.assert.throws(() => fastify.get('/', { handler: 'not a function' }, () => { }))
  })

  await t.test('Add Multiple methods per route all uppercase', async (t) => {
    t.plan(7)

    const fastify = Fastify()
    t.assert.doesNotThrow(() =>
      fastify.route({
        method: ['GET', 'DELETE'],
        url: '/multiple',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      }))

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const getResponse = await fetch(getServerUrl(fastify) + '/multiple')
    t.assert.ok(getResponse.ok)
    t.assert.strictEqual(getResponse.status, 200)
    t.assert.deepStrictEqual(await getResponse.json(), { hello: 'world' })

    const deleteResponse = await fetch(getServerUrl(fastify) + '/multiple', { method: 'DELETE' })
    t.assert.ok(deleteResponse.ok)
    t.assert.strictEqual(deleteResponse.status, 200)
    t.assert.deepStrictEqual(await deleteResponse.json(), { hello: 'world' })
  })

  await t.test('Add Multiple methods per route all lowercase', async (t) => {
    t.plan(7)

    const fastify = Fastify()
    t.assert.doesNotThrow(() =>
      fastify.route({
        method: ['get', 'delete'],
        url: '/multiple',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      }))

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const getResponse = await fetch(getServerUrl(fastify) + '/multiple')
    t.assert.ok(getResponse.ok)
    t.assert.strictEqual(getResponse.status, 200)
    t.assert.deepStrictEqual(await getResponse.json(), { hello: 'world' })

    const deleteResponse = await fetch(getServerUrl(fastify) + '/multiple', { method: 'DELETE' })
    t.assert.ok(deleteResponse.ok)
    t.assert.strictEqual(deleteResponse.status, 200)
    t.assert.deepStrictEqual(await deleteResponse.json(), { hello: 'world' })
  })

  await t.test('Add Multiple methods per route mixed uppercase and lowercase', async (t) => {
    t.plan(7)

    const fastify = Fastify()
    t.assert.doesNotThrow(() =>
      fastify.route({
        method: ['GET', 'delete'],
        url: '/multiple',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      }))

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const getResponse = await fetch(getServerUrl(fastify) + '/multiple')
    t.assert.ok(getResponse.ok)
    t.assert.strictEqual(getResponse.status, 200)
    t.assert.deepStrictEqual(await getResponse.json(), { hello: 'world' })

    const deleteResponse = await fetch(getServerUrl(fastify) + '/multiple', { method: 'DELETE' })
    t.assert.ok(deleteResponse.ok)
    t.assert.strictEqual(deleteResponse.status, 200)
    t.assert.deepStrictEqual(await deleteResponse.json(), { hello: 'world' })
  })

  t.test('Add invalid Multiple methods per route', t => {
    t.plan(1)

    const fastify = Fastify()
    t.assert.throws(() =>
      fastify.route({
        method: ['GET', 1],
        url: '/invalid-method',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      }), new FST_ERR_ROUTE_METHOD_INVALID())
  })

  await t.test('Add method', t => {
    t.plan(1)

    const fastify = Fastify()
    t.assert.throws(() =>
      fastify.route({
        method: 1,
        url: '/invalid-method',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      }), new FST_ERR_ROUTE_METHOD_INVALID())
  })

  await t.test('Add additional multiple methods to existing route', async (t) => {
    t.plan(7)

    const fastify = Fastify()
    t.assert.doesNotThrow(() => {
      fastify.get('/add-multiple', function (req, reply) {
        reply.send({ hello: 'Bob!' })
      })
      fastify.route({
        method: ['PUT', 'DELETE'],
        url: '/add-multiple',
        handler: function (req, reply) {
          reply.send({ hello: 'world' })
        }
      })
    })

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    const putResponse = await fetch(getServerUrl(fastify) + '/add-multiple', { method: 'PUT' })
    t.assert.ok(putResponse.ok)
    t.assert.strictEqual(putResponse.status, 200)
    t.assert.deepStrictEqual(await putResponse.json(), { hello: 'world' })

    const deleteResponse = await fetch(getServerUrl(fastify) + '/add-multiple', { method: 'DELETE' })
    t.assert.ok(deleteResponse.ok)
    t.assert.strictEqual(deleteResponse.status, 200)
    t.assert.deepStrictEqual(await deleteResponse.json(), { hello: 'world' })
  })

  await t.test('cannot add another route after binding', async (t) => {
    t.plan(1)

    const fastify = Fastify()

    await fastify.listen({ port: 0 })
    t.after(() => { fastify.close() })

    t.assert.throws(() => fastify.route({
      method: 'GET',
      url: '/another-get-route',
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    }), new FST_ERR_INSTANCE_ALREADY_LISTENING('Cannot add route!'))
  })
})

test('invalid schema - route', (t, done) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.route({
    handler: () => { },
    method: 'GET',
    url: '/invalid',
    schema: {
      querystring: {
        id: 'string'
      }
    }
  })
  fastify.after(err => {
    t.assert.ok(!err, 'the error is throw on preReady')
  })
  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_VALIDATION_BUILD')
    t.assert.match(err.message, /Failed building the validation schema for GET: \/invalid/)
    done()
  })
})
