'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')
const fp = require('fastify-plugin')

test('if a plugin raises an error and there is not a callback to handle it, the server must not start', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    done(new Error('err'))
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ok(err instanceof Error)
    t.assert.strictEqual(err.message, 'err')
    testDone()
  })
})

test('add hooks after route declaration', async t => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())

  function plugin (instance, opts, done) {
    instance.decorateRequest('check', null)
    instance.addHook('onRequest', (req, reply, done) => {
      req.check = {}
      done()
    })
    setImmediate(done)
  }
  fastify.register(fp(plugin))

  fastify.register((instance, options, done) => {
    instance.addHook('preHandler', function b (req, res, done) {
      req.check.hook2 = true
      done()
    })

    instance.get('/', (req, reply) => {
      reply.send(req.check)
    })

    instance.addHook('preHandler', function c (req, res, done) {
      req.check.hook3 = true
      done()
    })

    done()
  })

  fastify.addHook('preHandler', function a (req, res, done) {
    req.check.hook1 = true
    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer)
  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(await result.json(), { hook1: true, hook2: true, hook3: true })
})

test('nested plugins', async t => {
  t.plan(4)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.register(function (fastify, opts, done) {
    fastify.register((fastify, opts, done) => {
      fastify.get('/', function (req, reply) {
        reply.send('I am child 1')
      })
      done()
    }, { prefix: '/child1' })

    fastify.register((fastify, opts, done) => {
      fastify.get('/', function (req, reply) {
        reply.send('I am child 2')
      })
      done()
    }, { prefix: '/child2' })

    done()
  }, { prefix: '/parent' })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/parent/child1')
  t.assert.ok(result1.ok)
  t.assert.deepStrictEqual(await result1.text(), 'I am child 1')

  const result2 = await fetch(fastifyServer + '/parent/child2')
  t.assert.ok(result2.ok)
  t.assert.deepStrictEqual(await result2.text(), 'I am child 2')
})

test('nested plugins awaited', async t => {
  t.plan(4)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.register(async function wrap (fastify, opts) {
    await fastify.register(async function child1 (fastify, opts) {
      fastify.get('/', function (req, reply) {
        reply.send('I am child 1')
      })
    }, { prefix: '/child1' })

    await fastify.register(async function child2 (fastify, opts) {
      fastify.get('/', function (req, reply) {
        reply.send('I am child 2')
      })
    }, { prefix: '/child2' })
  }, { prefix: '/parent' })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/parent/child1')
  t.assert.ok(result1.ok)
  t.assert.deepStrictEqual(await result1.text(), 'I am child 1')

  const result2 = await fetch(fastifyServer + '/parent/child2')
  t.assert.ok(result2.ok)
  t.assert.deepStrictEqual(await result2.text(), 'I am child 2')
})

test('plugin metadata - decorators', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorate('plugin1', true)
  fastify.decorateReply('plugin1', true)
  fastify.decorateRequest('plugin1', true)

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    decorators: {
      fastify: ['plugin1'],
      reply: ['plugin1'],
      request: ['plugin1']
    }
  }

  fastify.register(plugin)

  fastify.ready(() => {
    t.assert.ok(fastify.plugin)
    testDone()
  })

  function plugin (instance, opts, done) {
    instance.decorate('plugin', true)
    done()
  }
})

test('plugin metadata - decorators - should throw', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorate('plugin1', true)
  fastify.decorateReply('plugin1', true)

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    decorators: {
      fastify: ['plugin1'],
      reply: ['plugin1'],
      request: ['plugin1']
    }
  }

  fastify.register(plugin)
  fastify.ready((err) => {
    t.assert.strictEqual(err.message, "The decorator 'plugin1' is not present in Request")
    testDone()
  })

  function plugin (instance, opts, done) {
    instance.decorate('plugin', true)
    done()
  }
})

test('plugin metadata - decorators - should throw with plugin name', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorate('plugin1', true)
  fastify.decorateReply('plugin1', true)

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'the-plugin',
    decorators: {
      fastify: ['plugin1'],
      reply: ['plugin1'],
      request: ['plugin1']
    }
  }

  fastify.register(plugin)
  fastify.ready((err) => {
    t.assert.strictEqual(err.message, "The decorator 'plugin1' required by 'the-plugin' is not present in Request")
    testDone()
  })

  function plugin (instance, opts, done) {
    instance.decorate('plugin', true)
    done()
  }
})

test('plugin metadata - dependencies', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  dependency[Symbol.for('skip-override')] = true
  dependency[Symbol.for('plugin-meta')] = {
    name: 'plugin'
  }

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    dependencies: ['plugin']
  }

  fastify.register(dependency)
  fastify.register(plugin)

  fastify.ready(() => {
    t.assert.ok('everything right')
    testDone()
  })

  function dependency (instance, opts, done) {
    done()
  }

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - dependencies (nested)', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  dependency[Symbol.for('skip-override')] = true
  dependency[Symbol.for('plugin-meta')] = {
    name: 'plugin'
  }

  nested[Symbol.for('skip-override')] = true
  nested[Symbol.for('plugin-meta')] = {
    dependencies: ['plugin']
  }

  fastify.register(dependency)
  fastify.register(plugin)

  fastify.ready(() => {
    t.assert.ok('everything right')
    testDone()
  })

  function dependency (instance, opts, done) {
    done()
  }

  function plugin (instance, opts, done) {
    instance.register(nested)
    done()
  }

  function nested (instance, opts, done) {
    done()
  }
})
