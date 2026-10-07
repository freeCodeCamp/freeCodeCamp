'use strict'

const { test } = require('node:test')
const fp = require('fastify-plugin')
const errors = require('http-errors')
const split = require('split2')
const Fastify = require('..')
const { getServerUrl } = require('./helper')

test('default 404', async t => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('unsupported method', async (t) => {
    t.plan(3)
    const result = await fetch(getServerUrl(fastify), {
      method: 'PUT'
    })

    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 404)
    t.assert.strictEqual(result.headers.get('content-type'), 'application/json; charset=utf-8')
  })

  // Return 404 instead of 405 see https://github.com/fastify/fastify/pull/862 for discussion
  await t.test('framework-unsupported method', async (t) => {
    t.plan(3)
    const result = await fetch(getServerUrl(fastify), {
      method: 'PROPFIND'
    })

    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 404)
    t.assert.strictEqual(result.headers.get('content-type'), 'application/json; charset=utf-8')
  })

  await t.test('unsupported route', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(response.headers.get('content-type'), 'application/json; charset=utf-8')
  })

  await t.test('using post method and multipart/formdata', async t => {
    t.plan(3)
    const form = new FormData()
    form.set('test-field', 'just some field')

    const response = await fetch(getServerUrl(fastify) + '/notSupported', {
      method: 'POST',
      body: form
    })
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(response.statusText, 'Not Found')
    t.assert.strictEqual(response.headers.get('content-type'), 'application/json; charset=utf-8')
  })
})

test('customized 404', async t => {
  t.plan(5)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.get('/with-error', function (req, reply) {
    reply.send(new errors.NotFound())
  })

  fastify.get('/with-error-custom-header', function (req, reply) {
    const err = new errors.NotFound()
    err.headers = { 'x-foo': 'bar' }
    reply.send(err)
  })

  fastify.setNotFoundHandler(function (req, reply) {
    reply.code(404).send('this was not found')
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify), {
      method: 'PUT',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('framework-unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify), {
      method: 'PROPFIND',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('unsupported route', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('with error object', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/with-error')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.deepStrictEqual(await response.json(), {
      error: 'Not Found',
      message: 'Not Found',
      statusCode: 404
    })
  })

  await t.test('error object with headers property', async (t) => {
    t.plan(4)
    const response = await fetch(getServerUrl(fastify) + '/with-error-custom-header')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(response.headers.get('x-foo'), 'bar')
    t.assert.deepStrictEqual(await response.json(), {
      error: 'Not Found',
      message: 'Not Found',
      statusCode: 404
    })
  })
})

test('custom header in notFound handler', async t => {
  t.plan(1)

  const fastify = Fastify()

  fastify.setNotFoundHandler(function (req, reply) {
    reply.code(404).header('x-foo', 'bar').send('this was not found')
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('not found with custom header', async (t) => {
    t.plan(4)
    const response = await fetch(getServerUrl(fastify) + '/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(response.headers.get('x-foo'), 'bar')
    t.assert.strictEqual(await response.text(), 'this was not found')
  })
})

test('setting a custom 404 handler multiple times is an error', async t => {
  t.plan(5)

  await t.test('at the root level', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.setNotFoundHandler(() => {})

    try {
      fastify.setNotFoundHandler(() => {})
      t.assert.fail('setting multiple 404 handlers at the same prefix encapsulation level should throw')
    } catch (err) {
      t.assert.ok(err instanceof Error)
      t.assert.strictEqual(err.message, 'Not found handler already set for Fastify instance with prefix: \'/\'')
    }
  })

  await t.test('at the plugin level', (t, done) => {
    t.plan(3)

    const fastify = Fastify()

    fastify.register((instance, options, done) => {
      instance.setNotFoundHandler(() => {})

      try {
        instance.setNotFoundHandler(() => {})
        t.assert.fail('setting multiple 404 handlers at the same prefix encapsulation level should throw')
      } catch (err) {
        t.assert.ok(err instanceof Error)
        t.assert.strictEqual(err.message, 'Not found handler already set for Fastify instance with prefix: \'/prefix\'')
      }

      done()
    }, { prefix: '/prefix' })

    fastify.listen({ port: 0 }, err => {
      t.assert.ifError(err)
      fastify.close()
      done()
    })
  })

  await t.test('at multiple levels', (t, done) => {
    t.plan(3)

    const fastify = Fastify()

    fastify.register((instance, options, done) => {
      try {
        instance.setNotFoundHandler(() => {})
        t.assert.fail('setting multiple 404 handlers at the same prefix encapsulation level should throw')
      } catch (err) {
        t.assert.ok(err instanceof Error)
        t.assert.strictEqual(err.message, 'Not found handler already set for Fastify instance with prefix: \'/\'')
      }
      done()
    })

    fastify.setNotFoundHandler(() => {})

    fastify.listen({ port: 0 }, err => {
      t.assert.ifError(err)
      fastify.close()
      done()
    })
  })

  await t.test('at multiple levels / 2', (t, done) => {
    t.plan(3)

    const fastify = Fastify()

    fastify.register((instance, options, done) => {
      instance.setNotFoundHandler(() => {})

      instance.register((instance2, options, done) => {
        try {
          instance2.setNotFoundHandler(() => {})
          t.assert.fail('setting multiple 404 handlers at the same prefix encapsulation level should throw')
        } catch (err) {
          t.assert.ok(err instanceof Error)
          t.assert.strictEqual(err.message, 'Not found handler already set for Fastify instance with prefix: \'/prefix\'')
        }
        done()
      })

      done()
    }, { prefix: '/prefix' })

    fastify.setNotFoundHandler(() => {})

    fastify.listen({ port: 0 }, err => {
      t.assert.ifError(err)
      fastify.close()
      done()
    })
  })

  await t.test('in separate plugins at the same level', (t, done) => {
    t.plan(3)

    const fastify = Fastify()

    fastify.register((instance, options, done) => {
      instance.register((instance2A, options, done) => {
        instance2A.setNotFoundHandler(() => {})
        done()
      })

      instance.register((instance2B, options, done) => {
        try {
          instance2B.setNotFoundHandler(() => {})
          t.assert.fail('setting multiple 404 handlers at the same prefix encapsulation level should throw')
        } catch (err) {
          t.assert.ok(err instanceof Error)
          t.assert.strictEqual(err.message, 'Not found handler already set for Fastify instance with prefix: \'/prefix\'')
        }
        done()
      })

      done()
    }, { prefix: '/prefix' })

    fastify.setNotFoundHandler(() => {})

    fastify.listen({ port: 0 }, err => {
      t.assert.ifError(err)
      fastify.close()
      done()
    })
  })
})

test('encapsulated 404', async t => {
  t.plan(12)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.setNotFoundHandler(function (req, reply) {
    reply.code(404).send('this was not found')
  })

  fastify.register(function (f, opts, done) {
    f.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found 2')
    })
    done()
  }, { prefix: '/test' })

  fastify.register(function (f, opts, done) {
    f.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found 3')
    })
    done()
  }, { prefix: '/test2' })

  fastify.register(function (f, opts, done) {
    f.setNotFoundHandler(function (request, reply) {
      reply.code(404).send('this was not found 4')
    })
    done()
  }, { prefix: '/test3/' })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('root unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify), {
      method: 'PUT',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('root framework-unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify), {
      method: 'PROPFIND',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('root unsupported route', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found')
  })

  await t.test('unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test', {
      method: 'PUT',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 2')
  })

  await t.test('framework-unsupported method', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test', {
      method: 'PROPFIND',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 2')
  })

  await t.test('unsupported route', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 2')
  })

  await t.test('unsupported method 2', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test2', {
      method: 'PUT',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 3')
  })

  await t.test('framework-unsupported method 2', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test2', {
      method: 'PROPFIND',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 3')
  })

  await t.test('unsupported route 2', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test2/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 3')
  })

  await t.test('unsupported method 3', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test3/', {
      method: 'PUT',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 4')
  })

  await t.test('framework-unsupported method 3', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test3/', {
      method: 'PROPFIND',
      body: JSON.stringify({ hello: 'world' }),
      headers: { 'Content-Type': 'application/json' }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 4')
  })

  await t.test('unsupported route 3', async (t) => {
    t.plan(3)
    const response = await fetch(getServerUrl(fastify) + '/test3/notSupported')

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 404)
    t.assert.strictEqual(await response.text(), 'this was not found 4')
  })
})

test('custom 404 hook and handler context', async t => {
  t.plan(19)

  const fastify = Fastify()

  fastify.decorate('foo', 42)

  fastify.addHook('onRequest', function (req, res, done) {
    t.assert.strictEqual(this.foo, 42)
    done()
  })
  fastify.addHook('preHandler', function (request, reply, done) {
    t.assert.strictEqual(this.foo, 42)
    done()
  })
  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.strictEqual(this.foo, 42)
    done()
  })
  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.strictEqual(this.foo, 42)
    done()
  })

  fastify.setNotFoundHandler(function (req, reply) {
    t.assert.strictEqual(this.foo, 42)
    reply.code(404).send('this was not found')
  })

  fastify.register(function (instance, opts, done) {
    instance.decorate('bar', 84)

    instance.addHook('onRequest', function (req, res, done) {
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.strictEqual(this.bar, 84)
      done()
    })

    instance.setNotFoundHandler(function (req, reply) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      reply.code(404).send('encapsulated was not found')
    })

    done()
  }, { prefix: '/encapsulated' })

  {
    const res = await fastify.inject('/not-found')
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'this was not found')
  }

  {
    const res = await fastify.inject('/encapsulated/not-found')
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'encapsulated was not found')
  }
})

test('encapsulated custom 404 without - prefix hook and handler context', (t, done) => {
  t.plan(13)

  const fastify = Fastify()

  fastify.decorate('foo', 42)

  fastify.register(function (instance, opts, done) {
    instance.decorate('bar', 84)

    instance.addHook('onRequest', function (req, res, done) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      done()
    })
    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      done()
    })

    instance.setNotFoundHandler(function (request, reply) {
      t.assert.strictEqual(this.foo, 42)
      t.assert.strictEqual(this.bar, 84)
      reply.code(404).send('custom not found')
    })

    done()
  })

  fastify.inject('/not-found', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'custom not found')
    done()
  })
})

test('run hooks on default 404', async t => {
  t.plan(6)

  const fastify = Fastify()

  fastify.addHook('onRequest', function (req, res, done) {
    t.assert.ok(true, 'onRequest called')
    done()
  })

  fastify.addHook('preHandler', function (request, reply, done) {
    t.assert.ok(true, 'preHandler called')
    done()
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.ok(true, 'onSend called')
    done()
  })

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.ok(true, 'onResponse called')
    done()
  })

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const response = await fetch(getServerUrl(fastify), {
    method: 'PUT',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })

  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 404)
})

test('run non-encapsulated plugin hooks on default 404', (t, done) => {
  t.plan(6)

  const fastify = Fastify()

  fastify.register(fp(function (instance, options, done) {
    instance.addHook('onRequest', function (req, res, done) {
      t.assert.ok(true, 'onRequest called')
      done()
    })

    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.ok(true, 'preHandler called')
      done()
    })

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.ok(true, 'onSend called')
      done()
    })

    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.ok(true, 'onResponse called')
      done()
    })

    done()
  }))

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('run non-encapsulated plugin hooks on custom 404', (t, done) => {
  t.plan(11)

  const fastify = Fastify()

  const plugin = fp((instance, opts, done) => {
    instance.addHook('onRequest', function (req, res, done) {
      t.assert.ok(true, 'onRequest called')
      done()
    })

    instance.addHook('preHandler', function (request, reply, done) {
      t.assert.ok(true, 'preHandler called')
      done()
    })

    instance.addHook('onSend', function (request, reply, payload, done) {
      t.assert.ok(true, 'onSend called')
      done()
    })

    instance.addHook('onResponse', function (request, reply, done) {
      t.assert.ok(true, 'onResponse called')
      done()
    })

    done()
  })

  fastify.register(plugin)

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.setNotFoundHandler(function (req, reply) {
    reply.code(404).send('this was not found')
  })

  fastify.register(plugin) // Registering plugin after handler also works

  fastify.inject({ url: '/not-found' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'this was not found')
    done()
  })
})

test('run hook with encapsulated 404', async t => {
  t.plan(10)

  const fastify = Fastify()

  fastify.addHook('onRequest', function (req, res, done) {
    t.assert.ok(true, 'onRequest called')
    done()
  })

  fastify.addHook('preHandler', function (request, reply, done) {
    t.assert.ok(true, 'preHandler called')
    done()
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.ok(true, 'onSend called')
    done()
  })

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.ok(true, 'onResponse called')
    done()
  })

  fastify.register(function (f, opts, done) {
    f.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found 2')
    })

    f.addHook('onRequest', function (req, res, done) {
      t.assert.ok(true, 'onRequest 2 called')
      done()
    })

    f.addHook('preHandler', function (request, reply, done) {
      t.assert.ok(true, 'preHandler 2 called')
      done()
    })

    f.addHook('onSend', function (request, reply, payload, done) {
      t.assert.ok(true, 'onSend 2 called')
      done()
    })

    f.addHook('onResponse', function (request, reply, done) {
      t.assert.ok(true, 'onResponse 2 called')
      done()
    })

    done()
  }, { prefix: '/test' })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const response = await fetch(getServerUrl(fastify) + '/test', {
    method: 'PUT',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })

  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 404)
})

test('run hook with encapsulated 404 and framework-unsupported method', async t => {
  t.plan(10)

  const fastify = Fastify()

  fastify.addHook('onRequest', function (req, res, done) {
    t.assert.ok(true, 'onRequest called')
    done()
  })

  fastify.addHook('preHandler', function (request, reply, done) {
    t.assert.ok(true, 'preHandler called')
    done()
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    t.assert.ok(true, 'onSend called')
    done()
  })

  fastify.addHook('onResponse', function (request, reply, done) {
    t.assert.ok(true, 'onResponse called')
    done()
  })

  fastify.register(function (f, opts, done) {
    f.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found 2')
    })

    f.addHook('onRequest', function (req, res, done) {
      t.assert.ok(true, 'onRequest 2 called')
      done()
    })

    f.addHook('preHandler', function (request, reply, done) {
      t.assert.ok(true, 'preHandler 2 called')
      done()
    })

    f.addHook('onSend', function (request, reply, payload, done) {
      t.assert.ok(true, 'onSend 2 called')
      done()
    })

    f.addHook('onResponse', function (request, reply, done) {
      t.assert.ok(true, 'onResponse 2 called')
      done()
    })

    done()
  }, { prefix: '/test' })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const response = await fetch(getServerUrl(fastify) + '/test', {
    method: 'PROPFIND',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })

  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 404)
})

test('hooks check 404', async t => {
  t.plan(12)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.deepStrictEqual(req.query, { foo: 'asd' })
    t.assert.ok(true, 'called onSend')
    done()
  })
  fastify.addHook('onRequest', (req, res, done) => {
    t.assert.ok(true, 'called onRequest')
    done()
  })
  fastify.addHook('onResponse', (request, reply, done) => {
    t.assert.ok(true, 'calledonResponse')
    done()
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const response1 = await fetch(getServerUrl(fastify) + '?foo=asd', {
    method: 'PUT',
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' }
  })

  t.assert.ok(!response1.ok)
  t.assert.strictEqual(response1.status, 404)

  const response2 = await fetch(getServerUrl(fastify) + '/notSupported?foo=asd')

  t.assert.ok(!response2.ok)
  t.assert.strictEqual(response2.status, 404)
})

test('setNotFoundHandler should not suppress duplicated routes checking', t => {
  t.plan(1)

  const fastify = Fastify()

  try {
    fastify.get('/', function (req, reply) {
      reply.send({ hello: 'world' })
    })
    fastify.get('/', function (req, reply) {
      reply.send({ hello: 'world' })
    })
    fastify.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found')
    })

    t.assert.fail('setNotFoundHandler should not interfere duplicated route error')
  } catch (error) {
    t.assert.ok(error)
  }
})

test('log debug for 404', async t => {
  t.plan(1)

  const Writable = require('node:stream').Writable

  const logStream = new Writable()
  logStream.logs = []
  logStream._write = function (chunk, encoding, callback) {
    this.logs.push(chunk.toString())
    callback()
  }

  const fastify = Fastify({
    logger: {
      level: 'trace',
      stream: logStream
    }
  })

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  t.after(() => { fastify.close() })

  await t.test('log debug', (t, done) => {
    t.plan(7)
    fastify.inject({
      method: 'GET',
      url: '/not-found'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 404)

      const INFO_LEVEL = 30
      t.assert.strictEqual(JSON.parse(logStream.logs[0]).msg, 'incoming request')
      t.assert.strictEqual(JSON.parse(logStream.logs[1]).msg, 'Route GET:/not-found not found')
      t.assert.strictEqual(JSON.parse(logStream.logs[1]).level, INFO_LEVEL)
      t.assert.strictEqual(JSON.parse(logStream.logs[2]).msg, 'request completed')
      t.assert.strictEqual(logStream.logs.length, 3)
      done()
    })
  })
})

test('Unknown method', async t => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const handler = () => {}
  // See https://github.com/fastify/light-my-request/pull/20
  t.assert.throws(() => fastify.inject({
    method: 'UNKNOWN_METHOD',
    url: '/'
  }, handler), Error)

  const response = await fetch(getServerUrl(fastify), {
    method: 'UNKNOWN_METHOD'
  })

  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 400)

  t.assert.deepStrictEqual(await response.json(), {
    error: 'Bad Request',
    message: 'Client Error',
    statusCode: 400
  })
})

test('recognizes errors from the http-errors module', async t => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    reply.send(new errors.NotFound())
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
  })

  const response = await fetch(getServerUrl(fastify))

  t.assert.ok(!response.ok)
  t.assert.deepStrictEqual(await response.json(), {
    error: 'Not Found',
    message: 'Not Found',
    statusCode: 404
  })
})

test('the default 404 handler can be invoked inside a prefixed plugin', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.get('/path', function (request, reply) {
      reply.send(new errors.NotFound())
    })

    done()
  }, { prefix: '/v1' })

  fastify.inject('/v1/path', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Not Found',
      message: 'Not Found',
      statusCode: 404
    })
    done()
  })
})

test('an inherited custom 404 handler can be invoked inside a prefixed plugin', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.setNotFoundHandler(function (request, reply) {
    reply.code(404).send('custom handler')
  })

  fastify.register(function (instance, opts, done) {
    instance.get('/path', function (request, reply) {
      reply.send(new errors.NotFound())
    })

    done()
  }, { prefix: '/v1' })

  fastify.inject('/v1/path', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Not Found',
      message: 'Not Found',
      statusCode: 404
    })
    done()
  })
})

test('encapsulated custom 404 handler without a prefix is the handler for the entire 404 level', async t => {
  t.plan(4)

  const fastify = Fastify()

  fastify.register(function (instance, opts, done) {
    instance.setNotFoundHandler(function (request, reply) {
      reply.code(404).send('custom handler')
    })

    done()
  })

  fastify.register(function (instance, opts, done) {
    instance.register(function (instance2, opts, done) {
      instance2.setNotFoundHandler(function (request, reply) {
        reply.code(404).send('custom handler 2')
      })
      done()
    })

    done()
  }, { prefix: 'prefixed' })

  {
    const res = await fastify.inject('/not-found')
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'custom handler')
  }

  {
    const res = await fastify.inject('/prefixed/not-found')
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'custom handler 2')
  }
})

test('cannot set notFoundHandler after binding', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => { fastify.close() })

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    try {
      fastify.setNotFoundHandler(() => { })
      t.assert.fail()
    } catch (e) {
      t.assert.ok(true)
      done()
    }
  })
})

test('404 inside onSend', async t => {
  t.plan(2)

  const fastify = Fastify()

  let called = false

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.addHook('onSend', function (request, reply, payload, done) {
    if (!called) {
      called = true
      done(new errors.NotFound())
    } else {
      done()
    }
  })

  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  const response = await fetch(getServerUrl(fastify))

  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 404)
})

// https://github.com/fastify/fastify/issues/868
test('onSend hooks run when an encapsulated route invokes the notFound handler', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, options, done) => {
    instance.addHook('onSend', (request, reply, payload, done) => {
      t.assert.ok(true, 'onSend hook called')
      done()
    })

    instance.get('/', (request, reply) => {
      reply.send(new errors.NotFound())
    })

    done()
  })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

// https://github.com/fastify/fastify/issues/713
test('preHandler option for setNotFoundHandler', async t => {
  t.plan(10)

  await t.test('preHandler option', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        req.body.preHandler = true
        done()
      }
    }, function (req, reply) {
      reply.code(404).send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/not-found',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { preHandler: true, hello: 'world' })
      done()
    })
  })

  // https://github.com/fastify/fastify/issues/2229
  await t.test('preHandler hook in setNotFoundHandler should be called when callNotFound', { timeout: 40000 }, (t, done) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        req.body.preHandler = true
        done()
      }
    }, function (req, reply) {
      reply.code(404).send(req.body)
    })

    fastify.post('/', function (req, reply) {
      t.assert.strictEqual(reply.callNotFound(), reply)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { preHandler: true, hello: 'world' })
      done()
    })
  })

  await t.test('preHandler hook in setNotFoundHandler should accept an array of functions and be called when callNotFound', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: [
        (req, reply, done) => {
          req.body.preHandler1 = true
          done()
        },
        (req, reply, done) => {
          req.body.preHandler2 = true
          done()
        }
      ]
    }, function (req, reply) {
      reply.code(404).send(req.body)
    })

    fastify.post('/', function (req, reply) {
      reply.callNotFound()
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { preHandler1: true, preHandler2: true, hello: 'world' })
      done()
    })
  })

  await t.test('preHandler option should be called after preHandler hook', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    fastify.addHook('preHandler', (req, reply, done) => {
      req.body.check = 'a'
      done()
    })

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        req.body.check += 'b'
        done()
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { check: 'ab', hello: 'world' })
      done()
    })
  })

  await t.test('preHandler option should be unique per prefix', async t => {
    t.plan(2)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        req.body.hello = 'earth'
        done()
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.register(function (i, o, n) {
      i.setNotFoundHandler((req, reply) => {
        reply.send(req.body)
      })

      n()
    }, { prefix: '/no' })

    {
      const res = await fastify.inject({
        method: 'POST',
        url: '/not-found',
        payload: { hello: 'world' }
      })

      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { hello: 'earth' })
    }

    {
      const res = await fastify.inject({
        method: 'POST',
        url: '/no/not-found',
        payload: { hello: 'world' }
      })

      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { hello: 'world' })
    }
  })

  await t.test('preHandler option should handle errors', (t, done) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        done(new Error('kaboom'))
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/not-found',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(res.statusCode, 500)
      t.assert.deepStrictEqual(payload, {
        message: 'kaboom',
        error: 'Internal Server Error',
        statusCode: 500
      })
      done()
    })
  })

  await t.test('preHandler option should handle errors with custom status code', (t, done) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        reply.code(401)
        done(new Error('go away'))
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/not-found',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(res.statusCode, 401)
      t.assert.deepStrictEqual(payload, {
        message: 'go away',
        error: 'Unauthorized',
        statusCode: 401
      })
      done()
    })
  })

  await t.test('preHandler option could accept an array of functions', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    fastify.setNotFoundHandler({
      preHandler: [
        (req, reply, done) => {
          req.body.preHandler = 'a'
          done()
        },
        (req, reply, done) => {
          req.body.preHandler += 'b'
          done()
        }
      ]
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/not-found',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { preHandler: 'ab', hello: 'world' })
      done()
    })
  })

  await t.test('preHandler option does not interfere with preHandler', async t => {
    t.plan(2)
    const fastify = Fastify()

    fastify.addHook('preHandler', (req, reply, done) => {
      req.body.check = 'a'
      done()
    })

    fastify.setNotFoundHandler({
      preHandler: (req, reply, done) => {
        req.body.check += 'b'
        done()
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.register(function (i, o, n) {
      i.setNotFoundHandler((req, reply) => {
        reply.send(req.body)
      })

      n()
    }, { prefix: '/no' })

    {
      const res = await fastify.inject({
        method: 'post',
        url: '/not-found',
        payload: { hello: 'world' }
      })

      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { check: 'ab', hello: 'world' })
    }

    {
      const res = await fastify.inject({
        method: 'post',
        url: '/no/not-found',
        payload: { hello: 'world' }
      })

      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { check: 'a', hello: 'world' })
    }
  })

  await t.test('preHandler option should keep the context', (t, done) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.decorate('foo', 42)

    fastify.setNotFoundHandler({
      preHandler: function (req, reply, done) {
        t.assert.strictEqual(this.foo, 42)
        this.foo += 1
        req.body.foo = this.foo
        done()
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/not-found',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { foo: 43, hello: 'world' })
      done()
    })
  })
})

test('reply.notFound invoked the notFound handler', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.setNotFoundHandler((req, reply) => {
    reply.code(404).send(new Error('kaboom'))
  })

  fastify.get('/', function (req, reply) {
    reply.callNotFound()
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Not Found',
      message: 'kaboom',
      statusCode: 404
    })
    done()
  })
})

test('The custom error handler should be invoked after the custom not found handler', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  const order = [1, 2]

  fastify.setErrorHandler((err, req, reply) => {
    t.assert.strictEqual(order.shift(), 2)
    t.assert.ok(err instanceof Error)
    reply.send(err)
  })

  fastify.setNotFoundHandler((req, reply) => {
    t.assert.strictEqual(order.shift(), 1)
    reply.code(404).send(new Error('kaboom'))
  })

  fastify.get('/', function (req, reply) {
    reply.callNotFound()
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Not Found',
      message: 'kaboom',
      statusCode: 404
    })
    done()
  })
})

test('If the custom not found handler does not use an Error, the custom error handler should not be called', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.setErrorHandler((_err, req, reply) => {
    t.assert.fail('Should not be called')
  })

  fastify.setNotFoundHandler((req, reply) => {
    reply.code(404).send('kaboom')
  })

  fastify.get('/', function (req, reply) {
    reply.callNotFound()
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, 'kaboom')
    done()
  })
})

test('preValidation option', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.decorate('foo', true)

  fastify.setNotFoundHandler({
    preValidation: function (req, reply, done) {
      t.assert.ok(this.foo)
      done()
    }
  }, function (req, reply) {
    reply.code(404).send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/not-found',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    done()
  })
})

test('preValidation option could accept an array of functions', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.setNotFoundHandler({
    preValidation: [
      (req, reply, done) => {
        t.assert.ok('called')
        done()
      },
      (req, reply, done) => {
        t.assert.ok('called')
        done()
      }
    ]
  }, (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/not-found',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    done()
  })
})

test('Should fail to invoke callNotFound inside a 404 handler', (t, done) => {
  t.plan(5)

  let fastify = null
  const logStream = split(JSON.parse)
  try {
    fastify = Fastify({
      logger: {
        stream: logStream,
        level: 'warn'
      }
    })
  } catch (e) {
    t.assert.fail()
  }

  fastify.setNotFoundHandler((req, reply) => {
    reply.callNotFound()
  })

  fastify.get('/', function (req, reply) {
    reply.callNotFound()
  })

  logStream.once('data', line => {
    t.assert.strictEqual(line.msg, 'Trying to send a NotFound error inside a 404 handler. Sending basic 404 response.')
    t.assert.strictEqual(line.level, 40)
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.strictEqual(res.payload, '404 Not Found')
    done()
  })
})

test('400 in case of bad url (pre find-my-way v2.2.0 was a 404)', async t => {
  await t.test('Dynamic route', (t, done) => {
    t.plan(3)
    const fastify = Fastify()
    fastify.get('/hello/:id', () => t.assert.fail('we should not be here'))
    fastify.inject({
      url: '/hello/%world',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 400)
      t.assert.deepStrictEqual(JSON.parse(response.payload), {
        error: 'Bad Request',
        message: "'/hello/%world' is not a valid url component",
        statusCode: 400,
        code: 'FST_ERR_BAD_URL'
      })
      done()
    })
  })

  await t.test('Wildcard', (t, done) => {
    t.plan(3)
    const fastify = Fastify()
    fastify.get('*', () => t.assert.fail('we should not be here'))
    fastify.inject({
      url: '/hello/%world',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 400)
      t.assert.deepStrictEqual(JSON.parse(response.payload), {
        error: 'Bad Request',
        message: "'/hello/%world' is not a valid url component",
        statusCode: 400,
        code: 'FST_ERR_BAD_URL'
      })
      done()
    })
  })

  await t.test('No route registered', (t, done) => {
    t.plan(3)
    const fastify = Fastify()
    fastify.inject({
      url: '/%c0',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 404)
      t.assert.deepStrictEqual(JSON.parse(response.payload), {
        error: 'Not Found',
        message: 'Route GET:/%c0 not found',
        statusCode: 404
      })
      done()
    })
  })

  await t.test('Only / is registered', (t, done) => {
    t.plan(3)
    const fastify = Fastify()
    fastify.get('/', () => t.assert.fail('we should not be here'))
    fastify.inject({
      url: '/non-existing',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 404)
      t.assert.deepStrictEqual(JSON.parse(response.payload), {
        error: 'Not Found',
        message: 'Route GET:/non-existing not found',
        statusCode: 404
      })
      done()
    })
  })

  await t.test('customized 404', (t, done) => {
    t.plan(3)
    const fastify = Fastify({ logger: true })
    fastify.setNotFoundHandler(function (req, reply) {
      reply.code(404).send('this was not found')
    })
    fastify.inject({
      url: '/%c0',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 404)
      t.assert.deepStrictEqual(response.payload, 'this was not found')
      done()
    })
  })

  await t.test('Bad URL with special characters should be properly JSON escaped', (t, done) => {
    t.plan(3)
    const fastify = Fastify()
    fastify.get('/hello/:id', () => t.assert.fail('we should not be here'))
    fastify.inject({
      url: '/hello/%world%22test',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 400)
      t.assert.deepStrictEqual(JSON.parse(response.payload), {
        error: 'Bad Request',
        message: '\'/hello/%world%22test\' is not a valid url component',
        statusCode: 400,
        code: 'FST_ERR_BAD_URL'
      })
      done()
    })
  })
})

test('setNotFoundHandler should be chaining fastify instance', async t => {
  await t.test('Register route after setNotFoundHandler', async t => {
    t.plan(4)
    const fastify = Fastify()
    fastify.setNotFoundHandler(function (_req, reply) {
      reply.code(404).send('this was not found')
    }).get('/valid-route', function (_req, reply) {
      reply.send('valid route')
    })

    {
      const response = await fastify.inject({
        url: '/invalid-route',
        method: 'GET'
      })
      t.assert.strictEqual(response.statusCode, 404)
      t.assert.strictEqual(response.payload, 'this was not found')
    }

    {
      const response = await fastify.inject({
        url: '/valid-route',
        method: 'GET'
      })

      t.assert.strictEqual(response.statusCode, 200)
      t.assert.strictEqual(response.payload, 'valid route')
    }
  })
})

test('Send 404 when frameworkError calls reply.callNotFound', async t => {
  await t.test('Dynamic route', (t, done) => {
    t.plan(4)
    const fastify = Fastify({
      frameworkErrors: (error, req, reply) => {
        t.assert.strictEqual(error.message, "'/hello/%world' is not a valid url component")
        return reply.callNotFound()
      }
    })
    fastify.get('/hello/:id', () => t.assert.fail('we should not be here'))
    fastify.inject({
      url: '/hello/%world',
      method: 'GET'
    }, (err, response) => {
      t.assert.ifError(err)
      t.assert.strictEqual(response.statusCode, 404)
      t.assert.strictEqual(response.payload, '404 Not Found')
      done()
    })
  })
})

test('hooks are applied to not found handlers /1', async t => {
  const fastify = Fastify()

  // adding await here is fundamental for this test
  await fastify.register(async function (fastify) {
  })

  fastify.setErrorHandler(function (_, request, reply) {
    return reply.code(401).send({ error: 'Unauthorized' })
  })

  fastify.addHook('preValidation', async function (request, reply) {
    throw new Error('kaboom')
  })

  const { statusCode } = await fastify.inject('/')
  t.assert.strictEqual(statusCode, 401)
})

test('hooks are applied to not found handlers /2', async t => {
  const fastify = Fastify()

  async function plugin (fastify) {
    fastify.setErrorHandler(function (_, request, reply) {
      return reply.code(401).send({ error: 'Unauthorized' })
    })
  }

  plugin[Symbol.for('skip-override')] = true

  fastify.register(plugin)

  fastify.addHook('preValidation', async function (request, reply) {
    throw new Error('kaboom')
  })

  const { statusCode } = await fastify.inject('/')
  t.assert.strictEqual(statusCode, 401)
})

test('hooks are applied to not found handlers /3', async t => {
  const fastify = Fastify()

  async function plugin (fastify) {
    fastify.setNotFoundHandler({ errorHandler }, async () => {
      t.assert.fail('this should never be called')
    })

    function errorHandler (_, request, reply) {
      return reply.code(401).send({ error: 'Unauthorized' })
    }
  }

  plugin[Symbol.for('skip-override')] = true

  fastify.register(plugin)

  fastify.addHook('preValidation', async function (request, reply) {
    throw new Error('kaboom')
  })

  const { statusCode } = await fastify.inject('/')
  t.assert.strictEqual(statusCode, 401)
})

test('should honor disableRequestLogging function for 404', async t => {
  t.plan(3)

  const Writable = require('node:stream').Writable

  const logStream = new Writable()
  logStream.logs = []
  logStream._write = function (chunk, encoding, callback) {
    this.logs.push(JSON.parse(chunk.toString()))
    callback()
  }

  const fastify = Fastify({
    logger: {
      level: 'info',
      stream: logStream
    },
    disableRequestLogging: (req) => {
      // Disable logging for URLs containing 'silent'
      return req.url.includes('silent')
    }
  })

  fastify.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
  })

  t.after(() => { fastify.close() })

  // First request to a non-existent route (no 'silent' in URL) - should log
  const response1 = await fastify.inject({
    method: 'GET',
    url: '/not-found'
  })
  t.assert.strictEqual(response1.statusCode, 404)

  // Second request to a non-existent route with 'silent' in URL - should not log
  const response2 = await fastify.inject({
    method: 'GET',
    url: '/silent-route'
  })
  t.assert.strictEqual(response2.statusCode, 404)

  // Check logs: first request should have logged, second should not
  // We expect: incoming request, Route not found info, request completed (for first request only)
  const infoLogs = logStream.logs.filter(log => log.msg && log.msg.includes('Route GET:/not-found not found'))
  t.assert.strictEqual(infoLogs.length, 1, 'Should log 404 info only for non-silent route')
})
