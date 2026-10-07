'use strict'

const t = require('node:test')
const test = t.test
const Fastify = require('../fastify')
const fp = require('fastify-plugin')

test('require a plugin', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.register(require('./plugin.helper'))
  fastify.ready(() => {
    t.assert.ok(fastify.test)
    testDone()
  })
})

test('plugin metadata - ignore prefix', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  plugin[Symbol.for('skip-override')] = true
  fastify.register(plugin, { prefix: 'foo' })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, function (err, res) {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })

  function plugin (instance, opts, done) {
    instance.get('/', function (request, reply) {
      reply.send('hello')
    })
    done()
  }
})

test('plugin metadata - naming plugins', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register(require('./plugin.name.display'))
  fastify.register(function (fastify, opts, done) {
    // one line
    t.assert.strictEqual(fastify.pluginName, 'function (fastify, opts, done) { -- // one line')
    done()
  })
  fastify.register(function fooBar (fastify, opts, done) {
    t.assert.strictEqual(fastify.pluginName, 'fooBar')
    done()
  })

  await fastify.ready()
})

test('fastify.register with fastify-plugin should not encapsulate his code', async t => {
  t.plan(9)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      i.decorate('test', () => {})
      t.assert.ok(i.test)
      n()
    }))

    t.assert.ok(!instance.test)

    // the decoration is added at the end
    instance.after(() => {
      t.assert.ok(instance.test)
    })

    instance.get('/', (req, reply) => {
      t.assert.ok(instance.test)
      reply.send({ hello: 'world' })
    })

    done()
  })

  fastify.ready(() => {
    t.assert.ok(!fastify.test)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})

test('fastify.register with fastify-plugin should provide access to external fastify instance if opts argument is a function', async t => {
  t.plan(21)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      i.decorate('global', () => {})
      t.assert.ok(i.global)
      n()
    }))

    instance.register((i, o, n) => n(), p => {
      t.assert.ok(!(p === instance || p === fastify))
      t.assert.ok(Object.prototype.isPrototypeOf.call(instance, p))
      t.assert.ok(Object.prototype.isPrototypeOf.call(fastify, p))
      t.assert.ok(p.global)
    })

    instance.register((i, o, n) => {
      i.decorate('local', () => {})
      n()
    })

    instance.register((i, o, n) => n(), p => t.assert.ok(!p.local))

    instance.register((i, o, n) => {
      t.assert.ok(i.local)
      n()
    }, p => p.decorate('local', () => {}))

    instance.register((i, o, n) => n(), p => t.assert.ok(!p.local))

    instance.register(fp((i, o, n) => {
      t.assert.ok(i.global_2)
      n()
    }), p => p.decorate('global_2', () => 'hello'))

    instance.register((i, o, n) => {
      i.decorate('global_2', () => 'world')
      n()
    }, p => p.get('/', (req, reply) => {
      t.assert.ok(p.global_2)
      reply.send({ hello: p.global_2() })
    }))

    t.assert.ok(!instance.global)
    t.assert.ok(!instance.global_2)
    t.assert.ok(!instance.local)

    // the decoration is added at the end
    instance.after(() => {
      t.assert.ok(instance.global)
      t.assert.strictEqual(instance.global_2(), 'hello')
      t.assert.ok(!instance.local)
    })

    done()
  })

  fastify.ready(() => {
    t.assert.ok(!fastify.global)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})

test('fastify.register with fastify-plugin registers fastify level plugins', async t => {
  t.plan(14)
  const fastify = Fastify()

  function fastifyPlugin (instance, opts, done) {
    instance.decorate('test', 'first')
    t.assert.ok(instance.test)
    done()
  }

  function innerPlugin (instance, opts, done) {
    instance.decorate('test2', 'second')
    done()
  }

  fastify.register(fp(fastifyPlugin))

  fastify.register((instance, opts, done) => {
    t.assert.ok(instance.test)
    instance.register(fp(innerPlugin))

    instance.get('/test2', (req, reply) => {
      t.assert.ok(instance.test2)
      reply.send({ test2: instance.test2 })
    })

    done()
  })

  fastify.ready(() => {
    t.assert.ok(fastify.test)
    t.assert.ok(!fastify.test2)
  })

  fastify.get('/', (req, reply) => {
    t.assert.ok(fastify.test)
    reply.send({ test: fastify.test })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result1 = await fetch(fastifyServer)
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.text()
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { test: 'first' })

  const result2 = await fetch(fastifyServer + '/test2')
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  const body2 = await result2.text()
  t.assert.strictEqual(result2.headers.get('content-length'), '' + body2.length)
  t.assert.deepStrictEqual(JSON.parse(body2), { test2: 'second' })
})
