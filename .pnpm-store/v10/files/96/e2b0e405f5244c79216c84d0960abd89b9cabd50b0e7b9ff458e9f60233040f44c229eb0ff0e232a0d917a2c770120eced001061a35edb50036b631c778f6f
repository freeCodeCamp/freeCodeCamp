'use strict'

const { test } = require('node:test')
const fastify = require('../../')()
fastify.addHttpMethod('MKCOL')

test('can be created - mkcol', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'MKCOL',
      url: '*',
      handler: function (req, reply) {
        reply.code(201).send()
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('mkcol test', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  await t.test('request - mkcol', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/test/`, {
      method: 'MKCOL'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 201)
  })
})
