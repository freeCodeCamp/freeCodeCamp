'use strict'

const fastify = require('fastify')({ logger: true })
// const swagger = require('@fastify/swagger')
const swagger = require('..')

fastify.register(swagger, {
  mode: 'static',
  specification: {
    path: './examples/example-static-specification.yaml'
  },
  exposeRoute: true
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err
})
