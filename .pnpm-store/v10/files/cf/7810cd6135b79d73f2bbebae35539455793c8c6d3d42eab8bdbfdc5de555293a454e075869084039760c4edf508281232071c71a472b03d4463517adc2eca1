'use strict'

const { test } = require('node:test')
const stream = require('node:stream')
const Fastify = require('..')
const fp = require('fastify-plugin')
const fs = require('node:fs')
const split = require('split2')
const symbols = require('../lib/symbols.js')
const payload = { hello: 'world' }
const proxyquire = require('proxyquire')
const { connect } = require('node:net')
const { sleep } = require('./helper')
const { waitForCb } = require('./toolkit.js')

process.removeAllListeners('warning')

test('hooks', async t => {
  t.plan(48)
  const fastify = Fastify({ exposeHeadRoutes: false })

  try {
    fastify.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(request.test, 'the request is coming')
      t.assert.strictEqual(reply.test, 'the reply has come')
      if (request.raw.method === 'HEAD') {
        done(new Error('some error'))
      } else {
        done()
      }
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.addHook('preHandler', null)
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_HANDLER')
    t.assert.strictEqual(e.message, 'preHandler hook should be a function, instead got null')
    t.assert.ok('should pass')
  }

  try {
    fastify.addHook('preParsing')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_HANDLER')
    t.assert.strictEqual(e.message, 'preParsing hook should be a function, instead got undefined')
    t.assert.ok('should pass')
  }

  try {
    fastify.addHook('preParsing', function (request, reply, payload, done) {
      request.preParsing = true
      t.assert.strictEqual(request.test, 'the request is coming')
      t.assert.strictEqual(reply.test, 'the reply has come')
      done()
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.addHook('preParsing', function (request, reply, payload, done) {
      request.preParsing = true
      t.assert.strictEqual(request.test, 'the request is coming')
      t.assert.strictEqual(reply.test, 'the reply has come')
      done()
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.addHook('preValidation', function (request, reply, done) {
      t.assert.strictEqual(request.preParsing, true)
      t.assert.strictEqual(request.test, 'the request is coming')
      t.assert.strictEqual(reply.test, 'the reply has come')
      done()
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.addHook('preSerialization', function (request, reply, payload, done) {
      t.assert.ok('preSerialization called')
      done()
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.addHook('onRequest', function (request, reply, done) {
      request.test = 'the request is coming'
      reply.test = 'the reply has come'
      if (request.raw.method === 'DELETE') {
        done(new Error('some error'))
      } else {
        done()
      }
    })
    t.assert.ok('should pass')
  } catch (e) {
    t.assert.fail()
  }

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.ok('onResponse called')
    done()
  })

  fastify.addHook('onSend', function (req, reply, thePayload, done) {
    t.assert.ok('onSend called')
    done()
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: function (req, reply) {
      t.assert.strictEqual(req.test, 'the request is coming')
      t.assert.strictEqual(reply.test, 'the reply has come')
      reply.code(200).send(payload)
    },
    onResponse: function (req, reply, done) {
      t.assert.ok('onResponse inside hook')
    },
    response: {
      200: {
        type: 'object'
      }
    }
  })

  fastify.head('/', function (req, reply) {
    reply.code(200).send(payload)
  })

  fastify.delete('/', function (req, reply) {
    reply.code(200).send(payload)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const getResult = await fetch(fastifyServer)
  t.assert.ok(getResult.ok)
  t.assert.strictEqual(getResult.status, 200)
  const getBody = await getResult.text()
  t.assert.strictEqual(getResult.headers.get('content-length'), '' + getBody.length)
  t.assert.deepStrictEqual(JSON.parse(getBody), { hello: 'world' })

  const headResult = await fetch(fastifyServer, { method: 'HEAD' })
  t.assert.ok(!headResult.ok)
  t.assert.strictEqual(headResult.status, 500)

  const deleteResult = await fetch(fastifyServer, { method: 'DELETE' })
  t.assert.ok(!deleteResult.ok)
  t.assert.strictEqual(deleteResult.status, 500)
})

test('onRequest hook should support encapsulation / 1', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addHook('onRequest', (req, reply, done) => {
      t.assert.strictEqual(req.raw.url, '/plugin')
      done()
    })

    instance.get('/plugin', (request, reply) => {
      reply.send()
    })

    done()
  })

  fastify.get('/root', (request, reply) => {
    reply.send()
  })

  fastify.inject('/root', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)

    fastify.inject('/plugin', (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 200)
      testDone()
    })
  })
})

test('onRequest hook should support encapsulation / 2', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  let pluginInstance

  fastify.addHook('onRequest', () => { })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRequest', () => { })
    pluginInstance = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify[symbols.kHooks].onRequest.length, 1)
    t.assert.strictEqual(pluginInstance[symbols.kHooks].onRequest.length, 2)
    testDone()
  })
})

test('onRequest hook should support encapsulation / 3', async t => {
  t.plan(19)
  const fastify = Fastify()
  fastify.decorate('hello', 'world')

  fastify.addHook('onRequest', function (req, reply, done) {
    t.assert.ok(this.hello)
    t.assert.ok(this.hello2)
    req.first = true
    done()
  })

  fastify.decorate('hello2', 'world')

  fastify.get('/first', (req, reply) => {
    t.assert.ok(req.first)
    t.assert.ok(!req.second)
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello3', 'world')
    instance.addHook('onRequest', function (req, reply, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      t.assert.ok(this.hello3)
      req.second = true
      done()
    })

    instance.get('/second', (req, reply) => {
      t.assert.ok(req.first)
      t.assert.ok(req.second)
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const firstResult = await fetch(fastifyServer + '/first', { method: 'GET' })
  t.assert.ok(firstResult.ok)
  t.assert.strictEqual(firstResult.status, 200)
  const firstBody = await firstResult.text()
  t.assert.strictEqual(firstResult.headers.get('content-length'), '' + firstBody.length)
  t.assert.deepStrictEqual(JSON.parse(firstBody), { hello: 'world' })

  const secondResult = await fetch(fastifyServer + '/second', { method: 'GET' })
  t.assert.ok(secondResult.ok)
  t.assert.strictEqual(secondResult.status, 200)
  const secondBody = await secondResult.text()
  t.assert.strictEqual(secondResult.headers.get('content-length'), '' + secondBody.length)
  t.assert.deepStrictEqual(JSON.parse(secondBody), { hello: 'world' })
})

test('preHandler hook should support encapsulation / 5', async t => {
  t.plan(16)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.decorate('hello', 'world')

  fastify.addHook('preHandler', function (req, res, done) {
    t.assert.ok(this.hello)
    req.first = true
    done()
  })

  fastify.get('/first', (req, reply) => {
    t.assert.ok(req.first)
    t.assert.ok(!req.second)
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello2', 'world')
    instance.addHook('preHandler', function (req, res, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      req.second = true
      done()
    })

    instance.get('/second', (req, reply) => {
      t.assert.ok(req.first)
      t.assert.ok(req.second)
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const firstResult = await fetch(fastifyServer + '/first')
  t.assert.ok(firstResult.ok)
  t.assert.strictEqual(firstResult.status, 200)
  const firstBody = await firstResult.text()
  t.assert.strictEqual(firstResult.headers.get('content-length'), '' + firstBody.length)
  t.assert.deepStrictEqual(JSON.parse(firstBody), { hello: 'world' })

  const secondResult = await fetch(fastifyServer + '/second')
  t.assert.ok(secondResult.ok)
  t.assert.strictEqual(secondResult.status, 200)
  const secondBody = await secondResult.text()
  t.assert.strictEqual(secondResult.headers.get('content-length'), '' + secondBody.length)
  t.assert.deepStrictEqual(JSON.parse(secondBody), { hello: 'world' })
})

test('onRoute hook should be called / 1', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', () => {
      t.assert.ok('should pass')
    })
    instance.get('/', opts, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should be called / 2', (t, testDone) => {
  t.plan(5)
  let firstHandler = 0
  let secondHandler = 0
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.addHook('onRoute', (route) => {
    t.assert.ok('should pass')
    firstHandler++
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (route) => {
      t.assert.ok('should pass')
      secondHandler++
    })
    instance.get('/', opts, function (req, reply) {
      reply.send()
    })
    done()
  })
    .after(() => {
      t.assert.strictEqual(firstHandler, 1)
      t.assert.strictEqual(secondHandler, 1)
    })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should be called / 3', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify({ exposeHeadRoutes: false })

  function handler (req, reply) {
    reply.send()
  }

  fastify.addHook('onRoute', (route) => {
    t.assert.ok('should pass')
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (route) => {
      t.assert.ok('should pass')
    })
    instance.get('/a', handler)
    done()
  })
    .after((err, done) => {
      t.assert.ifError(err)
      setTimeout(() => {
        fastify.get('/b', handler)
        done()
      }, 10)
    })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should be called (encapsulation support) / 4', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.addHook('onRoute', () => {
    t.assert.ok('should pass')
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', () => {
      t.assert.ok('should pass')
    })
    instance.get('/nested', opts, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.get('/', function (req, reply) {
    reply.send()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should be called (encapsulation support) / 5', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.get('/first', function (req, reply) {
    reply.send()
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', () => {
      t.assert.ok('should pass')
    })
    instance.get('/nested', opts, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.get('/second', function (req, reply) {
    reply.send()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should be called (encapsulation support) / 6', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.get('/first', function (req, reply) {
    reply.send()
  })

  fastify.addHook('onRoute', () => {
    t.assert.fail('This should not be called')
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute should keep the context', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.register((instance, opts, done) => {
    instance.decorate('test', true)
    instance.addHook('onRoute', onRoute)
    t.assert.ok(instance.prototype === fastify.prototype)

    function onRoute (route) {
      t.assert.ok(this.test)
      t.assert.strictEqual(this, instance)
    }

    instance.get('/', opts, function (req, reply) {
      reply.send()
    })

    done()
  })

  fastify.close((err) => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should pass correct route', (t, testDone) => {
  t.plan(9)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.addHook('onRoute', (route) => {
    t.assert.strictEqual(route.method, 'GET')
    t.assert.strictEqual(route.url, '/')
    t.assert.strictEqual(route.path, '/')
    t.assert.strictEqual(route.routePath, '/')
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (route) => {
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/')
      t.assert.strictEqual(route.path, '/')
      t.assert.strictEqual(route.routePath, '/')
    })
    instance.get('/', opts, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should pass correct route with custom prefix', (t, testDone) => {
  t.plan(11)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.addHook('onRoute', function (route) {
    t.assert.strictEqual(route.method, 'GET')
    t.assert.strictEqual(route.url, '/v1/foo')
    t.assert.strictEqual(route.path, '/v1/foo')
    t.assert.strictEqual(route.routePath, '/foo')
    t.assert.strictEqual(route.prefix, '/v1')
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', function (route) {
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/v1/foo')
      t.assert.strictEqual(route.path, '/v1/foo')
      t.assert.strictEqual(route.routePath, '/foo')
      t.assert.strictEqual(route.prefix, '/v1')
    })
    instance.get('/foo', opts, function (req, reply) {
      reply.send()
    })
    done()
  }, { prefix: '/v1' })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should pass correct route with custom options', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', function (route) {
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/foo')
      t.assert.strictEqual(route.logLevel, 'info')
      t.assert.strictEqual(route.bodyLimit, 100)
      t.assert.ok(typeof route.logSerializers.test === 'function')
    })
    instance.get('/foo', {
      logLevel: 'info',
      bodyLimit: 100,
      logSerializers: {
        test: value => value
      }
    }, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should receive any route option', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', function (route) {
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/foo')
      t.assert.strictEqual(route.routePath, '/foo')
      t.assert.strictEqual(route.auth, 'basic')
    })
    instance.get('/foo', { auth: 'basic' }, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should preserve system route configuration', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', function (route) {
      t.assert.strictEqual(route.method, 'GET')
      t.assert.strictEqual(route.url, '/foo')
      t.assert.strictEqual(route.routePath, '/foo')
      t.assert.strictEqual(route.handler.length, 2)
    })
    instance.get('/foo', { url: '/bar', method: 'POST' }, function (req, reply) {
      reply.send()
    })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should preserve handler function in options of shorthand route system configuration', (t, testDone) => {
  t.plan(2)

  const handler = (req, reply) => { }

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', function (route) {
      t.assert.strictEqual(route.handler, handler)
    })
    instance.get('/foo', { handler })
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

// issue ref https://github.com/fastify/fastify-compress/issues/140
test('onRoute hook should be called once when prefixTrailingSlash', (t, testDone) => {
  t.plan(3)

  let onRouteCalled = 0
  let routePatched = 0

  const fastify = Fastify({ ignoreTrailingSlash: false, exposeHeadRoutes: false })

  // a plugin that patches route options, similar to fastify-compress
  fastify.register(fp(function myPlugin (instance, opts, next) {
    function patchTheRoute () {
      routePatched++
    }

    instance.addHook('onRoute', function (routeOptions) {
      onRouteCalled++
      patchTheRoute(routeOptions)
    })

    next()
  }))

  fastify.register(function routes (instance, opts, next) {
    instance.route({
      method: 'GET',
      url: '/',
      prefixTrailingSlash: 'both',
      handler: (req, reply) => {
        reply.send({ hello: 'world' })
      }
    })

    next()
  }, { prefix: '/prefix' })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(onRouteCalled, 1) // onRoute hook was called once
    t.assert.strictEqual(routePatched, 1) // and plugin acted once and avoided redundant route patching
    testDone()
  })
})

test('onRoute hook should able to change the route url', async t => {
  t.plan(4)

  const fastify = Fastify({ exposeHeadRoutes: false })
  t.after(() => { fastify.close() })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (route) => {
      t.assert.strictEqual(route.url, '/foo')
      route.url = encodeURI(route.url)
    })

    instance.get('/foo', (request, reply) => {
      reply.send('here /foo')
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + encodeURI('/foo'))
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), 'here /foo')
})

test('onRoute hook that throws should be caught', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', () => {
      throw new Error('snap')
    })

    try {
      instance.get('/', opts, function (req, reply) {
        reply.send()
      })

      t.assert.fail('onRoute should throw sync if error')
    } catch (error) {
      t.assert.ok(error)
    }

    done()
  })

  fastify.ready(testDone)
})

test('onRoute hook with many prefix', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify({ exposeHeadRoutes: false })
  const handler = (req, reply) => { reply.send({}) }

  const onRouteChecks = [
    { routePath: '/anotherPath', prefix: '/one/two', url: '/one/two/anotherPath' },
    { routePath: '/aPath', prefix: '/one', url: '/one/aPath' }
  ]

  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', ({ routePath, prefix, url }) => {
      t.assert.deepStrictEqual({ routePath, prefix, url }, onRouteChecks.pop())
    })
    instance.route({ method: 'GET', url: '/aPath', handler })

    instance.register((instance, opts, done) => {
      instance.route({ method: 'GET', path: '/anotherPath', handler })
      done()
    }, { prefix: '/two' })
    done()
  }, { prefix: '/one' })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRoute hook should not be called when it registered after route', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('onRoute', () => {
    t.assert.ok('should pass')
  })

  fastify.get('/', function (req, reply) {
    reply.send()
  })

  fastify.addHook('onRoute', () => {
    t.assert.fail('should not be called')
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onResponse hook should log request error', (t, testDone) => {
  t.plan(4)

  let fastify = null
  const logStream = split(JSON.parse)
  try {
    fastify = Fastify({
      logger: {
        stream: logStream,
        level: 'error'
      }
    })
  } catch (e) {
    t.assert.fail()
  }

  logStream.once('data', line => {
    t.assert.strictEqual(line.msg, 'request errored')
    t.assert.strictEqual(line.level, 50)
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    done(new Error('kaboom'))
  })

  fastify.get('/root', (request, reply) => {
    reply.send()
  })

  fastify.inject('/root', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('onResponse hook should support encapsulation / 1', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addHook('onResponse', (request, reply, done) => {
      t.assert.strictEqual(reply.plugin, true)
      done()
    })

    instance.get('/plugin', (request, reply) => {
      reply.plugin = true
      reply.send()
    })

    done()
  })

  fastify.get('/root', (request, reply) => {
    reply.send()
  })

  fastify.inject('/root', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
  })

  fastify.inject('/plugin', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('onResponse hook should support encapsulation / 2', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  let pluginInstance

  fastify.addHook('onResponse', () => { })

  fastify.register((instance, opts, done) => {
    instance.addHook('onResponse', () => { })
    pluginInstance = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify[symbols.kHooks].onResponse.length, 1)
    t.assert.strictEqual(pluginInstance[symbols.kHooks].onResponse.length, 2)
    testDone()
  })
})

test('onResponse hook should support encapsulation / 3', async t => {
  t.plan(15)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.decorate('hello', 'world')

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.ok(this.hello)
    t.assert.ok('onResponse called')
    done()
  })

  fastify.get('/first', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello2', 'world')
    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      t.assert.ok('onResponse called')
      done()
    })

    instance.get('/second', (req, reply) => {
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const firstResult = await fetch(fastifyServer + '/first', { method: 'GET' })
  t.assert.ok(firstResult.ok)
  t.assert.strictEqual(firstResult.status, 200)
  const firstBody = await firstResult.text()
  t.assert.strictEqual(firstResult.headers.get('content-length'), '' + firstBody.length)
  t.assert.deepStrictEqual(JSON.parse(firstBody), { hello: 'world' })

  const secondResult = await fetch(fastifyServer + '/second')
  t.assert.ok(secondResult.ok)
  t.assert.strictEqual(secondResult.status, 200)
  const secondBody = await secondResult.text()
  t.assert.strictEqual(secondResult.headers.get('content-length'), '' + secondBody.length)
  t.assert.deepStrictEqual(JSON.parse(secondBody), { hello: 'world' })
})

test('onSend hook should support encapsulation / 1', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  let pluginInstance

  fastify.addHook('onSend', () => { })

  fastify.register((instance, opts, done) => {
    instance.addHook('onSend', () => { })
    pluginInstance = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify[symbols.kHooks].onSend.length, 1)
    t.assert.strictEqual(pluginInstance[symbols.kHooks].onSend.length, 2)
    testDone()
  })
})

test('onSend hook should support encapsulation / 2', async t => {
  t.plan(15)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.decorate('hello', 'world')

  fastify.addHook('onSend', function (request, reply, thePayload, done) {
    t.assert.ok(this.hello)
    t.assert.ok('onSend called')
    done()
  })

  fastify.get('/first', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello2', 'world')
    instance.addHook('onSend', function (request, reply, thePayload, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      t.assert.ok('onSend called')
      done()
    })

    instance.get('/second', (req, reply) => {
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const firstResult = await fetch(fastifyServer + '/first')
  t.assert.ok(firstResult.ok)
  t.assert.strictEqual(firstResult.status, 200)
  const firstBody = await firstResult.text()
  t.assert.strictEqual(firstResult.headers.get('content-length'), '' + firstBody.length)
  t.assert.deepStrictEqual(JSON.parse(firstBody), { hello: 'world' })

  const secondResult = await fetch(fastifyServer + '/second')
  t.assert.ok(secondResult.ok)
  t.assert.strictEqual(secondResult.status, 200)
  const secondBody = await secondResult.text()
  t.assert.strictEqual(secondResult.headers.get('content-length'), '' + secondBody.length)
  t.assert.deepStrictEqual(JSON.parse(secondBody), { hello: 'world' })
})

test('onSend hook is called after payload is serialized and headers are set', (t, testDone) => {
  t.plan(30)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    const thePayload = { hello: 'world' }

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.deepStrictEqual(JSON.parse(payload), thePayload)
      t.assert.strictEqual(reply[symbols.kReplyHeaders]['content-type'], 'application/json; charset=utf-8')
      done()
    })

    instance.get('/json', (request, reply) => {
      reply.send(thePayload)
    })

    done()
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(payload, 'some text')
      t.assert.strictEqual(reply[symbols.kReplyHeaders]['content-type'], 'text/plain; charset=utf-8')
      done()
    })

    instance.get('/text', (request, reply) => {
      reply.send('some text')
    })

    done()
  })

  fastify.register((instance, opts, done) => {
    const thePayload = Buffer.from('buffer payload')

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(payload, thePayload)
      t.assert.strictEqual(reply[symbols.kReplyHeaders]['content-type'], 'application/octet-stream')
      done()
    })

    instance.get('/buffer', (request, reply) => {
      reply.send(thePayload)
    })

    done()
  })

  fastify.register((instance, opts, done) => {
    let chunk = 'stream payload'
    const thePayload = new stream.Readable({
      read () {
        this.push(chunk)
        chunk = null
      }
    })

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(payload, thePayload)
      t.assert.strictEqual(reply[symbols.kReplyHeaders]['content-type'], 'application/octet-stream')
      done()
    })

    instance.get('/stream', (request, reply) => {
      reply.header('content-type', 'application/octet-stream')
      reply.send(thePayload)
    })

    done()
  })

  fastify.register((instance, opts, done) => {
    const serializedPayload = 'serialized'

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(payload, serializedPayload)
      t.assert.strictEqual(reply[symbols.kReplyHeaders]['content-type'], 'text/custom')
      done()
    })

    instance.get('/custom-serializer', (request, reply) => {
      reply
        .serializer(() => serializedPayload)
        .type('text/custom')
        .send('needs to be serialized')
    })

    done()
  })

  const completion = waitForCb({ steps: 5 })
  fastify.inject({
    method: 'GET',
    url: '/json'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    t.assert.strictEqual(res.headers['content-length'], '17')
    completion.stepIn()
  })

  fastify.inject({
    method: 'GET',
    url: '/text'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.payload, 'some text')
    t.assert.strictEqual(res.headers['content-length'], '9')
    completion.stepIn()
  })

  fastify.inject({
    method: 'GET',
    url: '/buffer'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.payload, 'buffer payload')
    t.assert.strictEqual(res.headers['content-length'], '14')
    completion.stepIn()
  })

  fastify.inject({
    method: 'GET',
    url: '/stream'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.payload, 'stream payload')
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    completion.stepIn()
  })

  fastify.inject({
    method: 'GET',
    url: '/custom-serializer'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.payload, 'serialized')
    t.assert.strictEqual(res.headers['content-type'], 'text/custom')
    completion.stepIn()
  })
  completion.patience.then(testDone)
})

test('modify payload', (t, testDone) => {
  t.plan(10)
  const fastify = Fastify()
  const payload = { hello: 'world' }
  const modifiedPayload = { hello: 'modified' }
  const anotherPayload = '"winter is coming"'

  fastify.addHook('onSend', function (request, reply, thePayload, done) {
    t.assert.ok('onSend called')
    t.assert.deepStrictEqual(JSON.parse(thePayload), payload)
    thePayload = thePayload.replace('world', 'modified')
    done(null, thePayload)
  })

  fastify.addHook('onSend', function (request, reply, thePayload, done) {
    t.assert.ok('onSend called')
    t.assert.deepStrictEqual(JSON.parse(thePayload), modifiedPayload)
    done(null, anotherPayload)
  })

  fastify.addHook('onSend', function (request, reply, thePayload, done) {
    t.assert.ok('onSend called')
    t.assert.strictEqual(thePayload, anotherPayload)
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, anotherPayload)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '18')
    testDone()
  })
})

test('clear payload', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.ok('onSend called')
    reply.code(304)
    done(null, null)
  })

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 304)
    t.assert.strictEqual(res.payload, '')
    t.assert.strictEqual(res.headers['content-length'], undefined)
    t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    testDone()
  })
})

test('onSend hook throws', async t => {
  t.plan(10)
  const Fastify = proxyquire('..', {
    './lib/schemas.js': {
      getSchemaSerializer: (param1, param2, param3) => {
        t.assert.strictEqual(param3, 'application/json; charset=utf-8', 'param3 should be "application/json; charset=utf-8"')
      }
    }
  })
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.addHook('onSend', function (request, reply, payload, done) {
    if (request.raw.method === 'DELETE') {
      done(new Error('some error'))
      return
    }

    if (request.raw.method === 'PUT') {
      throw new Error('some error')
    }

    if (request.raw.method === 'POST') {
      throw new Error('some error')
    }

    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.post('/', {
    schema: {
      response: {
        200: {
          content: {
            'application/json': {
              schema: {
                name: { type: 'string' },
                image: { type: 'string' },
                address: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.delete('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.put('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const getResult = await fetch(fastifyServer)
  t.assert.ok(getResult.ok)
  t.assert.strictEqual(getResult.status, 200)
  const getBody = await getResult.text()
  t.assert.strictEqual(getResult.headers.get('content-length'), '' + getBody.length)
  t.assert.deepStrictEqual(JSON.parse(getBody), { hello: 'world' })

  const postResult = await fetch(fastifyServer, { method: 'POST' })
  t.assert.ok(!postResult.ok)
  t.assert.strictEqual(postResult.status, 500)

  const deleteResult = await fetch(fastifyServer, { method: 'DELETE' })
  t.assert.ok(!deleteResult.ok)
  t.assert.strictEqual(deleteResult.status, 500)

  const putResult = await fetch(fastifyServer, { method: 'PUT' })
  t.assert.ok(!putResult.ok)
  t.assert.strictEqual(putResult.status, 500)
})

test('onSend hook should receive valid request and reply objects if onRequest hook fails', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.decorateRequest('testDecorator', 'testDecoratorVal')
  fastify.decorateReply('testDecorator', 'testDecoratorVal')

  fastify.addHook('onRequest', function (req, reply, done) {
    done(new Error('onRequest hook failed'))
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.strictEqual(request.testDecorator, 'testDecoratorVal')
    t.assert.strictEqual(reply.testDecorator, 'testDecoratorVal')
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send('hello')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    testDone()
  })
})

test('onSend hook should receive valid request and reply objects if a custom content type parser fails', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.decorateRequest('testDecorator', 'testDecoratorVal')
  fastify.decorateReply('testDecorator', 'testDecoratorVal')

  fastify.addContentTypeParser('*', function (req, payload, done) {
    done(new Error('content type parser failed'))
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.strictEqual(request.testDecorator, 'testDecoratorVal')
    t.assert.strictEqual(reply.testDecorator, 'testDecoratorVal')
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send('hello')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: 'body'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    testDone()
  })
})

test('Content-Length header should be updated if onSend hook modifies the payload', (t, testDone) => {
  t.plan(2)

  const instance = Fastify()

  instance.get('/', async (_, rep) => {
    rep.header('content-length', 3)
    return 'foo'
  })

  instance.addHook('onSend', async () => 'bar12233000')

  instance.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payloadLength = Buffer.byteLength(res.body)
    const contentLength = Number(res.headers['content-length'])

    t.assert.strictEqual(payloadLength, contentLength)
    testDone()
  })
})

test('cannot add hook after binding', (t, testDone) => {
  t.plan(1)
  const instance = Fastify()
  t.after(() => instance.close())

  instance.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  instance.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    try {
      instance.addHook('onRequest', () => { })
      t.assert.fail()
    } catch (e) {
      testDone()
    }
  })
})

test('onRequest hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('onRequest', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preValidation hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('preValidation', (req, reply, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('preValidation', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preValidation hooks should be able to change request body before validation', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('preValidation', (req, _reply, done) => {
    const buff = Buffer.from(req.body.message, 'base64')
    req.body = JSON.parse(buff.toString('utf-8'))
    done()
  })

  fastify.post(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            foo: {
              type: 'string'
            },
            bar: {
              type: 'number'
            }
          },
          required: ['foo', 'bar']
        }
      }
    },
    (req, reply) => {
      t.assert.ok('should pass')
      reply.status(200).send('hello')
    }
  )

  fastify.inject({
    url: '/',
    method: 'POST',
    payload: {
      message: Buffer.from(JSON.stringify({ foo: 'example', bar: 1 })).toString('base64')
    }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preParsing hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('preParsing', (req, reply, payload, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('preParsing', (req, reply, payload, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preHandler hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('preHandler', (req, reply, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.strictEqual(payload, 'hello')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('onRequest hooks should be able to block a request (last hook)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preHandler hooks should be able to block a request (last hook)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('preHandler', (req, reply, done) => {
    reply.send('hello')
    done()
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.strictEqual(payload, 'hello')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('preParsing hooks should handle errors', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preParsing', (req, reply, payload, done) => {
    const e = new Error('kaboom')
    e.statusCode = 501
    throw e
  })

  fastify.post('/', function (request, reply) {
    reply.send(request.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 501)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { error: 'Not Implemented', message: 'kaboom', statusCode: 501 })
    testDone()
  })
})

test('onRequest respond with a stream', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    const stream = fs.createReadStream(__filename, 'utf8')
    // stream.pipe(res)
    // res.once('finish', done)
    reply.send(stream)
  })

  fastify.addHook('onRequest', (req, res, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('preHandler respond with a stream', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    t.assert.ok('called')
    done()
  })

  // we are calling `reply.send` inside the `preHandler` hook with a stream,
  // this triggers the `onSend` hook event if `preHandler` has not yet finished
  const order = [1, 2]

  fastify.addHook('preHandler', (req, reply, done) => {
    const stream = fs.createReadStream(__filename, 'utf8')
    reply.send(stream)
    reply.raw.once('finish', () => {
      t.assert.strictEqual(order.shift(), 2)
      done()
    })
  })

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.strictEqual(order.shift(), 1)
    t.assert.strictEqual(typeof payload.pipe, 'function')
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok('called')
    done()
  })

  fastify.get('/', function (request, reply) {
    t.assert.fail('we should not be here')
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('Register an hook after a plugin inside a plugin', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.get('/', function (request, reply) {
      reply.send({ hello: 'world' })
    })

    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('Register an hook after a plugin inside a plugin (with preHandler option)', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify()

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.get('/', {
      preHandler: (req, reply, done) => {
        t.assert.ok('called')
        done()
      }
    }, function (request, reply) {
      reply.send({ hello: 'world' })
    })

    done()
  }))

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('preHandler', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('Register hooks inside a plugin after an encapsulated plugin', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.get('/', function (request, reply) {
      reply.send({ hello: 'world' })
    })

    done()
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onRequest', function (req, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.ok('called')
      done()
    })

    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.ok('called')
      done()
    })

    done()
  }))

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('onRequest hooks should run in the order in which they are defined', (t, testDone) => {
  t.plan(9)
  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.addHook('onRequest', function (req, reply, done) {
      t.assert.strictEqual(req.previous, undefined)
      req.previous = 1
      done()
    })

    instance.get('/', function (request, reply) {
      t.assert.strictEqual(request.previous, 5)
      reply.send({ hello: 'world' })
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onRequest', function (req, reply, done) {
        t.assert.strictEqual(req.previous, 1)
        req.previous = 2
        done()
      })
      done()
    }))

    done()
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onRequest', function (req, reply, done) {
      t.assert.strictEqual(req.previous, 2)
      req.previous = 3
      done()
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onRequest', function (req, reply, done) {
        t.assert.strictEqual(req.previous, 3)
        req.previous = 4
        done()
      })
      done()
    }))

    instance.addHook('onRequest', function (req, reply, done) {
      t.assert.strictEqual(req.previous, 4)
      req.previous = 5
      done()
    })

    done()
  }))

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('preHandler hooks should run in the order in which they are defined', (t, testDone) => {
  t.plan(9)
  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(request.previous, undefined)
      request.previous = 1
      done()
    })

    instance.get('/', function (request, reply) {
      t.assert.strictEqual(request.previous, 5)
      reply.send({ hello: 'world' })
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('preHandler', function (request, reply, done) {
        t.assert.strictEqual(request.previous, 1)
        request.previous = 2
        done()
      })
      done()
    }))

    done()
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(request.previous, 2)
      request.previous = 3
      done()
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('preHandler', function (request, reply, done) {
        t.assert.strictEqual(request.previous, 3)
        request.previous = 4
        done()
      })
      done()
    }))

    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(request.previous, 4)
      request.previous = 5
      done()
    })

    done()
  }))

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('onSend hooks should run in the order in which they are defined', (t, testDone) => {
  t.plan(8)
  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(request.previous, undefined)
      request.previous = 1
      done()
    })

    instance.get('/', function (request, reply) {
      reply.send({})
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onSend', function (request, reply, payload, done) {
        t.assert.strictEqual(request.previous, 1)
        request.previous = 2
        done()
      })
      done()
    }))

    done()
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(request.previous, 2)
      request.previous = 3
      done()
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onSend', function (request, reply, payload, done) {
        t.assert.strictEqual(request.previous, 3)
        request.previous = 4
        done()
      })
      done()
    }))

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(request.previous, 4)
      done(null, '5')
    })

    done()
  }))

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), 5)
    testDone()
  })
})

test('onResponse hooks should run in the order in which they are defined', (t, testDone) => {
  t.plan(8)
  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.strictEqual(reply.previous, undefined)
      reply.previous = 1
      done()
    })

    instance.get('/', function (request, reply) {
      reply.send({ hello: 'world' })
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onResponse', function (request, reply, done) {
        t.assert.strictEqual(reply.previous, 1)
        reply.previous = 2
        done()
      })
      done()
    }))

    done()
  })

  fastify.register(fp(function (instance, opts, done) {
    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.strictEqual(reply.previous, 2)
      reply.previous = 3
      done()
    })

    instance.register(fp(function (i, opts, done) {
      i.addHook('onResponse', function (request, reply, done) {
        t.assert.strictEqual(reply.previous, 3)
        reply.previous = 4
        done()
      })
      done()
    }))

    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.strictEqual(reply.previous, 4)
      done()
    })

    done()
  }))

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'world' })
    testDone()
  })
})

test('onRequest, preHandler, and onResponse hooks that resolve to a value do not cause an error', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify
    .addHook('onRequest', () => Promise.resolve(1))
    .addHook('onRequest', () => Promise.resolve(true))
    .addHook('preValidation', () => Promise.resolve(null))
    .addHook('preValidation', () => Promise.resolve('a'))
    .addHook('preHandler', () => Promise.resolve(null))
    .addHook('preHandler', () => Promise.resolve('a'))
    .addHook('onResponse', () => Promise.resolve({}))
    .addHook('onResponse', () => Promise.resolve([]))

  fastify.get('/', (request, reply) => {
    reply.send('hello')
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('If a response header has been set inside an hook it should not be overwritten by the final response handler', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    reply.header('X-Custom-Header', 'hello')
    done()
  })

  fastify.get('/', (request, reply) => {
    reply.send('hello')
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['x-custom-header'], 'hello')
    t.assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('If the content type has been set inside an hook it should not be changed', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', (req, reply, done) => {
    reply.header('content-type', 'text/html')
    done()
  })

  fastify.get('/', (request, reply) => {
    t.assert.ok(reply[symbols.kReplyHeaders]['content-type'])
    reply.send('hello')
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'text/html')
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'hello')
    testDone()
  })
})

test('request in onRequest, preParsing, preValidation and onResponse', (t, testDone) => {
  t.plan(18)
  const fastify = Fastify()

  fastify.addHook('onRequest', function (request, reply, done) {
    t.assert.deepStrictEqual(request.body, undefined)
    t.assert.deepStrictEqual(request.query.key, 'value')
    t.assert.deepStrictEqual(request.params.greeting, 'hello')
    t.assert.deepStrictEqual(request.headers, {
      'content-length': '17',
      'content-type': 'application/json',
      host: 'localhost:80',
      'user-agent': 'lightMyRequest',
      'x-custom': 'hello'
    })
    done()
  })

  fastify.addHook('preParsing', function (request, reply, payload, done) {
    t.assert.deepStrictEqual(request.body, undefined)
    t.assert.deepStrictEqual(request.query.key, 'value')
    t.assert.deepStrictEqual(request.params.greeting, 'hello')
    t.assert.deepStrictEqual(request.headers, {
      'content-length': '17',
      'content-type': 'application/json',
      host: 'localhost:80',
      'user-agent': 'lightMyRequest',
      'x-custom': 'hello'
    })
    done()
  })

  fastify.addHook('preValidation', function (request, reply, done) {
    t.assert.deepStrictEqual(request.body, { hello: 'world' })
    t.assert.deepStrictEqual(request.query.key, 'value')
    t.assert.deepStrictEqual(request.params.greeting, 'hello')
    t.assert.deepStrictEqual(request.headers, {
      'content-length': '17',
      'content-type': 'application/json',
      host: 'localhost:80',
      'user-agent': 'lightMyRequest',
      'x-custom': 'hello'
    })
    done()
  })

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.deepStrictEqual(request.body, { hello: 'world' })
    t.assert.deepStrictEqual(request.query.key, 'value')
    t.assert.deepStrictEqual(request.params.greeting, 'hello')
    t.assert.deepStrictEqual(request.headers, {
      'content-length': '17',
      'content-type': 'application/json',
      host: 'localhost:80',
      'user-agent': 'lightMyRequest',
      'x-custom': 'hello'
    })
    done()
  })

  fastify.post('/:greeting', function (req, reply) {
    reply.send('ok')
  })

  fastify.inject({
    method: 'POST',
    url: '/hello?key=value',
    headers: { 'x-custom': 'hello' },
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    testDone()
  })
})

test('preValidation hook should support encapsulation / 1', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addHook('preValidation', (req, reply, done) => {
      t.assert.strictEqual(req.raw.url, '/plugin')
      done()
    })

    instance.get('/plugin', (request, reply) => {
      reply.send()
    })

    done()
  })

  fastify.get('/root', (request, reply) => {
    reply.send()
  })

  fastify.inject('/root', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    fastify.inject('/plugin', (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 200)
      testDone()
    })
  })
})

test('preValidation hook should support encapsulation / 2', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  let pluginInstance

  fastify.addHook('preValidation', () => { })

  fastify.register((instance, opts, done) => {
    instance.addHook('preValidation', () => { })
    pluginInstance = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify[symbols.kHooks].preValidation.length, 1)
    t.assert.strictEqual(pluginInstance[symbols.kHooks].preValidation.length, 2)
    testDone()
  })
})

test('preValidation hook should support encapsulation / 3', async t => {
  t.plan(19)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.decorate('hello', 'world')

  fastify.addHook('preValidation', function (req, reply, done) {
    t.assert.ok(this.hello)
    t.assert.ok(this.hello2)
    req.first = true
    done()
  })

  fastify.decorate('hello2', 'world')

  fastify.get('/first', (req, reply) => {
    t.assert.ok(req.first)
    t.assert.ok(!req.second)
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello3', 'world')
    instance.addHook('preValidation', function (req, reply, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      t.assert.ok(this.hello3)
      req.second = true
      done()
    })

    instance.get('/second', (req, reply) => {
      t.assert.ok(req.first)
      t.assert.ok(req.second)
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/first')
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.text()
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'world' })

  const result2 = await fetch(fastifyServer + '/second')
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  const body2 = await result2.text()
  t.assert.strictEqual(result2.headers.get('content-length'), '' + body2.length)
  t.assert.deepStrictEqual(JSON.parse(body2), { hello: 'world' })
})

test('onError hook', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  const err = new Error('kaboom')

  fastify.addHook('onError', (request, reply, error, done) => {
    t.assert.deepStrictEqual(error, err)
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send(err)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      message: 'kaboom',
      statusCode: 500
    })
    testDone()
  })
})

test('reply.send should throw if called inside the onError hook', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  const err = new Error('kaboom')

  fastify.addHook('onError', (request, reply, error, done) => {
    try {
      reply.send()
      t.assert.fail('Should throw')
    } catch (err) {
      t.assert.strictEqual(err.code, 'FST_ERR_SEND_INSIDE_ONERR')
    }
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send(err)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      message: 'kaboom',
      statusCode: 500
    })
    testDone()
  })
})

test('onError hook with setErrorHandler', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  const external = new Error('ouch')
  const internal = new Error('kaboom')

  fastify.setErrorHandler((_, req, reply) => {
    reply.send(external)
  })

  fastify.addHook('onError', (request, reply, error, done) => {
    t.assert.deepStrictEqual(error, internal)
    done()
  })

  fastify.get('/', (req, reply) => {
    reply.send(internal)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      message: 'ouch',
      statusCode: 500
    })
    testDone()
  })
})

test('preParsing hook should run before parsing and be able to modify the payload', async t => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preParsing', function (req, reply, payload, done) {
    const modified = new stream.Readable()
    modified.receivedEncodedLength = parseInt(req.headers['content-length'], 10)
    modified.push(JSON.stringify({ hello: 'another world' }))
    modified.push(null)
    done(null, modified)
  })

  fastify.route({
    method: 'POST',
    url: '/first',
    handler: function (req, reply) {
      reply.send(req.body)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first', {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'another world' })
})

test('preParsing hooks should run in the order in which they are defined', async t => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preParsing', function (req, reply, payload, done) {
    const modified = new stream.Readable()
    modified.receivedEncodedLength = parseInt(req.headers['content-length'], 10)
    modified.push('{"hello":')
    done(null, modified)
  })

  fastify.addHook('preParsing', function (req, reply, payload, done) {
    payload.push('"another world"}')
    payload.push(null)
    done(null, payload)
  })

  fastify.route({
    method: 'POST',
    url: '/first',
    handler: function (req, reply) {
      reply.send(req.body)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first', {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'another world' })
})

test('preParsing hooks should support encapsulation', async t => {
  t.plan(8)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preParsing', function (req, reply, payload, done) {
    const modified = new stream.Readable()
    modified.receivedEncodedLength = parseInt(req.headers['content-length'], 10)
    modified.push('{"hello":"another world"}')
    modified.push(null)
    done(null, modified)
  })

  fastify.post('/first', (req, reply) => {
    reply.send(req.body)
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('preParsing', function (req, reply, payload, done) {
      const modified = new stream.Readable()
      modified.receivedEncodedLength = payload.receivedEncodedLength || parseInt(req.headers['content-length'], 10)
      modified.push('{"hello":"encapsulated world"}')
      modified.push(null)
      done(null, modified)
    })

    instance.post('/second', (req, reply) => {
      reply.send(req.body)
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/first', {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.text()
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'another world' })

  const result2 = await fetch(fastifyServer + '/second', {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  const body2 = await result2.text()
  t.assert.strictEqual(result2.headers.get('content-length'), '' + body2.length)
  t.assert.deepStrictEqual(JSON.parse(body2), { hello: 'encapsulated world' })
})

test('preParsing hook should support encapsulation / 1', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addHook('preParsing', (req, reply, payload, done) => {
      t.assert.strictEqual(req.raw.url, '/plugin')
      done()
    })

    instance.get('/plugin', (request, reply) => {
      reply.send()
    })

    done()
  })

  fastify.get('/root', (request, reply) => {
    reply.send()
  })

  fastify.inject('/root', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    fastify.inject('/plugin', (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 200)
      testDone()
    })
  })
})

test('preParsing hook should support encapsulation / 2', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()
  let pluginInstance

  fastify.addHook('preParsing', function a () { })

  fastify.register((instance, opts, done) => {
    instance.addHook('preParsing', function b () { })
    pluginInstance = instance
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify[symbols.kHooks].preParsing.length, 1)
    t.assert.strictEqual(pluginInstance[symbols.kHooks].preParsing.length, 2)
    testDone()
  })
})

test('preParsing hook should support encapsulation / 3', async t => {
  t.plan(19)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.decorate('hello', 'world')

  fastify.addHook('preParsing', function (req, reply, payload, done) {
    t.assert.ok(this.hello)
    t.assert.ok(this.hello2)
    req.first = true
    done()
  })

  fastify.decorate('hello2', 'world')

  fastify.get('/first', (req, reply) => {
    t.assert.ok(req.first)
    t.assert.ok(!req.second)
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.decorate('hello3', 'world')
    instance.addHook('preParsing', function (req, reply, payload, done) {
      t.assert.ok(this.hello)
      t.assert.ok(this.hello2)
      t.assert.ok(this.hello3)
      req.second = true
      done()
    })

    instance.get('/second', (req, reply) => {
      t.assert.ok(req.first)
      t.assert.ok(req.second)
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/first')
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.text()
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'world' })

  const result2 = await fetch(fastifyServer + '/second')
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  const body2 = await result2.text()
  t.assert.strictEqual(result2.headers.get('content-length'), '' + body2.length)
  t.assert.deepStrictEqual(JSON.parse(body2), { hello: 'world' })
})

test('preSerialization hook should run before serialization and be able to modify the payload', async t => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    payload.hello += '1'
    payload.world = 'ok'

    done(null, payload)
  })

  fastify.route({
    method: 'GET',
    url: '/first',
    handler: function (req, reply) {
      reply.send({ hello: 'world' })
    },
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {
              type: 'string'
            },
            world: {
              type: 'string'
            }
          },
          required: ['world'],
          additionalProperties: false
        }
      }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first')
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world1', world: 'ok' })
})

test('preSerialization hook should be able to throw errors which are validated against schema response', async t => {
  t.plan(5)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    done(new Error('preSerialization aborted'))
  })

  fastify.setErrorHandler((err, request, reply) => {
    t.assert.strictEqual(err.message, 'preSerialization aborted')
    err.world = 'error'
    reply.send(err)
  })

  fastify.route({
    method: 'GET',
    url: '/first',
    handler: function (req, reply) {
      reply.send({ world: 'hello' })
    },
    schema: {
      response: {
        500: {
          type: 'object',
          properties: {
            world: {
              type: 'string'
            }
          },
          required: ['world'],
          additionalProperties: false
        }
      }
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first')
  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 500)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { world: 'error' })
})

test('preSerialization hook which returned error should still run onError hooks', async t => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    done(new Error('preSerialization aborted'))
  })

  fastify.addHook('onError', function (req, reply, payload, done) {
    t.assert.ok('should pass')
    done()
  })

  fastify.get('/first', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first')
  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 500)
})

test('preSerialization hooks should run in the order in which they are defined', async t => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    payload.hello += '2'

    done(null, payload)
  })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    payload.hello += '1'

    done(null, payload)
  })

  fastify.get('/first', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer + '/first')
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world21' })
})

test('preSerialization hooks should support encapsulation', async t => {
  t.plan(8)
  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.addHook('preSerialization', function (req, reply, payload, done) {
    payload.hello += '1'

    done(null, payload)
  })

  fastify.get('/first', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.register((instance, opts, done) => {
    instance.addHook('preSerialization', function (req, reply, payload, done) {
      payload.hello += '2'

      done(null, payload)
    })

    instance.get('/second', (req, reply) => {
      reply.send({ hello: 'world' })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/first')
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  const body1 = await result1.text()
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'world1' })

  const result2 = await fetch(fastifyServer + '/second')
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  const body2 = await result2.text()
  t.assert.strictEqual(result2.headers.get('content-length'), '' + body2.length)
  t.assert.deepStrictEqual(JSON.parse(body2), { hello: 'world12' })
})

test('onRegister hook should be called / 1', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRegister', function (instance, opts, done) {
    t.assert.ok(this.addHook)
    t.assert.ok(instance.addHook)
    t.assert.deepStrictEqual(opts, pluginOpts)
    t.assert.ok(!done)
  })

  const pluginOpts = { prefix: 'hello', custom: 'world' }
  fastify.register((instance, opts, done) => {
    done()
  }, pluginOpts)

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRegister hook should be called / 2', (t, testDone) => {
  t.plan(7)
  const fastify = Fastify()

  fastify.addHook('onRegister', function (instance) {
    t.assert.ok(this.addHook)
    t.assert.ok(instance.addHook)
  })

  fastify.register((instance, opts, done) => {
    instance.register((instance, opts, done) => {
      done()
    })
    done()
  })

  fastify.register((instance, opts, done) => {
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRegister hook should be called / 3', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.decorate('data', [])

  fastify.addHook('onRegister', instance => {
    instance.data = instance.data.slice()
  })

  fastify.register((instance, opts, done) => {
    instance.data.push(1)
    instance.register((instance, opts, done) => {
      instance.data.push(2)
      t.assert.deepStrictEqual(instance.data, [1, 2])
      done()
    })
    t.assert.deepStrictEqual(instance.data, [1])
    done()
  })

  fastify.register((instance, opts, done) => {
    t.assert.deepStrictEqual(instance.data, [])
    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('onRegister hook should be called (encapsulation)', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  function plugin (instance, opts, done) {
    done()
  }
  plugin[Symbol.for('skip-override')] = true

  fastify.addHook('onRegister', (instance, opts) => {
    t.assert.fail('This should not be called')
  })

  fastify.register(plugin)

  fastify.ready(err => {
    t.assert.ifError(err)
    testDone()
  })
})

test('early termination, onRequest', (t, testDone) => {
  t.plan(3)

  const app = Fastify()

  app.addHook('onRequest', (req, reply) => {
    setImmediate(() => reply.send('hello world'))
    return reply
  })

  app.get('/', (req, reply) => {
    t.assert.fail('should not happen')
  })

  app.inject('/', function (err, res) {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.body.toString(), 'hello world')
    testDone()
  })
})

test('reply.send should throw if undefined error is thrown', (t, testDone) => {
  /* eslint prefer-promise-reject-errors: ["error", {"allowEmptyReject": true}] */

  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('onRequest', function (req, reply, done) {
    return Promise.reject()
  })

  fastify.get('/', (req, reply) => {
    reply.send('hello')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      code: 'FST_ERR_SEND_UNDEFINED_ERR',
      message: 'Undefined error has occurred',
      statusCode: 500
    })
    testDone()
  })
})

test('reply.send should throw if undefined error is thrown at preParsing hook', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preParsing', function (req, reply, done) {
    return Promise.reject()
  })

  fastify.get('/', (req, reply) => {
    reply.send('hello')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      code: 'FST_ERR_SEND_UNDEFINED_ERR',
      message: 'Undefined error has occurred',
      statusCode: 500
    })
    testDone()
  })
})

test('reply.send should throw if undefined error is thrown at onSend hook', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('onSend', function (req, reply, done) {
    return Promise.reject()
  })

  fastify.get('/', (req, reply) => {
    reply.send('hello')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      code: 'FST_ERR_SEND_UNDEFINED_ERR',
      message: 'Undefined error has occurred',
      statusCode: 500
    })
    testDone()
  })
})

test('onTimeout should be triggered', async t => {
  t.plan(4)
  const fastify = Fastify({ connectionTimeout: 500 })
  t.after(() => { fastify.close() })

  fastify.addHook('onTimeout', function (req, res, done) {
    t.assert.ok('called', 'onTimeout')
    done()
  })

  fastify.get('/', async (req, reply) => {
    await reply.send({ hello: 'world' })
  })

  fastify.get('/timeout', async (req, reply) => {
    return reply
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer)
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)

  await t.assert.rejects(() => fetch(fastifyServer + '/timeout'))
})

test('onTimeout should be triggered and socket _meta is set', async t => {
  t.plan(4)
  const fastify = Fastify({ connectionTimeout: 500 })
  t.after(() => { fastify.close() })

  fastify.addHook('onTimeout', function (req, res, done) {
    t.assert.ok('called', 'onTimeout')
    done()
  })

  fastify.get('/', async (req, reply) => {
    req.raw.socket._meta = {}
    return reply.send({ hello: 'world' })
  })

  fastify.get('/timeout', async (req, reply) => {
    return reply
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer)
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)

  try {
    await fetch(fastifyServer + '/timeout')
    t.fail('Should have thrown an error')
  } catch (err) {
    t.assert.ok(err instanceof Error)
  }
})

test('registering invalid hooks should throw an error', async t => {
  t.plan(3)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.route({
      method: 'GET',
      path: '/invalidHook',
      onRequest: [undefined],
      async handler () {
        return 'hello world'
      }
    })
  }, {
    message: 'onRequest hook should be a function, instead got [object Undefined]'
  })

  t.assert.throws(() => {
    fastify.route({
      method: 'GET',
      path: '/invalidHook',
      onRequest: null,
      async handler () {
        return 'hello world'
      }
    })
  }, { message: 'onRequest hook should be a function, instead got [object Null]' })

  // undefined is ok
  fastify.route({
    method: 'GET',
    path: '/validhook',
    onRequest: undefined,
    async handler () {
      return 'hello world'
    }
  })

  t.assert.throws(() => {
    fastify.addHook('onRoute', (routeOptions) => {
      routeOptions.onSend = [undefined]
    })

    fastify.get('/', function (request, reply) {
      reply.send('hello world')
    })
  }, { message: 'onSend hook should be a function, instead got [object Undefined]' })
})

test('onRequestAbort should be triggered', (t, testDone) => {
  const fastify = Fastify()
  let order = 0

  t.plan(7)
  t.after(() => fastify.close())

  const completion = waitForCb({ steps: 2 })
  completion.patience.then(testDone)

  fastify.addHook('onRequestAbort', function (req, done) {
    t.assert.strictEqual(++order, 1, 'called in hook')
    t.assert.ok(req.pendingResolve, 'request has pendingResolve')
    req.pendingResolve()
    completion.stepIn()
    done()
  })

  fastify.addHook('onError', function hook (request, reply, error, done) {
    t.assert.fail('onError should not be called')
    done()
  })

  fastify.addHook('onSend', function hook (request, reply, payload, done) {
    t.assert.strictEqual(payload, '{"hello":"world"}', 'onSend should be called')
    done(null, payload)
  })

  fastify.addHook('onResponse', function hook (request, reply, done) {
    t.assert.fail('onResponse should not be called')
    done()
  })

  fastify.route({
    method: 'GET',
    path: '/',
    async handler (request, reply) {
      t.assert.ok('handler called')
      let resolvePromise
      const promise = new Promise(resolve => { resolvePromise = resolve })
      request.pendingResolve = resolvePromise
      await promise
      t.assert.ok('handler promise resolved')
      return { hello: 'world' }
    },
    async onRequestAbort (req) {
      t.assert.strictEqual(++order, 2, 'called in route')
      completion.stepIn()
    }
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})

test('onRequestAbort should support encapsulation', (t, testDone) => {
  const fastify = Fastify()
  let order = 0
  let child

  t.plan(6)
  t.after(() => fastify.close())

  const completion = waitForCb({ steps: 2 })
  completion.patience.then(testDone)

  fastify.addHook('onRequestAbort', function (req, done) {
    t.assert.strictEqual(++order, 1, 'called in root')
    t.assert.deepStrictEqual(this.pluginName, child.pluginName)
    completion.stepIn()
    done()
  })

  fastify.register(async function (_child, _) {
    child = _child

    fastify.addHook('onRequestAbort', async function (req) {
      t.assert.strictEqual(++order, 2, 'called in child')
      t.assert.deepStrictEqual(this.pluginName, child.pluginName)
      completion.stepIn()
    })

    child.route({
      method: 'GET',
      path: '/',
      async handler (request, reply) {
        await sleep(1000)
        return { hello: 'world' }
      },
      async onRequestAbort (_req) {
        t.assert.strictEqual(++order, 3, 'called in route')
      }
    })
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})

test('onRequestAbort should handle errors / 1', (t, testDone) => {
  const fastify = Fastify()

  t.plan(2)
  t.after(() => fastify.close())

  fastify.addHook('onRequestAbort', function (req, done) {
    process.nextTick(() => {
      t.assert.ok('should pass')
      testDone()
    })
    done(new Error('KABOOM!'))
  })

  fastify.route({
    method: 'GET',
    path: '/',
    async handler (request, reply) {
      await sleep(1000)
      return { hello: 'world' }
    }
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})

test('onRequestAbort should handle errors / 2', (t, testDone) => {
  const fastify = Fastify()

  t.plan(2)
  t.after(() => fastify.close())

  fastify.addHook('onRequestAbort', function (req, done) {
    process.nextTick(() => {
      t.assert.ok('should pass')
      testDone()
    })
    throw new Error('KABOOM!')
  })

  fastify.route({
    method: 'GET',
    path: '/',
    async handler (request, reply) {
      await sleep(1000)
      return { hello: 'world' }
    }
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})

test('onRequestAbort should handle async errors / 1', (t, testDone) => {
  const fastify = Fastify()

  t.plan(2)
  t.after(() => fastify.close())

  fastify.addHook('onRequestAbort', async function (req) {
    process.nextTick(() => {
      t.assert.ok('should pass')
      testDone()
    })
    throw new Error('KABOOM!')
  })

  fastify.route({
    method: 'GET',
    path: '/',
    async handler (request, reply) {
      await sleep(1000)
      return { hello: 'world' }
    }
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})

test('onRequestAbort should handle async errors / 2', (t, testDone) => {
  const fastify = Fastify()

  t.plan(2)
  t.after(() => fastify.close())

  fastify.addHook('onRequestAbort', async function (req) {
    process.nextTick(() => {
      t.assert.ok('should pass')
      testDone()
    })

    return Promise.reject()
  })

  fastify.route({
    method: 'GET',
    path: '/',
    async handler (request, reply) {
      await sleep(1000)
      return { hello: 'world' }
    }
  })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const socket = connect(fastify.server.address().port)

    socket.write('GET / HTTP/1.1\r\nHost: fastify.test\r\n\r\n')

    sleep(500).then(() => socket.destroy())
  })
})
