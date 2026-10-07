'use strict'

const Fastify = require('fastify')
const plugin = require('../')

const secret = 'testsecret'

const fastify = Fastify()
fastify.register(plugin, { secret })

fastify.get('/', (_req, reply) => {
  reply
    .setCookie('foo', 'foo')
    .setCookie('foo', 'foo', { path: '/1' })
    .setCookie('boo', 'boo', { path: '/' })
    .setCookie('foo', 'foo-different', { path: '/' })
    .setCookie('foo', 'foo', { path: '/2' })
    .send({ hello: 'world' })
})

fastify.listen({ host: '127.0.0.1', port: 5001 }, (err, address) => {
  if (err) throw err
  console.log(address)
})
