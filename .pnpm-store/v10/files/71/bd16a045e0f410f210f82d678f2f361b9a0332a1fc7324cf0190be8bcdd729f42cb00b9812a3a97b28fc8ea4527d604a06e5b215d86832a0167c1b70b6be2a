'use strict'

const { describe, test } = require('node:test')
const Joi = require('joi')
const Fastify = require('..')

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

function echoBody (req, reply) {
  reply.code(200).send(req.body.name)
}

test('should work with valid payload', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      name: 'michelangelo',
      work: 'sculptor, painter, architect and poet'
    },
    url: '/'
  })
  t.assert.deepStrictEqual(response.payload, 'michelangelo')
  t.assert.strictEqual(response.statusCode, 200)
})

test('should fail immediately with invalid payload', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: "body must have required property 'name'"
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('should be able to use setErrorHandler specify custom validation error', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema }, function (req, reply) {
    t.assert.fail('should not be here')
    reply.code(200).send(req.body.name)
  })

  fastify.setErrorHandler(function (error, request, reply) {
    if (error.validation) {
      reply.status(422).send(new Error('validation failed'))
    }
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    statusCode: 422,
    error: 'Unprocessable Entity',
    message: 'validation failed'
  })
  t.assert.strictEqual(response.statusCode, 422)
})

test('validation error has 400 statusCode set', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.setErrorHandler((error, request, reply) => {
    const errorResponse = {
      message: error.message,
      statusCode: error.statusCode || 500
    }

    reply.code(errorResponse.statusCode).send(errorResponse)
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    message: "body must have required property 'name'"
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('error inside custom error handler should have validationContext', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  fastify.post('/', {
    schema,
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return function (data) {
        return { error: new Error('this failed') }
      }
    }
  }, function (req, reply) {
    t.assert.fail('should not be here')
    reply.code(200).send(req.body.name)
  })

  fastify.setErrorHandler(function (error, request, reply) {
    t.assert.strictEqual(error.validationContext, 'body')
    reply.status(500).send(error)
  })

  await fastify.inject({
    method: 'POST',
    payload: {
      name: 'michelangelo',
      work: 'artist'
    },
    url: '/'
  })
})

test('error inside custom error handler should have validationContext if specified by custom error handler', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  fastify.post('/', {
    schema,
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return function (data) {
        const error = new Error('this failed')
        error.validationContext = 'customContext'
        return { error }
      }
    }
  }, function (req, reply) {
    t.assert.fail('should not be here')
    reply.code(200).send(req.body.name)
  })

  fastify.setErrorHandler(function (error, request, reply) {
    t.assert.strictEqual(error.validationContext, 'customContext')
    reply.status(500).send(error)
  })

  await fastify.inject({
    method: 'POST',
    payload: {
      name: 'michelangelo',
      work: 'artist'
    },
    url: '/'
  })
})

test('should be able to attach validation to request', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema, attachValidation: true }, function (req, reply) {
    reply.code(400).send(req.validationError.validation)
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), [{
    keyword: 'required',
    instancePath: '',
    schemaPath: '#/required',
    params: { missingProperty: 'name' },
    message: 'must have required property \'name\''
  }])
  t.assert.strictEqual(response.statusCode, 400)
})

test('should respect when attachValidation is explicitly set to false', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema, attachValidation: false }, function (req, reply) {
    t.assert.fail('should not be here')
    reply.code(200).send(req.validationError.validation)
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(JSON.parse(response.payload), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: "body must have required property 'name'"
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('Attached validation error should take precedence over setErrorHandler', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', { schema, attachValidation: true }, function (req, reply) {
    reply.code(400).send('Attached: ' + req.validationError)
  })

  fastify.setErrorHandler(function (error, request, reply) {
    t.assert.fail('should not be here')
    if (error.validation) {
      reply.status(422).send(new Error('validation failed'))
    }
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.payload, "Attached: Error: body must have required property 'name'")
  t.assert.strictEqual(response.statusCode, 400)
})

test('should handle response validation error', async (t) => {
  t.plan(2)

  const response = {
    200: {
      type: 'object',
      required: ['name', 'work'],
      properties: {
        name: { type: 'string' },
        work: { type: 'string' }
      }
    }
  }

  const fastify = Fastify()

  fastify.get('/', { schema: { response } }, function (req, reply) {
    try {
      reply.code(200).send({ work: 'actor' })
    } catch (error) {
      reply.code(500).send(error)
    }
  })

  const injectResponse = await fastify.inject({
    method: 'GET',
    payload: { },
    url: '/'
  })

  t.assert.strictEqual(injectResponse.statusCode, 500)
  t.assert.strictEqual(injectResponse.payload, '{"statusCode":500,"error":"Internal Server Error","message":"\\"name\\" is required!"}')
})

test('should handle response validation error with promises', async (t) => {
  t.plan(2)

  const response = {
    200: {
      type: 'object',
      required: ['name', 'work'],
      properties: {
        name: { type: 'string' },
        work: { type: 'string' }
      }
    }
  }

  const fastify = Fastify()

  fastify.get('/', { schema: { response } }, function (req, reply) {
    return Promise.resolve({ work: 'actor' })
  })

  const injectResponse = await fastify.inject({
    method: 'GET',
    payload: { },
    url: '/'
  })

  t.assert.strictEqual(injectResponse.statusCode, 500)
  t.assert.strictEqual(injectResponse.payload, '{"statusCode":500,"error":"Internal Server Error","message":"\\"name\\" is required!"}')
})

test('should return a defined output message parsing AJV errors', async (t) => {
  t.plan(2)

  const body = {
    type: 'object',
    required: ['name', 'work'],
    properties: {
      name: { type: 'string' },
      work: { type: 'string' }
    }
  }

  const fastify = Fastify()

  fastify.post('/', { schema: { body } }, function (req, reply) {
    t.assert.fail()
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: { },
    url: '/'
  })

  t.assert.strictEqual(response.statusCode, 400)
  t.assert.strictEqual(response.payload, '{"statusCode":400,"code":"FST_ERR_VALIDATION","error":"Bad Request","message":"body must have required property \'name\'"}')
})

test('should return a defined output message parsing JOI errors', async (t) => {
  t.plan(2)

  const body = Joi.object().keys({
    name: Joi.string().required(),
    work: Joi.string().required()
  }).required()

  const fastify = Fastify()

  fastify.post('/', {
    schema: { body },
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return data => schema.validate(data)
    }
  },
  function (req, reply) {
    t.assert.fail()
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {},
    url: '/'
  })

  t.assert.strictEqual(response.statusCode, 400)
  t.assert.strictEqual(response.payload, '{"statusCode":400,"code":"FST_ERR_VALIDATION","error":"Bad Request","message":"\\"name\\" is required"}')
})

test('should return a defined output message parsing JOI error details', async (t) => {
  t.plan(2)

  const body = Joi.object().keys({
    name: Joi.string().required(),
    work: Joi.string().required()
  }).required()

  const fastify = Fastify()

  fastify.post('/', {
    schema: { body },
    validatorCompiler: ({ schema, method, url, httpPart }) => {
      return data => {
        const validation = schema.validate(data)
        return { error: validation.error.details }
      }
    }
  },
  function (req, reply) {
    t.assert.fail()
  })

  const response = await fastify.inject({
    method: 'POST',
    payload: {},
    url: '/'
  })

  t.assert.strictEqual(response.statusCode, 400)
  t.assert.strictEqual(response.payload, '{"statusCode":400,"code":"FST_ERR_VALIDATION","error":"Bad Request","message":"body \\"name\\" is required"}')
})

test('the custom error formatter context must be the server instance', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.setSchemaErrorFormatter(function (errors, dataVar) {
    t.assert.deepStrictEqual(this, fastify)
    return new Error('my error')
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'my error'
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('the custom error formatter context must be the server instance in options', async (t) => {
  t.plan(3)

  const fastify = Fastify({
    schemaErrorFormatter: function (errors, dataVar) {
      t.assert.deepStrictEqual(this, fastify)
      return new Error('my error')
    }
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'my error'
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('should call custom error formatter', async (t) => {
  t.plan(8)

  const fastify = Fastify({
    schemaErrorFormatter: (errors, dataVar) => {
      t.assert.strictEqual(errors.length, 1)
      t.assert.strictEqual(errors[0].message, "must have required property 'name'")
      t.assert.strictEqual(errors[0].keyword, 'required')
      t.assert.strictEqual(errors[0].schemaPath, '#/required')
      t.assert.deepStrictEqual(errors[0].params, {
        missingProperty: 'name'
      })
      t.assert.strictEqual(dataVar, 'body')
      return new Error('my error')
    }
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'my error'
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('should catch error inside formatter and return message', async (t) => {
  t.plan(2)

  const fastify = Fastify({
    schemaErrorFormatter: (errors, dataVar) => {
      throw new Error('abc')
    }
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'abc'
  })
  t.assert.strictEqual(response.statusCode, 500)
})

test('cannot create a fastify instance with wrong type of errorFormatter', async (t) => {
  t.plan(3)

  try {
    Fastify({
      schemaErrorFormatter: async (errors, dataVar) => {
        return new Error('should not execute')
      }
    })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN')
  }

  try {
    Fastify({
      schemaErrorFormatter: 500
    })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN')
  }

  try {
    const fastify = Fastify()
    fastify.setSchemaErrorFormatter(500)
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN')
  }
})

test('should register a route based schema error formatter', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.post('/', {
    schema,
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('abc')
    }
  }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'abc'
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('prefer route based error formatter over global one', async (t) => {
  t.plan(6)

  const fastify = Fastify({
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('abc123')
    }
  })

  fastify.post('/', {
    schema,
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('123')
    }
  }, echoBody)

  fastify.post('/abc', {
    schema,
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('abc')
    }
  }, echoBody)

  fastify.post('/test', { schema }, echoBody)

  const response1 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response1.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: '123'
  })
  t.assert.strictEqual(response1.statusCode, 400)

  const response2 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/abc'
  })

  t.assert.deepStrictEqual(response2.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'abc'
  })
  t.assert.strictEqual(response2.statusCode, 400)

  const response3 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/test'
  })

  t.assert.deepStrictEqual(response3.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'abc123'
  })
  t.assert.strictEqual(response3.statusCode, 400)
})

test('adding schemaErrorFormatter', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.setSchemaErrorFormatter((errors, dataVar) => {
    return new Error('abc')
  })

  fastify.post('/', { schema }, echoBody)

  const response = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'abc'
  })
  t.assert.strictEqual(response.statusCode, 400)
})

test('plugin override', async (t) => {
  t.plan(10)

  const fastify = Fastify({
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('B')
    }
  })

  fastify.register((instance, opts, done) => {
    instance.setSchemaErrorFormatter((errors, dataVar) => {
      return new Error('C')
    })

    instance.post('/d', {
      schema,
      schemaErrorFormatter: (errors, dataVar) => {
        return new Error('D')
      }
    }, function (req, reply) {
      reply.code(200).send(req.body.name)
    })

    instance.post('/c', { schema }, echoBody)

    instance.register((subinstance, opts, done) => {
      subinstance.post('/stillC', { schema }, echoBody)
      done()
    })

    done()
  })

  fastify.post('/b', { schema }, echoBody)

  fastify.post('/', {
    schema,
    schemaErrorFormatter: (errors, dataVar) => {
      return new Error('A')
    }
  }, echoBody)

  const response1 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/'
  })

  t.assert.deepStrictEqual(response1.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'A'
  })
  t.assert.strictEqual(response1.statusCode, 400)

  const response2 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/b'
  })

  t.assert.deepStrictEqual(response2.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'B'
  })
  t.assert.strictEqual(response2.statusCode, 400)

  const response3 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/c'
  })

  t.assert.deepStrictEqual(response3.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'C'
  })
  t.assert.strictEqual(response3.statusCode, 400)

  const response4 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/d'
  })

  t.assert.deepStrictEqual(response4.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'D'
  })
  t.assert.strictEqual(response4.statusCode, 400)

  const response5 = await fastify.inject({
    method: 'POST',
    payload: {
      hello: 'michelangelo'
    },
    url: '/stillC'
  })

  t.assert.deepStrictEqual(response5.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'C'
  })
  t.assert.strictEqual(response5.statusCode, 400)
})

describe('sync and async must work in the same way', () => {
  // Route with custom validator that throws
  const throwingRouteValidator = {
    schema: {
      body: {
        type: 'object',
        properties: { name: { type: 'string' } }
      }
    },
    validatorCompiler: () => {
      return function (inputData) {
        // This custom validator throws a sync error instead of returning `{ error }`
        throw new Error('Custom validation failed')
      }
    },
    handler (request, reply) { reply.send({ success: true }) }
  }

  test('async preValidation with custom validator should trigger error handler when validator throws', async (t) => {
    t.plan(4)

    const fastify = Fastify()
    fastify.setErrorHandler((error, request, reply) => {
      t.assert.ok(error instanceof Error, 'error should be an Error instance')
      t.assert.strictEqual(error.message, 'Custom validation failed')
      reply.status(500).send({ error: error.message })
    })

    // Add async preValidation hook
    fastify.addHook('preValidation', async (request, reply) => {
      await Promise.resolve('ok')
    })
    fastify.post('/async', throwingRouteValidator)

    const response = await fastify.inject({
      method: 'POST',
      url: '/async',
      payload: { name: 'test' }
    })
    t.assert.strictEqual(response.statusCode, 500)
    t.assert.deepStrictEqual(response.json(), { error: 'Custom validation failed' })
  })

  test('sync preValidation with custom validator should trigger error handler when validator throws', async (t) => {
    t.plan(4)

    const fastify = Fastify()
    fastify.setErrorHandler((error, request, reply) => {
      t.assert.ok(error instanceof Error, 'error should be an Error instance')
      t.assert.strictEqual(error.message, 'Custom validation failed')
      reply.status(500).send({ error: error.message })
    })

    // Add sync preValidation hook
    fastify.addHook('preValidation', (request, reply, next) => { next() })
    fastify.post('/sync', throwingRouteValidator)

    const response = await fastify.inject({
      method: 'POST',
      url: '/sync',
      payload: { name: 'test' }
    })
    t.assert.strictEqual(response.statusCode, 500)
    t.assert.deepStrictEqual(response.json(), { error: 'Custom validation failed' })
  })
})
