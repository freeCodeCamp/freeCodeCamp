'use strict'

const fastify = require('../../fastify')({
  logger: false
})

const payload = JSON.stringify({ hello: 'world' })

fastify.get('/', function (req, reply) {
  const stream = new ReadableStream({
    start (controller) {
      controller.enqueue(payload)
      controller.close()
    }
  })
  return new Response(stream, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server listening on ${address}`)
})
