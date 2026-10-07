'use strict'

const net = require('node:net')
const http = require('node:http')
const { test } = require('node:test')
const Fastify = require('..')
const { Client } = require('undici')
const split = require('split2')
const { sleep } = require('./helper')

test('close callback', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify()
  fastify.addHook('onClose', onClose)
  function onClose (instance, done) {
    t.assert.ok(typeof fastify === typeof this)
    t.assert.ok(typeof fastify === typeof instance)
    t.assert.strictEqual(fastify, this)
    t.assert.strictEqual(fastify, instance)
    done()
  }

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.close((err) => {
      t.assert.ifError(err)
      t.assert.ok('close callback')
      testDone()
    })
  })
})

test('inside register', (t, done) => {
  t.plan(5)
  const fastify = Fastify()
  fastify.register(function (f, opts, done) {
    f.addHook('onClose', onClose)
    function onClose (instance, done) {
      t.assert.ok(instance.prototype === fastify.prototype)
      t.assert.strictEqual(instance, f)
      done()
    }

    done()
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.close((err) => {
      t.assert.ifError(err)
      t.assert.ok('close callback')
      done()
    })
  })
})

test('close order', (t, done) => {
  t.plan(5)
  const fastify = Fastify()
  const order = [1, 2, 3]

  fastify.register(function (f, opts, done) {
    f.addHook('onClose', (instance, done) => {
      t.assert.strictEqual(order.shift(), 1)
      done()
    })

    done()
  })

  fastify.addHook('onClose', (instance, done) => {
    t.assert.strictEqual(order.shift(), 2)
    done()
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.close((err) => {
      t.assert.ifError(err)
      t.assert.strictEqual(order.shift(), 3)
      done()
    })
  })
})

test('close order - async', async t => {
  t.plan(3)
  const fastify = Fastify()
  const order = [1, 2, 3]

  fastify.register(function (f, opts, done) {
    f.addHook('onClose', async instance => {
      t.assert.strictEqual(order.shift(), 1)
    })

    done()
  })

  fastify.addHook('onClose', () => {
    t.assert.strictEqual(order.shift(), 2)
  })

  await fastify.listen({ port: 0 })
  await fastify.close()

  t.assert.strictEqual(order.shift(), 3)
})

test('should not throw an error if the server is not listening', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  fastify.addHook('onClose', onClose)
  function onClose (instance, done) {
    t.assert.ok(instance.prototype === fastify.prototype)
    done()
  }

  fastify.close((err) => {
    t.assert.ifError(err)
    done()
  })
})

test('onClose should keep the context', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  fastify.register(plugin)

  function plugin (instance, opts, done) {
    instance.decorate('test', true)
    instance.addHook('onClose', onClose)
    t.assert.ok(instance.prototype === fastify.prototype)

    function onClose (i, done) {
      t.assert.ok(i.test)
      t.assert.strictEqual(i, instance)
      done()
    }

    done()
  }

  fastify.close((err) => {
    t.assert.ifError(err)
    done()
  })
})

test('Should return error while closing (promise) - injection', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('onClose', (instance, done) => { done() })

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    fastify.close()

    process.nextTick(() => {
      fastify.inject({
        method: 'GET',
        url: '/'
      }).catch(err => {
        t.assert.ok(err)
        t.assert.strictEqual(err.code, 'FST_ERR_REOPENED_CLOSE_SERVER')
        done()
      })
    }, 100)
  })
})

test('Should return error while closing (callback) - injection', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('onClose', (instance, done) => {
    setTimeout(done, 150)
  })

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    fastify.close()

    setTimeout(() => {
      fastify.inject({
        method: 'GET',
        url: '/'
      }, (err, res) => {
        t.assert.ok(err)
        t.assert.strictEqual(err.code, 'FST_ERR_REOPENED_CLOSE_SERVER')
        done()
      })
    }, 100)
  })
})

test('Current opened connection should NOT continue to work after closing and return "connection: close" header - return503OnClosing: false', (t, done) => {
  t.plan(4)
  const fastify = Fastify({
    return503OnClosing: false,
    forceCloseConnections: false
  })

  fastify.get('/', (req, reply) => {
    fastify.close()
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const port = fastify.server.address().port
    const client = net.createConnection({ port }, () => {
      client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

      client.on('error', function () {
        // Depending on the Operating System
        // the socket could error or not.
        // However, it will always be closed.
      })

      client.on('close', function () {
        t.assert.ok(true)
        done()
      })

      client.once('data', data => {
        t.assert.match(data.toString(), /Connection:\s*keep-alive/i)
        t.assert.match(data.toString(), /200 OK/i)

        client.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')
      })
    })
  })
})

test('Current opened connection should not accept new incoming connections', (t, done) => {
  t.plan(3)
  const fastify = Fastify({ forceCloseConnections: false })
  fastify.get('/', (req, reply) => {
    fastify.close()
    setTimeout(() => {
      reply.send({ hello: 'world' })
    }, 250)
  })

  fastify.listen({ port: 0 }, async err => {
    t.assert.ifError(err)
    const instance = new Client('http://localhost:' + fastify.server.address().port)
    let response = await instance.request({ path: '/', method: 'GET' })
    t.assert.strictEqual(response.statusCode, 200)

    response = await instance.request({ path: '/', method: 'GET' })
    t.assert.strictEqual(response.statusCode, 503)

    done()
  })
})

test('rejected incoming connections should be logged', (t, done) => {
  t.plan(2)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })

  const messages = []
  stream.on('data', message => {
    messages.push(message)
  })
  fastify.get('/', (req, reply) => {
    fastify.close()
    setTimeout(() => {
      reply.send({ hello: 'world' })
    }, 250)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    const instance = new Client('http://localhost:' + fastify.server.address().port)
    // initial request to trigger close
    instance.request({ path: '/', method: 'GET' })
    // subsequent request should be rejected
    instance.request({ path: '/', method: 'GET' }).then(() => {
      t.assert.ok(messages.find(message => message.msg.includes('request aborted')))
      done()
    })
  })
})

test('Cannot be reopened the closed server without listen callback', async t => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.listen({ port: 0 })
  await fastify.close()

  try {
    await fastify.listen({ port: 0 })
  } catch (err) {
    t.assert.ok(err)
    t.assert.strictEqual(err.code, 'FST_ERR_REOPENED_CLOSE_SERVER')
  }
})

test('Cannot be reopened the closed server has listen callback', async t => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.listen({ port: 0 })
  await fastify.close()

  await new Promise((resolve, reject) => {
    fastify.listen({ port: 0 }, err => {
      reject(err)
    })
  }).catch(err => {
    t.assert.strictEqual(err.code, 'FST_ERR_REOPENED_CLOSE_SERVER')
    t.assert.ok(err)
  })
})

const server = http.createServer()
const noSupport = typeof server.closeAllConnections !== 'function'

test('shutsdown while keep-alive connections are active (non-async, native)', { skip: noSupport }, (t, done) => {
  t.plan(5)

  const timeoutTime = 2 * 60 * 1000
  const fastify = Fastify({ forceCloseConnections: true })

  fastify.server.setTimeout(timeoutTime)
  fastify.server.keepAliveTimeout = timeoutTime

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, (err, address) => {
    t.assert.ifError(err)

    const client = new Client(
      'http://localhost:' + fastify.server.address().port,
      { keepAliveTimeout: 1 * 60 * 1000 }
    )
    client.request({ path: '/', method: 'GET' }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(client.closed, false)

      fastify.close((err) => {
        t.assert.ifError(err)

        // Due to the nature of the way we reap these keep-alive connections,
        // there hasn't been enough time before the server fully closed in order
        // for the client to have seen the socket get destroyed. The mere fact
        // that we have reached this callback is enough indication that the
        // feature being tested works as designed.
        t.assert.strictEqual(client.closed, false)
        done()
      })
    })
  })
})

test('shutsdown while keep-alive connections are active (non-async, idle, native)', { skip: noSupport }, (t, done) => {
  t.plan(5)

  const timeoutTime = 2 * 60 * 1000
  const fastify = Fastify({ forceCloseConnections: 'idle' })

  fastify.server.setTimeout(timeoutTime)
  fastify.server.keepAliveTimeout = timeoutTime

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, (err, address) => {
    t.assert.ifError(err)

    const client = new Client(
      'http://localhost:' + fastify.server.address().port,
      { keepAliveTimeout: 1 * 60 * 1000 }
    )
    client.request({ path: '/', method: 'GET' }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(client.closed, false)

      fastify.close((err) => {
        t.assert.ifError(err)

        // Due to the nature of the way we reap these keep-alive connections,
        // there hasn't been enough time before the server fully closed in order
        // for the client to have seen the socket get destroyed. The mere fact
        // that we have reached this callback is enough indication that the
        // feature being tested works as designed.
        t.assert.strictEqual(client.closed, false)

        done()
      })
    })
  })
})

test('triggers on-close hook in the right order with multiple bindings', async t => {
  const expectedOrder = [1, 2, 3]
  const order = []
  const fastify = Fastify()

  t.plan(1)

  // Follows LIFO
  fastify.addHook('onClose', () => {
    order.push(2)
  })

  fastify.addHook('onClose', () => {
    order.push(1)
  })

  await fastify.listen({ port: 0 })

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      fastify.close(err => {
        order.push(3)
        t.assert.deepEqual(order, expectedOrder)

        if (err) t.assert.ifError(err)
        else resolve()
      })
    }, 2000)
  })
})

test('triggers on-close hook in the right order with multiple bindings (forceCloseConnections - idle)', { skip: noSupport }, async t => {
  const expectedPayload = { hello: 'world' }
  const timeoutTime = 2 * 60 * 1000
  const expectedOrder = [1, 2]
  const order = []
  const fastify = Fastify({ forceCloseConnections: 'idle' })

  fastify.server.setTimeout(timeoutTime)
  fastify.server.keepAliveTimeout = timeoutTime

  fastify.get('/', async (req, reply) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    return expectedPayload
  })

  fastify.addHook('onClose', () => {
    order.push(1)
  })

  await fastify.listen({ port: 0 })
  const addresses = fastify.addresses()
  const testPlan = (addresses.length * 2) + 1

  t.plan(testPlan)

  for (const addr of addresses) {
    const { family, address, port } = addr
    const host = family === 'IPv6' ? `[${address}]` : address
    const client = new Client(`http://${host}:${port}`, {
      keepAliveTimeout: 1 * 60 * 1000
    })

    client.request({ path: '/', method: 'GET' })
      .then((res) => res.body.json(), err => t.assert.ifError(err))
      .then(json => {
        t.assert.deepEqual(json, expectedPayload, 'should payload match')
        t.assert.ok(!client.closed, 'should client not be closed')
      }, err => t.assert.ifError(err))
  }

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      fastify.close(err => {
        order.push(2)
        t.assert.deepEqual(order, expectedOrder)

        if (err) t.assert.ifError(err)
        else resolve()
      })
    }, 2000)
  })
})

test('triggers on-close hook in the right order with multiple bindings (forceCloseConnections - true)', { skip: noSupport }, async t => {
  const expectedPayload = { hello: 'world' }
  const timeoutTime = 2 * 60 * 1000
  const expectedOrder = [1, 2]
  const order = []
  const fastify = Fastify({ forceCloseConnections: true })

  fastify.server.setTimeout(timeoutTime)
  fastify.server.keepAliveTimeout = timeoutTime

  fastify.get('/', async (req, reply) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    return expectedPayload
  })

  fastify.addHook('onClose', () => {
    order.push(1)
  })

  await fastify.listen({ port: 0 })
  const addresses = fastify.addresses()
  const testPlan = (addresses.length * 2) + 1

  t.plan(testPlan)

  for (const addr of addresses) {
    const { family, address, port } = addr
    const host = family === 'IPv6' ? `[${address}]` : address
    const client = new Client(`http://${host}:${port}`, {
      keepAliveTimeout: 1 * 60 * 1000
    })

    client.request({ path: '/', method: 'GET' })
      .then((res) => res.body.json(), err => t.assert.ifError(err))
      .then(json => {
        t.assert.deepEqual(json, expectedPayload, 'should payload match')
        t.assert.ok(!client.closed, 'should client not be closed')
      }, err => t.assert.ifError(err))
  }

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      fastify.close(err => {
        order.push(2)
        t.assert.deepEqual(order, expectedOrder)

        if (err) t.assert.ifError(err)
        else resolve()
      })
    }, 2000)
  })
})

test('shutsdown while keep-alive connections are active (non-async, custom)', (t, done) => {
  t.plan(5)

  const timeoutTime = 2 * 60 * 1000
  const fastify = Fastify({
    forceCloseConnections: true,
    serverFactory (handler) {
      const server = http.createServer(handler)

      server.closeAllConnections = null

      return server
    }
  })

  fastify.server.setTimeout(timeoutTime)
  fastify.server.keepAliveTimeout = timeoutTime

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 0 }, (err, address) => {
    t.assert.ifError(err)

    const client = new Client(
      'http://localhost:' + fastify.server.address().port,
      { keepAliveTimeout: 1 * 60 * 1000 }
    )
    client.request({ path: '/', method: 'GET' }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(client.closed, false)

      fastify.close((err) => {
        t.assert.ifError(err)

        // Due to the nature of the way we reap these keep-alive connections,
        // there hasn't been enough time before the server fully closed in order
        // for the client to have seen the socket get destroyed. The mere fact
        // that we have reached this callback is enough indication that the
        // feature being tested works as designed.
        t.assert.strictEqual(client.closed, false)

        done()
      })
    })
  })
})

test('preClose callback', (t, done) => {
  t.plan(5)
  const fastify = Fastify()
  fastify.addHook('onClose', onClose)
  let preCloseCalled = false
  function onClose (instance, done) {
    t.assert.strictEqual(preCloseCalled, true)
    done()
  }
  fastify.addHook('preClose', preClose)

  function preClose (done) {
    t.assert.ok(typeof this === typeof fastify)
    preCloseCalled = true
    done()
  }

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.close((err) => {
      t.assert.ifError(err)
      t.assert.ok('close callback')
      done()
    })
  })
})

test('preClose async', async t => {
  t.plan(2)
  const fastify = Fastify()
  fastify.addHook('onClose', onClose)
  let preCloseCalled = false
  async function onClose () {
    t.assert.strictEqual(preCloseCalled, true)
  }
  fastify.addHook('preClose', preClose)

  async function preClose () {
    preCloseCalled = true
    t.assert.ok(typeof this === typeof fastify)
  }

  await fastify.listen({ port: 0 })

  await fastify.close()
})

test('preClose execution order', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  const order = []
  fastify.addHook('onClose', onClose)
  function onClose (instance, done) {
    t.assert.deepStrictEqual(order, [1, 2, 3])
    done()
  }

  fastify.addHook('preClose', (done) => {
    setTimeout(function () {
      order.push(1)
      done()
    }, 200)
  })

  fastify.addHook('preClose', async () => {
    await sleep(100)
    order.push(2)
  })

  fastify.addHook('preClose', (done) => {
    setTimeout(function () {
      order.push(3)
      done()
    }, 100)
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    fastify.close((err) => {
      t.assert.ifError(err)
      t.assert.ok('close callback')
      done()
    })
  })
})
