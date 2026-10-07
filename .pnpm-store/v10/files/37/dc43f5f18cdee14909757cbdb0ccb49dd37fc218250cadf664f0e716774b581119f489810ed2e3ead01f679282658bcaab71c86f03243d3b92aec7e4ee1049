'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const Swagger = require('@apidevtools/swagger-parser')
const yaml = require('yaml')
const fastifySwagger = require('../../../index')
const { readPackageJson } = require('../../../lib/util/read-package-json')
const { swaggerOption } = require('../../../examples/options')

test('swagger should have default version', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.swagger, '2.0')
})

test('swagger should have default info properties', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  const pkg = readPackageJson()

  t.assert.strictEqual(swaggerObject.info.title, pkg.name)
  t.assert.strictEqual(swaggerObject.info.version, pkg.version)
})

test('swagger basic properties', async (t) => {
  t.plan(5)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.info, swaggerOption.swagger.info)
  t.assert.strictEqual(swaggerObject.host, swaggerOption.swagger.host)
  t.assert.strictEqual(swaggerObject.schemes, swaggerOption.swagger.schemes)
  t.assert.ok(swaggerObject.paths)
  t.assert.ok(swaggerObject.paths['/'])
})

test('swagger definitions', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  swaggerOption.swagger.definitions = {
    ExampleModel: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          description: 'Some id'
        },
        name: {
          type: 'string',
          description: 'Name of smthng'
        }
      }
    }
  }

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.deepStrictEqual(JSON.parse(JSON.stringify(swaggerObject.definitions)), swaggerOption.swagger.definitions)
  delete swaggerOption.swagger.definitions // remove what we just added
})

test('swagger paths', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  swaggerOption.swagger.paths = {
    '/status': {
      get: {
        description: 'Status route, so we can check if server is alive',
        tags: [
          'Status'
        ],
        responses: {
          200: {
            description: 'Server is alive',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    health: {
                      type: 'boolean'
                    },
                    date: {
                      type: 'string'
                    }
                  },
                  example: {
                    health: true,
                    date: '2018-02-19T15:36:46.758Z'
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.deepStrictEqual(swaggerObject.paths, swaggerOption.swagger.paths)
  delete swaggerOption.swagger.paths // remove what we just added
})

test('swagger tags', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.tags, swaggerOption.swagger.tags)
})

test('swagger externalDocs', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.externalDocs, swaggerOption.swagger.externalDocs)
})

test('basePath support', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: Object.assign({}, swaggerOption.swagger, {
      basePath: '/prefix'
    })
  })

  fastify.get('/prefix/endpoint', {}, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/prefix/endpoint'], undefined)
  t.assert.ok(swaggerObject.paths['/endpoint'])
})

test('basePath support with prefix', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    prefix: '/prefix',
    swagger: Object.assign({}, swaggerOption.swagger, {
      basePath: '/prefix'
    })
  })

  fastify.get('/endpoint', {}, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/prefix/endpoint'], undefined)
  t.assert.ok(swaggerObject.paths['/endpoint'])
})

test('basePath ensure leading slash', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: Object.assign({}, swaggerOption.swagger, {
      basePath: '/'
    })
  })

  fastify.get('/endpoint', {}, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths.endpoint, undefined)
  t.assert.ok(swaggerObject.paths['/endpoint'])
})

test('basePath with prefix ensure leading slash', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    prefix: '/',
    swagger: Object.assign({}, swaggerOption.swagger, {
      basePath: '/'
    })
  })

  fastify.get('/endpoint', {}, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths.endpoint, undefined)
  t.assert.ok(swaggerObject.paths['/endpoint'])
})

test('basePath maintained when stripBasePath is set to false', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    stripBasePath: false,
    swagger: Object.assign({}, swaggerOption.swagger, {
      basePath: '/foo'
    })
  })

  fastify.get('/foo/endpoint', {}, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths.endpoint, undefined)
  t.assert.strictEqual(swaggerObject.paths['/endpoint'], undefined)
  t.assert.ok(swaggerObject.paths['/foo/endpoint'])
})

// hide testing

test('hide support - property', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  const opts = {
    schema: {
      hide: true,
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/'], undefined)
})

test('hide support when property set in transform() - property', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    ...swaggerOption,
    transform: ({ schema, url }) => {
      return { schema: { ...schema, hide: true }, url }
    }
  })

  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/'], undefined)
})

test('hide support - tags Default', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  const opts = {
    schema: {
      tags: ['X-HIDDEN'],
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/'], undefined)
})

test('hide support - tags Custom', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, { ...swaggerOption, hiddenTag: 'NOP' })

  const opts = {
    schema: {
      tags: ['NOP'],
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/'], undefined)
})

test('hide support - hidden untagged', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, { ...swaggerOption, hideUntagged: true })

  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      }
    }
  }

  fastify.post('/', opts, () => {})

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.paths['/'], undefined)
})

test('cache - json', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  fastify.swagger()
  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(typeof swaggerObject, 'object')

  await Swagger.validate(swaggerObject)
  t.assert.ok(true, 'valid swagger object')
})

test('cache - yaml', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)

  await fastify.ready()

  fastify.swagger({ yaml: true })
  const swaggerYaml = fastify.swagger({ yaml: true })
  t.assert.strictEqual(typeof swaggerYaml, 'string')
  yaml.parse(swaggerYaml)
  t.assert.ok(true, 'valid swagger yaml')
})

module.exports = { swaggerOption }
