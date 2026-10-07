'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('../index')

test('fastify.swagger should exist', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger)

  await fastify.ready()
  t.assert.ok(fastify.swagger)
})

test('fastify.swagger should throw if called before ready', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger)

  t.assert.throws(fastify.swagger.bind(fastify))
})

test('fastify.swagger should throw if called before ready (openapi)', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: {}
  })

  t.assert.throws(fastify.swagger.bind(fastify))
})

test('decorator can be overridden', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, { decorator: 'customSwaggerDecorator' })

  await fastify.ready()
  t.assert.ok(fastify.customSwaggerDecorator())
})
