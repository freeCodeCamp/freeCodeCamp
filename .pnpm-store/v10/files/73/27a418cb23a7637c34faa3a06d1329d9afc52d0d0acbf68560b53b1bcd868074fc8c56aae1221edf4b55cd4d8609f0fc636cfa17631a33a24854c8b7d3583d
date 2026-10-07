'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const { waitForCb } = require('./toolkit')

const echoBody = (req, reply) => { reply.send(req.body) }

test('basic test', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.get('/', {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            name: { type: 'string' },
            work: { type: 'string' }
          }
        }
      }
    }
  }, function (req, reply) {
    reply.code(200).send({ name: 'Foo', work: 'Bar', nick: 'Boo' })
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { name: 'Foo', work: 'Bar' })
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('custom serializer options', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify({
    serializerOpts: {
      rounding: 'ceil'
    }
  })
  fastify.get('/', {
    schema: {
      response: {
        '2xx': {
          type: 'integer'
        }
      }
    }
  }, function (req, reply) {
    reply.send(4.2)
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '5', 'it must use the ceil rounding')
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Different content types', (t, testDone) => {
  t.plan(46)

  const fastify = Fastify()
  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
      verified: { type: 'boolean' }
    }
  })

  fastify.get('/', {
    schema: {
      response: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  image: { type: 'string' },
                  address: { type: 'string' }
                }
              }
            },
            'application/vnd.v1+json': {
              schema: {
                type: 'array',
                items: { $ref: 'test' }
              }
            }
          }
        },
        201: {
          content: {
            '*/*': {
              schema: { type: 'string' }
            }
          }
        },
        202: {
          content: {
            '*/*': {
              schema: { const: 'Processing exclusive content' }
            }
          }
        },
        '3xx': {
          content: {
            'application/vnd.v2+json': {
              schema: {
                type: 'object',
                properties: {
                  fullName: { type: 'string' },
                  phone: { type: 'string' }
                }
              }
            }
          }
        },
        '4xx': {
          content: {
            '*/*': {
              schema: {
                type: 'object',
                properties: {
                  details: { type: 'string' }
                }
              }
            }
          }
        },
        default: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  details: { type: 'string' }
                }
              }
            },
            '*/*': {
              schema: {
                type: 'object',
                properties: {
                  desc: { type: 'string' },
                  details: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }, function (req, reply) {
    switch (req.headers.accept) {
      case 'application/json':
        reply.header('Content-Type', 'application/json')
        reply.send({ id: 1, name: 'Foo', image: 'profile picture', address: 'New Node' })
        break
      case 'application/vnd.v1+json':
        reply.header('Content-Type', 'application/vnd.v1+json')
        reply.send([{ id: 2, name: 'Boo', age: 18, verified: false }, { id: 3, name: 'Woo', age: 30, verified: true }])
        break
      case 'application/vnd.v2+json':
        reply.header('Content-Type', 'application/vnd.v2+json')
        reply.code(300)
        reply.send({ fullName: 'Jhon Smith', phone: '01090000000', authMethod: 'google' })
        break
      case 'application/vnd.v3+json':
        reply.header('Content-Type', 'application/vnd.v3+json')
        reply.code(300)
        reply.send({ firstName: 'New', lastName: 'Hoo', country: 'eg', city: 'node' })
        break
      case 'application/vnd.v4+json':
        reply.header('Content-Type', 'application/vnd.v4+json')
        reply.code(201)
        reply.send({ boxId: 1, content: 'Games' })
        break
      case 'application/vnd.v5+json':
        reply.header('Content-Type', 'application/vnd.v5+json')
        reply.code(202)
        reply.send({ content: 'interesting content' })
        break
      case 'application/vnd.v6+json':
        reply.header('Content-Type', 'application/vnd.v6+json')
        reply.code(400)
        reply.send({ desc: 'age is missing', details: 'validation error' })
        break
      case 'application/vnd.v7+json':
        reply.code(400)
        reply.send({ details: 'validation error' })
        break
      case 'application/vnd.v8+json':
        reply.header('Content-Type', 'application/vnd.v8+json')
        reply.code(500)
        reply.send({ desc: 'age is missing', details: 'validation error' })
        break
      case 'application/vnd.v9+json':
        reply.code(500)
        reply.send({ details: 'validation error' })
        break
      default:
        // to test if schema not found
        reply.header('Content-Type', 'application/vnd.v3+json')
        reply.code(200)
        reply.send([{ type: 'student', grade: 6 }, { type: 'student', grade: 9 }])
    }
  })

  fastify.get('/test', {
    serializerCompiler: ({ contentType }) => {
      t.assert.strictEqual(contentType, 'application/json')
      return data => JSON.stringify(data)
    },
    schema: {
      response: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  image: { type: 'string' },
                  address: { type: 'string' }
                }
              }
            }
          }
        },
        default: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  details: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }, function (req, reply) {
    switch (req.headers['code']) {
      case '200': {
        reply.header('Content-Type', 'application/json')
        reply.code(200).send({ age: 18, city: 'AU' })
        break
      }
      case '201': {
        reply.header('Content-Type', 'application/json')
        reply.code(201).send({ details: 'validation error' })
        break
      }
      default: {
        reply.header('Content-Type', 'application/vnd.v1+json')
        reply.code(201).send({ created: true })
        break
      }
    }
  })

  const completion = waitForCb({ steps: 14 })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ name: 'Foo', image: 'profile picture', address: 'New Node' }))
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v1+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify([{ name: 'Boo', age: 18, verified: false }, { name: 'Woo', age: 30, verified: true }]))
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify([{ type: 'student', grade: 6 }, { type: 'student', grade: 9 }]))
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v2+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ fullName: 'Jhon Smith', phone: '01090000000' }))
    t.assert.strictEqual(res.statusCode, 300)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v3+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ firstName: 'New', lastName: 'Hoo', country: 'eg', city: 'node' }))
    t.assert.strictEqual(res.statusCode, 300)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v4+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '"[object Object]"')
    t.assert.strictEqual(res.statusCode, 201)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v5+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '"Processing exclusive content"')
    t.assert.strictEqual(res.statusCode, 202)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v6+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ details: 'validation error' }))
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v7+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ details: 'validation error' }))
    t.assert.strictEqual(res.statusCode, 400)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v8+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ desc: 'age is missing', details: 'validation error' }))
    t.assert.strictEqual(res.statusCode, 500)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/', headers: { Accept: 'application/vnd.v9+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ details: 'validation error' }))
    t.assert.strictEqual(res.statusCode, 500)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/test', headers: { Code: '200' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ age: 18, city: 'AU' }))
    t.assert.strictEqual(res.statusCode, 200)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/test', headers: { Code: '201' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ details: 'validation error' }))
    t.assert.strictEqual(res.statusCode, 201)
    completion.stepIn()
  })
  fastify.inject({ method: 'GET', url: '/test', headers: { Accept: 'application/vnd.v1+json' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ created: true }))
    t.assert.strictEqual(res.statusCode, 201)
    completion.stepIn()
  })

  completion.patience.then(testDone)
})

test('Invalid multiple content schema, throw FST_ERR_SCH_CONTENT_MISSING_SCHEMA error', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/testInvalid', {
    schema: {
      response: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  fullName: { type: 'string' },
                  phone: { type: 'string' }
                }
              },
              example: {
                fullName: 'John Doe',
                phone: '201090243795'
              }
            },
            type: 'string'
          }
        }
      }
    }
  }, function (req, reply) {
    reply.header('Content-Type', 'application/json')
    reply.send({ fullName: 'Any name', phone: '0109001010' })
  })

  fastify.ready((err) => {
    t.assert.strictEqual(err.message, "Schema is missing for the content type 'type'")
    t.assert.strictEqual(err.statusCode, 500)
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_CONTENT_MISSING_SCHEMA')
    testDone()
  })
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

  fastify.get('/:id', {
    handler (req, reply) {
      reply.send([{ id: 1 }, { id: 2 }, { what: 'is this' }])
    },
    schema: {
      response: {
        200: {
          type: 'array',
          items: { $ref: 'test' }
        }
      }
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), [{ id: 1 }, { id: 2 }, {}])
    testDone()
  })
})

test('Use shared schema and $ref with $id in response ($ref to $id)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'http://foo/test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  const complexSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://foo/user',
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
    properties: {
      test: { $ref: 'http://foo/test#' },
      address: { $ref: '#address' }
    },
    required: ['address', 'test']
  }

  fastify.post('/', {
    schema: {
      body: complexSchema,
      response: {
        200: complexSchema
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
    t.assert.deepStrictEqual(res.json(), payload)
    completion.stepIn()
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { test: { id: Date.now() } }
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

test('Shared schema should be pass to serializer and validator ($ref to shared schema /definitions)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'http://fastify.test/asset.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Physical Asset',
    description: 'A generic representation of a physical asset',
    type: 'object',
    required: [
      'id',
      'model',
      'location'
    ],
    properties: {
      id: {
        type: 'string',
        format: 'uuid'
      },
      model: {
        type: 'string'
      },
      location: { $ref: 'http://fastify.test/point.json#' }
    },
    definitions: {
      inner: {
        $id: '#innerId',
        type: 'string',
        format: 'email'
      }
    }
  })

  fastify.addSchema({
    $id: 'http://fastify.test/point.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Longitude and Latitude Values',
    description: 'A geographical coordinate.',
    type: 'object',
    required: [
      'latitude',
      'longitude'
    ],
    properties: {
      email: { $ref: 'http://fastify.test/asset.json#/definitions/inner' },
      latitude: {
        type: 'number',
        minimum: -90,
        maximum: 90
      },
      longitude: {
        type: 'number',
        minimum: -180,
        maximum: 180
      },
      altitude: {
        type: 'number'
      }
    }
  })

  const schemaLocations = {
    $id: 'http://fastify.test/locations.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'List of Asset locations',
    type: 'array',
    items: { $ref: 'http://fastify.test/asset.json#' }
  }

  fastify.post('/', {
    schema: {
      body: schemaLocations,
      response: { 200: schemaLocations }
    }
  }, (req, reply) => {
    reply.send(locations.map(_ => Object.assign({ serializer: 'remove me' }, _)))
  })

  const locations = [
    { id: '550e8400-e29b-41d4-a716-446655440000', model: 'mod', location: { latitude: 10, longitude: 10, email: 'foo@bar.it' } },
    { id: '550e8400-e29b-41d4-a716-446655440000', model: 'mod', location: { latitude: 10, longitude: 10, email: 'foo@bar.it' } }
  ]
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: locations
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), locations)

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: locations.map(_ => {
        _.location.email = 'not an email'
        return _
      })
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 400)
      t.assert.deepStrictEqual(res.json(), {
        error: 'Bad Request',
        message: 'body/0/location/email must match format "email"',
        statusCode: 400,
        code: 'FST_ERR_VALIDATION'
      })
      testDone()
    })
  })
})

test('Custom setSerializerCompiler', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify({ exposeHeadRoutes: false })

  const outSchema = {
    $id: 'test',
    type: 'object',
    whatever: 'need to be parsed by the custom serializer'
  }

  fastify.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
    t.assert.strictEqual(method, 'GET')
    t.assert.strictEqual(url, '/foo/:id')
    t.assert.strictEqual(httpStatus, '200')
    t.assert.deepStrictEqual(schema, outSchema)
    return data => JSON.stringify(data)
  })

  fastify.register((instance, opts, done) => {
    instance.get('/:id', {
      handler (req, reply) {
        reply.send({ id: 1 })
      },
      schema: {
        response: {
          200: outSchema
        }
      }
    })
    t.assert.ok(instance.serializerCompiler, 'the serializer is set by the parent')
    done()
  }, { prefix: '/foo' })

  fastify.inject({
    method: 'GET',
    url: '/foo/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ id: 1 }))
    testDone()
  })
})

test('Custom setSerializerCompiler returns bad serialized output', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  const outSchema = {
    $id: 'test',
    type: 'object',
    whatever: 'need to be parsed by the custom serializer'
  }

  fastify.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
    return data => {
      t.assert.ok('returning an invalid serialization')
      return { not: 'a string' }
    }
  })

  fastify.get('/:id', {
    handler (req, reply) { throw new Error('ops') },
    schema: {
      response: {
        500: outSchema
      }
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(res.json(), {
      code: 'FST_ERR_REP_INVALID_PAYLOAD_TYPE',
      message: 'Attempted to send payload of invalid type \'object\'. Expected a string or Buffer.',
      statusCode: 500
    })
    testDone()
  })
})

test('Custom setSerializerCompiler with addSchema', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify({ exposeHeadRoutes: false })

  const outSchema = {
    $id: 'test',
    type: 'object',
    whatever: 'need to be parsed by the custom serializer'
  }

  fastify.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
    t.assert.strictEqual(method, 'GET')
    t.assert.strictEqual(url, '/foo/:id')
    t.assert.strictEqual(httpStatus, '200')
    t.assert.deepStrictEqual(schema, outSchema)
    return _data => JSON.stringify({ id: 2 })
  })

  // provoke re-creation of serialization compiler in setupSerializer
  fastify.addSchema({ $id: 'dummy', type: 'object' })

  fastify.get('/foo/:id', {
    handler (_req, reply) {
      reply.send({ id: 1 })
    },
    schema: {
      response: {
        200: outSchema
      }
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/foo/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, JSON.stringify({ id: 2 }))
    testDone()
  })
})

test('Custom serializer per route', async t => {
  const fastify = Fastify()

  const outSchema = {
    $id: 'test',
    type: 'object',
    properties: {
      mean: { type: 'string' }
    }
  }

  fastify.get('/default', {
    handler (req, reply) { reply.send({ mean: 'default' }) },
    schema: { response: { 200: outSchema } }
  })

  let hit = 0
  fastify.register((instance, opts, done) => {
    instance.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
      hit++
      return data => JSON.stringify({ mean: 'custom' })
    })
    instance.get('/custom', {
      handler (req, reply) { reply.send({}) },
      schema: { response: { 200: outSchema } }
    })
    instance.get('/route', {
      handler (req, reply) { reply.send({}) },
      serializerCompiler: ({ schema, method, url, httpPart }) => {
        hit++
        return data => JSON.stringify({ mean: 'route' })
      },
      schema: { response: { 200: outSchema } }
    })

    done()
  })

  let res = await fastify.inject('/default')
  t.assert.strictEqual(res.json().mean, 'default')

  res = await fastify.inject('/custom')
  t.assert.strictEqual(res.json().mean, 'custom')

  res = await fastify.inject('/route')
  t.assert.strictEqual(res.json().mean, 'route')

  t.assert.strictEqual(hit, 4, 'the custom and route serializer has been called')
})

test('Reply serializer win over serializer ', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.setReplySerializer(function (payload, statusCode) {
    t.assert.deepStrictEqual(payload, { name: 'Foo', work: 'Bar', nick: 'Boo' })
    return 'instance serializator'
  })

  fastify.get('/', {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            name: { type: 'string' },
            work: { type: 'string' }
          }
        }
      }
    },
    serializerCompiler: ({ schema, method, url, httpPart }) => {
      t.assert.ok(method, 'the custom compiler has been created')
      return () => {
        t.assert.fail('the serializer must not be called when there is a reply serializer')
        return 'fail'
      }
    }
  }, function (req, reply) {
    reply.code(200).send({ name: 'Foo', work: 'Bar', nick: 'Boo' })
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'instance serializator')
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Reply serializer win over serializer ', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.setReplySerializer(function (payload, statusCode) {
    t.assert.deepStrictEqual(payload, { name: 'Foo', work: 'Bar', nick: 'Boo' })
    return 'instance serializator'
  })

  fastify.get('/', {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            name: { type: 'string' },
            work: { type: 'string' }
          }
        }
      }
    },
    serializerCompiler: ({ schema, method, url, httpPart }) => {
      t.assert.ok(method, 'the custom compiler has been created')
      return () => {
        t.assert.fail('the serializer must not be called when there is a reply serializer')
        return 'fail'
      }
    }
  }, function (req, reply) {
    reply.code(200).send({ name: 'Foo', work: 'Bar', nick: 'Boo' })
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.payload, 'instance serializator')
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('The schema compiler recreate itself if needed', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.options('/', {
    schema: {
      response: { '2xx': { hello: { type: 'string' } } }
    }
  }, echoBody)

  fastify.register(function (fastify, options, done) {
    fastify.addSchema({
      $id: 'identifier',
      type: 'string',
      format: 'uuid'
    })

    fastify.get('/', {
      schema: {
        response: {
          '2xx': {
            foobarId: { $ref: 'identifier#' }
          }
        }
      }
    }, echoBody)

    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('The schema changes the default error handler output', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/:code', {
    schema: {
      response: {
        '2xx': { hello: { type: 'string' } },
        501: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        '5xx': {
          type: 'object',
          properties: {
            customId: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' }
          }
        }
      }
    }
  }, (request, reply) => {
    if (request.params.code === '501') {
      return reply.code(501).send(new Error('501 message'))
    }
    const error = new Error('500 message')
    error.customId = 42
    reply.send(error)
  })

  let res = await fastify.inject('/501')
  t.assert.strictEqual(res.statusCode, 501)
  t.assert.deepStrictEqual(res.json(), { message: '501 message' })

  res = await fastify.inject('/500')
  t.assert.strictEqual(res.statusCode, 500)
  t.assert.deepStrictEqual(res.json(), { error: 'Internal Server Error', message: '500 message', customId: 42 })
})

test('do not crash if status code serializer errors', async t => {
  const fastify = Fastify()

  const requiresFoo = {
    type: 'object',
    properties: { foo: { type: 'string' } },
    required: ['foo']
  }

  const someUserErrorType2 = {
    type: 'object',
    properties: {
      customCode: { type: 'number' }
    },
    required: ['customCode']
  }

  fastify.get(
    '/',
    {
      schema: {
        query: requiresFoo,
        response: { 400: someUserErrorType2 }
      }
    },
    (request, reply) => {
      t.assert.fail('handler, should not be called')
    }
  )

  const res = await fastify.inject({
    path: '/',
    query: {
      notfoo: true
    }
  })
  t.assert.strictEqual(res.statusCode, 500)
  t.assert.deepStrictEqual(res.json(), {
    statusCode: 500,
    code: 'FST_ERR_FAILED_ERROR_SERIALIZATION',
    message: 'Failed to serialize an error. Error: "customCode" is required!. ' +
      'Original error: querystring must have required property \'foo\''
  })
})

test('custom schema serializer error, empty message', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/:code', {
    schema: {
      response: {
        '2xx': { hello: { type: 'string' } },
        501: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  }, (request, reply) => {
    if (request.params.code === '501') {
      return reply.code(501).send(new Error(''))
    }
  })

  const res = await fastify.inject('/501')
  t.assert.strictEqual(res.statusCode, 501)
  t.assert.deepStrictEqual(res.json(), { message: '' })
})

test('error in custom schema serialize compiler, throw FST_ERR_SCH_SERIALIZATION_BUILD error', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            some: { type: 'string' }
          }
        },
        500: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    },
    serializerCompiler: () => {
      throw new Error('CUSTOM_ERROR')
    }
  }, function (req, reply) {
    reply.code(200).send({ some: 'thing' })
  })

  fastify.ready((err) => {
    t.assert.strictEqual(err.message, 'Failed building the serialization schema for GET: /, due to error CUSTOM_ERROR')
    t.assert.strictEqual(err.statusCode, 500)
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_SERIALIZATION_BUILD')
    testDone()
  })
})

test('Errors in serializer send to errorHandler', async t => {
  let savedError

  const fastify = Fastify()
  fastify.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            power: { type: 'string' }
          },
          required: ['name']
        }
      }
    }

  }, function (req, reply) {
    reply.code(200).send({ no: 'thing' })
  })
  fastify.setErrorHandler((error, request, reply) => {
    savedError = error
    reply.code(500).send(error)
  })

  const res = await fastify.inject('/')

  t.assert.strictEqual(res.statusCode, 500)

  // t.assert.deepStrictEqual(savedError, new Error('"name" is required!'));
  t.assert.deepStrictEqual(res.json(), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: '"name" is required!'
  })
  t.assert.ok(savedError, 'error presents')
  t.assert.ok(savedError.serialization, 'Serialization sign presents')
})

test('capital X', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.get('/', {
    schema: {
      response: {
        '2XX': {
          type: 'object',
          properties: {
            name: { type: 'string' },
            work: { type: 'string' }
          }
        }
      }
    }
  }, function (req, reply) {
    reply.code(200).send({ name: 'Foo', work: 'Bar', nick: 'Boo' })
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { name: 'Foo', work: 'Bar' })
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('allow default as status code and used as last fallback', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.route({
    url: '/',
    method: 'GET',
    schema: {
      response: {
        default: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            work: { type: 'string' }
          }
        }
      }
    },
    handler: (req, reply) => {
      reply.code(200).send({ name: 'Foo', work: 'Bar', nick: 'Boo' })
    }
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { name: 'Foo', work: 'Bar' })
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})
