'use strict'

const Fastify = require('fastify')

  ; (async () => {
  const fastify = Fastify({ logger: true })

  await fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    hideUntagged: true
  })

  await fastify.register(require('../index'), {
    routePrefix: '/swagger-docs'
  })

  fastify.addSchema({
    $id: 'user',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  })

  fastify.addSchema({
    $id: 'some',
    type: 'object',
    properties: {
      some: { type: 'string' }
    }
  })

  await fastify.register(async function (fastify) {
    fastify.put('/some-route/:id', {
      schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        security: [{ apiKey: [] }],
        params: { $ref: 'user#' },
        body: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
            obj: { $ref: 'some#' }
          }
        },
        response: {
          201: {
            description: 'Succesful response',
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          },
          default: {
            description: 'Default response',
            type: 'object',
            properties: {
              foo: { type: 'string' }
            }
          }
        }
      }
    }, (req, reply) => { reply.send({ hello: `Hello ${req.body.hello}` }) })

    fastify.post('/some-route/:id', {
      schema: {
        description: 'post some data',
        summary: 'qwerty',
        security: [{ apiKey: [] }],
        params: { $ref: 'user#' },
        body: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
            obj: { $ref: 'some#' }
          }
        },
        response: {
          201: {
            description: 'Succesful response',
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      }
    }, (req, reply) => { reply.send({ hello: `Hello ${req.body.hello}` }) })
  })

  fastify.listen({ port: 3000, hostname: '0.0.0.0' }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/swagger-docs/`)
  })
})()
