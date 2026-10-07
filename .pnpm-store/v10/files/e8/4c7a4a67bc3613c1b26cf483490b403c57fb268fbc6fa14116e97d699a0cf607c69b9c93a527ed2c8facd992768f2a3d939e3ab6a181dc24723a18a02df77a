'use strict'

const { test, before } = require('node:test')
const Fastify = require('../fastify')
const fp = require('fastify-plugin')
const split = require('split2')
const helper = require('./helper')
const { kState } = require('../lib/symbols')
const { networkInterfaces } = require('node:os')

const isIPv6Missing = !Object.values(networkInterfaces()).flat().some(({ family }) => family === 'IPv6')

let localhost
before(async function () {
  [localhost] = await helper.getLoopbackHost()
})

test('onListen should not be processed when .ready() is called', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.addHook('onListen', function (done) {
    t.assert.fail()
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('localhost onListen should be called in order', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd called in root')
    done()
  })

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('localhost async onListen should be called in order', async t => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, '1st async called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd async called in root')
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
  t.assert.strictEqual(order, 2, 'the onListen hooks are awaited')
})

test('localhost onListen sync should log errors as warnings and continue /1', async t => {
  t.plan(8)
  let order = 0
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.strictEqual(order, 2)
      t.assert.ok('Logged Error Message')
    }
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st call')
    t.assert.ok('called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd call')
    t.assert.ok('called onListen error')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 3, '3rd call')
    t.assert.ok('onListen hooks continue after error')
    done()
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})

test('localhost onListen sync should log errors as warnings and continue /2', (t, testDone) => {
  t.plan(7)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  let order = 0

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st call')
    t.assert.ok('called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd call')
    t.assert.ok('called onListen error')
    done(new Error('FAIL ON LISTEN'))
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 3, '3rd call')
    t.assert.ok('onListen hooks continue after error')
    done()
  })

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('localhost onListen async should log errors as warnings and continue', async t => {
  t.plan(4)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  fastify.addHook('onListen', async function () {
    t.assert.ok('called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.ok('called onListen error')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', async function () {
    t.assert.ok('onListen hooks continue after error')
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})

test('localhost Register onListen hook after a plugin inside a plugin', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('localhost Register onListen hook after a plugin inside a plugin should log errors as warnings and continue', (t, testDone) => {
  t.plan(6)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('Plugin Error')) {
      t.assert.ok('Logged Error Message')
    }
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })

    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })

    done()
  }))

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('localhost onListen encapsulation should be called in order', async t => {
  t.plan(8)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  await fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })

    await childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
      })
    })

    await childOne.register(async (childTwoPeer, o) => {
      childTwoPeer.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 4, 'called second in childTwo')
        t.assert.strictEqual(this.pluginName, childTwoPeer.pluginName, 'the this binding is the right instance')
      })
    })
  })
  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})

test('localhost onListen encapsulation with only nested hook', async t => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())

  await fastify.register(async (child) => {
    await child.register(async (child2) => {
      child2.addHook('onListen', function (done) {
        t.assert.ok()
        done()
      })
    })
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})

test('localhost onListen peer encapsulations with only nested hooks', async t => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())

  await fastify.register(async (child) => {
    await child.register(async (child2) => {
      child2.addHook('onListen', function (done) {
        t.assert.ok()
        done()
      })
    })

    await child.register(async (child2) => {
      child2.addHook('onListen', function (done) {
        t.assert.ok()
        done()
      })
    })
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})

test('localhost onListen encapsulation should be called in order and should log errors as warnings and continue', (t, testDone) => {
  t.plan(7)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('Error in onListen hook of childTwo')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })
    childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
        throw new Error('Error in onListen hook of childTwo')
      })
    })
  })
  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('non-localhost onListen should be called in order', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd called in root')
    done()
  })
  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('non-localhost async onListen should be called in order', { skip: isIPv6Missing }, async t => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, '1st async called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd async called in root')
  })

  await fastify.listen({
    host: '::1',
    port: 0
  })
})

test('non-localhost sync onListen should log errors as warnings and continue', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(4)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })
  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1)
    done()
  })

  fastify.addHook('onListen', function () {
    t.assert.strictEqual(++order, 2)
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 3, 'should still run')
    done()
  })

  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('non-localhost async onListen should log errors as warnings and continue', { skip: isIPv6Missing }, async t => {
  t.plan(6)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1)
    t.assert.ok('called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd async failed in root')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 3)
    t.assert.ok('should still run')
  })

  await fastify.listen({
    host: '::1',
    port: 0
  })
})

test('non-localhost Register onListen hook after a plugin inside a plugin', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('non-localhost Register onListen hook after a plugin inside a plugin should log errors as warnings and continue', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(6)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('Plugin Error')) {
      t.assert.ok('Logged Error Message')
    }
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })

    instance.addHook('onListen', function () {
      t.assert.ok('called')
      throw new Error('Plugin Error')
    })

    done()
  }))

  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('non-localhost onListen encapsulation should be called in order', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })
    childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
      })
    })
  })
  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('non-localhost onListen encapsulation should be called in order and should log errors as warnings and continue', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(7)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('Error in onListen hook of childTwo')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')

    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })
    childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
        throw new Error('Error in onListen hook of childTwo')
      })
    })
  })
  fastify.listen({
    host: '::1',
    port: 0
  }, testDone)
})

test('onListen localhost should work in order with callback', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd called in root')
    done()
  })

  fastify.listen({ port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, localhost)
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen localhost should work in order with callback in async', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, '1st called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd called in root')
  })

  fastify.listen({ host: 'localhost', port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, localhost)
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen localhost sync with callback should log errors as warnings and continue', (t, testDone) => {
  t.plan(6)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st called in root')
    done()
  })

  fastify.addHook('onListen', function () {
    t.assert.strictEqual(++order, 2, 'error sync called in root')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 3, '1st called in root')
    done()
  })

  fastify.listen({ port: 0 }, (err) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.server.address().address, localhost)
    testDone()
  })
})

test('onListen localhost async with callback should log errors as warnings and continue', (t, testDone) => {
  t.plan(6)
  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.ok('1st called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, 'error sync called in root')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', async function () {
    t.assert.ok('3rd called in root')
  })

  fastify.listen({ port: 0 }, (err) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.server.address().address, localhost)
    testDone()
  })
})

test('Register onListen hook localhost with callback after a plugin inside a plugin', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.listen({ port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, localhost)
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen localhost with callback encapsulation should be called in order', (t, testDone) => {
  t.plan(8)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })
    childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
      })
    })
  })
  fastify.listen({ port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, localhost)
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen non-localhost should work in order with callback in sync', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, '1st called in root')
    done()
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 2, '2nd called in root')
    done()
  })

  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, '::1')
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen non-localhost should work in order with callback in async', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, '1st called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd called in root')
  })

  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, '::1')
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen non-localhost sync with callback should log errors as warnings and continue', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(8)

  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1)
    t.assert.ok('1st called in root')
    done()
  })

  fastify.addHook('onListen', function () {
    t.assert.strictEqual(++order, 2)
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 3)
    t.assert.ok('3rd called in root')
    done()
  })

  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.server.address().address, '::1')
    testDone()
  })
})

test('onListen non-localhost async with callback should log errors as warnings and continue', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(8)

  const stream = split(JSON.parse)
  const fastify = Fastify({
    forceCloseConnections: false,
    logger: {
      stream,
      level: 'info'
    }
  })
  t.after(() => fastify.close())

  stream.on('data', message => {
    if (message.msg.includes('FAIL ON LISTEN')) {
      t.assert.ok('Logged Error Message')
    }
  })

  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1)
    t.assert.ok('1st called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, 'error sync called in root')
    throw new Error('FAIL ON LISTEN')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 3)
    t.assert.ok('3rd called in root')
  })

  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.server.address().address, '::1')
    testDone()
  })
})

test('Register onListen hook non-localhost with callback after a plugin inside a plugin', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })
    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onListen', function (done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, '::1')
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen non-localhost with callback encapsulation should be called in order', { skip: isIPv6Missing }, (t, testDone) => {
  t.plan(8)
  const fastify = Fastify()
  t.after(() => fastify.close())

  let order = 0

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.strictEqual(this.pluginName, fastify.pluginName, 'the this binding is the right instance')
    done()
  })

  fastify.register(async (childOne, o) => {
    childOne.addHook('onListen', function (done) {
      t.assert.strictEqual(++order, 2, 'called in childOne')
      t.assert.strictEqual(this.pluginName, childOne.pluginName, 'the this binding is the right instance')
      done()
    })
    childOne.register(async (childTwo, o) => {
      childTwo.addHook('onListen', async function () {
        t.assert.strictEqual(++order, 3, 'called in childTwo')
        t.assert.strictEqual(this.pluginName, childTwo.pluginName, 'the this binding is the right instance')
      })
    })
  })
  fastify.listen({ host: '::1', port: 0 }, (err) => {
    t.assert.strictEqual(fastify.server.address().address, '::1')
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen sync should work if user does not pass done', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', function () {
    t.assert.strictEqual(++order, 1, '1st called in root')
  })

  fastify.addHook('onListen', function () {
    t.assert.strictEqual(++order, 2, '2nd called in root')
  })

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('async onListen does not need to be awaited', (t, testDone) => {
  const fastify = Fastify()
  t.after(() => fastify.close())
  let order = 0

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 1, '1st async called in root')
  })

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(++order, 2, '2nd async called in root')
    t.end()
  })

  fastify.listen({
    host: 'localhost',
    port: 0
  }, testDone)
})

test('onListen hooks do not block /1', (t, testDone) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.addHook('onListen', function (done) {
    t.assert.strictEqual(fastify[kState].listening, true)
    done()
  })

  fastify.listen({
    host: 'localhost',
    port: 0
  }, err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onListen hooks do not block /2', async t => {
  t.plan(1)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.addHook('onListen', async function () {
    t.assert.strictEqual(fastify[kState].listening, true)
  })

  await fastify.listen({
    host: 'localhost',
    port: 0
  })
})
