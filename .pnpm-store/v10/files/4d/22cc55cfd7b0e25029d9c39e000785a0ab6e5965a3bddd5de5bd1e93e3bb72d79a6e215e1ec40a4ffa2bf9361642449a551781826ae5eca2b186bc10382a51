'use strict'

const fastify = require('../../fastify')({ logger: false })

const opts = {
  schema: {
    response: {
      200: {
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

function promiseFunction (resolve) {
  setImmediate(resolve)
}

async function asyncHook () {
  await new Promise(promiseFunction)
}

fastify
  .addHook('onRequest', asyncHook)
  .addHook('onRequest', asyncHook)
  .addHook('preHandler', asyncHook)
  .addHook('preHandler', asyncHook)
  .addHook('preHandler', asyncHook)
  .addHook('onSend', asyncHook)

fastify.get('/', opts, function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err) {
  if (err) {
    throw err
  }
})
