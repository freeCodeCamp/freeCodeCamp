'use strict'

module.exports = function (fastify, opts, done) {
  fastify
    .get('/', opts, function (req, reply) {
      reply.send({ hello: 'world' })
    })
    .post('/', opts, function (req, reply) {
      reply.send({ hello: 'world' })
    })
  done()
}
