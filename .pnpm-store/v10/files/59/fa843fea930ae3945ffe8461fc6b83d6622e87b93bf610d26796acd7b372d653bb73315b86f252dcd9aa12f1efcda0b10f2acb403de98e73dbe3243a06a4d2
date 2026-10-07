'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifyHelmet = require('@fastify/helmet')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('..')
const {
  schemaQuerystring,
  schemaBody,
  schemaParams,
  schemaSecurity,
  swaggerOption
} = require('../examples/options')
const csp = require('../static/csp.json')

test('staticCSP = undefined', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(typeof res.headers['content-security-policy'], 'undefined')
  t.assert.deepStrictEqual(typeof res.payload, 'string')
})

test('staticCSP = true', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, {
    staticCSP: true
  })

  fastify.get('/', () => { return '' })
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], `default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data: validator.swagger.io; object-src 'none'; script-src 'self' ${csp.script.join(' ')}; script-src-attr 'none'; style-src 'self' https: ${csp.style.join(' ')}; upgrade-insecure-requests;`)
    t.assert.deepStrictEqual(typeof res.payload, 'string')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(typeof res.headers['content-security-policy'], 'undefined')
  }
})

test('staticCSP = "default-src \'self\';"', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, {
    staticCSP: "default-src 'self';"
  })

  fastify.get('/', () => { return '' })
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], "default-src 'self';")
    t.assert.deepStrictEqual(typeof res.payload, 'string')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(typeof res.headers['content-security-policy'], 'undefined')
  }
})

test('staticCSP = object', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, {
    staticCSP: {
      'default-src': ["'self'"],
      'script-src': "'self'"
    }
  })

  fastify.get('/', () => { return '' })
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], "default-src 'self'; script-src 'self';")
    t.assert.deepStrictEqual(typeof res.payload, 'string')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(typeof res.headers['content-security-policy'], 'undefined')
  }
})

test('transformStaticCSP = function', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, {
    staticCSP: "default-src 'self';",
    transformStaticCSP: function (header) {
      t.assert.deepStrictEqual(header, "default-src 'self';")
      return "default-src 'self'; script-src 'self';"
    }
  })

  fastify.get('/', () => { return '' })
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], "default-src 'self'; script-src 'self';")
    t.assert.deepStrictEqual(typeof res.payload, 'string')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(typeof res.headers['content-security-policy'], 'undefined')
  }
})

test('transformStaticCSP = function, with @fastify/helmet', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.register(fastifyHelmet)
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, {
    transformStaticCSP: function (header) {
      t.assert.deepStrictEqual(header, "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")
      return "default-src 'self'; script-src 'self';"
    }
  })

  fastify.get('/', () => { return '' })
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], "default-src 'self'; script-src 'self';")
    t.assert.deepStrictEqual(typeof res.payload, 'string')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-security-policy'], "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")
  }
})
