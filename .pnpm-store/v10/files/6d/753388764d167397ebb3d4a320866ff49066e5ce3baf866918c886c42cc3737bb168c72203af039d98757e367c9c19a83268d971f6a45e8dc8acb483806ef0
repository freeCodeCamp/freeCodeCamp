'use strict'

const { test } = require('node:test')
const { kReplyCacheSerializeFns, kRouteContext } = require('../../lib/symbols')
const Fastify = require('../../fastify')

function getDefaultSchema () {
  return {
    type: 'object',
    required: ['hello'],
    properties: {
      hello: { type: 'string' },
      world: { type: 'string' }
    }
  }
}

function getResponseSchema () {
  return {
    201: {
      type: 'object',
      required: ['status'],
      properties: {
        status: {
          type: 'string',
          enum: ['ok']
        },
        message: {
          type: 'string'
        }
      }
    },
    '4xx': {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['error']
        },
        code: {
          type: 'integer',
          minimum: 1
        },
        message: {
          type: 'string'
        }
      }
    },
    '3xx': {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              fullName: { type: 'string' },
              phone: { type: 'number' }
            }
          }
        }
      }
    }
  }
}

test('Reply#compileSerializationSchema', async t => {
  t.plan(4)

  await t.test('Should return a serialization function', async t => {
    const fastify = Fastify()

    t.plan(4)

    fastify.get('/', (req, reply) => {
      const serialize = reply.compileSerializationSchema(getDefaultSchema())
      const input = { hello: 'world' }
      t.assert.ok(serialize instanceof Function)
      t.assert.ok(typeof serialize(input) === 'string')
      t.assert.strictEqual(serialize(input), JSON.stringify(input))

      try {
        serialize({ world: 'foo' })
      } catch (err) {
        t.assert.strictEqual(err.message, '"hello" is required!')
      }

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await t.test('Should reuse the serialize fn across multiple invocations - Route without schema',
    async t => {
      const fastify = Fastify()
      let serialize = null
      let counter = 0

      t.plan(17)

      const schemaObj = getDefaultSchema()

      fastify.get('/', (req, reply) => {
        const input = { hello: 'world' }
        counter++
        if (counter > 1) {
          const newSerialize = reply.compileSerializationSchema(schemaObj)
          t.assert.strictEqual(serialize, newSerialize, 'Are the same validate function')
          serialize = newSerialize
        } else {
          t.assert.ok(true, 'build the schema compilation function')
          serialize = reply.compileSerializationSchema(schemaObj)
        }

        t.assert.ok(serialize instanceof Function)
        t.assert.strictEqual(serialize(input), JSON.stringify(input))

        try {
          serialize({ world: 'foo' })
        } catch (err) {
          t.assert.strictEqual(err.message, '"hello" is required!')
        }

        reply.send({ hello: 'world' })
      })

      await Promise.all([
        fastify.inject('/'),
        fastify.inject('/'),
        fastify.inject('/'),
        fastify.inject('/')
      ])

      t.assert.strictEqual(counter, 4)
    }
  )

  await t.test('Should use the custom serializer compiler for the route',
    async t => {
      const fastify = Fastify()
      let called = 0
      const custom = ({ schema, httpStatus, url, method }) => {
        t.assert.strictEqual(schema, schemaObj)
        t.assert.strictEqual(url, '/')
        t.assert.strictEqual(method, 'GET')
        t.assert.strictEqual(httpStatus, '201')

        return input => {
          called++
          t.assert.deepStrictEqual(input, { hello: 'world' })
          return JSON.stringify(input)
        }
      }

      const custom2 = ({ schema, httpStatus, url, method, contentType }) => {
        t.assert.strictEqual(schema, schemaObj)
        t.assert.strictEqual(url, '/user')
        t.assert.strictEqual(method, 'GET')
        t.assert.strictEqual(httpStatus, '3xx')
        t.assert.strictEqual(contentType, 'application/json')

        return input => {
          t.assert.deepStrictEqual(input, { fullName: 'Jone', phone: 1090243795 })
          return JSON.stringify(input)
        }
      }

      t.plan(17)
      const schemaObj = getDefaultSchema()

      fastify.get('/', { serializerCompiler: custom }, (req, reply) => {
        const input = { hello: 'world' }
        const first = reply.compileSerializationSchema(schemaObj, '201')
        const second = reply.compileSerializationSchema(schemaObj, '201')

        t.assert.strictEqual(first, second)
        t.assert.ok(first(input), JSON.stringify(input))
        t.assert.ok(second(input), JSON.stringify(input))
        t.assert.strictEqual(called, 2)

        reply.send({ hello: 'world' })
      })

      fastify.get('/user', { serializerCompiler: custom2 }, (req, reply) => {
        const input = { fullName: 'Jone', phone: 1090243795 }
        const first = reply.compileSerializationSchema(schemaObj, '3xx', 'application/json')
        t.assert.ok(first(input), JSON.stringify(input))
        reply.send(input)
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })

      await fastify.inject({
        path: '/user',
        method: 'GET'
      })
    }
  )

  await t.test('Should build a WeakMap for cache when called', async t => {
    const fastify = Fastify()

    t.plan(4)

    fastify.get('/', (req, reply) => {
      const input = { hello: 'world' }

      t.assert.strictEqual(reply[kRouteContext][kReplyCacheSerializeFns], null)
      t.assert.strictEqual(reply.compileSerializationSchema(getDefaultSchema())(input), JSON.stringify(input))
      t.assert.ok(reply[kRouteContext][kReplyCacheSerializeFns] instanceof WeakMap)
      t.assert.strictEqual(reply.compileSerializationSchema(getDefaultSchema())(input), JSON.stringify(input))

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })
})

test('Reply#getSerializationFunction', async t => {
  t.plan(3)

  await t.test('Should retrieve the serialization function from the Schema definition',
    async t => {
      const fastify = Fastify()
      const okInput201 = {
        status: 'ok',
        message: 'done!'
      }
      const notOkInput201 = {
        message: 'created'
      }
      const okInput4xx = {
        status: 'error',
        code: 2,
        message: 'oops!'
      }
      const notOkInput4xx = {
        status: 'error',
        code: 'something'
      }
      const okInput3xx = {
        fullName: 'Jone',
        phone: 0
      }
      const noOkInput3xx = {
        fullName: 'Jone',
        phone: 'phone'
      }
      let cached4xx
      let cached201
      let cachedJson3xx

      t.plan(13)

      const responseSchema = getResponseSchema()

      fastify.get(
        '/:id',
        {
          params: {
            type: 'object',
            properties: {
              id: {
                type: 'integer'
              }
            }
          },
          schema: {
            response: responseSchema
          }
        },
        (req, reply) => {
          const { id } = req.params

          if (Number(id) === 1) {
            const serialize4xx = reply.getSerializationFunction('4xx')
            const serialize201 = reply.getSerializationFunction(201)
            const serializeJson3xx = reply.getSerializationFunction('3xx', 'application/json')
            const serializeUndefined = reply.getSerializationFunction(undefined)

            cached4xx = serialize4xx
            cached201 = serialize201
            cachedJson3xx = serializeJson3xx

            t.assert.ok(serialize4xx instanceof Function)
            t.assert.ok(serialize201 instanceof Function)
            t.assert.ok(serializeJson3xx instanceof Function)
            t.assert.strictEqual(serialize4xx(okInput4xx), JSON.stringify(okInput4xx))
            t.assert.strictEqual(serialize201(okInput201), JSON.stringify(okInput201))
            t.assert.strictEqual(serializeJson3xx(okInput3xx), JSON.stringify(okInput3xx))
            t.assert.ok(!serializeUndefined)

            try {
              serialize4xx(notOkInput4xx)
            } catch (err) {
              t.assert.strictEqual(
                err.message,
                'The value "something" cannot be converted to an integer.'
              )
            }

            try {
              serialize201(notOkInput201)
            } catch (err) {
              t.assert.strictEqual(err.message, '"status" is required!')
            }

            try {
              serializeJson3xx(noOkInput3xx)
            } catch (err) {
              t.assert.strictEqual(err.message, 'The value "phone" cannot be converted to a number.')
            }

            reply.status(201).send(okInput201)
          } else {
            const serialize201 = reply.getSerializationFunction(201)
            const serialize4xx = reply.getSerializationFunction('4xx')
            const serializeJson3xx = reply.getSerializationFunction('3xx', 'application/json')

            t.assert.strictEqual(serialize4xx, cached4xx)
            t.assert.strictEqual(serialize201, cached201)
            t.assert.strictEqual(serializeJson3xx, cachedJson3xx)
            reply.status(401).send(okInput4xx)
          }
        }
      )

      await Promise.all([
        fastify.inject('/1'),
        fastify.inject('/2')
      ])
    }
  )

  await t.test('Should retrieve the serialization function from the cached one',
    async t => {
      const fastify = Fastify()

      const schemaObj = getDefaultSchema()

      const okInput = {
        hello: 'world',
        world: 'done!'
      }
      const notOkInput = {
        world: 'done!'
      }
      let cached

      t.plan(6)

      fastify.get(
        '/:id',
        {
          params: {
            type: 'object',
            properties: {
              id: {
                type: 'integer'
              }
            }
          }
        },
        (req, reply) => {
          const { id } = req.params

          if (Number(id) === 1) {
            const serialize = reply.compileSerializationSchema(schemaObj)

            t.assert.ok(serialize instanceof Function)
            t.assert.strictEqual(serialize(okInput), JSON.stringify(okInput))

            try {
              serialize(notOkInput)
            } catch (err) {
              t.assert.strictEqual(err.message, '"hello" is required!')
            }

            cached = serialize
          } else {
            const serialize = reply.getSerializationFunction(schemaObj)

            t.assert.strictEqual(serialize, cached)
            t.assert.strictEqual(serialize(okInput), JSON.stringify(okInput))

            try {
              serialize(notOkInput)
            } catch (err) {
              t.assert.strictEqual(err.message, '"hello" is required!')
            }
          }

          reply.status(201).send(okInput)
        }
      )

      await Promise.all([
        fastify.inject('/1'),
        fastify.inject('/2')
      ])
    }
  )

  await t.test('Should not instantiate a WeakMap if it is not needed', async t => {
    const fastify = Fastify()

    t.plan(4)

    fastify.get('/', (req, reply) => {
      t.assert.ok(!reply.getSerializationFunction(getDefaultSchema()))
      t.assert.strictEqual(reply[kRouteContext][kReplyCacheSerializeFns], null)
      t.assert.ok(!reply.getSerializationFunction('200'))
      t.assert.strictEqual(reply[kRouteContext][kReplyCacheSerializeFns], null)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })
})

test('Reply#serializeInput', async t => {
  t.plan(6)

  await t.test(
    'Should throw if missed serialization function from HTTP status',
    async t => {
      const fastify = Fastify()

      t.plan(2)

      fastify.get('/', (req, reply) => {
        reply.serializeInput({}, 201)
      })

      const result = await fastify.inject({
        path: '/',
        method: 'GET'
      })

      t.assert.strictEqual(result.statusCode, 500)
      t.assert.deepStrictEqual(result.json(), {
        statusCode: 500,
        code: 'FST_ERR_MISSING_SERIALIZATION_FN',
        error: 'Internal Server Error',
        message: 'Missing serialization function. Key "201"'
      })
    }
  )

  await t.test(
    'Should throw if missed serialization function from HTTP status with specific content type',
    async t => {
      const fastify = Fastify()

      t.plan(2)

      fastify.get('/', {
        schema: {
          response: {
            '3xx': {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      fullName: { type: 'string' },
                      phone: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        }
      }, (req, reply) => {
        reply.serializeInput({}, '3xx', 'application/vnd.v1+json')
      })

      const result = await fastify.inject({
        path: '/',
        method: 'GET'
      })

      t.assert.strictEqual(result.statusCode, 500)
      t.assert.deepStrictEqual(result.json(), {
        statusCode: 500,
        code: 'FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN',
        error: 'Internal Server Error',
        message: 'Missing serialization function. Key "3xx:application/vnd.v1+json"'
      })
    }
  )

  await t.test('Should use a serializer fn from HTTP status', async t => {
    const fastify = Fastify()
    const okInput201 = {
      status: 'ok',
      message: 'done!'
    }
    const notOkInput201 = {
      message: 'created'
    }
    const okInput4xx = {
      status: 'error',
      code: 2,
      message: 'oops!'
    }
    const notOkInput4xx = {
      status: 'error',
      code: 'something'
    }
    const okInput3xx = {
      fullName: 'Jone',
      phone: 0
    }
    const noOkInput3xx = {
      fullName: 'Jone',
      phone: 'phone'
    }

    t.plan(6)

    fastify.get(
      '/',
      {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'integer'
            }
          }
        },
        schema: {
          response: getResponseSchema()
        }
      },
      (req, reply) => {
        t.assert.strictEqual(
          reply.serializeInput(okInput4xx, '4xx'),
          JSON.stringify(okInput4xx)
        )
        t.assert.strictEqual(
          reply.serializeInput(okInput201, 201),
          JSON.stringify(okInput201)
        )

        t.assert.strictEqual(
          reply.serializeInput(okInput3xx, {}, '3xx', 'application/json'),
          JSON.stringify(okInput3xx)
        )

        try {
          reply.serializeInput(noOkInput3xx, '3xx', 'application/json')
        } catch (err) {
          t.assert.strictEqual(err.message, 'The value "phone" cannot be converted to a number.')
        }

        try {
          reply.serializeInput(notOkInput4xx, '4xx')
        } catch (err) {
          t.assert.strictEqual(
            err.message,
            'The value "something" cannot be converted to an integer.'
          )
        }

        try {
          reply.serializeInput(notOkInput201, 201)
        } catch (err) {
          t.assert.strictEqual(err.message, '"status" is required!')
        }

        reply.status(204).send('')
      }
    )

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await t.test(
    'Should compile a serializer out of a schema if serializer fn missed',
    async t => {
      let compilerCalled = 0
      let serializerCalled = 0
      const testInput = { hello: 'world' }
      const schemaObj = getDefaultSchema()
      const fastify = Fastify()
      const serializerCompiler = ({ schema, httpStatus, method, url }) => {
        t.assert.strictEqual(schema, schemaObj)
        t.assert.ok(!httpStatus)
        t.assert.strictEqual(method, 'GET')
        t.assert.strictEqual(url, '/')

        compilerCalled++
        return input => {
          t.assert.strictEqual(input, testInput)
          serializerCalled++
          return JSON.stringify(input)
        }
      }

      t.plan(10)

      fastify.get('/', { serializerCompiler }, (req, reply) => {
        t.assert.strictEqual(
          reply.serializeInput(testInput, schemaObj),
          JSON.stringify(testInput)
        )

        t.assert.strictEqual(
          reply.serializeInput(testInput, schemaObj),
          JSON.stringify(testInput)
        )

        reply.status(201).send(testInput)
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })

      t.assert.strictEqual(compilerCalled, 1)
      t.assert.strictEqual(serializerCalled, 2)
    }
  )

  await t.test('Should use a cached serializer fn', async t => {
    let compilerCalled = 0
    let serializerCalled = 0
    let cached
    const testInput = { hello: 'world' }
    const schemaObj = getDefaultSchema()
    const fastify = Fastify()
    const serializer = input => {
      t.assert.strictEqual(input, testInput)
      serializerCalled++
      return JSON.stringify(input)
    }
    const serializerCompiler = ({ schema, httpStatus, method, url }) => {
      t.assert.strictEqual(schema, schemaObj)
      t.assert.ok(!httpStatus)
      t.assert.strictEqual(method, 'GET')
      t.assert.strictEqual(url, '/')

      compilerCalled++
      return serializer
    }

    t.plan(12)

    fastify.get('/', { serializerCompiler }, (req, reply) => {
      t.assert.strictEqual(
        reply.serializeInput(testInput, schemaObj),
        JSON.stringify(testInput)
      )

      cached = reply.getSerializationFunction(schemaObj)

      t.assert.strictEqual(
        reply.serializeInput(testInput, schemaObj),
        cached(testInput)
      )

      reply.status(201).send(testInput)
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })

    t.assert.strictEqual(cached, serializer)
    t.assert.strictEqual(compilerCalled, 1)
    t.assert.strictEqual(serializerCalled, 3)
  })

  await t.test('Should instantiate a WeakMap after first call', async t => {
    const fastify = Fastify()

    t.plan(3)

    fastify.get('/', (req, reply) => {
      const input = { hello: 'world' }
      t.assert.strictEqual(reply[kRouteContext][kReplyCacheSerializeFns], null)
      t.assert.strictEqual(reply.serializeInput(input, getDefaultSchema()), JSON.stringify(input))
      t.assert.ok(reply[kRouteContext][kReplyCacheSerializeFns] instanceof WeakMap)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })
})
