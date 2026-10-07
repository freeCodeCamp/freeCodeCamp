'use strict'

const { test } = require('node:test')
const fastify = require('..')({ requestTimeout: 5, http: { connectionsCheckingInterval: 1000 } })
const { connect } = require('node:net')

test('requestTimeout should return 408', (t, done) => {
  t.plan(1)

  t.after(() => {
    fastify.close()
  })

  fastify.post('/', async function (req, reply) {
    await new Promise(resolve => setTimeout(resolve, 100))
    return reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, err => {
    if (err) {
      throw err
    }

    let data = Buffer.alloc(0)
    const socket = connect(fastify.server.address().port)

    socket.write('POST / HTTP/1.1\r\nHost: fastify.test\r\nConnection-Length: 1\r\n')

    socket.on('data', c => (data = Buffer.concat([data, c])))
    socket.on('end', () => {
      t.assert.strictEqual(
        data.toString('utf-8'),
        'HTTP/1.1 408 Request Timeout\r\nContent-Length: 71\r\nContent-Type: application/json\r\n\r\n{"error":"Request Timeout","message":"Client Timeout","statusCode":408}'
      )
      done()
    })
  })
})
