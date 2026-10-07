'use strict'

const Fastify = require('fastify')
const plugin = require('../')

const secret = 'testsecret'

const fastify = Fastify()
fastify.register(plugin, { secret })

fastify.get('/', (_req, reply) => {
  reply
    .setCookie('foo', 'foo', { path: '/' })
    .send({ hello: 'world' })
})

fastify.listen({ host: '127.0.0.1', port: 5001 }, (err, address) => {
  if (err) throw err
  console.log(address)
})
