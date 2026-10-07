'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const yaml = require('yaml')

const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')
const { swaggerOption, schemaBody } = require('../examples/options')

const authOptions = {
  validate (username, password, _req, _reply, done) {
    if (username === 'admin' && password === 'admin') {
      done()
    } else {
      done(new Error('Winter is coming'))
    }
  },
  authenticate: true
}

function basicAuthEncode (username, password) {
  return 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
}

test('hooks on static swagger', async t => {
  const fastify = Fastify()
  await fastify.register(require('@fastify/basic-auth'), authOptions)
  await fastify.register(fastifySwagger, {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  })
  await fastify.register(fastifySwaggerUi, {
    uiHooks: {
      onRequest: fastify.basicAuth
    }
  })

  let res = await fastify.inject('/documentation')
  t.assert.deepStrictEqual(res.statusCode, 401, 'root auth required')

  res = await fastify.inject('/documentation/yaml')
  t.assert.deepStrictEqual(res.statusCode, 401, 'auth required yaml')
  res = await fastify.inject({
    method: 'GET',
    url: '/documentation/yaml',
    headers: { authorization: basicAuthEncode('admin', 'admin') }
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers['content-type'], 'application/x-yaml')
  try {
    yaml.parse(res.payload)
    t.assert.ok(true, 'valid swagger yaml')
  } catch (err) {
    t.assert.fail(err)
  }

  res = await fastify.inject('/documentation/json')
  t.assert.deepStrictEqual(res.statusCode, 401, 'auth required json')
  res = await fastify.inject({
    method: 'GET',
    url: '/documentation/json',
    headers: { authorization: basicAuthEncode('admin', 'admin') }
  })
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  try {
    yaml.parse(res.payload)
    t.assert.ok(true, 'valid swagger json')
  } catch (err) {
    t.fail(err)
  }
})

test('hooks on dynamic swagger', async t => {
  const fastify = Fastify()
  await fastify.register(require('@fastify/basic-auth'), authOptions)

  await fastify.register(fastifySwagger, {
    ...swaggerOption
  })

  await fastify.register(fastifySwaggerUi, {
    uiHooks: {
      onRequest: fastify.basicAuth
    }
  })

  fastify.post('/fooBar123', schemaBody, () => {})

  let res = await fastify.inject('/documentation')
  t.assert.deepStrictEqual(res.statusCode, 401, 'root auth required')

  res = await fastify.inject('/documentation/yaml')
  t.assert.deepStrictEqual(res.statusCode, 401, 'auth required yaml')

  res = await fastify.inject('/documentation/json')
  t.assert.deepStrictEqual(res.statusCode, 401, 'auth required json')
  res = await fastify.inject({
    method: 'GET',
    url: '/documentation/json',
    headers: { authorization: basicAuthEncode('admin', 'admin') }
  })
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual(res.headers['content-type'], 'application/json; charset=utf-8')

  const swaggerObject = res.json()
  t.assert.ok(swaggerObject.paths)
  t.assert.ok(swaggerObject.paths['/fooBar123'])
})

test('catch all added schema', async t => {
  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: {},
    refResolver: {
      buildLocalReference: (json, _baseUri, _fragment, i) => {
        return json.$id || `def-${i}`
      }
    }
  })

  await fastify.register(fastifySwaggerUi)

  fastify.addSchema({ $id: 'Root', type: 'object', properties: {} })

  fastify.register(async function (instance) {
    instance.addSchema({ $id: 'Instance', type: 'object', properties: {} })

    await instance.register(async function (instance) {
      instance.addSchema({ $id: 'Sub-Instance', type: 'object', properties: {} })
    })
  })

  await fastify.ready()
  const openapi = fastify.swagger()
  t.assert.deepStrictEqual(Object.keys(openapi.components.schemas), ['Root', 'Instance', 'Sub-Instance'])
})
