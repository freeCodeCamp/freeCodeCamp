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
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  })

  await fastify.register(require('../index'), {
    routePrefix: '/swagger-docs'
  })

  await fastify.register(async function (fastify) {
    fastify.put('/some-route/:id', {
      schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'user id'
            }
          }
        },
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
    }, (req, reply) => {})
  })

  fastify.listen({ port: 3000, hostname: '0.0.0.0' }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/swagger-docs/`)
  })
})()
