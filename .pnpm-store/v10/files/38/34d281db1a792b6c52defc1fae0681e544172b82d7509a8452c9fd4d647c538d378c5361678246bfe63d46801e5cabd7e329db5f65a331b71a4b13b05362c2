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

const optsPost = {
  schema: {
    body: {
      type: 'object',
      required: ['hello'],
      properties: {
        hello: {
          type: 'string'
        }
      }
    },
    response: opts.response
  }
}

fastify
  .addHook('onRequest', function (request, reply, done) {
    console.log('onRequest')
    done()
  })
  .addHook('preParsing', function (request, reply, payload, done) {
    console.log('preParsing')
    done()
  })
  .addHook('preValidation', function (request, reply, done) {
    console.log('preValidation')
    done()
  })
  .addHook('preHandler', function (request, reply, done) {
    console.log('preHandler')
    done()
  })
  .addHook('preSerialization', function (request, reply, payload, done) {
    console.log('preSerialization', payload)
    done()
  })
  .addHook('onError', function (request, reply, error, done) {
    console.log('onError', error.message)
    done()
  })
  .addHook('onSend', function (request, reply, payload, done) {
    console.log('onSend', payload)
    done()
  })
  .addHook('onResponse', function (request, reply, done) {
    console.log('onResponse')
    done()
  })
  .addHook('onRoute', function (routeOptions) {
    console.log('onRoute')
  })
  .addHook('onListen', async function () {
    console.log('onListen')
  })
  .addHook('onClose', function (instance, done) {
    console.log('onClose')
    done()
  })

fastify.get('/', opts, function (req, reply) {
  reply.send({ hello: 'world' })
})

fastify.post('/', optsPost, function (req, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err) {
  if (err) {
    throw err
  }
})
