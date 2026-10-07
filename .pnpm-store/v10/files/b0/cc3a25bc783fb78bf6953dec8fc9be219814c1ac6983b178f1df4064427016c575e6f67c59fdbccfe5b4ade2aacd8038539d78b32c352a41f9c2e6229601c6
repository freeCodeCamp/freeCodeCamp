'use strict'

const { test, describe } = require('node:test')
const Fastify = require('..')
const fp = require('fastify-plugin')
const symbols = require('../lib/symbols.js')

test('server methods should exist', t => {
  t.plan(2)
  const fastify = Fastify()
  t.assert.ok(fastify.decorate)
  t.assert.ok(fastify.hasDecorator)
})

test('should check if the given decoration already exist when null', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.decorate('null', null)
  fastify.ready(() => {
    t.assert.ok(fastify.hasDecorator('null'))
    done()
  })
})

test('server methods should be encapsulated via .register', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorate('test', () => {})
    t.assert.ok(instance.test)
    done()
  })

  fastify.ready(() => {
    t.assert.strictEqual(fastify.test, undefined)
    done()
  })
})

test('hasServerMethod should check if the given method already exist', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorate('test', () => {})
    t.assert.ok(instance.hasDecorator('test'))
    done()
  })

  fastify.ready(() => {
    t.assert.strictEqual(fastify.hasDecorator('test'), false)
    done()
  })
})

test('decorate should throw if a declared dependency is not present', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    try {
      instance.decorate('test', () => {}, ['dependency'])
      t.assert.fail()
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_DEC_MISSING_DEPENDENCY')
      t.assert.strictEqual(e.message, 'The decorator is missing dependency \'dependency\'.')
    }
    done()
  })

  fastify.ready(() => {
    t.assert.ok('ready')
    done()
  })
})

test('decorate should throw if declared dependency is not array', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    try {
      instance.decorate('test', () => {}, {})
      t.assert.fail()
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_DEC_DEPENDENCY_INVALID_TYPE')
      t.assert.strictEqual(e.message, 'The dependencies of decorator \'test\' must be of type Array.')
    }
    done()
  })

  fastify.ready(() => {
    t.assert.ok('ready')
    done()
  })
})

// issue #777
test('should pass error for missing request decorator', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  const plugin = fp(function (instance, opts, done) {
    done()
  }, {
    decorators: {
      request: ['foo']
    }
  })
  fastify
    .register(plugin)
    .ready((err) => {
      t.assert.ok(err instanceof Error)
      t.assert.ok(err.message.includes("'foo'"))
      done()
    })
})

const runTests = async (t, fastifyServer) => {
  const endpoints = [
    { path: '/yes', expectedBody: { hello: 'world' } },
    { path: '/no', expectedBody: { hello: 'world' } }
  ]

  for (const { path, expectedBody } of endpoints) {
    const result = await fetch(`${fastifyServer}${path}`)
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), expectedBody)
  }
}

test('decorateReply inside register', async (t) => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorateReply('test', 'test')

    instance.get('/yes', (req, reply) => {
      t.assert.ok(reply.test, 'test exists')
      reply.send({ hello: 'world' })
    })

    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!reply.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorateReply as plugin (inside .after)', async t => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      instance.decorateReply('test', 'test')
      n()
    })).after(() => {
      instance.get('/yes', (req, reply) => {
        t.assert.ok(reply.test)
        reply.send({ hello: 'world' })
      })
    })
    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!reply.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorateReply as plugin (outside .after)', async t => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      instance.decorateReply('test', 'test')
      n()
    }))

    instance.get('/yes', (req, reply) => {
      t.assert.ok(reply.test)
      reply.send({ hello: 'world' })
    })
    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!reply.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorateRequest inside register', async t => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorateRequest('test', 'test')

    instance.get('/yes', (req, reply) => {
      t.assert.ok(req.test, 'test exists')
      reply.send({ hello: 'world' })
    })

    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!req.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorateRequest as plugin (inside .after)', async t => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      instance.decorateRequest('test', 'test')
      n()
    })).after(() => {
      instance.get('/yes', (req, reply) => {
        t.assert.ok(req.test)
        reply.send({ hello: 'world' })
      })
    })
    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!req.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorateRequest as plugin (outside .after)', async (t) => {
  t.plan(10)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.register(fp((i, o, n) => {
      instance.decorateRequest('test', 'test')
      n()
    }))

    instance.get('/yes', (req, reply) => {
      t.assert.ok(req.test)
      reply.send({ hello: 'world' })
    })
    done()
  })

  fastify.get('/no', (req, reply) => {
    t.assert.ok(!req.test)
    reply.send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await runTests(t, fastifyServer)
})

test('decorators should be instance separated', (t, done) => {
  t.plan(1)

  const fastify1 = Fastify()
  const fastify2 = Fastify()

  fastify1.decorate('test', 'foo')
  fastify2.decorate('test', 'foo')

  fastify1.decorateRequest('test', 'foo')
  fastify2.decorateRequest('test', 'foo')

  fastify1.decorateReply('test', 'foo')
  fastify2.decorateReply('test', 'foo')

  t.assert.ok('Done')
  done()
})

describe('hasRequestDecorator', () => {
  const requestDecoratorName = 'my-decorator-name'

  test('is a function', async t => {
    const fastify = Fastify()
    t.assert.ok(fastify.hasRequestDecorator)
  })

  test('should check if the given request decoration already exist', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasRequestDecorator(requestDecoratorName))
    fastify.decorateRequest(requestDecoratorName, 42)
    t.assert.ok(fastify.hasRequestDecorator(requestDecoratorName))
  })

  test('should check if the given request decoration already exist when null', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasRequestDecorator(requestDecoratorName))
    fastify.decorateRequest(requestDecoratorName, null)
    t.assert.ok(fastify.hasRequestDecorator(requestDecoratorName))
  })

  test('should be plugin encapsulable', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasRequestDecorator(requestDecoratorName))

    await fastify.register(async function (fastify2, opts) {
      fastify2.decorateRequest(requestDecoratorName, 42)
      t.assert.ok(fastify2.hasRequestDecorator(requestDecoratorName))
    })

    t.assert.ok(!fastify.hasRequestDecorator(requestDecoratorName))

    await fastify.ready()
    t.assert.ok(!fastify.hasRequestDecorator(requestDecoratorName))
  })

  test('should be inherited', async t => {
    const fastify = Fastify()

    fastify.decorateRequest(requestDecoratorName, 42)

    await fastify.register(async function (fastify2, opts) {
      t.assert.ok(fastify2.hasRequestDecorator(requestDecoratorName))
    })

    await fastify.ready()
    t.assert.ok(fastify.hasRequestDecorator(requestDecoratorName))
  })
})

describe('hasReplyDecorator', () => {
  const replyDecoratorName = 'my-decorator-name'

  test('is a function', async t => {
    const fastify = Fastify()
    t.assert.ok(fastify.hasReplyDecorator)
  })

  test('should check if the given reply decoration already exist', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasReplyDecorator(replyDecoratorName))
    fastify.decorateReply(replyDecoratorName, 42)
    t.assert.ok(fastify.hasReplyDecorator(replyDecoratorName))
  })

  test('should check if the given reply decoration already exist when null', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasReplyDecorator(replyDecoratorName))
    fastify.decorateReply(replyDecoratorName, null)
    t.assert.ok(fastify.hasReplyDecorator(replyDecoratorName))
  })

  test('should be plugin encapsulable', async t => {
    const fastify = Fastify()

    t.assert.ok(!fastify.hasReplyDecorator(replyDecoratorName))

    await fastify.register(async function (fastify2, opts) {
      fastify2.decorateReply(replyDecoratorName, 42)
      t.assert.ok(fastify2.hasReplyDecorator(replyDecoratorName))
    })

    t.assert.ok(!fastify.hasReplyDecorator(replyDecoratorName))

    await fastify.ready()
    t.assert.ok(!fastify.hasReplyDecorator(replyDecoratorName))
  })

  test('should be inherited', async t => {
    const fastify = Fastify()

    fastify.decorateReply(replyDecoratorName, 42)

    await fastify.register(async function (fastify2, opts) {
      t.assert.ok(fastify2.hasReplyDecorator(replyDecoratorName))
    })

    await fastify.ready()
    t.assert.ok(fastify.hasReplyDecorator(replyDecoratorName))
  })
})

test('should register properties via getter/setter objects', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorate('test', {
      getter () {
        return 'a getter'
      }
    })
    t.assert.ok(instance.test)
    t.assert.ok(instance.test, 'a getter')
    done()
  })

  fastify.ready(() => {
    t.assert.ok(!fastify.test)
    done()
  })
})

test('decorateRequest should work with getter/setter', (t, done) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorateRequest('test', {
      getter () {
        return 'a getter'
      }
    })

    instance.get('/req-decorated-get-set', (req, res) => {
      res.send({ test: req.test })
    })

    done()
  })

  fastify.get('/not-decorated', (req, res) => {
    t.assert.ok(!req.test)
    res.send()
  })

  let pending = 2

  function completed () {
    if (--pending === 0) {
      done()
    }
  }

  fastify.ready(() => {
    fastify.inject({ url: '/req-decorated-get-set' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.deepStrictEqual(JSON.parse(res.payload), { test: 'a getter' })
      completed()
    })

    fastify.inject({ url: '/not-decorated' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok('ok', 'not decorated')
      completed()
    })
  })
})

test('decorateReply should work with getter/setter', (t, done) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorateReply('test', {
      getter () {
        return 'a getter'
      }
    })

    instance.get('/res-decorated-get-set', (req, res) => {
      res.send({ test: res.test })
    })

    done()
  })

  fastify.get('/not-decorated', (req, res) => {
    t.assert.ok(!res.test)
    res.send()
  })

  let pending = 2

  function completed () {
    if (--pending === 0) {
      done()
    }
  }
  fastify.ready(() => {
    fastify.inject({ url: '/res-decorated-get-set' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.deepStrictEqual(JSON.parse(res.payload), { test: 'a getter' })
      completed()
    })

    fastify.inject({ url: '/not-decorated' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok('ok')
      completed()
    })
  })
})

test('should register empty values', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.decorate('test', null)
    t.assert.ok(Object.hasOwn(instance, 'test'))
    done()
  })

  fastify.ready(() => {
    t.assert.ok(!fastify.test)
    done()
  })
})

test('nested plugins can override things', (t, done) => {
  t.plan(6)
  const fastify = Fastify()

  const rootFunc = () => {}
  fastify.decorate('test', rootFunc)
  fastify.decorateRequest('test', rootFunc)
  fastify.decorateReply('test', rootFunc)

  fastify.register((instance, opts, done) => {
    const func = () => {}
    instance.decorate('test', func)
    instance.decorateRequest('test', func)
    instance.decorateReply('test', func)

    t.assert.strictEqual(instance.test, func)
    t.assert.strictEqual(instance[symbols.kRequest].prototype.test, func)
    t.assert.strictEqual(instance[symbols.kReply].prototype.test, func)
    done()
  })

  fastify.ready(() => {
    t.assert.strictEqual(fastify.test, rootFunc)
    t.assert.strictEqual(fastify[symbols.kRequest].prototype.test, rootFunc)
    t.assert.strictEqual(fastify[symbols.kReply].prototype.test, rootFunc)
    done()
  })
})

test('a decorator should addSchema to all the encapsulated tree', (t, done) => {
  t.plan(1)
  const fastify = Fastify()

  const decorator = function (instance, opts, done) {
    instance.decorate('decoratorAddSchema', function (whereAddTheSchema) {
      instance.addSchema({
        $id: 'schema',
        type: 'string'
      })
    })
    done()
  }

  fastify.register(fp(decorator))

  fastify.register(function (instance, opts, done) {
    instance.register((subInstance, opts, done) => {
      subInstance.decoratorAddSchema()
      done()
    })
    done()
  })

  fastify.ready(() => {
    t.assert.ifError()
    done()
  })
})

test('after can access to a decorated instance and previous plugin decoration', (t, done) => {
  t.plan(11)
  const TEST_VALUE = {}
  const OTHER_TEST_VALUE = {}
  const NEW_TEST_VALUE = {}

  const fastify = Fastify()

  fastify.register(fp(function (instance, options, done) {
    instance.decorate('test', TEST_VALUE)

    done()
  })).after(function (err, instance, done) {
    t.assert.ifError(err)
    t.assert.strictEqual(instance.test, TEST_VALUE)

    instance.decorate('test2', OTHER_TEST_VALUE)
    done()
  })

  fastify.register(fp(function (instance, options, done) {
    t.assert.strictEqual(instance.test, TEST_VALUE)
    t.assert.strictEqual(instance.test2, OTHER_TEST_VALUE)

    instance.decorate('test3', NEW_TEST_VALUE)

    done()
  })).after(function (err, instance, done) {
    t.assert.ifError(err)
    t.assert.strictEqual(instance.test, TEST_VALUE)
    t.assert.strictEqual(instance.test2, OTHER_TEST_VALUE)
    t.assert.strictEqual(instance.test3, NEW_TEST_VALUE)

    done()
  })

  fastify.get('/', function (req, res) {
    t.assert.strictEqual(this.test, TEST_VALUE)
    t.assert.strictEqual(this.test2, OTHER_TEST_VALUE)
    res.send({})
  })

  fastify.inject('/')
    .then(response => {
      t.assert.strictEqual(response.statusCode, 200)
      done()
    })
})

test('decorate* should throw if called after ready', async t => {
  t.plan(6)
  const fastify = Fastify()

  fastify.get('/', (request, reply) => {
    reply.send({
      hello: 'world'
    })
  })

  await fastify.listen({ port: 0 })
  try {
    fastify.decorate('test', true)
    t.assert.fail('should not decorate')
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_DEC_AFTER_START')
    t.assert.strictEqual(err.message, "The decorator 'test' has been added after start!")
  }
  try {
    fastify.decorateRequest('test', true)
    t.assert.fail('should not decorate')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_AFTER_START')
    t.assert.strictEqual(e.message, "The decorator 'test' has been added after start!")
  }
  try {
    fastify.decorateReply('test', true)
    t.assert.fail('should not decorate')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_AFTER_START')
    t.assert.strictEqual(e.message, "The decorator 'test' has been added after start!")
  }
  await fastify.close()
})

test('decorate* should emit error if an array is passed', t => {
  t.plan(2)

  const fastify = Fastify()
  try {
    fastify.decorateRequest('test_array', [])
    t.assert.fail('should not decorate')
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_DEC_REFERENCE_TYPE')
    t.assert.strictEqual(err.message, "The decorator 'test_array' of type 'object' is a reference type. Use the { getter, setter } interface instead.")
  }
})

test('server.decorate should not emit error if reference type is passed', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.decorate('test_array', [])
  fastify.decorate('test_object', {})
  await fastify.ready()
  t.assert.ok('Done')
})

test('decorate* should emit warning if object type is passed', t => {
  t.plan(2)

  const fastify = Fastify()
  try {
    fastify.decorateRequest('test_object', { foo: 'bar' })
    t.assert.fail('should not decorate')
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_DEC_REFERENCE_TYPE')
    t.assert.strictEqual(err.message, "The decorator 'test_object' of type 'object' is a reference type. Use the { getter, setter } interface instead.")
  }
})

test('decorate* should not emit warning if object with getter/setter is passed', t => {
  const fastify = Fastify()

  fastify.decorateRequest('test_getter_setter', {
    setter (val) {
      this._ = val
    },
    getter () {
      return 'a getter'
    }
  })
  t.assert.ok('Done')
})

test('decorateRequest with getter/setter can handle encapsulation', async t => {
  t.plan(24)

  const fastify = Fastify({ logger: true })

  fastify.decorateRequest('test_getter_setter_holder')
  fastify.decorateRequest('test_getter_setter', {
    getter () {
      this.test_getter_setter_holder ??= {}
      return this.test_getter_setter_holder
    }
  })

  fastify.get('/', async function (req, reply) {
    t.assert.deepStrictEqual(req.test_getter_setter, {}, 'a getter')
    req.test_getter_setter.a = req.id
    t.assert.deepStrictEqual(req.test_getter_setter, { a: req.id })
  })

  fastify.addHook('onResponse', async function hook (req, reply) {
    t.assert.deepStrictEqual(req.test_getter_setter, { a: req.id })
  })

  await Promise.all([
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200))
  ])
})

test('decorateRequest with getter/setter can handle encapsulation with arrays', async t => {
  t.plan(24)

  const fastify = Fastify({ logger: true })

  fastify.decorateRequest('array_holder')
  fastify.decorateRequest('my_array', {
    getter () {
      this.array_holder ??= []
      return this.array_holder
    }
  })

  fastify.get('/', async function (req, reply) {
    t.assert.deepStrictEqual(req.my_array, [])
    req.my_array.push(req.id)
    t.assert.deepStrictEqual(req.my_array, [req.id])
  })

  fastify.addHook('onResponse', async function hook (req, reply) {
    t.assert.deepStrictEqual(req.my_array, [req.id])
  })

  await Promise.all([
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200)),
    fastify.inject('/').then(res => t.assert.strictEqual(res.statusCode, 200))
  ])
})

test('decorate* should not emit error if string,bool,numbers are passed', t => {
  const fastify = Fastify()

  fastify.decorateRequest('test_str', 'foo')
  fastify.decorateRequest('test_bool', true)
  fastify.decorateRequest('test_number', 42)
  fastify.decorateRequest('test_null', null)
  fastify.decorateRequest('test_undefined', undefined)
  fastify.decorateReply('test_str', 'foo')
  fastify.decorateReply('test_bool', true)
  fastify.decorateReply('test_number', 42)
  fastify.decorateReply('test_null', null)
  fastify.decorateReply('test_undefined', undefined)
  t.assert.ok('Done')
})

test('Request/reply decorators should be able to access the server instance', async t => {
  t.plan(6)

  const server = require('..')({ logger: false })
  server.decorateRequest('assert', rootAssert)
  server.decorateReply('assert', rootAssert)

  server.get('/root-assert', async (req, res) => {
    req.assert()
    res.assert()
    return 'done'
  })

  server.register(async instance => {
    instance.decorateRequest('assert', nestedAssert)
    instance.decorateReply('assert', nestedAssert)
    instance.decorate('foo', 'bar')

    instance.get('/nested-assert', async (req, res) => {
      req.assert()
      res.assert()
      return 'done'
    })
  })

  await server.inject({ method: 'GET', url: '/root-assert' })
  await server.inject({ method: 'GET', url: '/nested-assert' })

  // ----
  function rootAssert () {
    t.assert.strictEqual(this.server, server)
  }

  function nestedAssert () {
    t.assert.notStrictEqual(this.server, server)
    t.assert.strictEqual(this.server.foo, 'bar')
  }
})

test('plugin required decorators', async t => {
  const plugin1 = fp(
    async (instance) => {
      instance.decorateRequest('someThing', null)

      instance.addHook('onRequest', async (request, reply) => {
        request.someThing = 'hello'
      })
    },
    {
      name: 'custom-plugin-one'
    }
  )

  const plugin2 = fp(
    async () => {
      // nothing
    },
    {
      name: 'custom-plugin-two',
      dependencies: ['custom-plugin-one'],
      decorators: {
        request: ['someThing']
      }
    }
  )

  const app = Fastify()
  app.register(plugin1)
  app.register(plugin2)
  await app.ready()
})

test('decorateRequest/decorateReply empty string', async t => {
  t.plan(6)
  const fastify = Fastify()

  fastify.decorateRequest('test', '')
  fastify.decorateReply('test2', '')
  fastify.get('/yes', (req, reply) => {
    t.assert.strictEqual(req.test, '')
    t.assert.strictEqual(reply.test2, '')
    reply.send({ hello: 'world' })
  })
  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}/yes`)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})

test('decorateRequest/decorateReply is undefined', async t => {
  t.plan(6)
  const fastify = Fastify()

  fastify.decorateRequest('test', undefined)
  fastify.decorateReply('test2', undefined)
  fastify.get('/yes', (req, reply) => {
    t.assert.strictEqual(req.test, undefined)
    t.assert.strictEqual(reply.test2, undefined)
    reply.send({ hello: 'world' })
  })
  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}/yes`)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})

test('decorateRequest/decorateReply is not set to a value', async t => {
  t.plan(6)
  const fastify = Fastify()

  fastify.decorateRequest('test')
  fastify.decorateReply('test2')
  fastify.get('/yes', (req, reply) => {
    t.assert.strictEqual(req.test, undefined)
    t.assert.strictEqual(reply.test2, undefined)
    reply.send({ hello: 'world' })
  })
  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}/yes`)
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
})

test('decorateRequest with dependencies', (t, done) => {
  t.plan(2)
  const app = Fastify()

  const decorator1 = 'bar'
  const decorator2 = 'foo'

  app.decorate('decorator1', decorator1)
  app.decorateRequest('decorator1', decorator1)

  if (
    app.hasDecorator('decorator1') &&
    app.hasRequestDecorator('decorator1')
  ) {
    t.assert.doesNotThrow(() => app.decorateRequest('decorator2', decorator2, ['decorator1']))
    t.assert.ok(app.hasRequestDecorator('decorator2'))
    done()
  }
})

test('decorateRequest with dependencies (functions)', (t, done) => {
  t.plan(2)
  const app = Fastify()

  const decorator1 = () => 'bar'
  const decorator2 = () => 'foo'

  app.decorate('decorator1', decorator1)
  app.decorateRequest('decorator1', decorator1)

  if (
    app.hasDecorator('decorator1') &&
    app.hasRequestDecorator('decorator1')
  ) {
    t.assert.doesNotThrow(() => app.decorateRequest('decorator2', decorator2, ['decorator1']))
    t.assert.ok(app.hasRequestDecorator('decorator2'))
    done()
  }
})

test('chain of decorators on Request', async t => {
  const fastify = Fastify()
  fastify.register(fp(async function (fastify) {
    fastify.decorateRequest('foo', 'toto')
    fastify.decorateRequest('bar', () => 'tata')
  }, {
    name: 'first'
  }))

  fastify.get('/foo', async function (request, reply) {
    return request.foo
  })
  fastify.get('/bar', function (request, reply) {
    return request.bar()
  })
  fastify.register(async function second (fastify) {
    fastify.get('/foo', async function (request, reply) {
      return request.foo
    })
    fastify.get('/bar', async function (request, reply) {
      return request.bar()
    })
    fastify.register(async function fourth (fastify) {
      fastify.get('/plugin3/foo', async function (request, reply) {
        return request.foo
      })
      fastify.get('/plugin3/bar', function (request, reply) {
        return request.bar()
      })
    })
    fastify.register(fp(async function (fastify) {
      fastify.decorateRequest('fooB', 'toto')
      fastify.decorateRequest('barB', () => 'tata')
    }, {
      name: 'third'
    }))
  },
  { prefix: '/plugin2', name: 'plugin2' }
  )

  await fastify.ready()

  {
    const response = await fastify.inject('/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/bar')
    t.assert.strictEqual(response.body, 'tata')
  }

  {
    const response = await fastify.inject('/plugin2/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/plugin2/bar')
    t.assert.strictEqual(response.body, 'tata')
  }

  {
    const response = await fastify.inject('/plugin2/plugin3/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/plugin2/plugin3/bar')
    t.assert.strictEqual(response.body, 'tata')
  }
})

test('chain of decorators on Reply', async (t) => {
  const fastify = Fastify()
  fastify.register(fp(async function (fastify) {
    fastify.decorateReply('foo', 'toto')
    fastify.decorateReply('bar', () => 'tata')
  }, {
    name: 'first'
  }))

  fastify.get('/foo', async function (request, reply) {
    return reply.foo
  })
  fastify.get('/bar', function (request, reply) {
    return reply.bar()
  })
  fastify.register(async function second (fastify) {
    fastify.get('/foo', async function (request, reply) {
      return reply.foo
    })
    fastify.get('/bar', async function (request, reply) {
      return reply.bar()
    })
    fastify.register(async function fourth (fastify) {
      fastify.get('/plugin3/foo', async function (request, reply) {
        return reply.foo
      })
      fastify.get('/plugin3/bar', function (request, reply) {
        return reply.bar()
      })
    })
    fastify.register(fp(async function (fastify) {
      fastify.decorateReply('fooB', 'toto')
      fastify.decorateReply('barB', () => 'tata')
    }, {
      name: 'third'
    }))
  },
  { prefix: '/plugin2', name: 'plugin2' }
  )

  await fastify.ready()

  {
    const response = await fastify.inject('/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/bar')
    t.assert.strictEqual(response.body, 'tata')
  }

  {
    const response = await fastify.inject('/plugin2/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/plugin2/bar')
    t.assert.strictEqual(response.body, 'tata')
  }

  {
    const response = await fastify.inject('/plugin2/plugin3/foo')
    t.assert.strictEqual(response.body, 'toto')
  }

  {
    const response = await fastify.inject('/plugin2/plugin3/bar')
    t.assert.strictEqual(response.body, 'tata')
  }
})

test('getDecorator should return the decorator', (t, done) => {
  t.plan(12)
  const fastify = Fastify()

  fastify.decorate('root', 'from_root')
  fastify.decorateRequest('root', 'from_root_request')
  fastify.decorateReply('root', 'from_root_reply')

  t.assert.strictEqual(fastify.getDecorator('root'), 'from_root')
  fastify.get('/', async (req, res) => {
    t.assert.strictEqual(req.getDecorator('root'), 'from_root_request')
    t.assert.strictEqual(res.getDecorator('root'), 'from_root_reply')

    res.send()
  })

  fastify.register((child) => {
    child.decorate('child', 'from_child')

    t.assert.strictEqual(child.getDecorator('child'), 'from_child')
    t.assert.strictEqual(child.getDecorator('root'), 'from_root')

    child.get('/child', async (req, res) => {
      t.assert.strictEqual(req.getDecorator('root'), 'from_root_request')
      t.assert.strictEqual(res.getDecorator('root'), 'from_root_reply')

      res.send()
    })
  })

  fastify.ready((err) => {
    t.assert.ifError(err)
    fastify.inject({ url: '/' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true)
    })

    fastify.inject({ url: '/child' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true)
      done()
    })
  })
})

test('getDecorator should return function decorators with expected binded context', (t, done) => {
  t.plan(12)
  const fastify = Fastify()

  fastify.decorate('a', function () {
    return this
  })
  fastify.decorateRequest('b', function () {
    return this
  })
  fastify.decorateReply('c', function () {
    return this
  })

  fastify.register((child) => {
    child.decorate('a', function () {
      return this
    })

    t.assert.deepEqual(child.getDecorator('a')(), child)
    child.get('/child', async (req, res) => {
      t.assert.deepEqual(req.getDecorator('b')(), req)
      t.assert.deepEqual(res.getDecorator('c')(), res)

      res.send()
    })
  })

  t.assert.deepEqual(fastify.getDecorator('a')(), fastify)
  fastify.get('/', async (req, res) => {
    t.assert.deepEqual(req.getDecorator('b')(), req)
    t.assert.deepEqual(res.getDecorator('c')(), res)
    res.send()
  })

  fastify.ready((err) => {
    t.assert.ifError(err)
    fastify.inject({ url: '/' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true, 'passed')
    })

    fastify.inject({ url: '/child' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true, 'passed')
      done()
    })
    t.assert.ok(true, 'passed')
  })
})

test('getDecorator should only return decorators existing in the scope', (t, done) => {
  t.plan(9)

  function assertsThrowOnUndeclaredDecorator (notDecorated, instanceType) {
    try {
      notDecorated.getDecorator('foo')
      t.assert.fail()
    } catch (e) {
      t.assert.deepEqual(e.code, 'FST_ERR_DEC_UNDECLARED')
      t.assert.deepEqual(e.message, `No decorator 'foo' has been declared on ${instanceType}.`)
    }
  }

  const fastify = Fastify()
  fastify.register(child => {
    child.decorate('foo', true)
    child.decorateRequest('foo', true)
    child.decorateReply('foo', true)
  })

  fastify.get('/', async (req, res) => {
    assertsThrowOnUndeclaredDecorator(req, 'request')
    assertsThrowOnUndeclaredDecorator(res, 'reply')

    return { hello: 'world' }
  })

  fastify.ready((err) => {
    t.assert.ifError(err)

    assertsThrowOnUndeclaredDecorator(fastify, 'instance')
    fastify.inject({ url: '/' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true, 'passed')
      done()
    })
  })
})

test('Request.setDecorator should update an existing decorator', (t, done) => {
  t.plan(7)
  const fastify = Fastify()

  fastify.decorateRequest('session', null)
  fastify.decorateRequest('utility', null)
  fastify.addHook('onRequest', async (req, reply) => {
    req.setDecorator('session', { user: 'Jean' })
    req.setDecorator('utility', function () {
      return this
    })
    try {
      req.setDecorator('foo', { user: 'Jean' })
      t.assert.fail()
    } catch (e) {
      t.assert.deepEqual(e.code, 'FST_ERR_DEC_UNDECLARED')
      t.assert.deepEqual(e.message, "No decorator 'foo' has been declared on request.")
    }
  })

  fastify.get('/', async (req, res) => {
    t.assert.deepEqual(req.getDecorator('session'), { user: 'Jean' })
    t.assert.deepEqual(req.getDecorator('utility')(), req)

    res.send()
  })

  fastify.ready((err) => {
    t.assert.ifError(err)
    fastify.inject({ url: '/' }, (err, res) => {
      t.assert.ifError(err)
      t.assert.ok(true, 'passed')
      done()
    })
  })
})
