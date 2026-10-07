'use strict'

const { test } = require('node:test')
const fastify = require('../../')()
fastify.addHttpMethod('MOVE')

test('shorthand - move', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'MOVE',
      url: '*',
      handler: function (req, reply) {
        const destination = req.headers.destination
        reply.code(201)
          .header('location', destination)
          .send()
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})
test('move test', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })

  await t.test('request - move', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/test.txt`, {
      method: 'MOVE',
      headers: {
        Destination: '/test2.txt'
      }
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 201)
    t.assert.strictEqual(result.headers.get('location'), '/test2.txt')
  })
})
