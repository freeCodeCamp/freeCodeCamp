'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const { Client } = require('undici')

test('Should return 503 while closing - pipelining', async t => {
  const fastify = Fastify({
    return503OnClosing: true,
    forceCloseConnections: false
  })

  fastify.get('/', async (req, reply) => {
    // Simulate a delay to allow pipelining to kick in
    await new Promise(resolve => setTimeout(resolve, 5))
    reply.send({ hello: 'world' })
    fastify.close()
  })

  await fastify.listen({ port: 0 })

  const instance = new Client('http://localhost:' + fastify.server.address().port, {
    pipelining: 2
  })

  const [firstRequest, secondRequest, thirdRequest] = await Promise.allSettled([
    instance.request({ path: '/', method: 'GET', blocking: false }),
    instance.request({ path: '/', method: 'GET', blocking: false }),
    instance.request({ path: '/', method: 'GET', blocking: false })
  ])
  t.assert.strictEqual(firstRequest.status, 'fulfilled')
  t.assert.strictEqual(secondRequest.status, 'fulfilled')

  t.assert.strictEqual(firstRequest.value.statusCode, 200)
  t.assert.strictEqual(secondRequest.value.statusCode, 200)

  t.assert.strictEqual(thirdRequest.status, 'fulfilled')
  t.assert.strictEqual(thirdRequest.value.statusCode, 503)

  await instance.close()
})

test('Should close the socket abruptly - pipelining - return503OnClosing: false', async t => {
  // Since Node v20, we will always invoke server.closeIdleConnections()
  // therefore our socket will be closed
  const fastify = Fastify({
    return503OnClosing: false,
    forceCloseConnections: false
  })

  fastify.get('/', async (req, reply) => {
    // Simulate a delay to allow pipelining to kick in
    await new Promise(resolve => setTimeout(resolve, 5))
    reply.send({ hello: 'world' })
    fastify.close()
  })

  await fastify.listen({ port: 0 })

  const instance = new Client('http://localhost:' + fastify.server.address().port, {
    pipelining: 1
  })

  const responses = await Promise.allSettled([
    instance.request({ path: '/', method: 'GET', blocking: false }),
    instance.request({ path: '/', method: 'GET', blocking: false }),
    instance.request({ path: '/', method: 'GET', blocking: false }),
    instance.request({ path: '/', method: 'GET', blocking: false })
  ])

  const fulfilled = responses.filter(r => r.status === 'fulfilled')
  const rejected = responses.filter(r => r.status === 'rejected')

  t.assert.strictEqual(fulfilled.length, 1)
  t.assert.strictEqual(rejected.length, 3)

  await instance.close()
})
