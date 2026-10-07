'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('..')
const Joi = require('joi')
const Convert = require('joi-to-json')

const params = Joi
  .object()
  .keys({
    property: Joi.string().required()
  })
const opts = {
  schema: { params }
}
const convertible = ['params', 'body', 'querystring']
const validTransform = ({ schema, url }) => {
  const newSchema = Object.keys(schema).reduce((transformed, key) => {
    transformed[key] = convertible.includes(key)
      ? Convert(schema[key])
      : schema[key]
    return transformed
  },
  {})
  return { schema: newSchema, url }
}
const valid = {
  transform: validTransform
}

const invalid = {
  transform: 'wrong type'
}

test('transform should fail with a value other than Function', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, invalid)

  fastify.setValidatorCompiler(({ schema }) => params.validate(schema))
  fastify.get('/example', opts, () => {})

  await fastify.ready()
  t.assert.throws(fastify.swagger)
})

test('transform should work with a Function', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, valid)

  fastify.setValidatorCompiler(({ schema }) => params.validate(schema))
  fastify.get('/example', opts, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('transform can access route', async (t) => {
  t.plan(5)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '1.0.0' } },
    transform: ({ route }) => {
      t.assert.ok(route)
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/example')
      t.assert.strictEqual(route.constraints.version, '1.0.0')
      return { schema: route.schema, url: route.url }
    }
  })
  fastify.get('/example', { constraints: { version: '1.0.0' } }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('transform can access openapi object', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '1.0.0' } },
    transform: ({ route, openapiObject }) => {
      t.assert.ok(openapiObject)
      t.assert.strictEqual(openapiObject.openapi, '3.0.3')
      t.assert.strictEqual(openapiObject.info.version, '1.0.0')
      return {
        schema: route.schema,
        url: route.url
      }
    }
  })
  fastify.get('/example', () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('transform can access swagger object', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: { info: { version: '1.0.0' } },
    transform: ({ route, swaggerObject }) => {
      t.assert.ok(swaggerObject)
      t.assert.strictEqual(swaggerObject.swagger, '2.0')
      t.assert.strictEqual(swaggerObject.info.version, '1.0.0')
      return {
        schema: route.schema,
        url: route.url
      }
    }
  })
  fastify.get('/example', () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('transform can hide routes based on openapi version', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '2.0.0' } },
    transform: ({ schema, route, openapiObject }) => {
      const transformedSchema = Object.assign({}, schema)
      if (route?.constraints?.version !== openapiObject.info.version) transformedSchema.hide = true
      return { schema: transformedSchema, url: route.url }
    }
  })
  fastify.get('/example', { constraints: { version: '1.0.0' } }, () => {})

  await fastify.ready()
  const openapiObject = fastify.swagger()
  t.assert.strictEqual(openapiObject.paths['/example'], undefined)
})

test('endpoint transform should fail with a value other than Function', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {})

  fastify.setValidatorCompiler(({ schema }) => params.validate(schema))
  fastify.get('/example', {
    ...opts,
    config: {
      swaggerTransform: 'wrong type'
    }
  }, () => {})

  await fastify.ready()
  t.assert.throws(fastify.swagger)
})

test('endpoint transform should work with a Function', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, valid)

  fastify.setValidatorCompiler(({ schema }) => params.validate(schema))
  fastify.get('/example', {
    ...opts,
    config: { swaggerTransform: validTransform }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform can access route', async (t) => {
  t.plan(5)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '1.0.0' } }
  })
  fastify.get('/example', {
    constraints: { version: '1.0.0' },
    config: {
      swaggerTransform: ({ route }) => {
        t.assert.ok(route)
        t.assert.strictEqual(route.method, 'GET')
        t.assert.strictEqual(route.url, '/example')
        t.assert.strictEqual(route.constraints.version, '1.0.0')
        return { schema: route.schema, url: route.url }
      }
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform can access openapi object', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '1.0.0' } }
  })
  fastify.get('/example', {
    config: {
      swaggerTransform: ({ route, openapiObject }) => {
        t.assert.ok(openapiObject)
        t.assert.strictEqual(openapiObject.openapi, '3.0.3')
        t.assert.strictEqual(openapiObject.info.version, '1.0.0')
        return {
          schema: route.schema,
          url: route.url
        }
      }
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform can access swagger object', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: { info: { version: '1.0.0' } }
  })
  fastify.get('/example', {
    config: {
      swaggerTransform: ({ route, swaggerObject }) => {
        t.assert.ok(swaggerObject)
        t.assert.strictEqual(swaggerObject.swagger, '2.0')
        t.assert.strictEqual(swaggerObject.info.version, '1.0.0')
        return {
          schema: route.schema,
          url: route.url
        }
      }
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform can hide routes based on openapi version', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '2.0.0' } }
  })
  fastify.get('/example', {
    constraints: { version: '1.0.0' },
    config: {
      swaggerTransform: ({ schema, route, openapiObject }) => {
        const transformedSchema = Object.assign({}, schema)
        if (route?.constraints?.version !== openapiObject.info.version) transformedSchema.hide = true
        return { schema: transformedSchema, url: route.url }
      }
    }
  }, () => {})

  await fastify.ready()
  const openapiObject = fastify.swagger()
  t.assert.strictEqual(openapiObject.paths['/example'], undefined)
})

test('endpoint transform takes precedence over global swagger transform', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: { info: { version: '1.0.0' } },
    transform: ({ schema, url }) => {
      t.assert.fail('the global transform function should be ignored')
      return validTransform({ schema, url })
    }

  })
  fastify.get('/example', {
    config: {
      swaggerTransform: ({ schema, route }) => {
        const transformedSchema = Object.assign({}, schema)
        t.assert.ok(transformedSchema)
        return { schema: transformedSchema, url: route.url }
      }
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform takes precedence over global openapi transform', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '2.0.0' } },
    transform: ({ schema, url }) => {
      t.assert.fail('the global transform function should be ignored')
      return validTransform({ schema, url })
    }

  })
  fastify.get('/example', {
    config: {
      swaggerTransform: ({ schema, route }) => {
        const transformedSchema = Object.assign({}, schema)
        t.assert.ok(transformedSchema)
        return { schema: transformedSchema, url: route.url }
      }
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform with value "false" disables the global swagger transform', async (t) => {
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: { info: { version: '1.0.0' } },
    transform: () => { throw Error('should not be run') }
  })
  fastify.get('/example/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      }
    },
    config: {
      swaggerTransform: false
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('endpoint transform with value "false" disables the global openapi transform', async (t) => {
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '2.0.0' } },
    transform: () => { throw Error('should not be run') }
  })
  fastify.get('/example/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      }
    },
    config: {
      swaggerTransform: false
    }
  }, () => {})

  await fastify.ready()
  t.assert.doesNotThrow(fastify.swagger)
})

test('transformObject can modify the openapi object', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    openapi: { info: { version: '2.0.0' } },
    transformObject: ({ openapiObject }) => {
      openapiObject.info.title = 'Transformed'
      return openapiObject
    }
  })

  await fastify.ready()
  const openapiObject = fastify.swagger()
  t.assert.strictEqual(openapiObject.info.title, 'Transformed')
})

test('transformObject can modify the swagger object', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: { info: { version: '2.0.0' } },
    transformObject: ({ swaggerObject }) => {
      swaggerObject.info.title = 'Transformed'
      return swaggerObject
    }
  })

  await fastify.ready()
  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.info.title, 'Transformed')
})
