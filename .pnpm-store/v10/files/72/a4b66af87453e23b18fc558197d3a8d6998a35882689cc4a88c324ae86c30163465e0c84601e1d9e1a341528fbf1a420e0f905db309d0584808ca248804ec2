'use strict'

const fastify = require('fastify')()

fastify.register(require('../index'), {
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
  hideUntagged: true,
  exposeRoute: true
})

fastify.register(async function (fastify) {
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

fastify.post('/subscribe', {
  schema: {
    description: 'subscribe for webhooks',
    summary: 'webhook example',
    security: [],
    response: {
      201: {
        description: 'Succesful response'
      }
    },
    body: {
      type: 'object',
      properties: {
        callbackUrl: {
          type: 'string',
          examples: ['https://example.com']
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
                    required: [
                      'message'
                    ]
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
      }
    }
  }
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
