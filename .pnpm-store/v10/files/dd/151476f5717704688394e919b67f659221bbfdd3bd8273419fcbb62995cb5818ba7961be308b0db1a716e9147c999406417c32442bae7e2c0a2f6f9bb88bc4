'use strict'

const stream = require('node:stream')

const t = require('node:test')
const split = require('split2')
const pino = require('pino')

const Fastify = require('../../fastify')
const { on } = stream

t.test('logger options', { timeout: 60000 }, async (t) => {
  t.plan(16)

  await t.test('logger can be silenced', (t) => {
    t.plan(17)
    const fastify = Fastify({
      logger: false
    })
    t.after(() => fastify.close())
    t.assert.ok(fastify.log)
    t.assert.deepEqual(typeof fastify.log, 'object')
    t.assert.deepEqual(typeof fastify.log.fatal, 'function')
    t.assert.deepEqual(typeof fastify.log.error, 'function')
    t.assert.deepEqual(typeof fastify.log.warn, 'function')
    t.assert.deepEqual(typeof fastify.log.info, 'function')
    t.assert.deepEqual(typeof fastify.log.debug, 'function')
    t.assert.deepEqual(typeof fastify.log.trace, 'function')
    t.assert.deepEqual(typeof fastify.log.child, 'function')

    const childLog = fastify.log.child()

    t.assert.deepEqual(typeof childLog, 'object')
    t.assert.deepEqual(typeof childLog.fatal, 'function')
    t.assert.deepEqual(typeof childLog.error, 'function')
    t.assert.deepEqual(typeof childLog.warn, 'function')
    t.assert.deepEqual(typeof childLog.info, 'function')
    t.assert.deepEqual(typeof childLog.debug, 'function')
    t.assert.deepEqual(typeof childLog.trace, 'function')
    t.assert.deepEqual(typeof childLog.child, 'function')
  })

  await t.test('Should set a custom logLevel for a plugin', async (t) => {
    const lines = ['incoming request', 'Hello', 'request completed']
    t.plan(lines.length + 2)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'error' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      req.log.info('Not Exist') // we should not see this log
      reply.send({ hello: 'world' })
    })

    fastify.register(function (instance, opts, done) {
      instance.get('/plugin', (req, reply) => {
        req.log.info('Hello') // we should see this log
        reply.send({ hello: 'world' })
      })
      done()
    }, { logLevel: 'info' })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body.hello, 'world')
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/plugin' })
      const body = await response.json()
      t.assert.deepEqual(body.hello, 'world')
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set a custom logSerializers for a plugin', async (t) => {
    const lines = ['incoming request', 'XHello', 'request completed']
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'error' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.get('/plugin', (req, reply) => {
        req.log.info({ test: 'Hello' }) // we should see this log
        reply.send({ hello: 'world' })
      })
      done()
    }, { logLevel: 'info', logSerializers: { test: value => 'X' + value } })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/plugin' })
      const body = await response.json()
      t.assert.deepEqual(body.hello, 'world')
    }

    for await (const [line] of on(stream, 'data')) {
      // either test or msg
      t.assert.deepEqual(line.test || line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set a custom logLevel for every plugin', async (t) => {
    const lines = ['incoming request', 'info', 'request completed', 'incoming request', 'debug', 'request completed']
    t.plan(lines.length * 2 + 3)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'error' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      req.log.warn('Hello') // we should not see this log
      reply.send({ hello: 'world' })
    })

    fastify.register(function (instance, opts, done) {
      instance.get('/info', (req, reply) => {
        req.log.info('info') // we should see this log
        req.log.debug('hidden log')
        reply.send({ hello: 'world' })
      })
      done()
    }, { logLevel: 'info' })

    fastify.register(function (instance, opts, done) {
      instance.get('/debug', (req, reply) => {
        req.log.debug('debug') // we should see this log
        req.log.trace('hidden log')
        reply.send({ hello: 'world' })
      })
      done()
    }, { logLevel: 'debug' })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/info' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/debug' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(line.level === 30 || line.level === 20)
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set a custom logSerializers for every plugin', async (t) => {
    const lines = ['incoming request', 'Hello', 'request completed', 'incoming request', 'XHello', 'request completed', 'incoming request', 'ZHello', 'request completed']
    t.plan(lines.length + 3)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'info' }, stream)
    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/', (req, reply) => {
      req.log.warn({ test: 'Hello' })
      reply.send({ hello: 'world' })
    })

    fastify.register(function (instance, opts, done) {
      instance.get('/test1', (req, reply) => {
        req.log.info({ test: 'Hello' })
        reply.send({ hello: 'world' })
      })
      done()
    }, { logSerializers: { test: value => 'X' + value } })

    fastify.register(function (instance, opts, done) {
      instance.get('/test2', (req, reply) => {
        req.log.info({ test: 'Hello' })
        reply.send({ hello: 'world' })
      })
      done()
    }, { logSerializers: { test: value => 'Z' + value } })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/test1' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/test2' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.test || line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should override serializers from route', async (t) => {
    const lines = ['incoming request', 'ZHello', 'request completed']
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'info' }, stream)
    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.get('/', {
        logSerializers: {
          test: value => 'Z' + value // should override
        }
      }, (req, reply) => {
        req.log.info({ test: 'Hello' })
        reply.send({ hello: 'world' })
      })
      done()
    }, { logSerializers: { test: value => 'X' + value } })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.test || line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should override serializers from plugin', async (t) => {
    const lines = ['incoming request', 'ZHello', 'request completed']
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'info' }, stream)
    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.register(context1, {
        logSerializers: {
          test: value => 'Z' + value // should override
        }
      })
      done()
    }, { logSerializers: { test: value => 'X' + value } })

    function context1 (instance, opts, done) {
      instance.get('/', (req, reply) => {
        req.log.info({ test: 'Hello' })
        reply.send({ hello: 'world' })
      })
      done()
    }

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.test || line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should increase the log level for a specific plugin', async (t) => {
    const lines = ['Hello']
    t.plan(lines.length * 2 + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'info' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.get('/', (req, reply) => {
        req.log.error('Hello') // we should see this log
        reply.send({ hello: 'world' })
      })
      done()
    }, { logLevel: 'error' })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.level, 50)
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set the log level for the customized 404 handler', async (t) => {
    const lines = ['Hello']
    t.plan(lines.length * 2 + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'warn' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.setNotFoundHandler(function (req, reply) {
        req.log.error('Hello')
        reply.code(404).send()
      })
      done()
    }, { logLevel: 'error' })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      t.assert.deepEqual(response.statusCode, 404)
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.level, 50)
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set the log level for the customized 500 handler', async (t) => {
    const lines = ['Hello']
    t.plan(lines.length * 2 + 1)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'warn' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.register(function (instance, opts, done) {
      instance.get('/', (req, reply) => {
        req.log.error('kaboom')
        reply.send(new Error('kaboom'))
      })

      instance.setErrorHandler(function (e, request, reply) {
        reply.log.fatal('Hello')
        reply.code(500).send()
      })
      done()
    }, { logLevel: 'fatal' })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/' })
      t.assert.deepEqual(response.statusCode, 500)
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.level, 60)
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('Should set a custom log level for a specific route', async (t) => {
    const lines = ['incoming request', 'Hello', 'request completed']
    t.plan(lines.length + 2)

    const stream = split(JSON.parse)

    const loggerInstance = pino({ level: 'error' }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/log', { logLevel: 'info' }, (req, reply) => {
      req.log.info('Hello')
      reply.send({ hello: 'world' })
    })

    fastify.get('/no-log', (req, reply) => {
      req.log.info('Hello')
      reply.send({ hello: 'world' })
    })

    await fastify.ready()

    {
      const response = await fastify.inject({ method: 'GET', url: '/log' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    {
      const response = await fastify.inject({ method: 'GET', url: '/no-log' })
      const body = await response.json()
      t.assert.deepEqual(body, { hello: 'world' })
    }

    for await (const [line] of on(stream, 'data')) {
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })

  await t.test('should pass when using unWritable props in the logger option', (t) => {
    t.plan(8)
    const fastify = Fastify({
      logger: Object.defineProperty({}, 'level', { value: 'info' })
    })
    t.after(() => fastify.close())

    t.assert.deepEqual(typeof fastify.log, 'object')
    t.assert.deepEqual(typeof fastify.log.fatal, 'function')
    t.assert.deepEqual(typeof fastify.log.error, 'function')
    t.assert.deepEqual(typeof fastify.log.warn, 'function')
    t.assert.deepEqual(typeof fastify.log.info, 'function')
    t.assert.deepEqual(typeof fastify.log.debug, 'function')
    t.assert.deepEqual(typeof fastify.log.trace, 'function')
    t.assert.deepEqual(typeof fastify.log.child, 'function')
  })

  await t.test('Should throw an error if logger instance is passed to `logger`', async (t) => {
    t.plan(2)
    const stream = split(JSON.parse)

    const logger = require('pino')(stream)

    try {
      Fastify({ logger })
    } catch (err) {
      t.assert.ok(err)
      t.assert.deepEqual(err.code, 'FST_ERR_LOG_INVALID_LOGGER_CONFIG')
    }
  })

  await t.test('Should throw an error if options are passed to `loggerInstance`', async (t) => {
    t.plan(2)
    try {
      Fastify({ loggerInstance: { level: 'log' } })
    } catch (err) {
      t.assert.ok(err)
      t.assert.strictEqual(err.code, 'FST_ERR_LOG_INVALID_LOGGER_INSTANCE')
    }
  })

  await t.test('If both `loggerInstance` and `logger` are provided, an error should be thrown', async (t) => {
    t.plan(2)
    const loggerInstanceStream = split(JSON.parse)
    const loggerInstance = pino({ level: 'error' }, loggerInstanceStream)
    const loggerStream = split(JSON.parse)
    try {
      Fastify({
        logger: {
          stream: loggerStream,
          level: 'info'
        },
        loggerInstance
      })
    } catch (err) {
      t.assert.ok(err)
      t.assert.deepEqual(err.code, 'FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED')
    }
  })

  await t.test('`logger` should take pino configuration and create a pino logger', async (t) => {
    const lines = ['hello', 'world']
    t.plan(2 * lines.length + 2)
    const loggerStream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream: loggerStream,
        level: 'error'
      }
    })
    t.after(() => fastify.close())
    fastify.get('/hello', (req, reply) => {
      req.log.error('hello')
      reply.code(404).send()
    })

    fastify.get('/world', (req, reply) => {
      req.log.error('world')
      reply.code(201).send()
    })

    await fastify.ready()
    {
      const response = await fastify.inject({ method: 'GET', url: '/hello' })
      t.assert.deepEqual(response.statusCode, 404)
    }
    {
      const response = await fastify.inject({ method: 'GET', url: '/world' })
      t.assert.deepEqual(response.statusCode, 201)
    }

    for await (const [line] of on(loggerStream, 'data')) {
      t.assert.deepEqual(line.level, 50)
      t.assert.deepEqual(line.msg, lines.shift())
      if (lines.length === 0) break
    }
  })
})
