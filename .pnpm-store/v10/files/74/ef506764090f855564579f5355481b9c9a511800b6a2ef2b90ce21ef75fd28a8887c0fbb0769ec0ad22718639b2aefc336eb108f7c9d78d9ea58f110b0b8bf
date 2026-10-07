'use strict'

const { test } = require('node:test')
const http = require('node:http')
const Fastify = require('../fastify')
const { setTimeout } = require('node:timers')

/*
* Ensure that a socket error during the request does not cause the
* onSend hook to be called multiple times.
*
* @see https://github.com/fastify/fastify/issues/4959
*/
function runBadClientCall (reqOptions, payload, waitBeforeDestroy) {
  let innerResolve, innerReject
  const promise = new Promise((resolve, reject) => {
    innerResolve = resolve
    innerReject = reject
  })

  const postData = JSON.stringify(payload)

  const req = http.request({
    ...reqOptions,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, () => {
    innerReject(new Error('Request should have failed'))
  })

  // Kill the socket after the request has been fully written.
  // Destroying it on `connect` can race before any bytes are sent, making the
  // server-side assertions (hooks/handler) non-deterministic.
  //
  // To keep the test deterministic, we optionally wait for a server-side signal
  // (e.g. onSend entered) before aborting the client.
  let socket
  req.on('socket', (s) => { socket = s })
  req.on('finish', () => {
    if (waitBeforeDestroy && typeof waitBeforeDestroy.then === 'function') {
      Promise.race([
        waitBeforeDestroy,
        new Promise(resolve => setTimeout(resolve, 200))
      ]).then(() => {
        if (socket) socket.destroy()
      }, innerResolve)
      return
    }
    setTimeout(() => { socket.destroy() }, 0)
  })
  req.on('error', innerResolve)
  req.write(postData)
  req.end()

  return promise
}

test('should handle a socket error', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  let resolveOnSendEntered
  const onSendEntered = new Promise((resolve) => {
    resolveOnSendEntered = resolve
  })

  function shouldNotHappen () {
    t.assert.fail('This should not happen')
  }
  process.on('unhandledRejection', shouldNotHappen)

  t.after(() => {
    fastify.close()
    process.removeListener('unhandledRejection', shouldNotHappen)
  })

  fastify.addHook('onRequest', async (request, reply) => {
    t.assert.ok('onRequest hook called')
  })

  fastify.addHook('onSend', async (request, reply, payload) => {
    if (request.onSendCalled) {
      t.assert.fail('onSend hook called more than once')
      return
    }

    t.assert.ok('onSend hook called')
    request.onSendCalled = true

    if (resolveOnSendEntered) {
      resolveOnSendEntered()
      resolveOnSendEntered = null
    }

    // Introduce a delay (gives time for client-side abort to happen while the
    // request has already been processed, exercising the original issue).
    await new Promise(resolve => setTimeout(resolve, 50))
    return payload
  })

  // The handler must be async to trigger the error
  fastify.put('/', async (request, reply) => {
    t.assert.ok('PUT handler called')
    return reply.send({ hello: 'world' })
  })

  await fastify.listen({ port: 0 })

  const err = await runBadClientCall({
    hostname: 'localhost',
    port: fastify.server.address().port,
    path: '/',
    method: 'PUT'
  }, { test: 'me' }, onSendEntered)
  t.assert.equal(err.code, 'ECONNRESET')
})
