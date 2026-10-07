'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const { request, setGlobalDispatcher, Agent } = require('undici')

setGlobalDispatcher(new Agent({
  keepAliveTimeout: 10,
  keepAliveMaxTimeout: 10
}))

test('post empty body', { timeout: 3_000 }, async t => {
  const fastify = Fastify({ forceCloseConnections: true })
  const abortController = new AbortController()
  const { signal } = abortController
  t.after(() => {
    fastify.close()
    abortController.abort()
  })

  fastify.post('/bug', async () => {
    // This function must be async and return nothing
  })

  await fastify.listen({ port: 0 })

  const res = await request(`http://localhost:${fastify.server.address().port}/bug`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ foo: 'bar' }),
    signal
  })

  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(await res.body.text(), '')
})
