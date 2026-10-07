'use strict'

const Fastify = require('fastify')

  ; (async () => {
  const fastify = Fastify({ logger: true })
  await fastify.register(require('@fastify/swagger'), {
    openapi: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      },
      servers: [{
        url: 'http://localhost'
      }],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        }
      }
    },
    hideUntagged: true
  })

  await fastify.register(require('../index'), {
    validatorUrl: false
  })

  await fastify.register(async function (fastify) {
    fastify.put('/some-route/:id', {
      schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        security: [{ apiKey: [] }],
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
    }, (req, reply) => { reply.send({ hello: `Hello ${req.body.hello}` }) })
  })

  fastify.listen({ port: 3000, hostname: '0.0.0.0' }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
})()
