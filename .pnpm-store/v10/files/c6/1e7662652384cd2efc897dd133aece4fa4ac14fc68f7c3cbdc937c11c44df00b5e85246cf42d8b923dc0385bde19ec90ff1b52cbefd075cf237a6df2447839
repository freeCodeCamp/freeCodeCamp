'use strict'

const dns = require('node:dns')
const { networkInterfaces } = require('node:os')
const { test } = require('node:test')
const Fastify = require('..')
const undici = require('undici')
const proxyquire = require('proxyquire')

const isIPv6Missing = !Object.values(networkInterfaces()).flat().some(({ family }) => family === 'IPv6')

test('listen should accept null port', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  await t.assert.doesNotReject(
    fastify.listen({ port: null })
  )
})

test('listen should accept undefined port', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  await t.assert.doesNotReject(
    fastify.listen({ port: undefined })
  )
})

test('listen should accept stringified number port', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  await t.assert.doesNotReject(
    fastify.listen({ port: '1234' })
  )
})

test('listen should accept log text resolution function', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  await t.assert.doesNotReject(
    fastify.listen({
      host: '127.0.0.1',
      port: '1234',
      listenTextResolver: (address) => {
        t.assert.strictEqual(address, 'http://127.0.0.1:1234')
        return 'hardcoded text'
      }
    })
  )
})

test('listen should reject string port', async (t) => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  try {
    await fastify.listen({ port: 'hello-world' })
  } catch (error) {
    t.assert.strictEqual(error.code, 'ERR_SOCKET_BAD_PORT')
  }

  try {
    await fastify.listen({ port: '1234hello' })
  } catch (error) {
    t.assert.strictEqual(error.code, 'ERR_SOCKET_BAD_PORT')
  }
})

test('Test for hostname and port', async (t) => {
  t.plan(3)
  const app = Fastify()
  t.after(() => app.close())
  app.get('/host', (req, res) => {
    t.assert.strictEqual(req.host, 'localhost:8000')
    t.assert.strictEqual(req.hostname, 'localhost')
    t.assert.strictEqual(req.port, 8000)
    res.send('ok')
  })

  await app.listen({ port: 8000 })
  await fetch('http://localhost:8000/host')
})

test('Test for IPV6 port', { skip: isIPv6Missing }, async (t) => {
  t.plan(3)
  const app = Fastify()
  t.after(() => app.close())
  app.get('/host', (req, res) => {
    t.assert.strictEqual(req.host, '[::1]:3040')
    t.assert.strictEqual(req.hostname, '[::1]')
    t.assert.strictEqual(req.port, 3040)
    res.send('ok')
  })

  await app.listen({
    port: 3040,
    host: '::1'
  })
  await fetch('http://[::1]:3040/host')
})

test('abort signal', async t => {
  await t.test('should close server when aborted after', (t, end) => {
    t.plan(2)
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      end()
    }

    const controller = new AbortController()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    fastify.listen({ port: 1234, signal: controller.signal }, (err) => {
      t.assert.ifError(err)
      controller.abort()
    })
  })

  await t.test('should close server when aborted after - promise', async (t) => {
    t.plan(2)
    const resolver = {}
    resolver.promise = new Promise(function (resolve) {
      resolver.resolve = resolve
    })
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      resolver.resolve()
    }

    const controller = new AbortController()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    const address = await fastify.listen({ port: 1234, signal: controller.signal })
    t.assert.ok(address)
    controller.abort()
    await resolver.promise
  })

  await t.test('should close server when aborted during fastify.ready - promise', async (t) => {
    t.plan(2)
    const resolver = {}
    resolver.promise = new Promise(function (resolve) {
      resolver.resolve = resolve
    })
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      resolver.resolve()
    }

    const controller = new AbortController()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    const promise = fastify.listen({ port: 1234, signal: controller.signal })
    controller.abort()
    const address = await promise
    // since the main server is not listening yet, or will not listen
    // it should return undefined
    t.assert.strictEqual(address, undefined)
    await resolver.promise
  })

  await t.test('should close server when aborted during dns.lookup - promise', async (t) => {
    t.plan(2)
    const Fastify = proxyquire('..', {
      './lib/server.js': proxyquire('../lib/server.js', {
        'node:dns': {
          lookup: function (host, option, callback) {
            controller.abort()
            dns.lookup(host, option, callback)
          }
        }
      })
    })
    const resolver = {}
    resolver.promise = new Promise(function (resolve) {
      resolver.resolve = resolve
    })
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      resolver.resolve()
    }

    const controller = new AbortController()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    const address = await fastify.listen({ port: 1234, signal: controller.signal })
    // since the main server is already listening then close
    // it should return address
    t.assert.ok(address)
    await resolver.promise
  })

  await t.test('should close server when aborted before', (t, end) => {
    t.plan(1)
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      end()
    }

    const controller = new AbortController()
    controller.abort()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    fastify.listen({ port: 1234, signal: controller.signal }, () => {
      t.assert.fail('should not reach callback')
    })
  })

  await t.test('should close server when aborted before - promise', async (t) => {
    t.plan(2)
    const resolver = {}
    resolver.promise = new Promise(function (resolve) {
      resolver.resolve = resolve
    })
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      resolver.resolve()
    }

    const controller = new AbortController()
    controller.abort()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    const address = await fastify.listen({ port: 1234, signal: controller.signal })
    t.assert.strictEqual(address, undefined) // ensure the API signature
    await resolver.promise
  })

  await t.test('listen should not start server', (t, end) => {
    t.plan(2)
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      end()
    }
    const controller = new AbortController()

    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    fastify.listen({ port: 1234, signal: controller.signal }, (err) => {
      t.assert.ifError(err)
    })
    controller.abort()
    t.assert.strictEqual(fastify.server.listening, false)
  })

  await t.test('listen should not start server if already aborted', (t, end) => {
    t.plan(2)
    function onClose (instance, done) {
      t.assert.strictEqual(instance, fastify)
      done()
      end()
    }

    const controller = new AbortController()
    controller.abort()
    const fastify = Fastify()
    fastify.addHook('onClose', onClose)
    fastify.listen({ port: 1234, signal: controller.signal }, (err) => {
      t.assert.ifError(err)
    })
    t.assert.strictEqual(fastify.server.listening, false)
  })

  await t.test('listen should throw if received invalid signal', t => {
    t.plan(2)
    const fastify = Fastify()

    try {
      fastify.listen({ port: 1234, signal: {} }, (err) => {
        t.assert.ifError(err)
      })
      t.assert.fail('should throw')
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_LISTEN_OPTIONS_INVALID')
      t.assert.strictEqual(e.message, 'Invalid listen options: \'Invalid options.signal\'')
    }
  })
})

test('#5180 - preClose should be called before closing secondary server', async (t) => {
  t.plan(2)
  const fastify = Fastify({ forceCloseConnections: true })
  let flag = false
  t.after(() => fastify.close())

  fastify.addHook('preClose', () => {
    flag = true
  })

  fastify.get('/', async (req, reply) => {
    // request will be pending for 1 second to simulate a slow request
    await new Promise((resolve) => { setTimeout(resolve, 1000) })
    return { hello: 'world' }
  })

  fastify.listen({ port: 0 }, (err) => {
    t.assert.ifError(err)
    const addresses = fastify.addresses()
    const mainServerAddress = fastify.server.address()
    let secondaryAddress
    for (const addr of addresses) {
      if (addr.family !== mainServerAddress.family) {
        secondaryAddress = addr
        secondaryAddress.address = secondaryAddress.family === 'IPv6'
          ? `[${secondaryAddress.address}]`
          : secondaryAddress.address
        break
      }
    }

    if (!secondaryAddress) {
      t.assert.ok(true, 'Secondary address not found')
      return
    }

    undici.request(`http://${secondaryAddress.address}:${secondaryAddress.port}/`)
      .then(
        () => { t.assert.fail('Request should not succeed') },
        () => {
          t.assert.ok(flag)
        }
      )

    // Close the server while the slow request is pending
    setTimeout(fastify.close, 250)
  })

  // Wait 1000ms to ensure that the test is finished and async operations are
  // completed
  await new Promise((resolve) => { setTimeout(resolve, 1000) })
})
