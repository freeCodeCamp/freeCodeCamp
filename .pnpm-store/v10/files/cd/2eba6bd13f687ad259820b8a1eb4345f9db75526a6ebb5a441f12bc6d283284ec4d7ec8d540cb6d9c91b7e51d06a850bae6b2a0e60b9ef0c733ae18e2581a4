'use strict'

const path = require('node:path')
const fastify = require('fastify')({ logger: { level: 'trace' } })

fastify
  .register(require('../'), {
    // An absolute path containing static files to serve.
    root: path.join(__dirname, '/public')
  })
  .listen({ port: 3000 }, err => {
    if (err) throw err
  })
