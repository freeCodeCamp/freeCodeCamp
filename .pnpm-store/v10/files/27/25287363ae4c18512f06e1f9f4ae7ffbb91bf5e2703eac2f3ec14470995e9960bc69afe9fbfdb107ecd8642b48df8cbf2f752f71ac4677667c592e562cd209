'use strict'

const fastify = require('fastify')()

fastify.register(require('../index'), {
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
  },
  exposeRoute: true,
  routePrefix: '/swagger-docs'
})

fastify.register(async function (fastify) {
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
  }, () => {})
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
