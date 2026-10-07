'use strict'

const { test } = require('node:test')
const Fastify = require('..')

const AJV = require('ajv')
const Schema = require('fluent-json-schema')
const { waitForCb } = require('./toolkit')

const customSchemaCompilers = {
  body: new AJV({
    coerceTypes: false
  }),
  params: new AJV({
    coerceTypes: true
  }),
  querystring: new AJV({
    coerceTypes: true
  })
}

const customValidatorCompiler = req => {
  if (!req.httpPart) {
    throw new Error('Missing httpPart')
  }

  const compiler = customSchemaCompilers[req.httpPart]

  if (!compiler) {
    throw new Error(`Missing compiler for ${req.httpPart}`)
  }

  return compiler.compile(req.schema)
}

const schemaA = {
  $id: 'urn:schema:foo',
  type: 'object',
  definitions: {
    foo: { type: 'integer' }
  },
  properties: {
    foo: { $ref: '#/definitions/foo' }
  }
}
const schemaBRefToA = {
  $id: 'urn:schema:response',
  type: 'object',
  required: ['foo'],
  properties: {
    foo: { $ref: 'urn:schema:foo#/definitions/foo' }
  }
}

const schemaCRefToB = {
  $id: 'urn:schema:request',
  type: 'object',
  required: ['foo'],
  properties: {
    foo: { $ref: 'urn:schema:response#/properties/foo' }
  }
}

const schemaArtist = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    work: { type: 'string' }
  },
  required: ['name', 'work']
}

test('Basic validation test', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.post('/', {
    schema: {
      body: schemaArtist
    }
  }, function (req, reply) {
    reply.code(200).send(req.body.name)
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    payload: {
      name: 'michelangelo',
      work: 'sculptor, painter, architect and poet'
    },
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'michelangelo')
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    payload: { name: 'michelangelo' },
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: "body must have required property 'work'" })
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Different schema per content type', (t, testDone) => {
  t.plan(12)

  const fastify = Fastify()
  fastify.addContentTypeParser('application/octet-stream', {
    parseAs: 'buffer'
  }, async function (_, payload) {
    return payload
  })
  fastify.post('/', {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: schemaArtist
          },
          'application/octet-stream': {
            schema: {} // Skip validation
          },
          'text/plain': {
            schema: { type: 'string' }
          }
        }
      }
    }
  }, async function (req, reply) {
    return reply.send(req.body)
  })

  const completion = waitForCb({ steps: 4 })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      name: 'michelangelo',
      work: 'sculptor, painter, architect and poet'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload).name, 'michelangelo')
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { name: 'michelangelo' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { statusCode: 400, code: 'FST_ERR_VALIDATION', error: 'Bad Request', message: "body must have required property 'work'" })
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    body: Buffer.from('AAAAAAAA')
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'AAAAAAAA')
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: 'AAAAAAAA'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'AAAAAAAA')
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Skip validation if no schema for content type', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.post('/', {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: schemaArtist
          }
          // No schema for 'text/plain'
        }
      }
    }
  }, async function (req, reply) {
    return reply.send(req.body)
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: 'AAAAAAAA'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'AAAAAAAA')
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Skip validation if no content type schemas', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.post('/', {
    schema: {
      body: {
        content: {
          // No schemas
        }
      }
    }
  }, async function (req, reply) {
    return reply.send(req.body)
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: 'AAAAAAAA'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'AAAAAAAA')
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('External AJV instance', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()
  const ajv = new AJV()
  ajv.addSchema(schemaA)
  ajv.addSchema(schemaBRefToA)

  // the user must provide the schemas to fastify also
  fastify.addSchema(schemaA)
  fastify.addSchema(schemaBRefToA)

  fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    t.assert.ok('custom validator compiler called')
    return ajv.compile(schema)
  })

  fastify.post('/', {
    handler (req, reply) { reply.send({ foo: 1 }) },
    schema: {
      body: schemaCRefToB,
      response: {
        '2xx': ajv.getSchema('urn:schema:response').schema
      }
    }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { foo: 42 }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { foo: 'not a number' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Encapsulation', (t, testDone) => {
  t.plan(21)

  const fastify = Fastify()
  const ajv = new AJV()
  ajv.addSchema(schemaA)
  ajv.addSchema(schemaBRefToA)

  // the user must provide the schemas to fastify also
  fastify.addSchema(schemaA)
  fastify.addSchema(schemaBRefToA)

  fastify.register((instance, opts, done) => {
    const validator = ({ schema, method, url, httpPart }) => {
      t.assert.ok('custom validator compiler called')
      return ajv.compile(schema)
    }
    instance.setValidatorCompiler(validator)
    instance.post('/one', {
      handler (req, reply) { reply.send({ foo: 'one' }) },
      schema: {
        body: ajv.getSchema('urn:schema:response').schema
      }
    })

    instance.register((instance, opts, done) => {
      instance.post('/two', {
        handler (req, reply) {
          t.assert.deepStrictEqual(instance.validatorCompiler, validator)
          reply.send({ foo: 'two' })
        },
        schema: {
          body: ajv.getSchema('urn:schema:response').schema
        }
      })

      const anotherValidator = ({ schema, method, url, httpPart }) => {
        return () => { return true } // always valid
      }
      instance.post('/three', {
        validatorCompiler: anotherValidator,
        handler (req, reply) {
          t.assert.deepStrictEqual(instance.validatorCompiler, validator, 'the route validator does not change the instance one')
          reply.send({ foo: 'three' })
        },
        schema: {
          body: ajv.getSchema('urn:schema:response').schema
        }
      })
      done()
    })
    done()
  })

  fastify.register((instance, opts, done) => {
    instance.post('/clean', function (req, reply) {
      t.assert.strictEqual(instance.validatorCompiler, undefined)
      reply.send({ foo: 'bar' })
    })
    done()
  })

  const completion = waitForCb({ steps: 6 })
  fastify.inject({
    method: 'POST',
    url: '/one',
    payload: { foo: 1 }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: 'one' })
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/one',
    payload: { wrongFoo: 'bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/two',
    payload: { foo: 2 }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: 'two' })
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/two',
    payload: { wrongFoo: 'bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/three',
    payload: { wrongFoo: 'but works' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: 'three' })
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/clean',
    payload: { wrongFoo: 'bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: 'bar' })
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Triple $ref with a simple $id', (t, testDone) => {
  t.plan(7)

  const fastify = Fastify()
  const ajv = new AJV()
  ajv.addSchema(schemaA)
  ajv.addSchema(schemaBRefToA)
  ajv.addSchema(schemaCRefToB)

  // the user must provide the schemas to fastify also
  fastify.addSchema(schemaA)
  fastify.addSchema(schemaBRefToA)
  fastify.addSchema(schemaCRefToB)

  fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    t.assert.ok('custom validator compiler called')
    return ajv.compile(schema)
  })

  fastify.post('/', {
    handler (req, reply) { reply.send({ foo: 105, bar: 'foo' }) },
    schema: {
      body: ajv.getSchema('urn:schema:request').schema,
      response: {
        '2xx': ajv.getSchema('urn:schema:response').schema
      }
    }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { foo: 43 }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: 105 })
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { fool: 'bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(res.json().message, "body must have required property 'foo'")
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Extending schema', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'address.id',
    type: 'object',
    definitions: {
      address: {
        type: 'object',
        properties: {
          city: { type: 'string' },
          state: { type: 'string' }
        },
        required: ['city', 'state']
      }
    }
  })

  fastify.post('/', {
    handler (req, reply) { reply.send('works') },
    schema: {
      body: {
        type: 'object',
        properties: {
          billingAddress: { $ref: 'address.id#/definitions/address' },
          shippingAddress: {
            allOf: [
              { $ref: 'address.id#/definitions/address' },
              {
                type: 'object',
                properties: { type: { enum: ['residential', 'business'] } },
                required: ['type']
              }
            ]
          }
        }
      }
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      shippingAddress: {
        city: 'Forlì',
        state: 'FC'
      }
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      shippingAddress: {
        city: 'Forlì',
        state: 'FC',
        type: 'business'
      }
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Should work with nested ids', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  fastify.addSchema({
    $id: 'greetings',
    type: 'string'
  })

  fastify.post('/:id', {
    handler (req, reply) { reply.send(typeof req.params.id) },
    schema: {
      params: { $ref: 'test#' },
      body: {
        type: 'object',
        properties: {
          hello: { $ref: 'greetings#' }
        }
      }
    }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/123',
    payload: {
      hello: 'world'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'number')
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/abc',
    payload: {
      hello: 'world'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.strictEqual(res.json().message, 'params/id must be number')
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Use the same schema across multiple routes', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  fastify.get('/first/:id', {
    handler (req, reply) { reply.send(typeof req.params.id) },
    schema: {
      params: { $ref: 'test#' }
    }
  })

  fastify.get('/second/:id', {
    handler (req, reply) { reply.send(typeof req.params.id) },
    schema: {
      params: { $ref: 'test#' }
    }
  })

  const validTestCases = [
    '/first/123',
    '/second/123'
  ]

  for (const url of validTestCases) {
    const res = await fastify.inject({
      url,
      method: 'GET'
    })

    t.assert.strictEqual(res.payload, 'number')
  }

  const invalidTestCases = [
    '/first/abc',
    '/second/abc'
  ]

  for (const url of invalidTestCases) {
    const res = await fastify.inject({
      url,
      method: 'GET'
    })
    t.assert.strictEqual(res.statusCode, 400)
  }
})

test('JSON Schema validation keywords', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      ip: {
        type: 'string',
        format: 'ipv4'
      }
    }
  })

  fastify.get('/:ip', {
    handler (req, reply) { reply.send(typeof req.params.ip) },
    schema: {
      params: { $ref: 'test#' }
    }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'GET',
    url: '/127.0.0.1'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'string')
    completion.stepIn()
  })
  fastify.inject({
    method: 'GET',
    url: '/localhost'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(res.json(), {
      statusCode: 400,
      code: 'FST_ERR_VALIDATION',
      error: 'Bad Request',
      message: 'params/ip must match format "ipv4"'
    })
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Nested id calls', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      ip: {
        type: 'string',
        format: 'ipv4'
      }
    }
  })

  fastify.addSchema({
    $id: 'hello',
    type: 'object',
    properties: {
      host: { $ref: 'test#' }
    }
  })

  fastify.post('/', {
    handler (req, reply) { reply.send(typeof req.body.host.ip) },
    schema: {
      body: { $ref: 'hello#' }
    }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { host: { ip: '127.0.0.1' } }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'string')
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { host: { ip: 'localhost' } }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(res.json(), {
      error: 'Bad Request',
      message: 'body/host/ip must match format "ipv4"',
      statusCode: 400,
      code: 'FST_ERR_VALIDATION'
    })
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Use the same schema id in different places', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  fastify.post('/', {
    handler (req, reply) { reply.send({ id: req.body.id / 2 }) },
    schema: {
      body: { $ref: 'test#' },
      response: {
        200: { $ref: 'test#' }
      }
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { id: 42 }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { id: 21 })
    testDone()
  })
})

test('Use shared schema and $ref with $id ($ref to $id)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'http://foo/test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  const body = {
    $id: 'http://foo/user',
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    definitions: {
      address: {
        $id: '#address',
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    },
    required: ['address'],
    properties: {
      test: { $ref: 'http://foo/test#' }, // to external
      address: { $ref: '#address' } // to local
    }
  }

  fastify.post('/', {
    handler (req, reply) { reply.send(req.body.test) },
    schema: {
      body,
      response: {
        200: { $ref: 'http://foo/test#' }
      }
    }
  })

  const id = Date.now()
  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      address: { city: 'New Node' },
      test: { id }
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { id })
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { test: { id } }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(res.json(), {
      error: 'Bad Request',
      message: "body must have required property 'address'",
      statusCode: 400,
      code: 'FST_ERR_VALIDATION'
    })
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Use items with $ref', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'http://fastify.test/ref-to-external-validator.json',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    }
  })

  const body = {
    type: 'array',
    items: { $ref: 'http://fastify.test/ref-to-external-validator.json#' }
  }

  fastify.post('/', {
    schema: { body },
    handler: (_, r) => { r.send('ok') }
  })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: [{ hello: 'world' }]
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'ok')
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Use $ref to /definitions', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  const body = {
    type: 'object',
    definitions: {
      address: {
        $id: '#otherId',
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    },
    properties: {
      test: { $ref: 'test#' },
      address: { $ref: '#/definitions/address' }
    },
    required: ['address', 'test']
  }

  fastify.post('/', {
    schema: {
      body,
      response: {
        200: body
      }
    },
    handler: (req, reply) => {
      req.body.removeThis = 'it should not be serialized'
      reply.send(req.body)
    }
  })

  const payload = {
    address: { city: 'New Node' },
    test: { id: Date.now() }
  }
  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), payload)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      address: { city: 'New Node' },
      test: { id: 'wrong' }
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(res.json(), {
      error: 'Bad Request',
      message: 'body/test/id must be number',
      statusCode: 400,
      code: 'FST_ERR_VALIDATION'
    })
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Custom AJV settings - pt1', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', {
    schema: {
      body: {
        type: 'object',
        properties: {
          num: { type: 'integer' }
        }
      }
    },
    handler: (req, reply) => {
      t.assert.strictEqual(req.body.num, 12)
      reply.send(req.body)
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      num: '12'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { num: 12 })
    testDone()
  })
})

test('Custom AJV settings - pt2', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify({
    ajv: {
      customOptions: {
        coerceTypes: false
      }
    }
  })

  fastify.post('/', {
    schema: {
      body: {
        type: 'object',
        properties: {
          num: { type: 'integer' }
        }
      }
    },
    handler: (req, reply) => {
      t.fail('the handler is not called because the "12" is not coerced to number')
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {
      num: '12'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    testDone()
  })
})

test('Custom AJV settings on different parameters - pt1', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.setValidatorCompiler(customValidatorCompiler)

  fastify.post('/api/:id', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          id: { type: 'integer' }
        }
      },
      body: {
        type: 'object',
        properties: {
          num: { type: 'number' }
        },
        required: ['num']
      }
    },
    handler: (req, reply) => {
      t.fail('the handler is not called because the "12" is not coerced to number')
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/api/42',
    payload: {
      num: '12'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    testDone()
  })
})

test('Custom AJV settings on different parameters - pt2', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.setValidatorCompiler(customValidatorCompiler)

  fastify.post('/api/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        },
        required: ['id']
      },
      body: {
        type: 'object',
        properties: {
          num: { type: 'number' }
        },
        required: ['num']
      }
    },
    handler: (req, reply) => {
      t.assert.deepStrictEqual(typeof req.params.id, 'number')
      t.assert.deepStrictEqual(typeof req.body.num, 'number')
      t.assert.deepStrictEqual(req.params.id, 42)
      t.assert.deepStrictEqual(req.body.num, 12)
      testDone()
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/api/42',
    payload: {
      num: 12
    }
  })
})

test("The same $id in route's schema must not overwrite others", (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  const UserSchema = Schema.object()
    .id('http://mydomain.com/user')
    .title('User schema')
    .description('Contains all user fields')
    .prop('id', Schema.integer())
    .prop('username', Schema.string().minLength(4))
    .prop('firstName', Schema.string().minLength(1))
    .prop('lastName', Schema.string().minLength(1))
    .prop('fullName', Schema.string().minLength(1))
    .prop('email', Schema.string())
    .prop('password', Schema.string().minLength(6))
    .prop('bio', Schema.string())

  const userCreateSchema = UserSchema.only([
    'username',
    'firstName',
    'lastName',
    'email',
    'bio',
    'password',
    'password_confirm'
  ])
    .required([
      'username',
      'firstName',
      'lastName',
      'email',
      'bio',
      'password'
    ])

  const userPatchSchema = UserSchema.only([
    'firstName',
    'lastName',
    'bio'
  ])

  fastify
    .patch('/user/:id', {
      schema: { body: userPatchSchema },
      handler: () => { return 'ok' }
    })
    .post('/user', {
      schema: { body: userCreateSchema },
      handler: () => { return 'ok' }
    })

  const completion = waitForCb({ steps: 2 })
  fastify.inject({
    method: 'POST',
    url: '/user',
    body: {}
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json().message, "body must have required property 'username'")
    completion.stepIn()
  })
  fastify.inject({
    url: '/user/1',
    method: 'PATCH',
    body: {}
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'ok')
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('Custom validator compiler should not mutate schema', async t => {
  t.plan(2)
  class Headers { }
  const fastify = Fastify()

  fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    t.assert.ok(schema instanceof Headers)
    return () => { }
  })

  fastify.get('/', {
    schema: {
      headers: new Headers()
    }
  }, () => { })

  await fastify.ready()
})

test('Custom validator builder override by custom validator compiler', async t => {
  t.plan(3)
  const ajvDefaults = {
    removeAdditional: true,
    coerceTypes: true,
    allErrors: true
  }
  const ajv1 = new AJV(ajvDefaults).addKeyword({ keyword: 'extended_one', type: 'object', validator: () => true })
  const ajv2 = new AJV(ajvDefaults).addKeyword({ keyword: 'extended_two', type: 'object', validator: () => true })
  const fastify = Fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: () => (routeSchemaDef) => ajv1.compile(routeSchemaDef.schema)
      }
    }
  })

  fastify.setValidatorCompiler((routeSchemaDef) => ajv2.compile(routeSchemaDef.schema))

  fastify.post('/two/:id', {
    schema: {
      params: {
        type: 'object',
        extended_two: true,
        properties: {
          id: { type: 'number' }
        },
        required: ['id']
      }
    },
    handler: (req, _reply) => {
      t.assert.deepStrictEqual(typeof req.params.id, 'number')
      t.assert.deepStrictEqual(req.params.id, 43)
      return 'ok'
    }
  })

  await fastify.ready()

  const two = await fastify.inject({
    method: 'POST',
    url: '/two/43'
  })
  t.assert.strictEqual(two.statusCode, 200)
})

test('Custom validator builder override by custom validator compiler in child instance', async t => {
  t.plan(6)
  const ajvDefaults = {
    removeAdditional: true,
    coerceTypes: true,
    allErrors: true
  }
  const ajv1 = new AJV(ajvDefaults).addKeyword({ keyword: 'extended_one', type: 'object', validator: () => true })
  const ajv2 = new AJV(ajvDefaults).addKeyword({ keyword: 'extended_two', type: 'object', validator: () => true })
  const fastify = Fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: () => (routeSchemaDef) => ajv1.compile(routeSchemaDef.schema)
      }
    }
  })

  fastify.register((embedded, _opts, done) => {
    embedded.setValidatorCompiler((routeSchemaDef) => ajv2.compile(routeSchemaDef.schema))
    embedded.post('/two/:id', {
      schema: {
        params: {
          type: 'object',
          extended_two: true,
          properties: {
            id: { type: 'number' }
          },
          required: ['id']
        }
      },
      handler: (req, _reply) => {
        t.assert.deepStrictEqual(typeof req.params.id, 'number')
        t.assert.deepStrictEqual(req.params.id, 43)
        return 'ok'
      }
    })
    done()
  })

  fastify.post('/one/:id', {
    schema: {
      params: {
        type: 'object',
        extended_one: true,
        properties: {
          id: { type: 'number' }
        },
        required: ['id']
      }
    },
    handler: (req, _reply) => {
      t.assert.deepStrictEqual(typeof req.params.id, 'number')
      t.assert.deepStrictEqual(req.params.id, 42)
      return 'ok'
    }
  })

  await fastify.ready()

  const one = await fastify.inject({
    method: 'POST',
    url: '/one/42'
  })
  t.assert.strictEqual(one.statusCode, 200)

  const two = await fastify.inject({
    method: 'POST',
    url: '/two/43'
  })
  t.assert.strictEqual(two.statusCode, 200)
})

test('Schema validation when no content type is provided', async t => {
  // this case should not be happened in normal use-case,
  // it is added for the completeness of code branch
  const fastify = Fastify()

  fastify.post('/', {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                foo: { type: 'string' }
              },
              required: ['foo'],
              additionalProperties: false
            }
          }
        }
      }
    },
    preValidation: async (request) => {
      request.headers['content-type'] = undefined
    }
  }, async () => 'ok')

  await fastify.ready()

  const invalid = await fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/json'
    },
    body: { invalid: 'string' }
  })
  t.assert.strictEqual(invalid.statusCode, 200)
})

test('Schema validation will not be bypass by different content type', async t => {
  const fastify = Fastify()

  fastify.post('/', {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                foo: { type: 'string' }
              },
              required: ['foo'],
              additionalProperties: false
            }
          }
        }
      }
    }
  }, async () => 'ok')

  await fastify.listen({ port: 0 })
  t.after(() => fastify.close())
  const address = fastify.listeningOrigin

  let found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ foo: 'string' })
  })
  t.assert.strictEqual(found.status, 200)
  await found.bytes()

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ foo: 'string' })
  })
  t.assert.strictEqual(found.status, 200)
  await found.bytes()

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/json\t; charset=utf-8'
    },
    body: JSON.stringify({ foo: 'string' })
  })
  t.assert.strictEqual(found.status, 200)
  await found.bytes()

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/json ;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 400)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_VALIDATION')

  let injected = await fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'content-type': ' application/json'
    },
    payload: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(injected.statusCode, 400)
  t.assert.strictEqual(injected.json().code, 'FST_ERR_VALIDATION')

  injected = await fastify.inject({
    method: 'POST',
    url: '/',
    headers: {
      'content-type': ' application/json'
    },
    payload: JSON.stringify({ foo: 'string' })
  })
  t.assert.strictEqual(injected.statusCode, 200)

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 400)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_VALIDATION')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn ;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 400)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_VALIDATION')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn foo;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn \tfoo;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn\t foo;'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn \t'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 400)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_VALIDATION')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn\t'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 400)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_VALIDATION')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn\ta'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'ApPlIcAtIoN/JsOn\ta; charset=utf-8'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')

  found = await fetch(address, {
    method: 'POST',
    url: '/',
    headers: {
      'content-type': 'application/ json'
    },
    body: JSON.stringify({ invalid: 'string' })
  })
  t.assert.strictEqual(found.status, 415)
  t.assert.strictEqual((await found.json()).code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')
})
