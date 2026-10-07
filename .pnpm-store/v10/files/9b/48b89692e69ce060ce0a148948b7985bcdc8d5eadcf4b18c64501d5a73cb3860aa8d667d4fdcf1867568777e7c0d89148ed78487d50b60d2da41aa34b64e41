'use strict'

const { test } = require('node:test')
const fastify = require('../../fastify')()
fastify.addHttpMethod('COPY')

test('can be created - copy', async t => {
  t.plan(3)

  t.after(() => fastify.close())

  try {
    fastify.route({
      method: 'COPY',
      url: '*',
      handler: function (req, reply) {
        reply.code(204).send()
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(`${fastifyServer}/test.txt`, {
    method: 'COPY',
    headers: {
      Destination: '/test2.txt'
    }
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 204)
})
