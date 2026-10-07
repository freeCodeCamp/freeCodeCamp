'use strict'

const path = require('node:path')
const fastify = require('fastify')({ logger: false })
const fastifyStatic = require(process.env.PLUGIN_PATH || '../')

const root = path.join(__dirname, '/public')
const port = Number(process.env.PORT || 3000)

fastify.register(fastifyStatic, {
  root,
  prefix: '/static',
  decorateReply: false
})

fastify.register(fastifyStatic, {
  root,
  prefix: '/app/:version',
  decorateReply: false
})

fastify.register(async function (child) {
  child.register(fastifyStatic, {
    root,
    prefix: '/public',
    decorateReply: false
  })
}, { prefix: '/nested' })

fastify.listen({ port }, err => {
  if (err) throw err

  console.log(`benchmark server listening on http://127.0.0.1:${port}`)
  console.log('')
  console.log('Try:')
  console.log(`  npx autocannon -c 100 -d 10 http://127.0.0.1:${port}/static/index.css`)
  console.log(`  npx autocannon -c 100 -d 10 http://127.0.0.1:${port}/app/1.2.3/index.css`)
  console.log(`  npx autocannon -c 100 -d 10 http://127.0.0.1:${port}/nested/public/index.css`)
})
