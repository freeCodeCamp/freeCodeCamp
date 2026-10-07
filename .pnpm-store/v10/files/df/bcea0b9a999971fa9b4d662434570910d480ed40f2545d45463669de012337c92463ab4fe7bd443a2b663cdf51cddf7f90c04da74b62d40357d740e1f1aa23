'use strict'

const stream = require('node:stream')
const os = require('node:os')
const fs = require('node:fs')

const t = require('node:test')
const split = require('split2')

const { streamSym } = require('pino/lib/symbols')

const Fastify = require('../../fastify')
const helper = require('../helper')
const { FST_ERR_LOG_INVALID_LOGGER } = require('../../lib/errors')
const { once, on } = stream
const { createTempFile, request } = require('./logger-test-utils')
const { partialDeepStrictEqual } = require('../toolkit')

t.test('logger instantiation', { timeout: 60000 }, async (t) => {
  let localhost
  let localhostForURL

  t.plan(11)
  t.before(async function () {
    [localhost, localhostForURL] = await helper.getLoopbackHost()
  })

  await t.test('can use external logger instance', async (t) => {
    const lines = [/^Server listening at /, /^incoming request$/, /^log success$/, /^request completed$/]
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)

    const loggerInstance = require('pino')(stream)

    const fastify = Fastify({ loggerInstance })
    t.after(() => fastify.close())

    fastify.get('/foo', function (req, reply) {
      t.assert.ok(req.log)
      req.log.info('log success')
      reply.send({ hello: 'world' })
    })

    await fastify.listen({ port: 0, host: localhost })

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/foo')

    for await (const [line] of on(stream, 'data')) {
      const regex = lines.shift()
      t.assert.ok(regex.test(line.msg), '"' + line.msg + '" does not match "' + regex + '"')
      if (lines.length === 0) break
    }
  })

  await t.test('should create a default logger if provided one is invalid', (t) => {
    t.plan(8)

    const logger = new Date()

    const fastify = Fastify({ logger })
    t.after(() => fastify.close())

    t.assert.strictEqual(typeof fastify.log, 'object')
    t.assert.strictEqual(typeof fastify.log.fatal, 'function')
    t.assert.strictEqual(typeof fastify.log.error, 'function')
    t.assert.strictEqual(typeof fastify.log.warn, 'function')
    t.assert.strictEqual(typeof fastify.log.info, 'function')
    t.assert.strictEqual(typeof fastify.log.debug, 'function')
    t.assert.strictEqual(typeof fastify.log.trace, 'function')
    t.assert.strictEqual(typeof fastify.log.child, 'function')
  })

  await t.test('expose the logger', async (t) => {
    t.plan(2)
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    await fastify.ready()

    t.assert.ok(fastify.log)
    t.assert.strictEqual(typeof fastify.log, 'object')
  })

  const interfaces = os.networkInterfaces()
  const ipv6 = Object.keys(interfaces)
    .filter(name => name.substr(0, 2) === 'lo')
    .map(name => interfaces[name])
    .reduce((list, set) => list.concat(set), [])
    .filter(info => info.family === 'IPv6')
    .map(info => info.address)
    .shift()

  await t.test('Wrap IPv6 address in listening log message', { skip: !ipv6 }, async (t) => {
    t.plan(1)

    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    await fastify.ready()
    await fastify.listen({ port: 0, host: ipv6 })

    {
      const [line] = await once(stream, 'data')
      t.assert.strictEqual(line.msg, `Server listening at http://[${ipv6}]:${fastify.server.address().port}`)
    }
  })

  await t.test('Do not wrap IPv4 address', async (t) => {
    t.plan(1)
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info'
      }
    })
    t.after(() => fastify.close())

    await fastify.ready()
    await fastify.listen({ port: 0, host: '127.0.0.1' })

    {
      const [line] = await once(stream, 'data')
      t.assert.strictEqual(line.msg, `Server listening at http://127.0.0.1:${fastify.server.address().port}`)
    }
  })

  await t.test('file option', async (t) => {
    const { file, cleanup } = createTempFile(t)
    // 0600 permissions (read/write for owner only)
    if (process.env.CITGM) { fs.writeFileSync(file, '', { mode: 0o600 }) }

    const fastify = Fastify({
      logger: { file }
    })

    t.after(async () => {
      await helper.sleep(250)
      // may fail on win
      try {
        // cleanup the file after sonic-boom closed
        // otherwise we may face racing condition
        fastify.log[streamSym].once('close', cleanup)
        // we must flush the stream ourself
        // otherwise buffer may whole sonic-boom
        fastify.log[streamSym].flushSync()
        // end after flushing to actually close file
        fastify.log[streamSym].end()
      } catch (err) {
        console.warn(err)
      }
    })
    t.after(() => fastify.close())

    fastify.get('/', function (req, reply) {
      t.assert.ok(req.log)
      reply.send({ hello: 'world' })
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { req: { method: 'GET', url: '/' }, msg: 'incoming request' },
      { res: { statusCode: 200 }, msg: 'request completed' }
    ]
    await request(`http://${localhostForURL}:` + fastify.server.address().port)

    await helper.sleep(250)

    const log = fs.readFileSync(file, 'utf8').split('\n')
    // strip last line
    log.pop()

    let id
    for (let line of log) {
      line = JSON.parse(line)
      if (id === undefined && line.reqId) id = line.reqId
      if (id !== undefined && line.reqId) t.assert.strictEqual(line.reqId, id)
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
    }
  })

  await t.test('should be able to use a custom logger', (t) => {
    t.plan(7)

    const loggerInstance = {
      fatal: (msg) => { t.assert.strictEqual(msg, 'fatal') },
      error: (msg) => { t.assert.strictEqual(msg, 'error') },
      warn: (msg) => { t.assert.strictEqual(msg, 'warn') },
      info: (msg) => { t.assert.strictEqual(msg, 'info') },
      debug: (msg) => { t.assert.strictEqual(msg, 'debug') },
      trace: (msg) => { t.assert.strictEqual(msg, 'trace') },
      child: () => loggerInstance
    }

    const fastify = Fastify({ loggerInstance })
    t.after(() => fastify.close())

    fastify.log.fatal('fatal')
    fastify.log.error('error')
    fastify.log.warn('warn')
    fastify.log.info('info')
    fastify.log.debug('debug')
    fastify.log.trace('trace')
    const child = fastify.log.child()
    t.assert.strictEqual(child, loggerInstance)
  })

  await t.test('should throw in case a partially matching logger is provided', async (t) => {
    t.plan(1)

    try {
      const fastify = Fastify({ logger: console })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(
        err instanceof FST_ERR_LOG_INVALID_LOGGER,
        true,
        "Invalid logger object provided. The logger instance should have these functions(s): 'fatal,child'."
      )
    }
  })

  await t.test('can use external logger instance with custom serializer', async (t) => {
    const lines = [['level', 30], ['req', { url: '/foo' }], ['level', 30], ['res', { statusCode: 200 }]]
    t.plan(lines.length + 1)

    const stream = split(JSON.parse)
    const loggerInstance = require('pino')({
      level: 'info',
      serializers: {
        req: function (req) {
          return {
            url: req.url
          }
        }
      }
    }, stream)

    const fastify = Fastify({
      loggerInstance
    })
    t.after(() => fastify.close())

    fastify.get('/foo', function (req, reply) {
      t.assert.ok(req.log)
      req.log.info('log success')
      reply.send({ hello: 'world' })
    })

    await fastify.ready()
    await fastify.listen({ port: 0, host: localhost })

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/foo')

    for await (const [line] of on(stream, 'data')) {
      const check = lines.shift()
      const key = check[0]
      const value = check[1]
      t.assert.deepStrictEqual(line[key], value)
      if (lines.length === 0) break
    }
  })

  await t.test('The logger should accept custom serializer', async (t) => {
    const stream = split(JSON.parse)
    const fastify = Fastify({
      logger: {
        stream,
        level: 'info',
        serializers: {
          req: function (req) {
            return {
              url: req.url
            }
          }
        }
      }
    })
    t.after(() => fastify.close())

    fastify.get('/custom', function (req, reply) {
      t.assert.ok(req.log)
      reply.send(new Error('kaboom'))
    })

    await fastify.ready()
    const server = await fastify.listen({ port: 0, host: localhost })
    const lines = [
      { msg: `Server listening at ${server}` },
      { req: { url: '/custom' }, msg: 'incoming request' },
      { res: { statusCode: 500 }, msg: 'kaboom' },
      { res: { statusCode: 500 }, msg: 'request completed' }
    ]
    t.plan(lines.length + 1)

    await request(`http://${localhostForURL}:` + fastify.server.address().port + '/custom')

    for await (const [line] of on(stream, 'data')) {
      t.assert.ok(partialDeepStrictEqual(line, lines.shift()))
      if (lines.length === 0) break
    }
  })

  await t.test('should throw in case the external logger provided does not have a child method', async (t) => {
    t.plan(1)
    const loggerInstance = {
      info: console.info,
      error: console.error,
      debug: console.debug,
      fatal: console.error,
      warn: console.warn,
      trace: console.trace
    }

    try {
      const fastify = Fastify({ logger: loggerInstance })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(
        err instanceof FST_ERR_LOG_INVALID_LOGGER,
        true,
        "Invalid logger object provided. The logger instance should have these functions(s): 'child'."
      )
    }
  })
})
