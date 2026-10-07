'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const fastifyPlugin = require('fastify-plugin')

test('findRoute should return null when route cannot be found due to a different method', t => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler: (req, reply) => reply.send(typeof req.params.artistId)
  })

  t.assert.strictEqual(fastify.findRoute({
    method: 'POST',
    url: '/artists/:artistId'
  }), null)
})

test('findRoute should return an immutable route to avoid leaking and runtime route modifications', t => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler: (req, reply) => reply.send(typeof req.params.artistId)
  })

  let route = fastify.findRoute({
    method: 'GET',
    url: '/artists/:artistId'
  })

  route.params = {
    ...route.params,
    id: ':id'
  }

  route = fastify.findRoute({
    method: 'GET',
    url: '/artists/:artistId'
  })

  t.assert.strictEqual(route.params.artistId, ':artistId')
})

test('findRoute should return null when when url is not passed', t => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler: (req, reply) => reply.send(typeof req.params.artistId)
  })

  t.assert.strictEqual(fastify.findRoute({
    method: 'POST'
  }), null)
})

test('findRoute should return null when route cannot be found due to a different path', t => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler: (req, reply) => reply.send(typeof req.params.artistId)
  })

  t.assert.strictEqual(fastify.findRoute({
    method: 'GET',
    url: '/books/:bookId'
  }), null)
})

test('findRoute should return the route when found', t => {
  t.plan(1)
  const fastify = Fastify()

  const handler = (req, reply) => reply.send(typeof req.params.artistId)

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler
  })

  const route = fastify.findRoute({
    method: 'GET',
    url: '/artists/:artistId'
  })
  t.assert.strictEqual(route.params.artistId, ':artistId')
})

test('findRoute should work correctly when used within plugins', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = (req, reply) => reply.send(typeof req.params.artistId)
  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler
  })

  function validateRoutePlugin (instance, opts, done) {
    const validateParams = function () {
      return instance.findRoute({
        method: 'GET',
        url: '/artists/:artistId'
      }) !== null
    }
    instance.decorate('validateRoutes', { validateParams })
    done()
  }

  fastify.register(fastifyPlugin(validateRoutePlugin))

  fastify.ready(() => {
    t.assert.strictEqual(fastify.validateRoutes.validateParams(), true)
    done()
  })
})

test('findRoute should not expose store', t => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/artists/:artistId', {
    schema: {
      params: { artistId: { type: 'integer' } }
    },
    handler: (req, reply) => reply.send(typeof req.params.artistId)
  })

  const route = fastify.findRoute({
    method: 'GET',
    url: '/artists/:artistId'
  })
  t.assert.strictEqual(route.store, undefined)
})
