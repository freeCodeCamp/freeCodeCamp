'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')

process.removeAllListeners('warning')

test('contentTypeParser should add a custom async parser', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.options('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/jsoff', async function (req, payload) {
    const res = await new Promise((resolve, reject) => resolve(payload))
    return res
  })

  t.after(() => fastify.close())
  const fastifyServer = await fastify.listen({ port: 0 })

  await t.test('in POST', async t => {
    t.plan(3)

    const result = await fetch(fastifyServer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsoff'
      },
      body: '{"hello":"world"}'
    })

    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
  })

  await t.test('in OPTIONS', async t => {
    t.plan(3)

    const result = await fetch(fastifyServer, {
      method: 'OPTIONS',
      headers: {
        'Content-Type': 'application/jsoff'
      },
      body: '{"hello":"world"}'
    })

    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
  })
})
