'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')

test('Swagger source does not contain sourceMaps', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-ui.js'
  })

  const includesSourceMap = res.payload.includes('sourceMappingURL')
  t.assert.deepStrictEqual(includesSourceMap, false)
  t.assert.deepStrictEqual(res.headers['content-type'], 'application/javascript; charset=utf-8')
})

test('Swagger css does not contain sourceMaps', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-ui.css'
  })

  const includesSourceMap = res.payload.includes('sourceMappingURL')
  t.assert.deepStrictEqual(includesSourceMap, false)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/css; charset=utf-8')
})
