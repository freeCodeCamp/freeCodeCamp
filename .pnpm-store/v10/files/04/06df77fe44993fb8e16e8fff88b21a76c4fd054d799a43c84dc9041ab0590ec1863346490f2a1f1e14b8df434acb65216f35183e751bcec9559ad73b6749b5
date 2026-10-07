'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')

test('/documentation/static/swagger-initializer.js should have default uiConfig', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-initializer.js'
  })

  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.ok(res.payload.includes('const config = {}'))
})

test('/documentation/static/swagger-initializer.js should have configurable uiConfig', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  await fastify.register(fastifySwagger)

  await fastify.register(fastifySwaggerUi, {
    // eslint-disable-next-line no-undef
    uiConfig: { onComplete: () => { alert('test') } }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-initializer.js'
  })

  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.ok(res.payload.includes("const config = {\"onComplete\":() => { alert('test') }}"))
})

test('/documentation/static/swagger-initializer.js should have default initOAuth', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-initializer.js'
  })

  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.ok(res.payload.includes('ui.initOAuth({})'))
})

test('/documentation/static/swagger-initializer.js should have configurable initOAuth', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi, {
    initOAuth: {
      clientId: 'someId'
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/swagger-initializer.js'
  })

  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.ok(res.payload.includes('ui.initOAuth({"clientId":"someId"})'))
})

test('customize logo', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, { logo: { type: 'image/png', content: 'foobar' } })

  const res = await fastify.inject('/documentation/static/swagger-initializer.js')
  t.assert.deepStrictEqual(res.body.includes('// Replace the logo'), true)
  t.assert.deepStrictEqual(res.body.indexOf(Buffer.from('foobar').toString('base64')) > -1, true)
})

test('customized logo has target', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, { logo: { type: 'image/png', content: 'foobar', target: '_self' } })

  const res = await fastify.inject('/documentation/static/swagger-initializer.js')
  t.assert.deepStrictEqual(res.body.includes("img.target = '_self'"), true)
})

test('customized logo has href', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, { logo: { type: 'image/png', content: 'foobar', href: 'http://www.example.com' } })

  const res = await fastify.inject('/documentation/static/swagger-initializer.js')
  t.assert.deepStrictEqual(res.body.includes("img.href = 'http://www.example.com'"), true)
})

test('no customized logo', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, { logo: null })

  const res = await fastify.inject('/documentation/static/swagger-initializer.js')
  t.assert.deepStrictEqual(res.body.includes('// Replace the logo'), false)
})
