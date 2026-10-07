'use strict'

const Fastify = require('fastify')
const qs = require('qs')
const Ajv = require('ajv')

; (async () => {
  const ajv = new Ajv({
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true
  })

  const fastify = Fastify({
    logger: true,
    querystringParser: (str) => {
      const result = qs.parse(str)

      if (result.filter && typeof result.filter === 'string') {
        result.filter = JSON.parse(result.filter)
      }

      return result
    }
  })

  ajv.addKeyword({
    keyword: 'x-consume',
    code: (ctx) => Promise.resolve(true)
  })

  fastify.setValidatorCompiler(({ schema }) => ajv.compile(schema))

  await fastify.register(require('@fastify/swagger'), {
    openapi: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      }
    }
  })
  await fastify.register(require('../index'))

  await fastify.register(async function (fastify) {
    fastify.route({
      method: 'GET',
      url: '/',
      schema: {
        querystring: {
          type: 'object',
          required: ['filter'],
          additionalProperties: false,
          properties: {
            filter: {
              type: 'object',
              required: ['foo'],
              properties: {
                foo: { type: 'string' },
                bar: { type: 'string' }
              },
              'x-consume': 'application/json'
            }
          }
        }
      },
      handler (request, reply) {
        reply.send(request.query.filter)
      }
    })
  })

  fastify.listen({ port: 3000 }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
})()
