'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const Swagger = require('@apidevtools/swagger-parser')
const fastifySwagger = require('../../../index')
const S = require('fluent-json-schema')

test('support file in json schema', async t => {
  const opts7 = {
    schema: {
      consumes: ['application/x-www-form-urlencoded'],
      body: {
        type: 'object',
        properties: {
          hello: {
            description: 'hello',
            type: 'string',
            contentEncoding: 'binary'
          }
        },
        required: ['hello']
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.post('/', opts7, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.ok(definedPath)
  t.assert.deepStrictEqual(definedPath.parameters, [{
    in: 'formData',
    name: 'hello',
    description: 'hello',
    required: true,
    type: 'file'
  }])
})

test('support response description', async t => {
  const opts8 = {
    schema: {
      response: {
        200: {
          description: 'Response OK!',
          type: 'object'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opts8, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Response OK!')
})

test('support response description fallback to its $ref', async t => {
  const opts = {
    schema: {
      response: {
        200: {
          $ref: 'my-ref#'
        }
      }
    }
  }

  const fastify = Fastify()
  fastify.addSchema({
    $id: 'my-ref',
    description: 'Response OK!',
    type: 'string'
  })

  await fastify.register(fastifySwagger)
  fastify.get('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Response OK!')
})

test('response default description', async t => {
  const opts9 = {
    schema: {
      response: {
        200: {
          type: 'object'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opts9, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Default Response')
})

test('response 2xx', async t => {
  const opt = {
    schema: {
      response: {
        '2xx': {
          type: 'object'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Default Response')
  t.assert.strictEqual(definedPath.responses['2XX'], undefined)
})

test('response conflict 2xx and 200', async t => {
  const opt = {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          description: '2xx'
        },
        200: {
          type: 'object',
          description: '200'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, '200')
  t.assert.strictEqual(definedPath.responses['2XX'], undefined)
})

test('support status code 204', async t => {
  const opt = {
    schema: {
      response: {
        204: {
          type: 'null',
          description: 'No Content'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['204'].description, 'No Content')
  t.assert.strictEqual(definedPath.responses['204'].schema, undefined)
})

test('support empty response body for different status than 204', async t => {
  const opt = {
    schema: {
      response: {
        204: {
          type: 'null',
          description: 'No Content'
        },
        503: {
          type: 'null',
          description: 'Service Unavailable'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(definedPath.responses['204'].description, 'No Content')
  t.assert.strictEqual(definedPath.responses['204'].content, undefined)
  t.assert.strictEqual(definedPath.responses['503'].type, undefined)

  t.assert.deepStrictEqual(definedPath.responses['503'].description, 'Service Unavailable')
  t.assert.strictEqual(definedPath.responses['503'].content, undefined)
  t.assert.strictEqual(definedPath.responses['503'].type, undefined)
})

test('support response headers', async t => {
  const opt = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {
              type: 'string'
            }
          },
          headers: {
            'X-WORLD': {
              type: 'string'
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].headers, opt.schema.response['200'].headers)
  t.assert.strictEqual(definedPath.responses['200'].schema.headers, undefined)
})

test('response: description and x-response-description', async () => {
  const description = 'description - always that of response body, sometimes also that of response as a whole'
  const responseDescription = 'description only for the response as a whole'

  await test('description without x-response-description doubles as response description', async t => {
    // Given a /description endpoint with only a |description| field in its response schema
    const fastify = Fastify()
    await fastify.register(fastifySwagger)
    fastify.get('/description', {
      schema: {
        response: {
          200: {
            description,
            type: 'string'
          }
        }
      }
    }, () => {})
    await fastify.ready()

    // When the Swagger schema is generated
    const swaggerObject = fastify.swagger()
    const api = await Swagger.validate(swaggerObject)

    // Then the /description endpoint uses the |description| as both the description of the Response Object as well as of its Schema Object
    const responseObject = api.paths['/description'].get.responses['200']
    t.assert.ok(responseObject)
    t.assert.strictEqual(responseObject.description, description)
    t.assert.strictEqual(responseObject.schema.description, description)
  })

  await test('description alongside x-response-description only describes response body', async t => {
    // Given a /responseDescription endpoint that also has a |'x-response-description'| field in its response schema
    const fastify = Fastify()
    await fastify.register(fastifySwagger)
    fastify.get('/responseDescription', {
      schema: {
        response: {
          200: {
            'x-response-description': responseDescription,
            description,
            type: 'string'
          }
        }
      }
    }, () => {})
    await fastify.ready()

    // When the Swagger schema is generated
    const swaggerObject = fastify.swagger()
    const api = await Swagger.validate(swaggerObject)

    // Then the /responseDescription endpoint uses the |responseDescription| only for the Response Object and the |description| only for the Schema Object
    const responseObject = api.paths['/responseDescription'].get.responses['200']
    t.assert.ok(responseObject)
    t.assert.strictEqual(responseObject.description, responseDescription)
    t.assert.strictEqual(responseObject.schema.description, description)
    t.assert.strictEqual(responseObject.schema.responseDescription, undefined)
  })
})

test('support "default" parameter', async t => {
  const opt = {
    schema: {
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: {
              type: 'string'
            }
          }
        },
        default: {
          description: 'Default Response',
          type: 'object',
          properties: {
            bar: {
              type: 'string'
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses.default)), {
    description: 'Default Response',
    schema: {
      description: 'Default Response',
      type: 'object',
      properties: {
        bar: {
          type: 'string'
        }
      }
    }
  })
})

test('fluent-json-schema', async t => {
  const opt = {
    schema: {
      response: {
        200: S.object()
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, { swagger: true })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Default Response')
})

test('support "patternProperties" in json schema', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        patternProperties: {
          '^[a-z]{2,3}-[a-zA-Z]{2}$': {
            type: 'string'
          }
        }
      },
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: {
              type: 'object',
              patternProperties: {
                '^[a-z]{2,3}-[a-zA-Z]{2}$': {
                  type: 'string'
                }
              },
              additionalProperties: false
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, { swagger: true })
  fastify.post('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.parameters[0].schema)), {
    type: 'object',
    additionalProperties: { type: 'string' }
  })

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses[200])), {
    description: 'Expected Response',
    schema: {
      description: 'Expected Response',
      type: 'object',
      properties: {
        foo: {
          type: 'object',
          additionalProperties: { type: 'string' }
        }
      }
    }
  })
})

test('support "const" keyword', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        properties: {
          obj: {
            type: 'object',
            properties: {
              constantProp: { const: 'my-const' },
              constantPropNull: { const: null },
              constantPropZero: { const: 0 },
              constantPropFalse: { const: false },
              constantPropEmptyString: { const: '' }
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.post('/', opt, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.parameters[0].schema)), {
    type: 'object',
    properties: {
      obj: {
        type: 'object',
        properties: {
          constantProp: {
            enum: ['my-const']
          },
          constantPropZero: {
            enum: [0]
          },
          constantPropNull: {
            enum: [null]
          },
          constantPropFalse: {
            enum: [false]
          },
          constantPropEmptyString: {
            enum: ['']
          }
        }
      }
    }
  })
})

test('support "description" keyword', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        description: 'Body description',
        properties: {
          foo: {
            type: 'number'
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(definedPath.parameters[0].description, 'Body description')
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.parameters[0].schema)), {
    type: 'object',
    description: 'Body description',
    properties: {
      foo: {
        type: 'number'
      }
    }
  })
})

test('no head routes by default', async (t) => {
  const fastify = Fastify({ exposeHeadRoutes: true })
  await fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true
  })

  fastify.get('/with-head', {
    schema: {
      operationId: 'with-head',
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: { type: 'string' }
          }
        }
      }
    }
  }, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  t.assert.deepStrictEqual(
    api.paths['/with-head'].get.responses['200'].description,
    'Expected Response'
  )
  t.assert.deepStrictEqual(
    api.paths['/with-head'].head,
    undefined
  )
})

test('support "exposeHeadRoutes" option', async (t) => {
  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeHeadRoutes: true,
    exposeRoute: true
  })

  fastify.get('/with-head', {
    schema: {
      operationId: 'with-head',
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: { type: 'string' }
          }
        }
      }
    }
  }, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  t.assert.deepStrictEqual(
    api.paths['/with-head'].get.responses['200'].description,
    'Expected Response'
  )
  t.assert.deepStrictEqual(
    api.paths['/with-head'].head.responses['200'].description,
    'Expected Response'
  )
})

test('support "exposeHeadRoutes" option at route level', async (t) => {
  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true
  })

  fastify.get('/with-head', {
    schema: {
      operationId: 'with-head',
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: { type: 'string' }
          }
        }
      }
    },
    config: {
      swagger: {
        exposeHeadRoute: true
      }
    }
  }, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  t.assert.deepStrictEqual(
    api.paths['/with-head'].get.responses['200'].description,
    'Expected Response'
  )
  t.assert.deepStrictEqual(
    api.paths['/with-head'].head.responses['200'].description,
    'Expected Response'
  )
})

test('add default properties for url params when missing schema', async t => {
  const opt = {}

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.get('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/{userId}'].get

  t.assert.deepStrictEqual(definedPath.parameters[0], {
    type: 'string',
    required: true,
    in: 'path',
    name: 'userId'
  })
})

test('add default properties for url params when missing schema.params', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        properties: {
          bio: {
            type: 'string'
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.post('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/{userId}'].post

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.parameters[0].schema)), {
    type: 'object',
    properties: {
      bio: {
        type: 'string'
      }
    }
  })
  t.assert.deepStrictEqual(definedPath.parameters[1], {
    in: 'path',
    name: 'userId',
    type: 'string',
    required: true
  })
})

test('avoid overwriting params when schema.params is provided', async t => {
  const opt = {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      },
      body: {
        type: 'object',
        properties: {
          bio: {
            type: 'string'
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger)
  fastify.post('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()

  const definedPath = swaggerObject.paths['/{userId}'].post

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.parameters[0].schema)), {
    type: 'object',
    properties: {
      bio: {
        type: 'string'
      }
    }
  })
  t.assert.deepStrictEqual(definedPath.parameters[1], {
    in: 'path',
    name: 'id',
    type: 'string',
    required: true
  })
})
