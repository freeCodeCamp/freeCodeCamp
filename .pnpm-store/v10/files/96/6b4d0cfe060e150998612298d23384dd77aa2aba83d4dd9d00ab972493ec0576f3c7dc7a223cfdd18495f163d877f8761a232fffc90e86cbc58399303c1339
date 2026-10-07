'use strict'

const { test } = require('node:test')
const localize = require('ajv-i18n')
const Fastify = require('..')

test('Example - URI $id', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.addSchema({
    $id: 'http://fastify.test/',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    }
  })

  fastify.post('/', {
    handler () { },
    schema: {
      body: {
        type: 'array',
        items: { $ref: 'http://fastify.test#/properties/hello' }
      }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - string $id', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.addSchema({
    $id: 'commonSchema',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    }
  })

  fastify.post('/', {
    handler () { },
    schema: {
      body: { $ref: 'commonSchema#' },
      headers: { $ref: 'commonSchema#' }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - get schema', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.addSchema({
    $id: 'schemaId',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    }
  })

  const mySchemas = fastify.getSchemas()
  const mySchema = fastify.getSchema('schemaId')
  t.assert.deepStrictEqual(mySchemas.schemaId, mySchema)
  done()
})

test('Example - get schema encapsulated', async t => {
  const fastify = Fastify()

  fastify.addSchema({ $id: 'one', my: 'hello' })
  // will return only `one` schema
  fastify.get('/', (request, reply) => { reply.send(fastify.getSchemas()) })

  fastify.register((instance, opts, done) => {
    instance.addSchema({ $id: 'two', my: 'ciao' })
    // will return `one` and `two` schemas
    instance.get('/sub', (request, reply) => { reply.send(instance.getSchemas()) })

    instance.register((subinstance, opts, done) => {
      subinstance.addSchema({ $id: 'three', my: 'hola' })
      // will return `one`, `two` and `three`
      subinstance.get('/deep', (request, reply) => { reply.send(subinstance.getSchemas()) })
      done()
    })
    done()
  })

  const r1 = await fastify.inject('/')
  const r2 = await fastify.inject('/sub')
  const r3 = await fastify.inject('/deep')

  t.assert.deepStrictEqual(Object.keys(r1.json()), ['one'])
  t.assert.deepStrictEqual(Object.keys(r2.json()), ['one', 'two'])
  t.assert.deepStrictEqual(Object.keys(r3.json()), ['one', 'two', 'three'])
})

test('Example - validation', (t, done) => {
  t.plan(1)
  const fastify = Fastify({
    ajv: {
      customOptions: {
        allowUnionTypes: true
      }
    }
  })
  const handler = () => { }

  const bodyJsonSchema = {
    type: 'object',
    required: ['requiredKey'],
    properties: {
      someKey: { type: 'string' },
      someOtherKey: { type: 'number' },
      requiredKey: {
        type: 'array',
        maxItems: 3,
        items: { type: 'integer' }
      },
      nullableKey: { type: ['number', 'null'] }, // or { type: 'number', nullable: true }
      multipleTypesKey: { type: ['boolean', 'number'] },
      multipleRestrictedTypesKey: {
        oneOf: [
          { type: 'string', maxLength: 5 },
          { type: 'number', minimum: 10 }
        ]
      },
      enumKey: {
        type: 'string',
        enum: ['John', 'Foo']
      },
      notTypeKey: {
        not: { type: 'array' }
      }
    }
  }

  const queryStringJsonSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    }
  }

  const paramsJsonSchema = {
    type: 'object',
    properties: {
      par1: { type: 'string' },
      par2: { type: 'number' }
    }
  }

  const headersJsonSchema = {
    type: 'object',
    properties: {
      'x-foo': { type: 'string' }
    },
    required: ['x-foo']
  }

  const schema = {
    body: bodyJsonSchema,
    querystring: queryStringJsonSchema,
    params: paramsJsonSchema,
    headers: headersJsonSchema
  }

  fastify.post('/the/url', { schema }, handler)
  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - ajv config', (t, done) => {
  t.plan(1)

  const fastify = Fastify({
    ajv: {
      plugins: [
        require('ajv-merge-patch')
      ]
    }
  })

  fastify.post('/', {
    handler (req, reply) { reply.send({ ok: 1 }) },
    schema: {
      body: {
        $patch: {
          source: {
            type: 'object',
            properties: {
              q: {
                type: 'string'
              }
            }
          },
          with: [
            {
              op: 'add',
              path: '/properties/q',
              value: { type: 'number' }
            }
          ]
        }
      }
    }
  })

  fastify.post('/foo', {
    handler (req, reply) { reply.send({ ok: 1 }) },
    schema: {
      body: {
        $merge: {
          source: {
            type: 'object',
            properties: {
              q: {
                type: 'string'
              }
            }
          },
          with: {
            required: ['q']
          }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example Joi', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = () => { }

  const Joi = require('joi')
  fastify.post('/the/url', {
    schema: {
      body: Joi.object().keys({
        hello: Joi.string().required()
      }).required()
    },
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return data => schema.validate(data)
    }
  }, handler)

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example yup', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = () => { }

  const yup = require('yup')
  // Validation options to match ajv's baseline options used in Fastify
  const yupOptions = {
    strict: false,
    abortEarly: false, // return all errors
    stripUnknown: true, // remove additional properties
    recursive: true
  }

  fastify.post('/the/url', {
    schema: {
      body: yup.object({
        age: yup.number().integer().required(),
        sub: yup.object().shape({
          name: yup.string().required()
        }).required()
      })
    },
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return function (data) {
        // with option strict = false, yup `validateSync` function returns the coerced value if validation was successful, or throws if validation failed
        try {
          const result = schema.validateSync(data, yupOptions)
          return { value: result }
        } catch (e) {
          return { error: e }
        }
      }
    }
  }, handler)

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - serialization', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = () => { }

  const schema = {
    response: {
      200: {
        type: 'object',
        properties: {
          value: { type: 'string' },
          otherValue: { type: 'boolean' }
        }
      }
    }
  }

  fastify.post('/the/url', { schema }, handler)
  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - serialization 2', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = () => { }

  const schema = {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          value: { type: 'string' },
          otherValue: { type: 'boolean' }
        }
      },
      201: {
        // the contract syntax
        value: { type: 'string' }
      }
    }
  }

  fastify.post('/the/url', { schema }, handler)
  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - serializator', (t, done) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
    return data => JSON.stringify(data)
  })

  fastify.get('/user', {
    handler (req, reply) {
      reply.send({ id: 1, name: 'Foo', image: 'BIG IMAGE' })
    },
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' }
          }
        }
      }
    }
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('Example - schemas examples', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const handler = () => { }

  fastify.addSchema({
    $id: 'http://foo/common.json',
    type: 'object',
    definitions: {
      foo: {
        $id: '#address',
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    }
  })

  fastify.addSchema({
    $id: 'http://foo/shared.json',
    type: 'object',
    definitions: {
      foo: {
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    }
  })

  const refToId = {
    type: 'object',
    definitions: {
      foo: {
        $id: '#address',
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    },
    properties: {
      home: { $ref: '#address' },
      work: { $ref: '#address' }
    }
  }

  const refToDefinitions = {
    type: 'object',
    definitions: {
      foo: {
        $id: '#address',
        type: 'object',
        properties: {
          city: { type: 'string' }
        }
      }
    },
    properties: {
      home: { $ref: '#/definitions/foo' },
      work: { $ref: '#/definitions/foo' }
    }
  }

  const refToSharedSchemaId = {
    type: 'object',
    properties: {
      home: { $ref: 'http://foo/common.json#address' },
      work: { $ref: 'http://foo/common.json#address' }
    }
  }

  const refToSharedSchemaDefinitions = {
    type: 'object',
    properties: {
      home: { $ref: 'http://foo/shared.json#/definitions/foo' },
      work: { $ref: 'http://foo/shared.json#/definitions/foo' }
    }
  }

  fastify.post('/', {
    handler,
    schema: {
      body: refToId,
      headers: refToDefinitions,
      params: refToSharedSchemaId,
      query: refToSharedSchemaDefinitions
    }

  })

  fastify.ready(err => {
    t.assert.ifError(err)
    done()
  })
})

test('should return custom error messages with ajv-errors', (t, done) => {
  t.plan(3)

  const fastify = Fastify({
    ajv: {
      customOptions: { allErrors: true },
      plugins: [
        require('ajv-errors')
      ]
    }
  })

  const schema = {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        work: { type: 'string' },
        age: {
          type: 'number',
          errorMessage: {
            type: 'bad age - should be num'
          }
        }
      },
      required: ['name', 'work'],
      errorMessage: {
        required: {
          name: 'name please',
          work: 'work please',
          age: 'age please'
        }
      }
    }
  }

  fastify.post('/', { schema }, function (req, reply) {
    reply.code(200).send(req.body.name)
  })

  fastify.inject({
    method: 'POST',
    payload: {
      hello: 'salman',
      age: 'bad'
    },
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 400,
      code: 'FST_ERR_VALIDATION',
      error: 'Bad Request',
      message: 'body/age bad age - should be num, body name please, body work please'
    })
    t.assert.strictEqual(res.statusCode, 400)
    done()
  })
})

test('should be able to handle formats of ajv-formats when added by plugins option', (t, done) => {
  t.plan(3)

  const fastify = Fastify({
    ajv: {
      plugins: [
        require('ajv-formats')
      ]
    }
  })

  const schema = {
    body: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        email: { type: 'string', format: 'email' }
      },
      required: ['id', 'email']
    }
  }

  fastify.post('/', { schema }, function (req, reply) {
    reply.code(200).send(req.body.id)
  })

  fastify.inject({
    method: 'POST',
    payload: {
      id: '254381a5-888c-4b41-8116-e3b1a54980bd',
      email: 'info@fastify.dev'
    },
    url: '/'
  }, (_err, res) => {
    t.assert.strictEqual(res.body, '254381a5-888c-4b41-8116-e3b1a54980bd')
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject({
    method: 'POST',
    payload: {
      id: 'invalid',
      email: 'info@fastify.dev'
    },
    url: '/'
  }, (_err, res) => {
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 400,
      code: 'FST_ERR_VALIDATION',
      error: 'Bad Request',
      message: 'body/id must match format "uuid"'
    })
    done()
  })
})

test('should return localized error messages with ajv-i18n', (t, done) => {
  t.plan(3)

  const schema = {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        work: { type: 'string' }
      },
      required: ['name', 'work']
    }
  }

  const fastify = Fastify({
    ajv: {
      customOptions: { allErrors: true }
    }
  })

  fastify.setErrorHandler(function (error, request, reply) {
    if (error.validation) {
      localize.ru(error.validation)
      reply.status(400).send(error.validation)
      return
    }
    reply.send(error)
  })

  fastify.post('/', { schema }, function (req, reply) {
    reply.code(200).send(req.body.name)
  })

  fastify.inject({
    method: 'POST',
    payload: {
      name: 'salman'
    },
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), [{
      instancePath: '',
      keyword: 'required',
      message: 'должно иметь обязательное поле work',
      params: { missingProperty: 'work' },
      schemaPath: '#/required'
    }])
    t.assert.strictEqual(res.statusCode, 400)
    done()
  })
})
