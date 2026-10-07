'use strict'

const stream = require('node:stream')
const { ReadableStream } = require('node:stream/web')
const split = require('split2')
const { test } = require('node:test')
const Fastify = require('..')
const createError = require('@fastify/error')

test("HEAD route should handle stream.on('error')", (t, done) => {
  t.plan(6)

  const resStream = stream.Readable.from('Hello with error!')
  const logStream = split(JSON.parse)
  const expectedError = new Error('Hello!')
  const fastify = Fastify({
    logger: {
      stream: logStream,
      level: 'error'
    }
  })

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    exposeHeadRoute: true,
    handler: (req, reply) => {
      process.nextTick(() => resStream.emit('error', expectedError))
      return resStream
    }
  })

  logStream.once('data', line => {
    const { message, stack } = expectedError
    t.assert.deepStrictEqual(line.err, { type: 'Error', message, stack })
    t.assert.strictEqual(line.msg, 'Error on Stream found for HEAD route')
    t.assert.strictEqual(line.level, 50)
  })

  fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-type'], undefined)
    done()
  })
})

test('HEAD route should handle ReadableStream.cancel() error', (t, done) => {
  t.plan(7)

  const logStream = split(JSON.parse)
  const expectedError = new Error('Cancel error!')
  const fastify = Fastify({
    logger: {
      stream: logStream,
      level: 'error'
    }
  })

  fastify.route({
    method: 'GET',
    path: '/web-stream',
    exposeHeadRoute: true,
    handler: (req, reply) => {
      const webStream = new ReadableStream({
        start (controller) {
          controller.enqueue('Hello from web stream!')
        },
        cancel (reason) {
          t.assert.strictEqual(reason, 'Stream cancelled by HEAD route')
          throw expectedError
        }
      })
      return webStream
    }
  })

  logStream.once('data', line => {
    const { message, stack } = expectedError
    t.assert.deepStrictEqual(line.err, { type: 'Error', message, stack })
    t.assert.strictEqual(line.msg, 'Error on Stream found for HEAD route')
    t.assert.strictEqual(line.level, 50)
  })

  fastify.inject({
    method: 'HEAD',
    url: '/web-stream'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-type'], undefined)
    done()
  })
})

test('HEAD route should be exposed by default', async t => {
  t.plan(5)

  const resStream = stream.Readable.from('Hello with error!')
  const resJson = { hello: 'world' }
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    path: '/without-flag',
    handler: (req, reply) => {
      return resStream
    }
  })

  fastify.route({
    exposeHeadRoute: true,
    method: 'GET',
    path: '/with-flag',
    handler: (req, reply) => {
      return resJson
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/without-flag'
  })
  t.assert.strictEqual(res.statusCode, 200)

  res = await fastify.inject({
    method: 'HEAD',
    url: '/with-flag'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.strictEqual(res.headers['content-length'], `${Buffer.byteLength(JSON.stringify(resJson))}`)
  t.assert.strictEqual(res.body, '')
})

test('HEAD route should be exposed if route exposeHeadRoute is set', async t => {
  t.plan(5)

  const resBuffer = Buffer.from('I am a coffee!')
  const resJson = { hello: 'world' }
  const fastify = Fastify({ exposeHeadRoutes: false })

  fastify.route({
    exposeHeadRoute: true,
    method: 'GET',
    path: '/one',
    handler: (req, reply) => {
      return resBuffer
    }
  })

  fastify.route({
    method: 'GET',
    path: '/two',
    handler: (req, reply) => {
      return resJson
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/one'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/octet-stream')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/two'
  })
  t.assert.strictEqual(res.statusCode, 404)
})

test('Set a custom HEAD route before GET one without disabling exposeHeadRoutes (global)', (t, done) => {
  t.plan(6)

  const resBuffer = Buffer.from('I am a coffee!')
  const fastify = Fastify({
    exposeHeadRoutes: true
  })

  fastify.route({
    method: 'HEAD',
    path: '/one',
    handler: (req, reply) => {
      reply.header('content-type', 'application/pdf')
      reply.header('content-length', `${resBuffer.byteLength}`)
      reply.header('x-custom-header', 'some-custom-header')
      reply.send()
    }
  })

  fastify.route({
    method: 'GET',
    path: '/one',
    handler: (req, reply) => {
      return resBuffer
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/one'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-type'], 'application/pdf')
    t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
    t.assert.strictEqual(res.headers['x-custom-header'], 'some-custom-header')
    t.assert.strictEqual(res.body, '')
    done()
  })
})

test('Set a custom HEAD route before GET one without disabling exposeHeadRoutes (route)', (t, done) => {
  t.plan(6)

  const fastify = Fastify()

  const resBuffer = Buffer.from('I am a coffee!')

  fastify.route({
    method: 'HEAD',
    path: '/one',
    handler: (req, reply) => {
      reply.header('content-type', 'application/pdf')
      reply.header('content-length', `${resBuffer.byteLength}`)
      reply.header('x-custom-header', 'some-custom-header')
      reply.send()
    }
  })

  fastify.route({
    method: 'GET',
    exposeHeadRoute: true,
    path: '/one',
    handler: (req, reply) => {
      return resBuffer
    }
  })

  fastify.inject({
    method: 'HEAD',
    url: '/one'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-type'], 'application/pdf')
    t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
    t.assert.strictEqual(res.headers['x-custom-header'], 'some-custom-header')
    t.assert.strictEqual(res.body, '')
    done()
  })
})

test('HEAD routes properly auto created for GET routes when prefixTrailingSlash: \'no-slash\'', (t, done) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.register(function routes (f, opts, next) {
    f.route({
      method: 'GET',
      url: '/',
      exposeHeadRoute: true,
      prefixTrailingSlash: 'no-slash',
      handler: (req, reply) => {
        reply.send({ hello: 'world' })
      }
    })

    next()
  }, { prefix: '/prefix' })

  fastify.inject({ url: '/prefix/prefix', method: 'HEAD' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    done()
  })
})

test('HEAD routes properly auto created for GET routes when prefixTrailingSlash: \'both\'', async t => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(function routes (f, opts, next) {
    f.route({
      method: 'GET',
      url: '/',
      exposeHeadRoute: true,
      prefixTrailingSlash: 'both',
      handler: (req, reply) => {
        reply.send({ hello: 'world' })
      }
    })

    next()
  }, { prefix: '/prefix' })

  const doublePrefixReply = await fastify.inject({ url: '/prefix/prefix', method: 'HEAD' })
  const trailingSlashReply = await fastify.inject({ url: '/prefix/', method: 'HEAD' })
  const noneTrailingReply = await fastify.inject({ url: '/prefix', method: 'HEAD' })

  t.assert.strictEqual(doublePrefixReply.statusCode, 404)
  t.assert.strictEqual(trailingSlashReply.statusCode, 200)
  t.assert.strictEqual(noneTrailingReply.statusCode, 200)
})

test('GET route with body schema should throw', t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.route({
      method: 'GET',
      path: '/get',
      schema: {
        body: {}
      },
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    })
  }, createError('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', 'Body validation schema for GET:/get route is not supported!')())
})

test('HEAD route with body schema should throw', t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.route({
      method: 'HEAD',
      path: '/shouldThrow',
      schema: {
        body: {}
      },
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    })
  }, createError('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', 'Body validation schema for HEAD:/shouldThrow route is not supported!')())
})

test('[HEAD, GET] route with body schema should throw', t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.route({
      method: ['HEAD', 'GET'],
      path: '/shouldThrowHead',
      schema: {
        body: {}
      },
      handler: function (req, reply) {
        reply.send({ hello: 'world' })
      }
    })
  }, createError('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', 'Body validation schema for HEAD:/shouldThrowHead route is not supported!')())
})

test('GET route with body schema should throw - shorthand', t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.get('/shouldThrow', {
      schema: {
        body: {}
      }
    },
    function (req, reply) {
      reply.send({ hello: 'world' })
    }
    )
  }, createError('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', 'Body validation schema for GET:/shouldThrow route is not supported!')())
})

test('HEAD route with body schema should throw - shorthand', t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.throws(() => {
    fastify.head('/shouldThrow2', {
      schema: {
        body: {}
      }
    },
    function (req, reply) {
      reply.send({ hello: 'world' })
    }
    )
  }, createError('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', 'Body validation schema for HEAD:/shouldThrow2 route is not supported!')())
})
