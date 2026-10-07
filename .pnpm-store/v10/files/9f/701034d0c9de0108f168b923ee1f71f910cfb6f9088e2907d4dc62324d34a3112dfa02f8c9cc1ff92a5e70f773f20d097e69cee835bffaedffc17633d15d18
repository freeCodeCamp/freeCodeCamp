'use strict'

const { test } = require('node:test')

const { kRouteContext } = require('../lib/symbols')
const Fastify = require('..')

const schema = {
  schema: { },
  config: {
    value1: 'foo',
    value2: true
  }
}

function handler (req, reply) {
  reply.send(reply[kRouteContext].config)
}

test('config', async t => {
  t.plan(6)
  const fastify = Fastify()

  fastify.get('/get', {
    schema: schema.schema,
    config: Object.assign({}, schema.config)
  }, handler)

  fastify.route({
    method: 'GET',
    url: '/route',
    schema: schema.schema,
    handler,
    config: Object.assign({}, schema.config)
  })

  fastify.route({
    method: 'GET',
    url: '/no-config',
    schema: schema.schema,
    handler
  })

  let response = await fastify.inject({
    method: 'GET',
    url: '/route'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/route', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/route'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/route', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/no-config'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), { url: '/no-config', method: 'GET' })
})

test('config with exposeHeadRoutes', async t => {
  t.plan(6)
  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.get('/get', {
    schema: schema.schema,
    config: Object.assign({}, schema.config)
  }, handler)

  fastify.route({
    method: 'GET',
    url: '/route',
    schema: schema.schema,
    handler,
    config: Object.assign({}, schema.config)
  })

  fastify.route({
    method: 'GET',
    url: '/no-config',
    schema: schema.schema,
    handler
  })

  let response = await fastify.inject({
    method: 'GET',
    url: '/get'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/get', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/route'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/route', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/no-config'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), { url: '/no-config', method: 'GET' })
})

test('config without exposeHeadRoutes', async t => {
  t.plan(6)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.get('/get', {
    schema: schema.schema,
    config: Object.assign({}, schema.config)
  }, handler)

  fastify.route({
    method: 'GET',
    url: '/route',
    schema: schema.schema,
    handler,
    config: Object.assign({}, schema.config)
  })

  fastify.route({
    method: 'GET',
    url: '/no-config',
    schema: schema.schema,
    handler
  })

  let response = await fastify.inject({
    method: 'GET',
    url: '/get'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/get', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/route'
  })
  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), Object.assign({ url: '/route', method: 'GET' }, schema.config))

  response = await fastify.inject({
    method: 'GET',
    url: '/no-config'
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.json(), { url: '/no-config', method: 'GET' })
})
