'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('nullable string', (t, done) => {
  t.plan(3)
  const fastify = Fastify()
  fastify.route({
    method: 'POST',
    url: '/',
    handler: (req, reply) => {
      t.assert.strictEqual(req.body.hello, null)
      reply.code(200).send(req.body)
    },
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
            format: 'email',
            nullable: true
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {
              type: 'string',
              format: 'email',
              nullable: true
            }
          }
        }
      }
    }
  })
  fastify.inject({
    method: 'POST',
    url: '/',
    body: {
      hello: null
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.json().hello, null)
    done()
  })
})

test('object or null body', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.route({
    method: 'POST',
    url: '/',
    handler: (req, reply) => {
      t.assert.strictEqual(req.body, undefined)
      reply.code(200).send({ isUndefinedBody: req.body === undefined })
    },
    schema: {
      body: {
        type: ['object', 'null'],
        properties: {
          hello: {
            type: 'string',
            format: 'email'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          nullable: true,
          properties: {
            isUndefinedBody: {
              type: 'boolean'
            }
          }
        }
      }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer, {
    method: 'POST'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { isUndefinedBody: true })
})

test('nullable body', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.route({
    method: 'POST',
    url: '/',
    handler: (req, reply) => {
      t.assert.strictEqual(req.body, undefined)
      reply.code(200).send({ isUndefinedBody: req.body === undefined })
    },
    schema: {
      body: {
        type: 'object',
        nullable: true,
        properties: {
          hello: {
            type: 'string',
            format: 'email'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          nullable: true,
          properties: {
            isUndefinedBody: {
              type: 'boolean'
            }
          }
        }
      }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { isUndefinedBody: true })
})

test('Nullable body with 204', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.route({
    method: 'POST',
    url: '/',
    handler: (req, reply) => {
      t.assert.strictEqual(req.body, undefined)
      reply.code(204).send()
    },
    schema: {
      body: {
        type: 'object',
        nullable: true,
        properties: {
          hello: {
            type: 'string',
            format: 'email'
          }
        }
      }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 204)
  t.assert.strictEqual((await result.text()).length, 0)
})
