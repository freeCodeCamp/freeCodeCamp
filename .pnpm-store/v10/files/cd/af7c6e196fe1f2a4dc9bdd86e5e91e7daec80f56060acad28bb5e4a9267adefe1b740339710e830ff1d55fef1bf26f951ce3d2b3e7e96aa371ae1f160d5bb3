'use strict'

const fastify = require('fastify')()

fastify.register(require('../index'), {
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
  hideUntagged: true,
  exposeRoute: true
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

fastify.register(async function (fastify) {
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

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
