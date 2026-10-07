'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const Swagger = require('@apidevtools/swagger-parser')
const fastifySwagger = require('../../../index')
const S = require('fluent-json-schema')
const {
  openapiOption,
  schemaAllOf
} = require('../../../examples/options')

test('support - oneOf, anyOf, allOf', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, openapiOption)

  fastify.get('/', schemaAllOf, () => {})

  await fastify.ready()

  const openapiObject = fastify.swagger()
  const api = await Swagger.validate(openapiObject)
  const definedPath = api.paths['/'].get
  t.assert.ok(definedPath)
  t.assert.deepStrictEqual(definedPath.parameters, [
    {
      required: false,
      in: 'query',
      name: 'foo',
      schema: {
        type: 'string'
      }
    }
  ])
})

test('support - oneOf, anyOf, allOf in headers', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, openapiOption)

  const schema = {
    schema: {
      headers: {
        allOf: [
          {
            type: 'object',
            properties: {
              foo: { type: 'string' }
            }
          }
        ]
      }
    }
  }
  fastify.get('/', schema, () => {})

  await fastify.ready()

  const openapiObject = fastify.swagger()

  const api = await Swagger.validate(openapiObject)
  const definedPath = api.paths['/'].get
  t.assert.ok(definedPath)
  t.assert.deepStrictEqual(definedPath.parameters, [
    {
      required: false,
      in: 'header',
      name: 'foo',
      schema: {
        type: 'string'
      }
    }
  ])
})

test('support 2xx response', async t => {
  const opt = {
    schema: {
      response: {
        '2XX': {
          type: 'object'
        },
        '3xx': {
          type: 'object'
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['2XX'].description, 'Default Response')
  t.assert.deepStrictEqual(definedPath.responses['3XX'].description, 'Default Response')
})

test('support multiple content types as response', async t => {
  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true,
    routePrefix: '/docs',
    exposeRoute: true
  })

  const opt = {
    schema: {
      response: {
        200: {
          description: 'Description and all status-code based properties are working',
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
          type: 'object',
          properties: {
            name: { type: 'string' }
          }
        },
        300: {
          type: 'object',
          properties: {
            age: { type: 'number' }
          }
        }
      }
    }
  }
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)
  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Description and all status-code based properties are working')
  t.assert.deepStrictEqual(definedPath.responses['200'].content, {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string' }, image: { type: 'string' }, address: { type: 'string' }
        }
      }
    },
    'application/vnd.v1+json': {
      schema: {
        type: 'object',
        properties: {
          fullName: { type: 'string' }, phone: { type: 'string' }
        }
      }
    }
  })
  t.assert.deepStrictEqual(definedPath.responses['4XX'].description, 'Default Response')
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses['4XX'].content)), {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        }
      }
    }
  })
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses[300].content)), {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          age: { type: 'number' }
        }
      }
    }
  })
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['204'].description, 'No Content')
  t.assert.strictEqual(definedPath.responses['204'].content, undefined)
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(definedPath.responses['204'].description, 'No Content')
  t.assert.strictEqual(definedPath.responses['204'].content, undefined)

  t.assert.deepStrictEqual(definedPath.responses['503'].description, 'Service Unavailable')
  t.assert.strictEqual(definedPath.responses['503'].content, undefined)
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
            },
            'X-DESCRIPTION': {
              description: 'Foo',
              type: 'string'
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].headers['X-WORLD'], {
    schema: {
      type: 'string'
    }
  })
  t.assert.deepStrictEqual(definedPath.responses['200'].headers['X-DESCRIPTION'], {
    description: 'Foo',
    schema: {
      type: 'string'
    }
  })
  t.assert.strictEqual(definedPath.responses['200'].content['application/json'].schema.headers, undefined)
})

test('response: description and x-response-description', async () => {
  const description = 'description - always that of response body, sometimes also that of response as a whole'
  const responseDescription = 'description only for the response as a whole'

  await test('description without x-response-description doubles as response description', async t => {
    // Given a /description endpoint with only a |description| field in its response schema
    const fastify = Fastify()
    await fastify.register(fastifySwagger, openapiOption)
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
    /** @type {import('openapi-types').OpenAPIV3.ResponseObject} */
    const responseObject = api.paths['/description'].get.responses['200']
    t.assert.ok(responseObject)
    t.assert.strictEqual(responseObject.description, description)

    const schemaObject = responseObject.content['application/json'].schema
    t.assert.ok(schemaObject)
    t.assert.strictEqual(schemaObject.description, description)
  })

  await test('description alongside x-response-description only describes response body', async t => {
    // Given a /x-response-description endpoint that also has a |x-response-description| field in its response schema
    const fastify = Fastify()
    await fastify.register(fastifySwagger, openapiOption)
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

    const schemaObject = responseObject.content['application/json'].schema
    t.assert.ok(schemaObject)
    t.assert.strictEqual(schemaObject.description, description)
    t.assert.strictEqual(schemaObject.responseDescription, undefined)
  })

  await test('retrieve the response description from its given $ref schema', async t => {
    // Given a /description endpoint that also has a |description| field in its response referenced schema
    const fastify = Fastify()
    fastify.addSchema({
      $id: 'my-ref',
      description,
      type: 'string'
    })

    await fastify.register(fastifySwagger, openapiOption)
    fastify.get('/description', {
      schema: {
        response: {
          200: {
            $ref: 'my-ref#'
          }
        }
      }
    }, () => {})
    await fastify.ready()

    // When the Swagger schema is generated
    const swaggerObject = fastify.swagger()
    const api = await Swagger.validate(swaggerObject)

    const responseObject = api.paths['/description'].get.responses['200']
    t.assert.ok(responseObject)
    t.assert.strictEqual(responseObject.description, description)

    const schemaObject = responseObject.content['application/json'].schema
    t.assert.ok(schemaObject)
    t.assert.strictEqual(schemaObject.description, description)
    t.assert.strictEqual(schemaObject.responseDescription, undefined)
  })
})

test('support default=null', async t => {
  const opt = {
    schema: {
      response: {
        '2XX': {
          type: 'string',
          nullable: true,
          default: null
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['2XX'].default, undefined)
})

test('support global schema reference', async t => {
  const schema = {
    type: 'object',
    properties: {
      hello: { type: 'string' }
    },
    required: ['hello']
  }
  const fastify = Fastify()
  await fastify.register(fastifySwagger, { openapi: true })
  fastify.addSchema({ ...schema, $id: 'requiredUniqueSchema' })
  fastify.get('/', { schema: { query: { $ref: 'requiredUniqueSchema' } } }, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(api.components.schemas['def-0'])), { ...schema, title: 'requiredUniqueSchema' })
})

test('support global schema reference with title', async t => {
  const schema = {
    title: 'schema view title',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    },
    required: ['hello']
  }
  const fastify = Fastify()
  await fastify.register(fastifySwagger, { openapi: true })
  fastify.addSchema({ ...schema, $id: 'requiredUniqueSchema' })
  fastify.get('/', { schema: { query: { $ref: 'requiredUniqueSchema' } } }, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(api.components.schemas['def-0'])), schema)
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses.default)), {
    description: 'Default Response',
    content: {
      'application/json': {
        schema: {
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get
  t.assert.deepStrictEqual(definedPath.responses['200'].description, 'Default Response')
})

test('support "patternProperties" parameter', async t => {
  const opt = {
    schema: {
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses[200])), {
    description: 'Expected Response',
    content: {
      'application/json': {
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
      }
    }
  })
})

test('properly support "patternProperties" parameter', async t => {
  const opt = {
    schema: {
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: {
              type: 'object',
              patternProperties: {
                '^[a-z]{2,3}-[a-zA-Z]{2}$': {
                  type: 'object',
                  properties: {
                    foo: { type: 'number' }
                  }
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => { })

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].get

  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.responses[200])), {
    description: 'Expected Response',
    content: {
      'application/json': {
        schema: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            foo: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  foo: { type: 'number' }
                }
              }
            }
          }
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
              constantPropZero: { const: 0 },
              constantPropNull: { const: null },
              constantPropFalse: { const: false },
              constantPropEmptyString: { const: '' }
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: {
      openapi: '3.1.0',
    },
    convertConstToEnum: false
  })
  fastify.post('/', opt, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.requestBody)), {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            obj: {
              type: 'object',
              properties: {
                constantProp: {
                  const: 'my-const'
                },
                constantPropZero: {
                  const: 0
                },
                constantPropNull: {
                  const: null
                },
                constantPropFalse: {
                  const: false
                },
                constantPropEmptyString: {
                  const: ''
                }
              }
            }
          }
        }
      }
    }
  })
})

test('convert "const" to "enum"', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        properties: {
          obj: {
            type: 'object',
            properties: {
              constantProp: { const: 'my-const' },
              constantPropZero: { const: 0 },
              constantPropNull: { const: null },
              constantPropFalse: { const: false },
              constantPropEmptyString: { const: '' }
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true,
    // Default is true
    // convertConstToEnum: true
  })
  fastify.post('/', opt, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.requestBody)), {
    required: true,
    content: {
      'application/json': {
        schema: {
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
        }
      }
    }
  })
})

test('support object properties named "const"', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        properties: {
          obj: {
            type: 'object',
            properties: {
              const: { type: 'string' }
            },
            required: ['const']
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.requestBody)), {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            obj: {
              type: 'object',
              properties: {
                const: {
                  type: 'string'
                }
              },
              required: ['const']
            }
          }
        }
      }
    }
  })
})

test('support object properties with special names', async t => {
  const opt = {
    schema: {
      body: {
        type: 'object',
        properties: {
          obj: {
            type: 'object',
            properties: {
              properties: {
                type: 'string'
              },
              patternProperties: {
                type: 'string'
              },
              additionalProperties: {
                type: 'number'
              }
            },
            required: ['const', 'patternProperties', 'additionalProperties']
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.requestBody)), {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            obj: {
              type: 'object',
              properties: {
                properties: {
                  type: 'string'
                },
                patternProperties: {
                  type: 'string'
                },
                additionalProperties: {
                  type: 'number'
                }
              },
              required: ['const', 'patternProperties', 'additionalProperties']
            }
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(definedPath.requestBody)), {
    required: true,
    description: 'Body description',
    content: {
      'application/json': {
        schema: {
          description: 'Body description',
          type: 'object',
          properties: {
            foo: {
              type: 'number'
            }
          }
        }
      }
    }
  })
})

test('support query serialization params', async t => {
  const opt = {
    schema: {
      querystring: {
        style: 'deepObject',
        explode: false,
        type: 'object',
        allowReserved: true,
        properties: {
          obj: {
            type: 'string'
          }
        }
      }
    }
  }

  const fastify = Fastify({
    ajv: {
      plugins: [
        function (ajv) {
          ajv.addKeyword({ keyword: 'style' })
          ajv.addKeyword({ keyword: 'explode' })
          ajv.addKeyword({ keyword: 'allowReserved' })
        }
      ]
    }
  })
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/', opt, () => {})
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)
  t.assert.strictEqual(api.paths['/'].get.parameters[0].style, 'deepObject')
  t.assert.strictEqual(api.paths['/'].get.parameters[0].explode, false)
  t.assert.strictEqual(api.paths['/'].get.parameters[0].allowReserved, true)
})

test('add default properties for url params when missing schema', async t => {
  const opt = {}

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.get('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/{userId}'].get

  t.assert.deepStrictEqual(definedPath.parameters[0], {
    in: 'path',
    name: 'userId',
    required: true,
    schema: {
      type: 'string'
    }
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/{userId}'].post

  t.assert.deepStrictEqual(definedPath.parameters[0], {
    in: 'path',
    name: 'userId',
    required: true,
    schema: {
      type: 'string'
    }
  })
  t.assert.deepStrictEqual(definedPath.requestBody.content['application/json'].schema.properties, {
    bio: {
      type: 'string'
    }
  })
})

test('support custom transforms which returns $ref in the response', async t => {
  const customObject = {}
  const opt = {
    schema: {
      response: {
        200: customObject
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true,
    transform: ({ schema, ...rest }) => {
      schema.response['200'] = {
        $ref: '#/components/schemas/CustomObject'
      }
      return {
        schema,
        ...rest
      }
    },
    transformObject: ({ openapiObject }) => {
      openapiObject.components.schemas.CustomObject = {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
      return openapiObject
    }
  })
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()

  const swaggerPath = swaggerObject.paths['/'].post
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(swaggerPath.responses['200'].content['application/json'].schema)), {
    $ref: '#/components/schemas/CustomObject'
  })

  // validate seems to mutate the swaggerPath object
  const api = await Swagger.validate(swaggerObject)
  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(definedPath.responses['200'].content['application/json'].schema, {
    type: 'object',
    properties: {
      hello: {
        type: 'string'
      }
    }
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
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/:userId', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()

  const definedPath = swaggerObject.paths['/{userId}'].post

  t.assert.deepStrictEqual(definedPath.parameters[0], {
    in: 'path',
    name: 'id',
    required: true,
    schema: {
      type: 'string'
    }
  })
  t.assert.deepStrictEqual(definedPath.requestBody.content['application/json'].schema.properties, {
    bio: {
      type: 'string'
    }
  })
})

test('support multiple content types as request', async t => {
  const opt = {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                jsonProperty: {
                  type: 'string'
                }
              }
            }
          },
          'application/xml': {
            schema: {
              type: 'object',
              properties: {
                xmlProperty: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  }

  const fastify = Fastify()
  await fastify.register(fastifySwagger, {
    openapi: true
  })
  fastify.post('/', opt, () => { })
  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const api = await Swagger.validate(swaggerObject)

  const definedPath = api.paths['/'].post
  t.assert.deepStrictEqual(definedPath.requestBody, {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            jsonProperty: {
              type: 'string'
            }
          }
        }
      },
      'application/xml': {
        schema: {
          type: 'object',
          properties: {
            xmlProperty: {
              type: 'string'
            }
          }
        }
      }
    }
  })
})

test('support callbacks', async () => {
  await test('includes callbacks in openapiObject', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Some event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  }
                }
              },
              myOtherEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    responses: {
                      200: {
                        description: 'Success'
                      },
                      500: {
                        description: 'Error'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.strictEqual(typeof openapiObject.paths['/subscribe'].post.callbacks, 'object')

    const definedPath = openapiObject.paths['/subscribe'].post.callbacks

    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/callbackUrl}'].post.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'Some event happened'
        }
      }
    )

    t.assert.deepStrictEqual(
      definedPath.myOtherEvent['{$request.body#/callbackUrl}'].post.requestBody,
      undefined
    )

    await Swagger.validate(openapiObject)
  })

  await test('sets callback response default if not included', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Some event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.strictEqual(typeof openapiObject.paths['/subscribe'].post.callbacks, 'object')

    const definedPath = openapiObject.paths['/subscribe'].post

    t.assert.strictEqual(
      definedPath.callbacks.myEvent['{$request.body#/callbackUrl}'].post
        .responses['2XX'].description,
      'Default Response'
    )

    await Swagger.validate(openapiObject)
  })

  await test('skips callbacks if event is badly formatted', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: null
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.deepStrictEqual(openapiObject.paths['/subscribe'].post.callbacks, {})

    await Swagger.validate(openapiObject)
  })

  await test('skips callback if callbackUrl is badly formatted', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Some event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  }
                }
              },
              myOtherEvent: {
                '{$request.body#/callbackUrl}': null
              }
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.strictEqual(typeof openapiObject.paths['/subscribe'].post.callbacks, 'object')
    t.assert.ok(Object.keys(openapiObject.paths['/subscribe'].post.callbacks).includes('myEvent'))

    const definedPath = openapiObject.paths['/subscribe'].post.callbacks

    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/callbackUrl}'].post.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'Some event happened'
        }
      }
    )

    await Swagger.validate(openapiObject)
  })

  await test('skips callback if method is badly formatted', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Some event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  }
                }
              },
              myOtherEvent: {
                '{$request.body#/callbackUrl}': {
                  post: null
                }
              }
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.strictEqual(typeof openapiObject.paths['/subscribe'].post.callbacks, 'object')
    t.assert.ok(Object.keys(openapiObject.paths['/subscribe'].post.callbacks).includes('myEvent'))

    const definedPath = openapiObject.paths['/subscribe'].post.callbacks

    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/callbackUrl}'].post.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'Some event happened'
        }
      }
    )

    await Swagger.validate(openapiObject)
  })

  await test('supports multiple callbackUrls and httpMethods in openapiObject', async t => {
    const fastify = Fastify()

    await fastify.register(fastifySwagger, openapiOption)
    fastify.register(async (instance) => {
      instance.post(
        '/subscribe',
        {
          schema: {
            body: {
              $id: 'Subscription',
              type: 'object',
              properties: {
                callbackUrl: {
                  type: 'string',
                  examples: ['https://example.com']
                }
              }
            },
            response: {
              200: {
                $id: 'Subscription',
                type: 'object',
                properties: {
                  callbackUrl: {
                    type: 'string',
                    examples: ['https://example.com']
                  }
                }
              }
            },
            callbacks: {
              myEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Some event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  }
                },
                '{$request.body#/anotherUrl}': {
                  post: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'Another event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  },
                  put: {
                    requestBody: {
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            properties: {
                              message: {
                                type: 'string',
                                example: 'PUT event happened'
                              }
                            },
                            required: ['message']
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: 'Success'
                      }
                    }
                  }
                }
              },
              myOtherEvent: {
                '{$request.body#/callbackUrl}': {
                  post: {
                    responses: {
                      200: {
                        description: 'Success'
                      },
                      500: {
                        description: 'Error'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        () => {}
      )
    })

    await fastify.ready()

    const openapiObject = fastify.swagger()

    t.assert.strictEqual(typeof openapiObject, 'object')
    t.assert.strictEqual(typeof openapiObject.paths['/subscribe'].post.callbacks, 'object')

    const definedPath = openapiObject.paths['/subscribe'].post.callbacks

    // First Event->First URL->First Method
    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/callbackUrl}'].post.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'Some event happened'
        }
      }
    )

    // First Event->Second URL->First Method
    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/anotherUrl}'].post.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'Another event happened'
        }
      }
    )

    // First Event->Second URL->Second Method
    t.assert.deepStrictEqual(
      definedPath.myEvent['{$request.body#/anotherUrl}'].put.requestBody
        .content['application/json'].schema.properties,
      {
        message: {
          type: 'string',
          example: 'PUT event happened'
        }
      }
    )

    // Second Event
    t.assert.deepStrictEqual(
      definedPath.myOtherEvent['{$request.body#/callbackUrl}'].post.requestBody,
      undefined
    )

    await Swagger.validate(openapiObject)
  })

  await test('should preserve original headers schema across multiple responses', async t => {
    const headersSchema = {
      'X-DESCRIPTION': {
        type: 'string',
        description: 'Foo',
      },
    }

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
            headers: headersSchema
          },
          201: {
            type: 'object',
            properties: {
              hello: {
                type: 'string'
              }
            },
            headers: headersSchema
          }
        }
      }
    }

    const fastify = Fastify()
    await fastify.register(fastifySwagger, {
      openapi: true
    })
    fastify.get('/', opt, () => {})

    await fastify.ready()

    const swaggerObject = fastify.swagger()
    const api = await Swagger.validate(swaggerObject)

    const definedPath = api.paths['/'].get

    t.assert.deepStrictEqual(definedPath.responses['200'].headers['X-DESCRIPTION'], {
      description: 'Foo',
      schema: {
        type: 'string'
      }
    })
    t.assert.strictEqual(definedPath.responses['200'].content['application/json'].schema.headers, undefined)
    t.assert.deepStrictEqual(definedPath.responses['201'].headers['X-DESCRIPTION'], {
      description: 'Foo',
      schema: {
        type: 'string'
      }
    })
    t.assert.strictEqual(definedPath.responses['201'].content['application/json'].schema.headers, undefined)
  })
})
