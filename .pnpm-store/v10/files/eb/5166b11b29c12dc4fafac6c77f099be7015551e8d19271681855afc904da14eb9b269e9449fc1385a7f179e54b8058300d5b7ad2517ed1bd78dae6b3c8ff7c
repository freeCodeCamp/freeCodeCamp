'use strict'

const split = require('split2')
const { test } = require('node:test')
const querystring = require('node:querystring')
const Fastify = require('../')
const {
  FST_ERR_BAD_URL,
  FST_ERR_ASYNC_CONSTRAINT
} = require('../lib/errors')

test('Should honor ignoreTrailingSlash option', async t => {
  t.plan(4)
  const fastify = Fastify({
    ignoreTrailingSlash: true
  })

  fastify.get('/test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor ignoreDuplicateSlashes option', async t => {
  t.plan(4)
  const fastify = Fastify({
    ignoreDuplicateSlashes: true
  })

  fastify.get('/test//test///test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test/test/test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test//test///test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor ignoreTrailingSlash and ignoreDuplicateSlashes options', async t => {
  t.plan(4)
  const fastify = Fastify({
    ignoreTrailingSlash: true,
    ignoreDuplicateSlashes: true
  })

  fastify.get('/test//test///test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test/test/test/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test//test///test//')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor maxParamLength option', async (t) => {
  const fastify = Fastify({ maxParamLength: 10 })

  fastify.get('/test/:id', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test/123456789'
  })
  t.assert.strictEqual(res.statusCode, 200)

  const resError = await fastify.inject({
    method: 'GET',
    url: '/test/123456789abcd'
  })
  t.assert.strictEqual(resError.statusCode, 404)
})

test('Should expose router options via getters on request and reply', (t, done) => {
  t.plan(9)
  const fastify = Fastify()
  const expectedSchema = {
    params: {
      type: 'object',
      properties: {
        id: { type: 'integer' }
      }
    }
  }

  fastify.get('/test/:id', {
    schema: expectedSchema
  }, (req, reply) => {
    t.assert.strictEqual(reply.routeOptions.config.url, '/test/:id')
    t.assert.strictEqual(reply.routeOptions.config.method, 'GET')
    t.assert.deepStrictEqual(req.routeOptions.schema, expectedSchema)
    t.assert.strictEqual(typeof req.routeOptions.handler, 'function')
    t.assert.strictEqual(req.routeOptions.config.url, '/test/:id')
    t.assert.strictEqual(req.routeOptions.config.method, 'GET')
    t.assert.strictEqual(req.is404, false)
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/test/123456789'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('Should set is404 flag for unmatched paths', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.setNotFoundHandler((req, reply) => {
    t.assert.strictEqual(req.is404, true)
    reply.code(404).send({ error: 'Not Found', message: 'Four oh for', statusCode: 404 })
  })

  fastify.inject({
    method: 'GET',
    url: '/nonexist/123456789'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('Should honor frameworkErrors option - FST_ERR_BAD_URL', (t, done) => {
  t.plan(3)
  const fastify = Fastify({
    frameworkErrors: function (err, req, res) {
      if (err instanceof FST_ERR_BAD_URL) {
        t.assert.ok(true)
      } else {
        t.assert.fail()
      }
      res.send(`${err.message} - ${err.code}`)
    }
  })

  fastify.get('/test/:id', (req, res) => {
    res.send('{ hello: \'world\' }')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/test/%world'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, '\'/test/%world\' is not a valid url component - FST_ERR_BAD_URL')
      done()
    }
  )
})

test('Should supply Fastify request to the logger in frameworkErrors wrapper - FST_ERR_BAD_URL', (t, done) => {
  t.plan(8)

  const REQ_ID = 'REQ-1234'
  const logStream = split(JSON.parse)

  const fastify = Fastify({
    frameworkErrors: function (err, req, res) {
      t.assert.deepStrictEqual(req.id, REQ_ID)
      t.assert.deepStrictEqual(req.raw.httpVersion, '1.1')
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      serializers: {
        req (request) {
          t.assert.deepStrictEqual(request.id, REQ_ID)
          return { httpVersion: request.raw.httpVersion }
        }
      }
    },
    genReqId: () => REQ_ID
  })

  fastify.get('/test/:id', (req, res) => {
    res.send('{ hello: \'world\' }')
  })

  logStream.on('data', (json) => {
    t.assert.deepStrictEqual(json.msg, 'incoming request')
    t.assert.deepStrictEqual(json.reqId, REQ_ID)
    t.assert.deepStrictEqual(json.req.httpVersion, '1.1')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/test/%world'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, '\'/test/%world\' is not a valid url component - FST_ERR_BAD_URL')
      done()
    }
  )
})

test('Should honor disableRequestLogging option in frameworkErrors wrapper - FST_ERR_BAD_URL', (t, done) => {
  t.plan(2)

  const logStream = split(JSON.parse)

  const fastify = Fastify({
    disableRequestLogging: true,
    frameworkErrors: function (err, req, res) {
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      serializers: {
        req () {
          t.assert.fail('should not be called')
        },
        res () {
          t.assert.fail('should not be called')
        }
      }
    }
  })

  fastify.get('/test/:id', (req, res) => {
    res.send('{ hello: \'world\' }')
  })

  logStream.on('data', (json) => {
    t.assert.fail('should not be called')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/test/%world'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, '\'/test/%world\' is not a valid url component - FST_ERR_BAD_URL')
      done()
    }
  )
})

test('Should honor frameworkErrors option - FST_ERR_ASYNC_CONSTRAINT', (t, done) => {
  t.plan(3)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const fastify = Fastify({
    frameworkErrors: function (err, req, res) {
      if (err instanceof FST_ERR_ASYNC_CONSTRAINT) {
        t.assert.ok(true)
      } else {
        t.assert.fail()
      }
      res.send(`${err.message} - ${err.code}`)
    },
    constraints: { secret: constraint }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'Unexpected error from async constraint - FST_ERR_ASYNC_CONSTRAINT')
      done()
    }
  )
})

test('Should supply Fastify request to the logger in frameworkErrors wrapper - FST_ERR_ASYNC_CONSTRAINT', (t, done) => {
  t.plan(8)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const REQ_ID = 'REQ-1234'
  const logStream = split(JSON.parse)

  const fastify = Fastify({
    constraints: { secret: constraint },
    frameworkErrors: function (err, req, res) {
      t.assert.deepStrictEqual(req.id, REQ_ID)
      t.assert.deepStrictEqual(req.raw.httpVersion, '1.1')
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      serializers: {
        req (request) {
          t.assert.deepStrictEqual(request.id, REQ_ID)
          return { httpVersion: request.raw.httpVersion }
        }
      }
    },
    genReqId: () => REQ_ID
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  logStream.on('data', (json) => {
    t.assert.deepStrictEqual(json.msg, 'incoming request')
    t.assert.deepStrictEqual(json.reqId, REQ_ID)
    t.assert.deepStrictEqual(json.req.httpVersion, '1.1')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'Unexpected error from async constraint - FST_ERR_ASYNC_CONSTRAINT')
      done()
    }
  )
})

test('Should honor disableRequestLogging option in frameworkErrors wrapper - FST_ERR_ASYNC_CONSTRAINT', (t, done) => {
  t.plan(2)

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const logStream = split(JSON.parse)

  const fastify = Fastify({
    constraints: { secret: constraint },
    disableRequestLogging: true,
    frameworkErrors: function (err, req, res) {
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      serializers: {
        req () {
          t.assert.fail('should not be called')
        },
        res () {
          t.assert.fail('should not be called')
        }
      }
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  logStream.on('data', (json) => {
    t.assert.fail('should not be called')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'Unexpected error from async constraint - FST_ERR_ASYNC_CONSTRAINT')
      done()
    }
  )
})

test('Should honor disableRequestLogging function in frameworkErrors wrapper - FST_ERR_BAD_URL', (t, done) => {
  t.plan(4)

  let logCallCount = 0
  const logStream = split(JSON.parse)

  const fastify = Fastify({
    disableRequestLogging: (req) => {
      // Disable logging for URLs containing 'silent'
      return req.url.includes('silent')
    },
    frameworkErrors: function (err, req, res) {
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      level: 'info'
    }
  })

  fastify.get('/test/:id', (req, res) => {
    res.send('{ hello: \'world\' }')
  })

  logStream.on('data', (json) => {
    if (json.msg === 'incoming request') {
      logCallCount++
    }
  })

  // First request: URL does not contain 'silent', so logging should happen
  fastify.inject(
    {
      method: 'GET',
      url: '/test/%world'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, '\'/test/%world\' is not a valid url component - FST_ERR_BAD_URL')

      // Second request: URL contains 'silent', so logging should be disabled
      fastify.inject(
        {
          method: 'GET',
          url: '/silent/%world'
        },
        (err2, res2) => {
          t.assert.ifError(err2)
          // Give time for any potential log events
          setImmediate(() => {
            // Only the first request should have logged
            t.assert.strictEqual(logCallCount, 1)
            done()
          })
        }
      )
    }
  )
})

test('Should honor disableRequestLogging function in frameworkErrors wrapper - FST_ERR_ASYNC_CONSTRAINT', (t, done) => {
  t.plan(4)

  let logCallCount = 0

  const constraint = {
    name: 'secret',
    storage: function () {
      const secrets = {}
      return {
        get: (secret) => { return secrets[secret] || null },
        set: (secret, store) => { secrets[secret] = store }
      }
    },
    deriveConstraint: (req, ctx, done) => {
      done(Error('kaboom'))
    },
    validate () { return true }
  }

  const logStream = split(JSON.parse)

  const fastify = Fastify({
    constraints: { secret: constraint },
    disableRequestLogging: (req) => {
      // Disable logging for URLs containing 'silent'
      return req.url.includes('silent')
    },
    frameworkErrors: function (err, req, res) {
      res.send(`${err.message} - ${err.code}`)
    },
    logger: {
      stream: logStream,
      level: 'info'
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/silent',
    constraints: { secret: 'alpha' },
    handler: (req, reply) => {
      reply.send({ hello: 'from alpha' })
    }
  })

  logStream.on('data', (json) => {
    if (json.msg === 'incoming request') {
      logCallCount++
    }
  })

  // First request: URL does not contain 'silent', so logging should happen
  fastify.inject(
    {
      method: 'GET',
      url: '/'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'Unexpected error from async constraint - FST_ERR_ASYNC_CONSTRAINT')

      // Second request: URL contains 'silent', so logging should be disabled
      fastify.inject(
        {
          method: 'GET',
          url: '/silent'
        },
        (err2, res2) => {
          t.assert.ifError(err2)
          // Give time for any potential log events
          setImmediate(() => {
            // Only the first request should have logged
            t.assert.strictEqual(logCallCount, 1)
            done()
          })
        }
      )
    }
  )
})

test('Should honor routerOptions.defaultRoute', async t => {
  t.plan(3)
  const fastify = Fastify({
    routerOptions: {
      defaultRoute: function (_, res) {
        t.assert.ok('default route called')
        res.statusCode = 404
        res.end('default route')
      }
    }
  })

  const res = await fastify.inject('/')
  t.assert.strictEqual(res.statusCode, 404)
  t.assert.strictEqual(res.payload, 'default route')
})

test('Should honor routerOptions.badUrl', async t => {
  t.plan(3)
  const fastify = Fastify({
    routerOptions: {
      defaultRoute: function (_, res) {
        t.asset.fail('default route should not be called')
      },
      onBadUrl: function (path, _, res) {
        t.assert.ok('bad url called')
        res.statusCode = 400
        res.end(`Bath URL: ${path}`)
      }
    }
  })

  fastify.get('/hello/:id', (req, res) => {
    res.send({ hello: 'world' })
  })

  const res = await fastify.inject('/hello/%world')
  t.assert.strictEqual(res.statusCode, 400)
  t.assert.strictEqual(res.payload, 'Bath URL: /hello/%world')
})

test('Should honor routerOptions.ignoreTrailingSlash', async t => {
  t.plan(4)
  const fastify = Fastify({
    routerOptions: {
      ignoreTrailingSlash: true
    }
  })

  fastify.get('/test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor routerOptions.ignoreDuplicateSlashes', async t => {
  t.plan(4)
  const fastify = Fastify({
    routerOptions: {
      ignoreDuplicateSlashes: true
    }
  })

  fastify.get('/test//test///test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test/test/test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test//test///test')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor routerOptions.ignoreTrailingSlash and routerOptions.ignoreDuplicateSlashes', async t => {
  t.plan(4)
  const fastify = Fastify({
    routerOptions: {
      ignoreTrailingSlash: true,
      ignoreDuplicateSlashes: true
    }
  })

  t.after(() => fastify.close())

  fastify.get('/test//test///test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test/test/test/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test//test///test//')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor routerOptions.maxParamLength', async (t) => {
  const fastify = Fastify({
    routerOptions:
    {
      maxParamLength: 10
    }
  })

  fastify.get('/test/:id', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test/123456789'
  })
  t.assert.strictEqual(res.statusCode, 200)

  const resError = await fastify.inject({
    method: 'GET',
    url: '/test/123456789abcd'
  })
  t.assert.strictEqual(resError.statusCode, 404)
})

test('Should honor routerOptions.allowUnsafeRegex', async (t) => {
  const fastify = Fastify({
    routerOptions:
    {
      allowUnsafeRegex: true
    }
  })

  fastify.get('/test/:id(([a-f0-9]{3},?)+)', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/test/bac,1ea'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/test/qwerty'
  })

  t.assert.strictEqual(res.statusCode, 404)
})

test('Should honor routerOptions.caseSensitive', async (t) => {
  const fastify = Fastify({
    routerOptions:
    {
      caseSensitive: false
    }
  })

  fastify.get('/TeSt', (req, reply) => {
    reply.send('test')
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/test'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/tEsT'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/TEST'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should honor routerOptions.queryStringParser', async (t) => {
  t.plan(4)
  const fastify = Fastify({
    routerOptions:
    {
      querystringParser: function (str) {
        t.assert.ok('custom query string parser called')
        return querystring.parse(str)
      }
    }
  })

  fastify.get('/test', (req, reply) => {
    t.assert.deepStrictEqual(req.query.foo, 'bar')
    t.assert.deepStrictEqual(req.query.baz, 'faz')
    reply.send('test')
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test?foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should honor routerOptions.useSemicolonDelimiter', async (t) => {
  t.plan(6)
  const fastify = Fastify({
    routerOptions:
    {
      useSemicolonDelimiter: true
    }
  })

  fastify.get('/test', (req, reply) => {
    t.assert.deepStrictEqual(req.query.foo, 'bar')
    t.assert.deepStrictEqual(req.query.baz, 'faz')
    reply.send('test')
  })

  // Support semicolon delimiter
  let res = await fastify.inject({
    method: 'GET',
    url: '/test;foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)

  // Support query string `?` delimiter
  res = await fastify.inject({
    method: 'GET',
    url: '/test?foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should honor routerOptions.buildPrettyMeta', async (t) => {
  t.plan(10)
  const fastify = Fastify({
    routerOptions:
    {
      buildPrettyMeta: function (route) {
        t.assert.ok('custom buildPrettyMeta called')
        return { metaKey: route.path }
      }
    }
  })

  fastify.get('/test', () => {})
  fastify.get('/test/hello', () => {})
  fastify.get('/testing', () => {})
  fastify.get('/testing/:param', () => {})
  fastify.put('/update', () => {})

  await fastify.ready()

  const result = fastify.printRoutes({ includeMeta: true })
  const expected = `\
└── /
    ├── test (GET, HEAD)
    │   • (metaKey) "/test"
    │   ├── /hello (GET, HEAD)
    │   │   • (metaKey) "/test/hello"
    │   └── ing (GET, HEAD)
    │       • (metaKey) "/testing"
    │       └── /
    │           └── :param (GET, HEAD)
    │               • (metaKey) "/testing/:param"
    └── update (PUT)
        • (metaKey) "/update"
`

  t.assert.strictEqual(result, expected)
})

test('Should honor routerOptions.ignoreTrailingSlash and routerOptions.ignoreDuplicateSlashes over top level options', async t => {
  t.plan(4)
  const fastify = Fastify({
    ignoreTrailingSlash: false,
    ignoreDuplicateSlashes: false,
    routerOptions: {
      ignoreTrailingSlash: true,
      ignoreDuplicateSlashes: true
    }
  })

  fastify.get('/test//test///test', (req, res) => {
    res.send('test')
  })

  let res = await fastify.inject('/test/test/test/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')

  res = await fastify.inject('/test//test///test//')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.payload.toString(), 'test')
})

test('Should honor routerOptions.maxParamLength over maxParamLength option', async (t) => {
  const fastify = Fastify({
    maxParamLength: 0,
    routerOptions:
    {
      maxParamLength: 10
    }
  })

  fastify.get('/test/:id', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test/123456789'
  })
  t.assert.strictEqual(res.statusCode, 200)

  const resError = await fastify.inject({
    method: 'GET',
    url: '/test/123456789abcd'
  })
  t.assert.strictEqual(resError.statusCode, 404)
})

test('Should honor routerOptions.allowUnsafeRegex over allowUnsafeRegex option', async (t) => {
  const fastify = Fastify({
    allowUnsafeRegex: false,
    routerOptions:
    {
      allowUnsafeRegex: true
    }
  })

  fastify.get('/test/:id(([a-f0-9]{3},?)+)', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/test/bac,1ea'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/test/qwerty'
  })

  t.assert.strictEqual(res.statusCode, 404)
})

test('Should honor routerOptions.caseSensitive over caseSensitive option', async (t) => {
  const fastify = Fastify({
    caseSensitive: true,
    routerOptions:
    {
      caseSensitive: false
    }
  })

  fastify.get('/TeSt', (req, reply) => {
    reply.send('test')
  })

  let res = await fastify.inject({
    method: 'GET',
    url: '/test'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/tEsT'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'GET',
    url: '/TEST'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should honor routerOptions.queryStringParser over queryStringParser option', async (t) => {
  t.plan(4)
  const fastify = Fastify({
    queryStringParser: undefined,
    routerOptions:
    {
      querystringParser: function (str) {
        t.assert.ok('custom query string parser called')
        return querystring.parse(str)
      }
    }
  })

  fastify.get('/test', (req, reply) => {
    t.assert.deepStrictEqual(req.query.foo, 'bar')
    t.assert.deepStrictEqual(req.query.baz, 'faz')
    reply.send('test')
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test?foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should honor routerOptions.useSemicolonDelimiter over useSemicolonDelimiter option', async (t) => {
  t.plan(6)
  const fastify = Fastify({
    useSemicolonDelimiter: false,
    routerOptions:
    {
      useSemicolonDelimiter: true
    }
  })

  fastify.get('/test', (req, reply) => {
    t.assert.deepStrictEqual(req.query.foo, 'bar')
    t.assert.deepStrictEqual(req.query.baz, 'faz')
    reply.send('test')
  })

  // Support semicolon delimiter
  let res = await fastify.inject({
    method: 'GET',
    url: '/test;foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)

  // Support query string `?` delimiter
  res = await fastify.inject({
    method: 'GET',
    url: '/test?foo=bar&baz=faz'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('Should support extra find-my-way options', async t => {
  t.plan(1)
  // Use a real upstream option from find-my-way
  const fastify = Fastify({
    routerOptions: {
      buildPrettyMeta: (route) => {
        const cleanMeta = Object.assign({}, route.store)
        return cleanMeta
      }
    }
  })

  t.after(() => fastify.close())

  await fastify.ready()

  // Ensure the option is preserved after validation
  t.assert.strictEqual(typeof fastify.initialConfig.routerOptions.buildPrettyMeta, 'function')
})

test('Should allow reusing a routerOptions object across instances', async t => {
  t.plan(1)

  const options = {
    routerOptions: {
      maxParamLength: 2048
    }
  }

  const app1 = Fastify(options)
  const app2 = Fastify(options)

  t.after(() => Promise.all([
    app1.close(),
    app2.close()
  ]))

  const response = await app2.inject('/not-found')
  t.assert.strictEqual(response.statusCode, 404)
})

test('Should not mutate user-provided routerOptions object', async t => {
  t.plan(4)

  const routerOptions = {
    maxParamLength: 2048
  }
  const options = { routerOptions }

  const app = Fastify(options)
  t.after(() => app.close())

  await app.ready()

  t.assert.deepStrictEqual(Object.keys(routerOptions), ['maxParamLength'])
  t.assert.strictEqual(routerOptions.maxParamLength, 2048)
  t.assert.strictEqual(routerOptions.defaultRoute, undefined)
  t.assert.strictEqual(routerOptions.onBadUrl, undefined)
})
