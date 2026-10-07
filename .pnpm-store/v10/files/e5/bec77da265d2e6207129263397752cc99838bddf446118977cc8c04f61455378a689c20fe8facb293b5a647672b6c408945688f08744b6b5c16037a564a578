'use strict'

const { test, describe } = require('node:test')
const Fastify = require('..')

const fastify = Fastify()

describe('hasRoute', async t => {
  test('hasRoute - invalid options', t => {
    t.plan(3)

    t.assert.strictEqual(fastify.hasRoute({ }), false)
    t.assert.strictEqual(fastify.hasRoute({ method: 'GET' }), false)
    t.assert.strictEqual(fastify.hasRoute({ constraints: [] }), false)
  })

  test('hasRoute - primitive method', t => {
    t.plan(2)
    fastify.route({
      method: 'GET',
      url: '/',
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    })

    t.assert.strictEqual(fastify.hasRoute({
      method: 'GET',
      url: '/'
    }), true)

    t.assert.strictEqual(fastify.hasRoute({
      method: 'POST',
      url: '/'
    }), false)
  })

  test('hasRoute - with constraints', t => {
    t.plan(2)
    fastify.route({
      method: 'GET',
      url: '/',
      constraints: { version: '1.2.0' },
      handler: (req, reply) => {
        reply.send({ hello: 'world' })
      }
    })

    t.assert.strictEqual(fastify.hasRoute({
      method: 'GET',
      url: '/',
      constraints: { version: '1.2.0' }
    }), true)

    t.assert.strictEqual(fastify.hasRoute({
      method: 'GET',
      url: '/',
      constraints: { version: '1.3.0' }
    }), false)
  })

  test('hasRoute - parametric route regexp with constraints', t => {
    t.plan(1)
    // parametric with regexp
    fastify.get('/example/:file(^\\d+).png', function (request, reply) { })

    t.assert.strictEqual(fastify.hasRoute({
      method: 'GET',
      url: '/example/:file(^\\d+).png'
    }), true)
  })

  test('hasRoute - finds a route even if method is not uppercased', t => {
    t.plan(1)
    fastify.route({
      method: 'GET',
      url: '/equal',
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    })

    t.assert.strictEqual(fastify.hasRoute({
      method: 'get',
      url: '/equal'
    }), true)
  })
})
