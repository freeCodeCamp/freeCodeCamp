'use strict'

const fastify = require('../fastify')({ logger: true })

const opts = {
  schema: {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}
fastify.register(require('./plugin'), opts, function (err) {
  if (err) {
    throw err
  }
})

fastify.listen({ port: 3000 }, function (err) {
  if (err) {
    throw err
  }
})
