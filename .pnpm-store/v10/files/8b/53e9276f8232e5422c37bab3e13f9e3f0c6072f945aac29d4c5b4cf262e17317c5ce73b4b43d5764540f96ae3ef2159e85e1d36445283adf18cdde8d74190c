'use strict'

const { test } = require('node:test')
const net = require('node:net')
const Fastify = require('../fastify')
const { once } = require('node:events')
const { FSTWRN003 } = require('../lib/warnings.js')

function createDeferredPromise () {
  const promise = {}
  promise.promise = new Promise((resolve) => {
    promise.resolve = resolve
  })
  return promise
}

test('same port conflict and success should not fire callback multiple times - callback', async (t) => {
  t.plan(7)
  const server = net.createServer()
  server.listen({ port: 0, host: '127.0.0.1' })
  await once(server, 'listening')
  const option = { port: server.address().port, host: server.address().address }
  let count = 0
  const fastify = Fastify()
  const promise = createDeferredPromise()
  function callback (err) {
    switch (count) {
      case 6: {
        // success in here
        t.assert.ifError(err)
        fastify.close((err) => {
          t.assert.ifError(err)
          promise.resolve()
        })
        break
      }
      case 5: {
        server.close()
        setTimeout(() => {
          fastify.listen(option, callback)
        }, 100)
        break
      }
      default: {
        // expect error
        t.assert.strictEqual(err.code, 'EADDRINUSE')
        setTimeout(() => {
          fastify.listen(option, callback)
        }, 100)
      }
    }
    count++
  }
  fastify.listen(option, callback)
  await promise.promise
})

test('same port conflict and success should not fire callback multiple times - promise', async (t) => {
  t.plan(5)
  const server = net.createServer()
  server.listen({ port: 0, host: '127.0.0.1' })
  await once(server, 'listening')
  const option = { port: server.address().port, host: server.address().address }
  const fastify = Fastify()

  try {
    await fastify.listen(option)
  } catch (err) {
    t.assert.strictEqual(err.code, 'EADDRINUSE')
  }
  try {
    await fastify.listen(option)
  } catch (err) {
    t.assert.strictEqual(err.code, 'EADDRINUSE')
  }
  try {
    await fastify.listen(option)
  } catch (err) {
    t.assert.strictEqual(err.code, 'EADDRINUSE')
  }
  try {
    await fastify.listen(option)
  } catch (err) {
    t.assert.strictEqual(err.code, 'EADDRINUSE')
  }
  try {
    await fastify.listen(option)
  } catch (err) {
    t.assert.strictEqual(err.code, 'EADDRINUSE')
  }

  server.close()

  await once(server, 'close')

  // when ever we can listen, and close properly
  // which means there is no problem on the callback
  await fastify.listen()
  await fastify.close()
})

test('should emit a warning when using async callback', (t, done) => {
  t.plan(2)

  process.on('warning', onWarning)
  function onWarning (warning) {
    t.assert.strictEqual(warning.name, 'FastifyWarning')
    t.assert.strictEqual(warning.code, FSTWRN003.code)
  }

  const fastify = Fastify()

  t.after(async () => {
    await fastify.close()
    process.removeListener('warning', onWarning)
    FSTWRN003.emitted = false
  })

  fastify.listen({ port: 0 }, async function doNotUseAsyncCallback () {
    done()
  })
})
