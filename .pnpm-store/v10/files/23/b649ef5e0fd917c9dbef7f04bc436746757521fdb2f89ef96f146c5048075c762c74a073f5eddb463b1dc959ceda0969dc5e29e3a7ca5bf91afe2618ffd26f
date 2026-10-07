'use strict'

const fastify = require('../fastify')({
  logger: false
})

const Readable = require('node:stream').Readable

fastify
  .get('/', function (req, reply) {
    const stream = Readable.from(['hello world'])
    reply.send(stream)
  })

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    throw err
  }
  fastify.log.info(`server listening on ${address}`)
})
