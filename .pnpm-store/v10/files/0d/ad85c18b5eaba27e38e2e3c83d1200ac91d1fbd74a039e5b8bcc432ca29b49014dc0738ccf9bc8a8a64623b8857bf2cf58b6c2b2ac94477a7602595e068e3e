'use strict'

const { describe, test } = require('node:test')
const { Client } = require('undici')
const Fastify = require('..')

describe('route-shorthand', () => {
  const methodsReader = new Fastify()
  const supportedMethods = methodsReader.supportedMethods

  for (const method of supportedMethods) {
    test(`route-shorthand - ${method.toLowerCase()}`, async (t) => {
      t.plan(2)
      const fastify = new Fastify()
      fastify[method.toLowerCase()]('/', (req, reply) => {
        t.assert.strictEqual(req.method, method)
        reply.send()
      })
      await fastify.listen({ port: 0 })
      t.after(() => fastify.close())

      const instance = new Client(`http://localhost:${fastify.server.address().port}`)

      const response = await instance.request({ path: '/', method })
      t.assert.strictEqual(response.statusCode, 200)
    })
  }

  test('route-shorthand - all', async (t) => {
    t.plan(2 * supportedMethods.length)
    const fastify = new Fastify()
    let currentMethod = ''
    fastify.all('/', function (req, reply) {
      t.assert.strictEqual(req.method, currentMethod)
      reply.send()
    })
    await fastify.listen({ port: 0 })
    t.after(() => fastify.close())

    for (const method of supportedMethods) {
      currentMethod = method
      const instance = new Client(`http://localhost:${fastify.server.address().port}`)

      const response = await instance.request({ path: '/', method })
      t.assert.strictEqual(response.statusCode, 200)
    }
  })
})
