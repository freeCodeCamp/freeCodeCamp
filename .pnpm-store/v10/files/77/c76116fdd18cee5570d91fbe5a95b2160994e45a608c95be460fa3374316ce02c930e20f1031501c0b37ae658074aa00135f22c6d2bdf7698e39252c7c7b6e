'use strict'

const Fastify = require('fastify')

; (async () => {
  const fastify = Fastify({
    logger: true,
    // Need to add a collectionFormat keyword to ajv in fastify instance
    ajv: {
      customOptions: {
        keywords: ['collectionFormat']
      }
    }
  })

  await fastify.register(require('@fastify/swagger'))
  await fastify.register(require('../index'))

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      querystring: {
        type: 'object',
        required: ['fields'],
        additionalProperties: false,
        properties: {
          fields: {
            type: 'array',
            items: {
              type: 'string'
            },
            minItems: 1,
            //
            // Note that this is an Open API version 2 configuration option.  The
            // options changed in version 3. The plugin currently only supports
            // version 2 of Open API.
            //
            // Put `collectionFormat` on the same property which you are defining
            // as an array of values. (i.e. `collectionFormat` should be a sibling
            // of the `type: "array"` specification.)
            collectionFormat: 'multi'
          }
        }
      }
    },
    handler (request, reply) {
      reply.send(request.query.fields)
    }
  })

  fastify.listen({ port: 3000 }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
}
)()
