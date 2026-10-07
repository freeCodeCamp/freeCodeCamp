'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const fp = require('fastify-plugin')
const deepClone = require('rfdc')({ circles: true, proto: false })
const Ajv = require('ajv')
const { kSchemaController } = require('../lib/symbols.js')
const { FSTWRN001 } = require('../lib/warnings')
const { waitForCb } = require('./toolkit')

const echoParams = (req, reply) => { reply.send(req.params) }
const echoBody = (req, reply) => { reply.send(req.body) }

  ;['addSchema', 'getSchema', 'getSchemas', 'setValidatorCompiler', 'setSerializerCompiler'].forEach(f => {
  test(`Should expose ${f} function`, t => {
    t.plan(1)
    const fastify = Fastify()
    t.assert.strictEqual(typeof fastify[f], 'function')
  })
})

;['setValidatorCompiler', 'setSerializerCompiler'].forEach(f => {
  test(`cannot call ${f} after binding`, (t, testDone) => {
    t.plan(2)
    const fastify = Fastify()
    t.after(() => fastify.close())
    fastify.listen({ port: 0 }, err => {
      t.assert.ifError(err)
      try {
        fastify[f](() => { })
        t.assert.fail()
      } catch (e) {
        t.assert.ok(true)
        testDone()
      }
    })
  })
})

test('The schemas should be added to an internal storage', t => {
  t.plan(1)
  const fastify = Fastify()
  const schema = { $id: 'id', my: 'schema' }
  fastify.addSchema(schema)
  t.assert.deepStrictEqual(fastify[kSchemaController].schemaBucket.store, { id: schema })
})

test('The schemas should be accessible via getSchemas', t => {
  t.plan(1)
  const fastify = Fastify()

  const schemas = {
    id: { $id: 'id', my: 'schema' },
    abc: { $id: 'abc', my: 'schema' },
    bcd: { $id: 'bcd', my: 'schema', properties: { a: 'a', b: 1 } }
  }

  Object.values(schemas).forEach(schema => { fastify.addSchema(schema) })
  t.assert.deepStrictEqual(fastify.getSchemas(), schemas)
})

test('The schema should be accessible by id via getSchema', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  const schemas = [
    { $id: 'id', my: 'schema' },
    { $id: 'abc', my: 'schema' },
    { $id: 'bcd', my: 'schema', properties: { a: 'a', b: 1 } }
  ]
  schemas.forEach(schema => { fastify.addSchema(schema) })
  t.assert.deepStrictEqual(fastify.getSchema('abc'), schemas[1])
  t.assert.deepStrictEqual(fastify.getSchema('id'), schemas[0])
  t.assert.deepStrictEqual(fastify.getSchema('foo'), undefined)

  fastify.register((instance, opts, done) => {
    const pluginSchema = { $id: 'cde', my: 'schema' }
    instance.addSchema(pluginSchema)
    t.assert.deepStrictEqual(instance.getSchema('cde'), pluginSchema)
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get validatorCompiler after setValidatorCompiler', (t, testDone) => {
  t.plan(2)
  const myCompiler = () => { }
  const fastify = Fastify()
  fastify.setValidatorCompiler(myCompiler)
  const sc = fastify.validatorCompiler
  t.assert.ok(Object.is(myCompiler, sc))
  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get serializerCompiler after setSerializerCompiler', (t, testDone) => {
  t.plan(2)
  const myCompiler = () => { }
  const fastify = Fastify()
  fastify.setSerializerCompiler(myCompiler)
  const sc = fastify.serializerCompiler
  t.assert.ok(Object.is(myCompiler, sc))
  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get compilers is empty when settle on routes', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.post('/', {
    schema: {
      body: { type: 'object', properties: { hello: { type: 'string' } } },
      response: {
        '2xx': {
          type: 'object',
          properties: {
            foo: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    },
    validatorCompiler: ({ schema, method, url, httpPart }) => { },
    serializerCompiler: ({ schema, method, url, httpPart }) => { }
  }, function (req, reply) {
    reply.send('ok')
  })

  fastify.inject({
    method: 'POST',
    payload: {},
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.validatorCompiler, undefined)
    t.assert.strictEqual(fastify.serializerCompiler, undefined)
    testDone()
  })
})

test('Should throw if the $id property is missing', t => {
  t.plan(1)
  const fastify = Fastify()
  try {
    fastify.addSchema({ type: 'string' })
    t.assert.fail()
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_MISSING_ID')
  }
})

test('Cannot add multiple times the same id', t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addSchema({ $id: 'id' })
  try {
    fastify.addSchema({ $id: 'id' })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_ALREADY_PRESENT')
    t.assert.strictEqual(err.message, 'Schema with id \'id\' already declared!')
  }
})

test('Cannot add schema for query and querystring', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/', {
    handler: () => { },
    schema: {
      query: {
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      },
      querystring: {
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_DUPLICATE')
    t.assert.strictEqual(err.message, 'Schema with \'querystring\' already present!')
    testDone()
  })
})

test('Should throw of the schema does not exists in input', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/:id', {
    handler: echoParams,
    schema: {
      params: {
        type: 'object',
        properties: {
          name: { $ref: '#notExist' }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_VALIDATION_BUILD')
    t.assert.strictEqual(err.message, "Failed building the validation schema for GET: /:id, due to error can't resolve reference #notExist from id #")
    testDone()
  })
})

test('Should throw if schema is missing for content type', (t, testDone) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.post('/', {
    handler: echoBody,
    schema: {
      body: {
        content: {
          'application/json': {}
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_CONTENT_MISSING_SCHEMA')
    t.assert.strictEqual(err.message, "Schema is missing for the content type 'application/json'")
    testDone()
  })
})

test('Should throw of the schema does not exists in output', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/:id', {
    handler: echoParams,
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            name: { $ref: '#notExist' }
          }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_SERIALIZATION_BUILD')
    t.assert.match(err.message, /^Failed building the serialization schema for GET: \/:id, due to error Cannot find reference.*/) // error from fast-json-stringify
    testDone()
  })
})

test('Should not change the input schemas', (t, testDone) => {
  t.plan(4)

  const theSchema = {
    $id: 'helloSchema',
    type: 'object',
    definitions: {
      hello: { type: 'string' }
    }
  }

  const fastify = Fastify()
  fastify.post('/', {
    handler: echoBody,
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { $ref: 'helloSchema#/definitions/hello' }
        }
      },
      response: {
        '2xx': {
          type: 'object',
          properties: {
            name: { $ref: 'helloSchema#/definitions/hello' }
          }
        }
      }
    }
  })
  fastify.addSchema(theSchema)

  fastify.inject({
    url: '/',
    method: 'POST',
    payload: { name: 'Foo', surname: 'Bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { name: 'Foo' })
    t.assert.ok(theSchema.$id, 'the $id is not removed')
    t.assert.deepStrictEqual(fastify.getSchema('helloSchema'), theSchema)
    testDone()
  })
})

test('Should emit warning if the schema headers is undefined', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN001.code)
  }

  t.after(() => {
    process.removeListener('warning', onWarning)
    FSTWRN001.emitted = false
  })

  fastify.post('/:id', {
    handler: echoParams,
    schema: {
      headers: undefined
    }
  })

  fastify.inject({
    method: 'POST',
    url: '/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Should emit warning if the schema body is undefined', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN001.code)
  }

  t.after(() => {
    process.removeListener('warning', onWarning)
    FSTWRN001.emitted = false
  })

  fastify.post('/:id', {
    handler: echoParams,
    schema: {
      body: undefined
    }
  })

  fastify.inject({
    method: 'POST',
    url: '/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Should emit warning if the schema query is undefined', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN001.code)
  }

  t.after(() => {
    process.removeListener('warning', onWarning)
    FSTWRN001.emitted = false
  })

  fastify.post('/:id', {
    handler: echoParams,
    schema: {
      querystring: undefined
    }
  })

  fastify.inject({
    method: 'POST',
    url: '/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Should emit warning if the schema params is undefined', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN001.code)
  }

  t.after(() => {
    process.removeListener('warning', onWarning)
    FSTWRN001.emitted = false
  })

  fastify.post('/:id', {
    handler: echoParams,
    schema: {
      params: undefined
    }
  })

  fastify.inject({
    method: 'POST',
    url: '/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Should emit a warning for every route with undefined schema', (t, testDone) => {
  t.plan(16)
  const fastify = Fastify()

  let runs = 0
  const expectedWarningEmitted = [0, 1, 2, 3]
  // It emits 4 warnings:
  // - 2 - GET and HEAD for /undefinedParams/:id
  // - 2 - GET and HEAD for /undefinedBody/:id
  // => 3 x 4 assertions = 12 assertions
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN001.code)
    t.assert.strictEqual(runs++, expectedWarningEmitted.shift())
  }

  process.on('warning', onWarning)
  t.after(() => {
    process.removeListener('warning', onWarning)
    FSTWRN001.emitted = false
  })

  fastify.get('/undefinedParams/:id', {
    handler: echoParams,
    schema: {
      params: undefined
    }
  })

  fastify.get('/undefinedBody/:id', {
    handler: echoParams,
    schema: {
      body: undefined
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/undefinedParams/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'GET',
    url: '/undefinedBody/123'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('First level $ref', (t, testDone) => {
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
    handler: (req, reply) => {
      reply.send({ id: req.params.id * 2, ignore: 'it' })
    },
    schema: {
      params: { $ref: 'test#' },
      response: {
        200: { $ref: 'test#' }
      }
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { id: 246 })
    testDone()
  })
})

test('Customize validator compiler in instance and route', t => {
  t.plan(28)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    t.assert.strictEqual(method, 'POST') // run 4 times
    t.assert.strictEqual(url, '/:id') // run 4 times
    switch (httpPart) {
      case 'body':
        t.assert.ok('body evaluated')
        return body => {
          t.assert.deepStrictEqual(body, { foo: ['bar', 'BAR'] })
          return true
        }
      case 'params':
        t.assert.ok('params evaluated')
        return params => {
          t.assert.strictEqual(params.id, '1234')
          return true
        }
      case 'querystring':
        t.assert.ok('querystring evaluated')
        return query => {
          t.assert.strictEqual(query.lang, 'en')
          return true
        }
      case 'headers':
        t.assert.ok('headers evaluated')
        return headers => {
          t.assert.strictEqual(headers.x, 'hello')
          return true
        }
      case '2xx':
        t.assert.fail('the validator doesn\'t process the response')
        break
      default:
        t.assert.fail(`unknown httpPart ${httpPart}`)
    }
  })

  fastify.post('/:id', {
    handler: echoBody,
    schema: {
      query: {
        type: 'object',
        properties: {
          lang: { type: 'string', enum: ['it', 'en'] }
        }
      },
      headers: {
        type: 'object',
        properties: {
          x: { type: 'string' }
        }
      },
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      body: {
        type: 'object',
        properties: {
          foo: { type: 'array' }
        }
      },
      response: {
        '2xx': {
          type: 'object',
          properties: {
            foo: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    }
  })

  fastify.get('/wow/:id', {
    handler: echoParams,
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      t.assert.strictEqual(method, 'GET') // run 3 times (params, headers, query)
      t.assert.strictEqual(url, '/wow/:id') // run 4 times
      return () => { return true } // ignore the validation
    },
    schema: {
      query: {
        type: 'object',
        properties: {
          lang: { type: 'string', enum: ['it', 'en'] }
        }
      },
      headers: {
        type: 'object',
        properties: {
          x: { type: 'string' }
        }
      },
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      response: {
        '2xx': {
          type: 'object',
          properties: {
            foo: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    }
  })

  const { stepIn, patience } = waitForCb({ steps: 2 })

  fastify.inject({
    url: '/1234',
    method: 'POST',
    headers: { x: 'hello' },
    query: { lang: 'en' },
    payload: { foo: ['bar', 'BAR'] }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { foo: ['bar', 'BAR'] })
    stepIn()
  })

  fastify.inject({
    url: '/wow/should-be-a-num',
    method: 'GET',
    headers: { x: 'hello' },
    query: { lang: 'jp' } // not in the enum
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200) // the validation is always true
    t.assert.deepStrictEqual(res.json(), {})
    stepIn()
  })

  return patience
})

test('Use the same schema across multiple routes', (t, testDone) => {
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
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { $ref: 'test#/properties/id' }
        }
      }
    },
    handler: (req, reply) => {
      reply.send(typeof req.params.id)
    }
  })

  fastify.get('/second/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { $ref: 'test#/properties/id' }
        }
      }
    },
    handler: (req, reply) => {
      reply.send(typeof req.params.id)
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/first/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'number')
  })

  fastify.inject({
    method: 'GET',
    url: '/second/123'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'number')
    testDone()
  })
})

test('Encapsulation should intervene', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addSchema({
      $id: 'encapsulation',
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    })
    done()
  })

  fastify.register((instance, opts, done) => {
    instance.get('/:id', {
      handler: echoParams,
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { $ref: 'encapsulation#/properties/id' }
          }
        }
      }
    })
    done()
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_VALIDATION_BUILD')
    t.assert.strictEqual(err.message, "Failed building the validation schema for GET: /:id, due to error can't resolve reference encapsulation#/properties/id from id #")
    testDone()
  })
})

test('Encapsulation isolation', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addSchema({ $id: 'id' })
    done()
  })

  fastify.register((instance, opts, done) => {
    instance.addSchema({ $id: 'id' })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Add schema after register', (t, testDone) => {
  t.plan(5)

  const fastify = Fastify()
  fastify.register((instance, opts, done) => {
    instance.get('/:id', {
      handler: echoParams,
      schema: {
        params: { $ref: 'test#' }
      }
    })

    // add it to the parent instance
    fastify.addSchema({
      $id: 'test',
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    })

    try {
      instance.addSchema({ $id: 'test' })
    } catch (err) {
      t.assert.strictEqual(err.code, 'FST_ERR_SCH_ALREADY_PRESENT')
      t.assert.strictEqual(err.message, 'Schema with id \'test\' already declared!')
    }
    done()
  })

  fastify.inject({
    method: 'GET',
    url: '/4242'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { id: 4242 })
    testDone()
  })
})

test('Encapsulation isolation for getSchemas', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  let pluginDeepOneSide
  let pluginDeepOne
  let pluginDeepTwo

  const schemas = {
    z: { $id: 'z', my: 'schema' },
    a: { $id: 'a', my: 'schema' },
    b: { $id: 'b', my: 'schema' },
    c: { $id: 'c', my: 'schema', properties: { a: 'a', b: 1 } }
  }

  fastify.addSchema(schemas.z)

  fastify.register((instance, opts, done) => {
    instance.addSchema(schemas.a)
    pluginDeepOneSide = instance
    done()
  })

  fastify.register((instance, opts, done) => {
    instance.addSchema(schemas.b)
    instance.register((subinstance, opts, done) => {
      subinstance.addSchema(schemas.c)
      pluginDeepTwo = subinstance
      done()
    })
    pluginDeepOne = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(fastify.getSchemas(), { z: schemas.z })
    t.assert.deepStrictEqual(pluginDeepOneSide.getSchemas(), { z: schemas.z, a: schemas.a })
    t.assert.deepStrictEqual(pluginDeepOne.getSchemas(), { z: schemas.z, b: schemas.b })
    t.assert.deepStrictEqual(pluginDeepTwo.getSchemas(), { z: schemas.z, b: schemas.b, c: schemas.c })
    testDone()
  })
})

test('Use the same schema id in different places', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  })

  fastify.get('/:id', {
    handler: echoParams,
    schema: {
      response: {
        200: {
          type: 'array',
          items: { $ref: 'test#/properties/id' }
        }
      }
    }
  })

  fastify.post('/:id', {
    handler: echoBody,
    schema: {
      body: {
        type: 'object',
        properties: {
          id: { $ref: 'test#/properties/id' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { $ref: 'test#/properties/id' }
          }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get schema anyway should not add `properties` if allOf is present', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'first',
    type: 'object',
    properties: {
      first: { type: 'number' }
    }
  })

  fastify.addSchema({
    $id: 'second',
    type: 'object',
    allOf: [
      {
        type: 'object',
        properties: {
          second: { type: 'number' }
        }
      },
      fastify.getSchema('first')
    ]
  })

  fastify.get('/', {
    handler: () => { },
    schema: {
      querystring: fastify.getSchema('second'),
      response: { 200: fastify.getSchema('second') }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get schema anyway should not add `properties` if oneOf is present', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'first',
    type: 'object',
    properties: {
      first: { type: 'number' }
    }
  })

  fastify.addSchema({
    $id: 'second',
    type: 'object',
    oneOf: [
      {
        type: 'object',
        properties: {
          second: { type: 'number' }
        }
      },
      fastify.getSchema('first')
    ]
  })

  fastify.get('/', {
    handler: () => { },
    schema: {
      querystring: fastify.getSchema('second'),
      response: { 200: fastify.getSchema('second') }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Get schema anyway should not add `properties` if anyOf is present', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'first',
    type: 'object',
    properties: {
      first: { type: 'number' }
    }
  })

  fastify.addSchema({
    $id: 'second',
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          second: { type: 'number' }
        }
      },
      fastify.getSchema('first')
    ]
  })

  fastify.get('/', {
    handler: () => { },
    schema: {
      querystring: fastify.getSchema('second'),
      response: { 200: fastify.getSchema('second') }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Shared schema should be ignored in string enum', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/:lang', {
    handler: echoParams,
    schema: {
      params: {
        type: 'object',
        properties: {
          lang: {
            type: 'string',
            enum: ['Javascript', 'C++', 'C#']
          }
        }
      }
    }
  })

  fastify.inject('/C%23', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { lang: 'C#' })
    testDone()
  })
})

test('Shared schema should NOT be ignored in != string enum', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addSchema({
    $id: 'C',
    type: 'object',
    properties: {
      lang: {
        type: 'string',
        enum: ['Javascript', 'C++', 'C#']
      }
    }
  })

  fastify.post('/:lang', {
    handler: echoBody,
    schema: {
      body: fastify.getSchema('C')
    }
  })

  fastify.inject({
    url: '/',
    method: 'POST',
    payload: { lang: 'C#' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { lang: 'C#' })
    testDone()
  })
})

test('Case insensitive header validation', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  fastify.get('/', {
    handler: (req, reply) => {
      reply.code(200).send(req.headers.foobar)
    },
    schema: {
      headers: {
        type: 'object',
        required: ['FooBar'],
        properties: {
          FooBar: { type: 'string' }
        }
      }
    }
  })
  fastify.inject({
    url: '/',
    method: 'GET',
    headers: {
      FooBar: 'Baz'
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'Baz')
    testDone()
  })
})

test('Not evaluate json-schema $schema keyword', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  fastify.post('/', {
    handler: echoBody,
    schema: {
      body: {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object',
        additionalProperties: false,
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  })
  fastify.inject({
    url: '/',
    method: 'POST',
    body: { hello: 'world', foo: 'bar' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(res.json(), { hello: 'world' })
    testDone()
  })
})

test('Validation context in validation result', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()
  // custom error handler to expose validation context in response, so we can test it later
  fastify.setErrorHandler((err, request, reply) => {
    t.assert.strictEqual(err instanceof Error, true)
    t.assert.ok(err.validation, 'detailed errors')
    t.assert.strictEqual(err.validationContext, 'body')
    reply.code(400).send()
  })
  fastify.post('/', {
    handler: echoParams,
    schema: {
      body: {
        type: 'object',
        required: ['hello'],
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    payload: {} // body lacks required field, will fail validation
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    testDone()
  })
})

test('The schema build should not modify the input', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  const first = {
    $id: 'first',
    type: 'object',
    properties: {
      first: {
        type: 'number'
      }
    }
  }

  fastify.addSchema(first)

  fastify.addSchema({
    $id: 'second',
    type: 'object',
    allOf: [
      {
        type: 'object',
        properties: {
          second: {
            type: 'number'
          }
        }
      },
      { $ref: 'first#' }
    ]
  })

  fastify.post('/', {
    schema: {
      description: 'get',
      body: { $ref: 'second#' },
      response: {
        200: { $ref: 'second#' }
      }
    },
    handler: (request, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  fastify.patch('/', {
    schema: {
      description: 'patch',
      body: { $ref: 'first#' },
      response: {
        200: { $ref: 'first#' }
      }
    },
    handler: (request, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  t.assert.ok(first.$id)
  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.ok(first.$id)
    testDone()
  })
})

test('Cross schema reference with encapsulation references', (t, testDone) => {
  t.plan(1)

  const fastify = Fastify()
  fastify.addSchema({
    $id: 'http://foo/item',
    type: 'object',
    properties: { foo: { type: 'string' } }
  })

  const refItem = { $ref: 'http://foo/item#' }

  fastify.addSchema({
    $id: 'itemList',
    type: 'array',
    items: refItem
  })

  fastify.register((instance, opts, done) => {
    instance.addSchema({
      $id: 'encapsulation',
      type: 'object',
      properties: {
        id: { type: 'number' },
        item: refItem,
        secondItem: refItem
      }
    })

    const multipleRef = {
      type: 'object',
      properties: {
        a: { $ref: 'itemList#' },
        b: refItem,
        c: refItem,
        d: refItem
      }
    }

    instance.get('/get', { schema: { response: { 200: deepClone(multipleRef) } } }, () => { })
    instance.get('/double-get', { schema: { querystring: multipleRef, response: { 200: multipleRef } } }, () => { })
    instance.post('/post', { schema: { body: multipleRef, response: { 200: multipleRef } } }, () => { })
    instance.post('/double', { schema: { response: { 200: { $ref: 'encapsulation' } } } }, () => { })
    done()
  }, { prefix: '/foo' })

  fastify.post('/post', { schema: { body: refItem, response: { 200: refItem } } }, () => { })
  fastify.get('/get', { schema: { params: refItem, response: { 200: refItem } } }, () => { })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('Check how many AJV instances are built #1', (t, testDone) => {
  t.plan(12)
  const fastify = Fastify()
  addRandomRoute(fastify) // this trigger the schema validation creation
  t.assert.ok(!fastify.validatorCompiler, 'validator not initialized')

  const instances = []
  fastify.register((instance, opts, done) => {
    t.assert.ok(!fastify.validatorCompiler, 'validator not initialized')
    instances.push(instance)
    done()
  })
  fastify.register((instance, opts, done) => {
    t.assert.ok(!fastify.validatorCompiler, 'validator not initialized')
    addRandomRoute(instance)
    instances.push(instance)
    done()
    instance.register((instance, opts, done) => {
      t.assert.ok(!fastify.validatorCompiler, 'validator not initialized')
      addRandomRoute(instance)
      instances.push(instance)
      done()
    })
  })

  fastify.ready(err => {
    t.assert.ifError(err)

    t.assert.ok(fastify.validatorCompiler, 'validator initialized on preReady')
    fastify.validatorCompiler.checkPointer = true
    instances.forEach(i => {
      t.assert.ok(i.validatorCompiler, 'validator initialized on preReady')
      t.assert.strictEqual(i.validatorCompiler.checkPointer, true, 'validator is only one for all the instances')
    })
    testDone()
  })
})

test('onReady hook has the compilers ready', (t, testDone) => {
  t.plan(6)

  const fastify = Fastify()

  fastify.get(`/${Math.random()}`, {
    handler: (req, reply) => reply.send(),
    schema: {
      headers: { type: 'object' },
      response: { 200: { type: 'object' } }
    }
  })

  fastify.addHook('onReady', function (done) {
    t.assert.ok(this.validatorCompiler)
    t.assert.ok(this.serializerCompiler)
    done()
  })

  let hookCallCounter = 0
  fastify.register(async (i, o) => {
    i.addHook('onReady', function (done) {
      t.assert.ok(this.validatorCompiler)
      t.assert.ok(this.serializerCompiler)
      done()
    })

    i.register(async (i, o) => { })

    i.addHook('onReady', function (done) {
      hookCallCounter++
      done()
    })
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(hookCallCounter, 1, 'it is called once')
    testDone()
  })
})

test('Check how many AJV instances are built #2 - verify validatorPool', (t, testDone) => {
  t.plan(13)
  const fastify = Fastify()
  t.assert.ok(!fastify.validatorCompiler, 'validator not initialized')

  fastify.register(function sibling1 (instance, opts, done) {
    addRandomRoute(instance)
    t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
    instance.ready(() => {
      t.assert.ok(instance.validatorCompiler, 'validator is initialized')
      instance.validatorCompiler.sharedPool = 1
    })
    instance.after(() => {
      t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
    })
    done()
  })

  fastify.register(function sibling2 (instance, opts, done) {
    addRandomRoute(instance)
    t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
    instance.ready(() => {
      t.assert.strictEqual(instance.validatorCompiler.sharedPool, 1, 'this context must share the validator with the same schemas')
      instance.validatorCompiler.sharedPool = 2
    })
    instance.after(() => {
      t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
    })

    instance.register((instance, opts, done) => {
      t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
      instance.ready(() => {
        t.assert.strictEqual(instance.validatorCompiler.sharedPool, 2, 'this context must share the validator of the parent')
      })
      done()
    })
    done()
  })

  fastify.register(function sibling3 (instance, opts, done) {
    addRandomRoute(instance)

    // this trigger to don't reuse the same compiler pool
    instance.addSchema({ $id: 'diff', type: 'object' })

    t.assert.ok(!instance.validatorCompiler, 'validator not initialized')
    instance.ready(() => {
      t.assert.ok(instance.validatorCompiler, 'validator is initialized')
      t.assert.ok(!instance.validatorCompiler.sharedPool, 'this context has its own compiler')
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

function addRandomRoute (server) {
  server.post(`/${Math.random()}`,
    { schema: { body: { type: 'object' } } },
    (req, reply) => reply.send()
  )
}

test('Add schema order should not break the startup', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/', { schema: { random: 'options' } }, () => { })

  fastify.register(fp((f, opts) => {
    f.addSchema({
      $id: 'https://fastify.test/bson/objectId',
      type: 'string',
      pattern: '\\b[0-9A-Fa-f]{24}\\b'
    })
    return Promise.resolve() // avoid async for node 6
  }))

  fastify.get('/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { $ref: 'https://fastify.test/bson/objectId#' }
        }
      }
    }
  }, () => { })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('The schema compiler recreate itself if needed', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.options('/', { schema: { hide: true } }, echoBody)

  fastify.register(function (fastify, options, done) {
    fastify.addSchema({
      $id: 'identifier',
      type: 'string',
      format: 'uuid'
    })

    fastify.get('/:foobarId', {
      schema: {
        params: {
          type: 'object',
          properties: {
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

test('Schema controller setter', t => {
  t.plan(2)
  Fastify({ schemaController: {} })
  t.assert.ok('allow empty object')

  try {
    Fastify({ schemaController: { bucket: {} } })
    t.fail('the bucket option must be a function')
  } catch (err) {
    t.assert.strictEqual(err.message, "schemaController.bucket option should be a function, instead got 'object'")
  }
})

test('Schema controller bucket', (t, testDone) => {
  t.plan(10)

  let added = 0
  let builtBucket = 0

  const initStoreQueue = []

  function factoryBucket (storeInit) {
    builtBucket++
    t.assert.deepStrictEqual(initStoreQueue.pop(), storeInit)
    const store = new Map(storeInit)
    return {
      add (schema) {
        added++
        store.set(schema.$id, schema)
      },
      getSchema (id) {
        return store.get(id)
      },
      getSchemas () {
        // what is returned by this function, will be the `storeInit` parameter
        initStoreQueue.push(store)
        return store
      }
    }
  }

  const fastify = Fastify({
    schemaController: {
      bucket: factoryBucket
    }
  })

  fastify.register(async (instance) => {
    instance.addSchema({ $id: 'b', type: 'string' })
    instance.addHook('onReady', function (done) {
      t.assert.strictEqual(instance.getSchemas().size, 2)
      done()
    })
    instance.register(async (subinstance) => {
      subinstance.addSchema({ $id: 'c', type: 'string' })
      subinstance.addHook('onReady', function (done) {
        t.assert.strictEqual(subinstance.getSchemas().size, 3)
        done()
      })
    })
  })

  fastify.register(async (instance) => {
    instance.addHook('onReady', function (done) {
      t.assert.strictEqual(instance.getSchemas().size, 1)
      done()
    })
  })

  fastify.addSchema({ $id: 'a', type: 'string' })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(added, 3, 'three schema added')
    t.assert.strictEqual(builtBucket, 4, 'one bucket built for every register call + 1 for the root instance')
    testDone()
  })
})

test('setSchemaController per instance', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify({})

  fastify.register(async (instance1) => {
    instance1.setSchemaController({
      bucket: function factoryBucket (storeInit) {
        t.assert.ok('instance1 has created the bucket')
        return {
          add (schema) { t.fail('add is not called') },
          getSchema (id) { t.fail('getSchema is not called') },
          getSchemas () { t.fail('getSchemas is not called') }
        }
      }
    })
  })

  fastify.register(async (instance2) => {
    const bSchema = { $id: 'b', type: 'string' }

    instance2.setSchemaController({
      bucket: function factoryBucket (storeInit) {
        t.assert.ok('instance2 has created the bucket')
        const map = {}
        return {
          add (schema) {
            t.assert.strictEqual(schema.$id, bSchema.$id, 'add is called')
            map[schema.$id] = schema
          },
          getSchema (id) {
            t.assert.ok('getSchema is called')
            return map[id]
          },
          getSchemas () {
            t.assert.ok('getSchemas is called')
          }
        }
      }
    })

    instance2.addSchema(bSchema)

    instance2.addHook('onReady', function (done) {
      instance2.getSchemas()
      t.assert.deepStrictEqual(instance2.getSchema('b'), bSchema, 'the schema are loaded')
      done()
    })
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('setSchemaController: Inherits correctly parent schemas with a customized validator instance', async t => {
  t.plan(5)
  const customAjv = new Ajv({ coerceTypes: false })
  const server = Fastify()
  const someSchema = {
    $id: 'some',
    type: 'array',
    items: {
      type: 'string'
    }
  }
  const errorResponseSchema = {
    $id: 'error_response',
    type: 'object',
    properties: {
      statusCode: {
        type: 'integer'
      },
      message: {
        type: 'string'
      }
    }
  }

  server.addSchema(someSchema)
  server.addSchema(errorResponseSchema)

  server.register((instance, _, done) => {
    instance.setSchemaController({
      compilersFactory: {
        buildValidator: function (externalSchemas) {
          const schemaKeys = Object.keys(externalSchemas)
          t.assert.strictEqual(schemaKeys.length, 2, 'Contains same number of schemas')
          t.assert.deepStrictEqual([someSchema, errorResponseSchema], Object.values(externalSchemas), 'Contains expected schemas')
          for (const key of schemaKeys) {
            if (customAjv.getSchema(key) == null) {
              customAjv.addSchema(externalSchemas[key], key)
            }
          }
          return function validatorCompiler ({ schema }) {
            return customAjv.compile(schema)
          }
        }
      }
    })

    instance.get(
      '/',
      {
        schema: {
          querystring: {
            type: 'object',
            properties: {
              msg: {
                $ref: 'some#'
              }
            }
          },
          response: {
            '4xx': {
              $ref: 'error_response#'
            }
          }
        }
      },
      (req, reply) => {
        reply.send({ noop: 'noop' })
      }
    )

    done()
  })

  const res = await server.inject({
    method: 'GET',
    url: '/',
    query: {
      msg: 'string'
    }
  })
  const json = res.json()

  t.assert.strictEqual(json.message, 'querystring/msg must be array')
  t.assert.strictEqual(json.statusCode, 400)
  t.assert.strictEqual(res.statusCode, 400, 'Should not coerce the string into array')
})

test('setSchemaController: Inherits buildSerializer from parent if not present within the instance', async t => {
  t.plan(6)
  const customAjv = new Ajv({ coerceTypes: false })
  const someSchema = {
    $id: 'some',
    type: 'array',
    items: {
      type: 'string'
    }
  }
  const errorResponseSchema = {
    $id: 'error_response',
    type: 'object',
    properties: {
      statusCode: {
        type: 'integer'
      },
      message: {
        type: 'string'
      }
    }
  }
  let rootSerializerCalled = 0
  let rootValidatorCalled = 0
  let childValidatorCalled = 0
  const rootBuildSerializer = function (externalSchemas) {
    rootSerializerCalled++
    return function serializer () {
      return data => {
        return JSON.stringify({
          statusCode: data.statusCode,
          message: data.message
        })
      }
    }
  }
  const rootBuildValidator = function (externalSchemas) {
    rootValidatorCalled++
    return function validatorCompiler ({ schema }) {
      return customAjv.compile(schema)
    }
  }
  const server = Fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: rootBuildValidator,
        buildSerializer: rootBuildSerializer
      }
    }
  })

  server.addSchema(someSchema)
  server.addSchema(errorResponseSchema)

  server.register((instance, _, done) => {
    instance.setSchemaController({
      compilersFactory: {
        buildValidator: function (externalSchemas) {
          childValidatorCalled++
          const schemaKeys = Object.keys(externalSchemas)
          for (const key of schemaKeys) {
            if (customAjv.getSchema(key) == null) {
              customAjv.addSchema(externalSchemas[key], key)
            }
          }
          return function validatorCompiler ({ schema }) {
            return customAjv.compile(schema)
          }
        }
      }
    })

    instance.get(
      '/',
      {
        schema: {
          querystring: {
            type: 'object',
            properties: {
              msg: {
                $ref: 'some#'
              }
            }
          },
          response: {
            '4xx': {
              $ref: 'error_response#'
            }
          }
        }
      },
      (req, reply) => {
        reply.send({ noop: 'noop' })
      }
    )

    done()
  })

  const res = await server.inject({
    method: 'GET',
    url: '/',
    query: {
      msg: ['string']
    }
  })
  const json = res.json()

  t.assert.strictEqual(json.statusCode, 400)
  t.assert.strictEqual(json.message, 'querystring/msg must be array')
  t.assert.strictEqual(rootSerializerCalled, 1, 'Should be called from the child')
  t.assert.strictEqual(rootValidatorCalled, 0, 'Should not be called from the child')
  t.assert.strictEqual(childValidatorCalled, 1, 'Should be called from the child')
  t.assert.strictEqual(res.statusCode, 400, 'Should not coerce the string into array')
})

test('setSchemaController: Inherits buildValidator from parent if not present within the instance', async t => {
  t.plan(6)
  const customAjv = new Ajv({ coerceTypes: false })
  const someSchema = {
    $id: 'some',
    type: 'array',
    items: {
      type: 'string'
    }
  }
  const errorResponseSchema = {
    $id: 'error_response',
    type: 'object',
    properties: {
      statusCode: {
        type: 'integer'
      },
      message: {
        type: 'string'
      }
    }
  }
  let rootSerializerCalled = 0
  let rootValidatorCalled = 0
  let childSerializerCalled = 0
  const rootBuildSerializer = function (externalSchemas) {
    rootSerializerCalled++
    return function serializer () {
      return data => JSON.stringify(data)
    }
  }
  const rootBuildValidator = function (externalSchemas) {
    rootValidatorCalled++
    const schemaKeys = Object.keys(externalSchemas)
    for (const key of schemaKeys) {
      if (customAjv.getSchema(key) == null) {
        customAjv.addSchema(externalSchemas[key], key)
      }
    }
    return function validatorCompiler ({ schema }) {
      return customAjv.compile(schema)
    }
  }
  const server = Fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: rootBuildValidator,
        buildSerializer: rootBuildSerializer
      }
    }
  })

  server.register((instance, _, done) => {
    instance.register((subInstance, _, subDone) => {
      subInstance.setSchemaController({
        compilersFactory: {
          buildSerializer: function (externalSchemas) {
            childSerializerCalled++
            return function serializerCompiler () {
              return data => {
                return JSON.stringify({
                  statusCode: data.statusCode,
                  message: data.message
                })
              }
            }
          }
        }
      })

      subInstance.get(
        '/',
        {
          schema: {
            querystring: {
              type: 'object',
              properties: {
                msg: {
                  $ref: 'some#'
                }
              }
            },
            response: {
              '4xx': {
                $ref: 'error_response#'
              }
            }
          }
        },
        (req, reply) => {
          reply.send({ noop: 'noop' })
        }
      )

      subDone()
    })

    done()
  })

  server.addSchema(someSchema)
  server.addSchema(errorResponseSchema)

  const res = await server.inject({
    method: 'GET',
    url: '/',
    query: {
      msg: ['string']
    }
  })
  const json = res.json()

  t.assert.strictEqual(json.statusCode, 400)
  t.assert.strictEqual(json.message, 'querystring/msg must be array')
  t.assert.strictEqual(rootSerializerCalled, 0, 'Should be called from the child')
  t.assert.strictEqual(rootValidatorCalled, 1, 'Should not be called from the child')
  t.assert.strictEqual(childSerializerCalled, 1, 'Should be called from the child')
  t.assert.strictEqual(res.statusCode, 400, 'Should not coerce the string into array')
})

test('Should throw if not default validator passed', async t => {
  t.plan(4)
  const customAjv = new Ajv({ coerceTypes: false })
  const someSchema = {
    $id: 'some',
    type: 'array',
    items: {
      type: 'string'
    }
  }
  const anotherSchema = {
    $id: 'another',
    type: 'integer'
  }
  const plugin = fp(function (pluginInstance, _, pluginDone) {
    pluginInstance.setSchemaController({
      compilersFactory: {
        buildValidator: function (externalSchemas) {
          const schemaKeys = Object.keys(externalSchemas)
          t.assert.strictEqual(schemaKeys.length, 2)
          t.assert.deepStrictEqual(schemaKeys, ['some', 'another'])

          for (const key of schemaKeys) {
            if (customAjv.getSchema(key) == null) {
              customAjv.addSchema(externalSchemas[key], key)
            }
          }
          return function validatorCompiler ({ schema }) {
            return customAjv.compile(schema)
          }
        }
      }
    })

    pluginDone()
  })
  const server = Fastify()

  server.addSchema(someSchema)

  server.register((instance, opts, done) => {
    instance.addSchema(anotherSchema)

    instance.register(plugin, {})

    instance.post(
      '/',
      {
        schema: {
          query: {
            type: 'object',
            properties: {
              msg: {
                $ref: 'some#'
              }
            }
          },
          headers: {
            type: 'object',
            properties: {
              'x-another': {
                $ref: 'another#'
              }
            }
          }
        }
      },
      (req, reply) => {
        reply.send({ noop: 'noop' })
      }
    )

    done()
  })

  try {
    const res = await server.inject({
      method: 'POST',
      url: '/',
      query: {
        msg: ['string']
      }
    })

    t.assert.strictEqual(res.json().message, 'querystring/msg must be array')
    t.assert.strictEqual(res.statusCode, 400, 'Should not coerce the string into array')
  } catch (err) {
    t.assert.ifError(err)
  }
})

test('Should coerce the array if the default validator is used', async t => {
  t.plan(2)
  const someSchema = {
    $id: 'some',
    type: 'array',
    items: {
      type: 'string'
    }
  }
  const anotherSchema = {
    $id: 'another',
    type: 'integer'
  }

  const server = Fastify()

  server.addSchema(someSchema)

  server.register((instance, opts, done) => {
    instance.addSchema(anotherSchema)

    instance.post(
      '/',
      {
        schema: {
          query: {
            type: 'object',
            properties: {
              msg: {
                $ref: 'some#'
              }
            }
          },
          headers: {
            type: 'object',
            properties: {
              'x-another': {
                $ref: 'another#'
              }
            }
          }
        }
      },
      (req, reply) => {
        reply.send(req.query)
      }
    )

    done()
  })

  try {
    const res = await server.inject({
      method: 'POST',
      url: '/',
      query: {
        msg: 'string'
      }
    })

    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.json(), { msg: ['string'] }, 'Should coerce the string into array')
  } catch (err) {
    t.assert.ifError(err)
  }
})

test('Should return a human-friendly error if response status codes are not specified', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.route({
    url: '/',
    method: 'GET',
    schema: {
      response: {
        // This should be nested under a status code key, e.g { 200: { type: 'array' } }
        type: 'array'
      }
    },
    handler: (req, reply) => {
      reply.send([])
    }
  })

  fastify.ready(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_SERIALIZATION_BUILD')
    t.assert.strictEqual(err.message, 'Failed building the serialization schema for GET: /, due to error response schemas should be nested under a valid status code, e.g { 2xx: { type: "object" } }')
    testDone()
  })
})

test('setSchemaController: custom validator instance should not mutate headers schema', async t => {
  t.plan(2)
  class Headers { }
  const fastify = Fastify()

  fastify.setSchemaController({
    compilersFactory: {
      buildValidator: function () {
        return ({ schema, method, url, httpPart }) => {
          t.assert.ok(schema instanceof Headers)
          return () => { }
        }
      }
    }
  })

  fastify.get('/', {
    schema: {
      headers: new Headers()
    }
  }, () => { })

  await fastify.ready()
})
