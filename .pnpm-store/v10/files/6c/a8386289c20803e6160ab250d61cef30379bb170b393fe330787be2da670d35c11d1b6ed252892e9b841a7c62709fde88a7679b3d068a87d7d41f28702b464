'use strict'

const Fastify = require('fastify')

  ; (async () => {
  const fastify = Fastify({ logger: true })

  await fastify.register(require('@fastify/swagger'), {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  })

  await fastify.register(require('../index'))

  fastify.listen({ port: 3000 }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
})()
