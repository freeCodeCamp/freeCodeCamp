'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const S = require('fluent-json-schema')

test('use fluent-json-schema object', async (t) => {
  t.plan(10)
  const fastify = Fastify()

  fastify.post('/:id', {
    handler: (req, reply) => { reply.send({ name: 'a', surname: 'b', dateOfBirth: '01-01-2020' }) },
    schema: {
      params: S.object().prop('id', S.integer().minimum(42)),
      headers: S.object().prop('x-custom', S.string().format('email')),
      query: S.object().prop('surname', S.string().required()),
      body: S.object().prop('name', S.string().required()),
      response: {
        200: S.object()
          .prop('name', S.string())
          .prop('surname', S.string())
      }
    }
  })

  const res1 = await fastify.inject({
    method: 'POST',
    url: '/1',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  })
  t.assert.strictEqual(res1.statusCode, 400)
  t.assert.deepStrictEqual(res1.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: 'params/id must be >= 42' })

  // check header
  const res2 = await fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'invalid' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  })
  t.assert.strictEqual(res2.statusCode, 400)
  t.assert.deepStrictEqual(res2.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: 'headers/x-custom must match format "email"' })

  // check query
  const res3 = await fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { },
    payload: { name: 'foo' }
  })
  t.assert.strictEqual(res3.statusCode, 400)
  t.assert.deepStrictEqual(res3.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: 'querystring must have required property \'surname\'' })

  // check body
  const res4 = await fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: [1, 2, 3] }
  })
  t.assert.strictEqual(res4.statusCode, 400)
  t.assert.deepStrictEqual(res4.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: 'body/name must be string' })

  // check response
  const res5 = await fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  })
  t.assert.strictEqual(res5.statusCode, 200)
  t.assert.deepStrictEqual(res5.json(), { name: 'a', surname: 'b' })
})

test('use complex fluent-json-schema object', (t, done) => {
  t.plan(1)
  const fastify = Fastify()

  const addressSchema = S.object()
    .id('#address')
    .prop('line1').required()
    .prop('line2')
    .prop('country').required()
    .prop('city').required()
    .prop('zipcode').required()

  const commonSchemas = S.object()
    .id('https://fastify/demo')
    .definition('addressSchema', addressSchema)

  fastify.addSchema(commonSchemas)

  const bodyJsonSchema = S.object()
    .prop('residence', S.ref('https://fastify/demo#address')).required()
    .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

  fastify.post('/the/url', { schema: { body: bodyJsonSchema } }, () => { })
  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('use fluent schema and plain JSON schema', (t, done) => {
  t.plan(1)

  const fastify = Fastify()

  const addressSchema = S.object()
    .id('#address')
    .prop('line1').required()
    .prop('line2')
    .prop('country').required()
    .prop('city').required()
    .prop('zipcode').required()

  const commonSchemas = S.object()
    .id('https://fastify/demo')
    .definition('addressSchema', addressSchema)

  const sharedAddressSchema = {
    $id: 'sharedAddress',
    type: 'object',
    required: ['line1', 'country', 'city', 'zipcode'],
    properties: {
      line1: { type: 'string' },
      line2: { type: 'string' },
      country: { type: 'string' },
      city: { type: 'string' },
      zipcode: { type: 'string' }
    }
  }

  fastify.addSchema(commonSchemas)
  fastify.addSchema(sharedAddressSchema)

  const bodyJsonSchema = S.object()
    .prop('residence', S.ref('https://fastify/demo#address')).required()
    .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

  fastify.post('/the/url', { schema: { body: bodyJsonSchema } }, () => { })
  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Should call valueOf internally', (t, done) => {
  t.plan(1)

  const fastify = new Fastify()

  const addressSchema = S.object()
    .id('#address')
    .prop('line1').required()
    .prop('line2')
    .prop('country').required()
    .prop('city').required()
    .prop('zipcode').required()

  const commonSchemas = S.object()
    .id('https://fastify/demo')
    .definition('addressSchema', addressSchema)

  fastify.addSchema(commonSchemas)

  fastify.route({
    method: 'POST',
    url: '/query',
    handler: () => {},
    schema: {
      query: S.object().prop('hello', S.string()).required(),
      body: S.object().prop('hello', S.string()).required(),
      params: S.object().prop('hello', S.string()).required(),
      headers: S.object().prop('hello', S.string()).required(),
      response: {
        200: S.object().prop('hello', S.string()).required(),
        201: S.object().prop('hello', S.string()).required()
      }
    }
  })

  fastify.route({
    method: 'POST',
    url: '/querystring',
    handler: () => {},
    schema: {
      querystring: S.object().prop('hello', S.string()).required(),
      body: S.object().prop('hello', S.string()).required(),
      params: S.object().prop('hello', S.string()).required(),
      headers: S.object().prop('hello', S.string()).required(),
      response: {
        200: S.object().prop('hello', S.string()).required(),
        201: S.object().prop('hello', S.string()).required()
      }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})
