'use strict'

const { test, before } = require('node:test')
const Fastify = require('../..')
const helper = require('../helper')
const http = require('node:http')
const pino = require('pino')
const split = require('split2')
const deepClone = require('rfdc')({ circles: true, proto: false })
const { deepFreezeObject } = require('../../lib/initial-config-validation').utils

const { buildCertificate } = require('../build-certificate')

process.removeAllListeners('warning')

let localhost
let localhostForURL

before(async function () {
  await buildCertificate();
  [localhost, localhostForURL] = await helper.getLoopbackHost()
})

test('Fastify.initialConfig is an object', t => {
  t.plan(1)
  t.assert.ok(typeof Fastify().initialConfig === 'object')
})

test('without options passed to Fastify, initialConfig should expose default values', t => {
  t.plan(1)

  const fastifyDefaultOptions = {
    connectionTimeout: 0,
    keepAliveTimeout: 72000,
    maxRequestsPerSocket: 0,
    requestTimeout: 0,
    handlerTimeout: 0,
    bodyLimit: 1024 * 1024,
    caseSensitive: true,
    allowUnsafeRegex: false,
    disableRequestLogging: false,
    ignoreTrailingSlash: false,
    ignoreDuplicateSlashes: false,
    maxParamLength: 100,
    onProtoPoisoning: 'error',
    onConstructorPoisoning: 'error',
    pluginTimeout: 10000,
    requestIdHeader: false,
    requestIdLogLabel: 'reqId',
    http2SessionTimeout: 72000,
    exposeHeadRoutes: true,
    useSemicolonDelimiter: false
  }

  t.assert.deepStrictEqual(Fastify().initialConfig, fastifyDefaultOptions)
})

test('Fastify.initialConfig should expose all options', t => {
  t.plan(22)

  const serverFactory = (handler, opts) => {
    const server = http.createServer((req, res) => {
      handler(req, res)
    })

    return server
  }

  const versionStrategy = {
    name: 'version',
    storage: function () {
      const versions = {}
      return {
        get: (version) => { return versions[version] || null },
        set: (version, store) => { versions[version] = store }
      }
    },
    deriveConstraint: (req, ctx) => {
      return req.headers.accept
    },
    validate () { return true }
  }

  let reqId = 0
  const options = {
    http2: true,
    https: {
      key: global.context.key,
      cert: global.context.cert
    },
    ignoreTrailingSlash: true,
    ignoreDuplicateSlashes: true,
    maxParamLength: 200,
    connectionTimeout: 0,
    keepAliveTimeout: 72000,
    bodyLimit: 1049600,
    onProtoPoisoning: 'remove',
    serverFactory,
    caseSensitive: true,
    allowUnsafeRegex: false,
    requestIdHeader: 'request-id-alt',
    pluginTimeout: 20000,
    useSemicolonDelimiter: false,
    querystringParser: str => str,
    genReqId: function (req) {
      return reqId++
    },
    loggerInstance: pino({ level: 'info' }),
    constraints: {
      version: versionStrategy
    },
    trustProxy: function myTrustFn (address, hop) {
      return address === '1.2.3.4' || hop === 1
    }
  }

  const fastify = Fastify(options)
  t.assert.strictEqual(fastify.initialConfig.http2, true)
  t.assert.strictEqual(fastify.initialConfig.https, true, 'for security reason the key cert is hidden')
  t.assert.strictEqual(fastify.initialConfig.ignoreTrailingSlash, true)
  t.assert.strictEqual(fastify.initialConfig.ignoreDuplicateSlashes, true)
  t.assert.strictEqual(fastify.initialConfig.maxParamLength, 200)
  t.assert.strictEqual(fastify.initialConfig.connectionTimeout, 0)
  t.assert.strictEqual(fastify.initialConfig.keepAliveTimeout, 72000)
  t.assert.strictEqual(fastify.initialConfig.bodyLimit, 1049600)
  t.assert.strictEqual(fastify.initialConfig.onProtoPoisoning, 'remove')
  t.assert.strictEqual(fastify.initialConfig.caseSensitive, true)
  t.assert.strictEqual(fastify.initialConfig.useSemicolonDelimiter, false)
  t.assert.strictEqual(fastify.initialConfig.allowUnsafeRegex, false)
  t.assert.strictEqual(fastify.initialConfig.requestIdHeader, 'request-id-alt')
  t.assert.strictEqual(fastify.initialConfig.pluginTimeout, 20000)
  t.assert.ok(fastify.initialConfig.constraints.version)

  // obfuscated options:
  t.assert.strictEqual(fastify.initialConfig.serverFactory, undefined)
  t.assert.strictEqual(fastify.initialConfig.trustProxy, undefined)
  t.assert.strictEqual(fastify.initialConfig.genReqId, undefined)
  t.assert.strictEqual(fastify.initialConfig.childLoggerFactory, undefined)
  t.assert.strictEqual(fastify.initialConfig.querystringParser, undefined)
  t.assert.strictEqual(fastify.initialConfig.logger, undefined)
  t.assert.strictEqual(fastify.initialConfig.trustProxy, undefined)
})

test('Should throw if you try to modify Fastify.initialConfig', t => {
  t.plan(4)

  const fastify = Fastify({ ignoreTrailingSlash: true })
  try {
    fastify.initialConfig.ignoreTrailingSlash = false
    t.assert.fail()
  } catch (error) {
    t.assert.ok(error instanceof TypeError)
    t.assert.strictEqual(error.message, "Cannot assign to read only property 'ignoreTrailingSlash' of object '#<Object>'")
    t.assert.ok(error.stack)
    t.assert.ok(true)
  }
})

test('We must avoid shallow freezing and ensure that the whole object is freezed', t => {
  t.plan(4)

  const fastify = Fastify({
    https: {
      allowHTTP1: true,
      key: global.context.key,
      cert: global.context.cert
    }
  })

  try {
    fastify.initialConfig.https.allowHTTP1 = false
    t.assert.fail()
  } catch (error) {
    t.assert.ok(error instanceof TypeError)
    t.assert.strictEqual(error.message, "Cannot assign to read only property 'allowHTTP1' of object '#<Object>'")
    t.assert.ok(error.stack)
    t.assert.deepStrictEqual(fastify.initialConfig.https, {
      allowHTTP1: true
    }, 'key cert removed')
  }
})

test('https value check', t => {
  t.plan(1)

  const fastify = Fastify({})
  t.assert.ok(!fastify.initialConfig.https)
})

test('Return an error if options do not match the validation schema', t => {
  t.plan(6)

  try {
    Fastify({ ignoreTrailingSlash: 'string instead of boolean' })

    t.assert.fail()
  } catch (error) {
    t.assert.ok(error instanceof Error)
    t.assert.strictEqual(error.name, 'FastifyError')
    t.assert.strictEqual(error.message, 'Invalid initialization options: \'["must be boolean"]\'')
    t.assert.strictEqual(error.code, 'FST_ERR_INIT_OPTS_INVALID')
    t.assert.ok(error.stack)
    t.assert.ok(true)
  }
})

test('Original options must not be frozen', t => {
  t.plan(4)

  const originalOptions = {
    https: {
      allowHTTP1: true,
      key: global.context.key,
      cert: global.context.cert
    }
  }

  const fastify = Fastify(originalOptions)

  t.assert.strictEqual(Object.isFrozen(originalOptions), false)
  t.assert.strictEqual(Object.isFrozen(originalOptions.https), false)
  t.assert.strictEqual(Object.isFrozen(fastify.initialConfig), true)
  t.assert.strictEqual(Object.isFrozen(fastify.initialConfig.https), true)
})

test('Original options must not be altered (test deep cloning)', t => {
  t.plan(3)

  const originalOptions = {
    https: {
      allowHTTP1: true,
      key: global.context.key,
      cert: global.context.cert
    }
  }

  const originalOptionsClone = deepClone(originalOptions)

  const fastify = Fastify(originalOptions)

  // initialConfig has been triggered
  t.assert.strictEqual(Object.isFrozen(fastify.initialConfig), true)

  // originalOptions must not have been altered
  t.assert.deepStrictEqual(originalOptions.https.key, originalOptionsClone.https.key)
  t.assert.deepStrictEqual(originalOptions.https.cert, originalOptionsClone.https.cert)
})

test('Should not have issues when passing stream options to Pino.js', (t, done) => {
  t.plan(17)

  const stream = split(JSON.parse)

  const originalOptions = {
    ignoreTrailingSlash: true,
    logger: {
      level: 'trace',
      stream
    }
  }

  let fastify

  try {
    fastify = Fastify(originalOptions)
    fastify.setChildLoggerFactory(function (logger, bindings, opts) {
      bindings.someBinding = 'value'
      return logger.child(bindings, opts)
    })

    t.assert.ok(typeof fastify === 'object')
    t.assert.deepStrictEqual(fastify.initialConfig, {
      connectionTimeout: 0,
      keepAliveTimeout: 72000,
      maxRequestsPerSocket: 0,
      requestTimeout: 0,
      handlerTimeout: 0,
      bodyLimit: 1024 * 1024,
      caseSensitive: true,
      allowUnsafeRegex: false,
      disableRequestLogging: false,
      ignoreTrailingSlash: true,
      ignoreDuplicateSlashes: false,
      maxParamLength: 100,
      onProtoPoisoning: 'error',
      onConstructorPoisoning: 'error',
      pluginTimeout: 10000,
      requestIdHeader: false,
      requestIdLogLabel: 'reqId',
      http2SessionTimeout: 72000,
      exposeHeadRoutes: true,
      useSemicolonDelimiter: false
    })
  } catch (error) {
    t.assert.fail()
  }

  fastify.get('/', function (req, reply) {
    t.assert.ok(req.log)
    reply.send({ hello: 'world' })
  })

  stream.once('data', listenAtLogLine => {
    t.assert.ok(listenAtLogLine, 'listen at log message is ok')

    stream.once('data', line => {
      const id = line.reqId
      t.assert.ok(line.reqId, 'reqId is defined')
      t.assert.strictEqual(line.someBinding, 'value', 'child logger binding is set')
      t.assert.ok(line.req, 'req is defined')
      t.assert.strictEqual(line.msg, 'incoming request', 'message is set')
      t.assert.strictEqual(line.req.method, 'GET', 'method is get')

      stream.once('data', line => {
        t.assert.strictEqual(line.reqId, id)
        t.assert.ok(line.reqId, 'reqId is defined')
        t.assert.strictEqual(line.someBinding, 'value', 'child logger binding is set')
        t.assert.ok(line.res, 'res is defined')
        t.assert.strictEqual(line.msg, 'request completed', 'message is set')
        t.assert.strictEqual(line.res.statusCode, 200, 'statusCode is 200')
        t.assert.ok(line.responseTime, 'responseTime is defined')
      })
    })
  })

  fastify.listen({ port: 0, host: localhost }, err => {
    t.assert.ifError(err)
    t.after(() => { fastify.close() })

    http.get(`http://${localhostForURL}:${fastify.server.address().port}`, () => {
      done()
    })
  })
})

test('deepFreezeObject() should not throw on TypedArray', t => {
  t.plan(5)

  const object = {
    buffer: Buffer.from(global.context.key),
    dataView: new DataView(new ArrayBuffer(16)),
    float: 1.1,
    integer: 1,
    object: {
      nested: { string: 'string' }
    },
    stream: split(JSON.parse),
    string: 'string'
  }

  try {
    const frozenObject = deepFreezeObject(object)

    // Buffers should not be frozen, as they are Uint8Array inherited instances
    t.assert.strictEqual(Object.isFrozen(frozenObject.buffer), false)

    t.assert.strictEqual(Object.isFrozen(frozenObject), true)
    t.assert.strictEqual(Object.isFrozen(frozenObject.object), true)
    t.assert.strictEqual(Object.isFrozen(frozenObject.object.nested), true)

    t.assert.ok(true)
  } catch (error) {
    t.assert.fail()
  }
})

test('pluginTimeout should be parsed correctly', t => {
  const withDisabledTimeout = Fastify({ pluginTimeout: '0' })
  t.assert.strictEqual(withDisabledTimeout.initialConfig.pluginTimeout, 0)
  const withInvalidTimeout = Fastify({ pluginTimeout: undefined })
  t.assert.strictEqual(withInvalidTimeout.initialConfig.pluginTimeout, 10000)
})

test('Should not mutate the options object outside Fastify', async t => {
  const options = Object.freeze({})

  try {
    Fastify(options)
    t.assert.ok(true)
  } catch (error) {
    t.assert.fail(error.message)
  }
})
