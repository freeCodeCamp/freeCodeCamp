'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')
const yaml = require('yaml')

test('transformSpecification should modify the json', async (t) => {
  t.plan(5)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'code', description: 'Code related end-points' }
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' }
          }
        }
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })
  await fastify.register(fastifySwaggerUi, {
    transformSpecification: function (swaggerObject, req, reply) {
      t.assert.notEqual(swaggerObject, fastify.swagger())
      t.assert.ok(req)
      t.assert.ok(reply)
      swaggerObject.swagger = '2.1'
      return swaggerObject
    }
  })

  await fastify.ready()

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/json'
  })

  t.assert.notDeepEqual(fastify.swagger(), JSON.parse(res.body))
  t.assert.strictEqual(JSON.parse(res.body).swagger, '2.1')
})

test('transformSpecificationClone false should not deepclone fastify.swagger() /1', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'code', description: 'Code related end-points' }
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' }
          }
        }
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })
  await fastify.register(fastifySwaggerUi, {
    transformSpecificationClone: false,
    transformSpecification: function (swaggerObject, req, reply) {
      t.assert.deepStrictEqual(swaggerObject, fastify.swagger())
      t.assert.ok(req)
      t.assert.ok(reply)
      return swaggerObject
    }
  })

  await fastify.ready()

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/json'
  })

  t.assert.deepStrictEqual(fastify.swagger(), JSON.parse(res.body))
})

test('transformSpecification should modify the yaml', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'code', description: 'Code related end-points' }
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' }
          }
        }
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })
  await fastify.register(fastifySwaggerUi, {
    transformSpecification: function (swaggerObject, req, reply) {
      swaggerObject.swagger = '2.1'
      t.assert.ok(req)
      t.assert.ok(reply)
      return swaggerObject
    }
  })

  await fastify.ready()

  const swaggerPre = fastify.swagger()
  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/yaml'
  })

  t.assert.deepStrictEqual(fastify.swagger(), swaggerPre)
  t.assert.deepStrictEqual(yaml.parse(res.body).swagger, '2.1')
})

test('transformSpecificationClone false should not deepclone fastify.swagger() /2', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'code', description: 'Code related end-points' }
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' }
          }
        }
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })
  await fastify.register(fastifySwaggerUi, {
    transformSpecificationClone: false,
    transformSpecification: function (swaggerObject, req, reply) {
      t.assert.deepStrictEqual(swaggerObject, fastify.swagger())
      t.assert.ok(req)
      t.assert.ok(reply)
      return swaggerObject
    }
  })

  await fastify.ready()

  const swaggerPre = fastify.swagger()
  await fastify.inject({
    method: 'GET',
    url: '/documentation/yaml'
  })

  t.assert.deepStrictEqual(fastify.swagger(), swaggerPre)
})
