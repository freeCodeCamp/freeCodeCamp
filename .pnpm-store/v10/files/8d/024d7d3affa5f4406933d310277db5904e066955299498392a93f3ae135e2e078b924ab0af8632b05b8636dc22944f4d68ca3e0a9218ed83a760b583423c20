'use strict'

const { test } = require('node:test')
const { S } = require('fluent-json-schema')
const Fastify = require('../fastify')
const sjson = require('secure-json-parse')

const BadRequestSchema = S.object()
  .prop('statusCode', S.number())
  .prop('error', S.string())
  .prop('message', S.string())

const InternalServerErrorSchema = S.object()
  .prop('statusCode', S.number())
  .prop('error', S.string())
  .prop('message', S.string())

const NotFoundSchema = S.object()
  .prop('statusCode', S.number())
  .prop('error', S.string())
  .prop('message', S.string())

const options = {
  schema: {
    body: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' }
        }
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: BadRequestSchema.valueOf()
          }
        }
      },
      404: {
        description: 'Resource not found',
        content: {
          'application/json': {
            schema: NotFoundSchema.valueOf(),
            example: {
              statusCode: 404,
              error: 'Not Found',
              message: 'Not Found'
            }
          }
        }
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: InternalServerErrorSchema.valueOf(),
            example: {
              message: 'Internal Server Error'
            }
          }
        }
      }
    }
  }
}

const handler = (request, reply) => {
  if (request.body.id === '400') {
    return reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Custom message',
      extra: 'This should not be in the response'
    })
  }

  if (request.body.id === '404') {
    return reply.status(404).send({
      statusCode: 404,
      error: 'Not Found',
      message: 'Custom Not Found',
      extra: 'This should not be in the response'
    })
  }

  if (request.body.id === '500') {
    reply.status(500).send({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'Custom Internal Server Error',
      extra: 'This should not be in the response'
    })
  }

  reply.send({
    id: request.body.id,
    extra: 'This should not be in the response'
  })
}

test('serialize the response for a Bad Request error, as defined on the schema', async t => {
  t.plan(2)

  const fastify = Fastify({})

  fastify.post('/', options, handler)
  const response = await fastify.inject({
    method: 'POST',
    url: '/'
  })

  t.assert.strictEqual(response.statusCode, 400)
  t.assert.deepStrictEqual(sjson(response.body), {
    statusCode: 400,
    error: 'Bad Request',
    message: 'body must be object'
  })
})

test('serialize the response for a Not Found error, as defined on the schema', async t => {
  t.plan(2)

  const fastify = Fastify({})

  fastify.post('/', options, handler)

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    body: { id: '404' }
  })

  t.assert.strictEqual(response.statusCode, 404)
  t.assert.deepStrictEqual(sjson(response.body), {
    statusCode: 404,
    error: 'Not Found',
    message: 'Custom Not Found'
  })
})

test('serialize the response for a Internal Server Error error, as defined on the schema', async t => {
  t.plan(2)

  const fastify = Fastify({})

  fastify.post('/', options, handler)

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    body: { id: '500' }
  })

  t.assert.strictEqual(response.statusCode, 500)
  t.assert.deepStrictEqual(sjson(response.body), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Custom Internal Server Error'
  })
})

test('serialize the success response, as defined on the schema', async t => {
  t.plan(2)

  const fastify = Fastify({})

  fastify.post('/', options, handler)

  const response = await fastify.inject({
    method: 'POST',
    url: '/',
    body: { id: 'test' }
  })

  t.assert.strictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(sjson(response.body), {
    id: 'test'
  })
})
