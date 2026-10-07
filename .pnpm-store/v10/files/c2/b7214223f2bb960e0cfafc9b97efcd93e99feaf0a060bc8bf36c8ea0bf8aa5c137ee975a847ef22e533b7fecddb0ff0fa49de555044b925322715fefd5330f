'use strict'

const { test } = require('node:test')
const fastify = require('../../fastify')()
fastify.addHttpMethod('UNLOCK')

test('can be created - unlock', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'UNLOCK',
      url: '*',
      handler: function (req, reply) {
        reply.code(204).send()
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('unlock test', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })
  await t.test('request - unlock', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'UNLOCK',
      headers: {
        'Lock-Token': 'urn:uuid:a515cfa4-5da4-22e1-f5b5-00a0451e6bf7'
      }
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 204)
  })
})
