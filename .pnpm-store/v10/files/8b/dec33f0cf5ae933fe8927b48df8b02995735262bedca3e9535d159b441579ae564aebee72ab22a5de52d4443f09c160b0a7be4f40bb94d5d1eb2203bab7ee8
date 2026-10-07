'use strict'

const { Readable } = require('node:stream')
const { test, describe } = require('node:test')
const Fastify = require('../fastify')
const fs = require('node:fs')
const { sleep } = require('./helper')
const { waitForCb } = require('./toolkit')

process.removeAllListeners('warning')

test('async hooks', async t => {
  t.plan(20)
  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.addHook('onRequest', async function (request, reply) {
    await sleep(1)
    request.test = 'the request is coming'
    reply.test = 'the reply has come'
    if (request.raw.method === 'DELETE') {
      throw new Error('some error')
    }
  })

  fastify.addHook('preHandler', async function (request, reply) {
    await sleep(1)
    t.assert.strictEqual(request.test, 'the request is coming')
    t.assert.strictEqual(reply.test, 'the reply has come')
    if (request.raw.method === 'HEAD') {
      throw new Error('some error')
    }
  })

  fastify.addHook('onSend', async function (request, reply, payload) {
    await sleep(1)
    t.assert.ok('onSend called')
  })

  const completion = waitForCb({
    steps: 6
  })
  fastify.addHook('onResponse', async function (request, reply) {
    await sleep(1)
    t.assert.ok('onResponse called')
    completion.stepIn()
  })

  fastify.get('/', function (request, reply) {
    t.assert.strictEqual(request.test, 'the request is coming')
    t.assert.strictEqual(reply.test, 'the reply has come')
    reply.code(200).send({ hello: 'world' })
  })

  fastify.head('/', function (req, reply) {
    reply.code(200).send({ hello: 'world' })
  })

  fastify.delete('/', function (req, reply) {
    reply.code(200).send({ hello: 'world' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const response1 = await fetch(fastifyServer, {
    method: 'GET'
  })
  t.assert.ok(response1.ok)
  t.assert.strictEqual(response1.status, 200)
  const body1 = await response1.text()
  t.assert.strictEqual(response1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'world' })
  completion.stepIn()

  const response2 = await fetch(fastifyServer, {
    method: 'HEAD'
  })
  t.assert.ok(!response2.ok)
  t.assert.strictEqual(response2.status, 500)
  completion.stepIn()

  const response3 = await fetch(fastifyServer, {
    method: 'DELETE'
  })
  t.assert.ok(!response3.ok)
  t.assert.strictEqual(response3.status, 500)
  completion.stepIn()

  return completion.patience
})

test('modify payload', (t, testDone) => {
  t.plan(10)
  const fastify = Fastify()
  const payload = { hello: 'world' }
  const modifiedPayload = { hello: 'modified' }
  const anotherPayload = '"winter is coming"'

  fastify.addHook('onSend', async function (request, reply, thePayload) {
    t.assert.ok('onSend called')
    t.assert.deepStrictEqual(JSON.parse(thePayload), payload)
    return thePayload.replace('world', 'modified')
  })

  fastify.addHook('onSend', async function (request, reply, thePayload) {
    t.assert.ok('onSend called')
    t.assert.deepStrictEqual(JSON.parse(thePayload), modifiedPayload)
    return anotherPayload
  })

  fastify.addHook('onSend', async function (request, reply, thePayload) {
    t.assert.ok('onSend called')
    t.assert.deepStrictEqual(thePayload, anotherPayload)
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

test('onRequest hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', async (req, reply) => {
    await reply.send('hello')
  })

  fastify.addHook('onRequest', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.ok('called')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

test('preParsing hooks should be able to modify the payload', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    const stream = new Readable()

    stream.receivedEncodedLength = parseInt(req.headers['content-length'], 10)
    stream.push(JSON.stringify({ hello: 'another world' }))
    stream.push(null)

    return stream
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
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'another world' })
    testDone()
  })
})

test('preParsing hooks should be able to supply statusCode', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    const stream = new Readable({
      read () {
        const error = new Error('kaboom')
        error.statusCode = 408
        this.destroy(error)
      }
    })
    stream.receivedEncodedLength = 20
    return stream
  })

  fastify.addHook('onError', async (req, res, err) => {
    t.assert.strictEqual(err.statusCode, 408)
  })

  fastify.post('/', function (request, reply) {
    t.assert.fail('should not be called')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 408)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 408,
      error: 'Request Timeout',
      message: 'kaboom'
    })

    testDone()
  })
})

test('preParsing hooks should ignore statusCode 200 in stream error', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    const stream = new Readable({
      read () {
        const error = new Error('kaboom')
        error.statusCode = 200
        this.destroy(error)
      }
    })
    stream.receivedEncodedLength = 20
    return stream
  })

  fastify.addHook('onError', async (req, res, err) => {
    t.assert.strictEqual(err.statusCode, 400)
  })

  fastify.post('/', function (request, reply) {
    t.assert.fail('should not be called')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 400,
      error: 'Bad Request',
      message: 'kaboom'
    })
    testDone()
  })
})

test('preParsing hooks should ignore non-number statusCode in stream error', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    const stream = new Readable({
      read () {
        const error = new Error('kaboom')
        error.statusCode = '418'
        this.destroy(error)
      }
    })
    stream.receivedEncodedLength = 20
    return stream
  })

  fastify.addHook('onError', async (req, res, err) => {
    t.assert.strictEqual(err.statusCode, 400)
  })

  fastify.post('/', function (request, reply) {
    t.assert.fail('should not be called')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 400,
      error: 'Bad Request',
      message: 'kaboom'
    })
    testDone()
  })
})

test('preParsing hooks should default to statusCode 400 if stream error', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    const stream = new Readable({
      read () {
        this.destroy(new Error('kaboom'))
      }
    })
    stream.receivedEncodedLength = 20
    return stream
  })

  fastify.addHook('onError', async (req, res, err) => {
    t.assert.strictEqual(err.statusCode, 400)
  })

  fastify.post('/', function (request, reply) {
    t.assert.fail('should not be called')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 400)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 400,
      error: 'Bad Request',
      message: 'kaboom'
    })
    testDone()
  })
})

test('preParsing hooks should handle errors', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.addHook('preParsing', async (req, reply, payload) => {
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

test('preHandler hooks should be able to block a request', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('preHandler', async (req, reply) => {
    await reply.send('hello')
  })

  fastify.addHook('preHandler', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.strictEqual(payload, 'hello')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

  fastify.addHook('preValidation', async (req, reply) => {
    await reply.send('hello')
  })

  fastify.addHook('preValidation', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.strictEqual(payload, 'hello')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

  fastify.addHook('preValidation', async (req, _reply) => {
    const buff = Buffer.from(req.body.message, 'base64')
    req.body = JSON.parse(buff.toString('utf-8'))
    t.assert.ok('has been called')
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

test('preSerialization hooks should be able to modify the payload', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preSerialization', async (req, reply, payload) => {
    return { hello: 'another world' }
  })

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'another world' })
    testDone()
  })
})

test('preSerialization hooks should handle errors', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preSerialization', async (req, reply, payload) => {
    throw new Error('kaboom')
  })

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { error: 'Internal Server Error', message: 'kaboom', statusCode: 500 })
    testDone()
  })
})

test('preValidation hooks should handle throwing null', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.setErrorHandler(async (error, request, reply) => {
    t.assert.ok(error instanceof Error)
    await reply.send(error)
  })

  fastify.addHook('preValidation', async () => {
    // eslint-disable-next-line no-throw-literal
    throw null
  })

  fastify.get('/', function (request, reply) { t.assert.fail('the handler must not be called') })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.deepStrictEqual(res.json(), {
      error: 'Internal Server Error',
      code: 'FST_ERR_SEND_UNDEFINED_ERR',
      message: 'Undefined error has occurred',
      statusCode: 500
    })
    testDone()
  })
})

test('preValidation hooks should handle throwing a string', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preValidation', async () => {
    // eslint-disable-next-line no-throw-literal
    throw 'this is an error'
  })

  fastify.get('/', function (request, reply) { t.assert.fail('the handler must not be called') })

  fastify.inject({
    url: '/',
    method: 'GET'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    t.assert.strictEqual(res.payload, 'this is an error')
    testDone()
  })
})

test('onRequest hooks should be able to block a request (last hook)', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify()

  fastify.addHook('onRequest', async (req, reply) => {
    await reply.send('hello')
  })

  fastify.addHook('preHandler', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.ok('called')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

  fastify.addHook('preHandler', async (req, reply) => {
    await reply.send('hello')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.strictEqual(payload, 'hello')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

test('onRequest respond with a stream', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.addHook('onRequest', async (req, reply) => {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(__filename, 'utf8')
      // stream.pipe(res)
      // res.once('finish', resolve)
      reply.send(stream).then(() => {
        reply.raw.once('finish', () => resolve())
      })
    })
  })

  fastify.addHook('onRequest', async (req, res) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('preHandler', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.ok('called')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

  fastify.addHook('onRequest', async (req, res) => {
    t.assert.ok('called')
  })

  // we are calling `reply.send` inside the `preHandler` hook with a stream,
  // this triggers the `onSend` hook event if `preHandler` has not yet finished
  const order = [1, 2]

  fastify.addHook('preHandler', async (req, reply) => {
    const stream = fs.createReadStream(__filename, 'utf8')
    reply.raw.once('finish', () => {
      t.assert.strictEqual(order.shift(), 2)
    })
    return reply.send(stream)
  })

  fastify.addHook('preHandler', async (req, reply) => {
    t.assert.fail('this should not be called')
  })

  fastify.addHook('onSend', async (req, reply, payload) => {
    t.assert.strictEqual(order.shift(), 1)
    t.assert.strictEqual(typeof payload.pipe, 'function')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    t.assert.ok('called')
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

describe('Should log a warning if is an async function with `done`', () => {
  test('2 arguments', t => {
    const fastify = Fastify()

    try {
      fastify.addHook('onRequestAbort', async (req, done) => {
        t.assert.fail('should have not be called')
      })
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
      t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
    }
  })

  test('3 arguments', t => {
    const fastify = Fastify()

    try {
      fastify.addHook('onRequest', async (req, reply, done) => {
        t.assert.fail('should have not be called')
      })
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
      t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
    }
  })

  test('4 arguments', t => {
    const fastify = Fastify()

    try {
      fastify.addHook('onSend', async (req, reply, payload, done) => {
        t.assert.fail('should have not be called')
      })
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
      t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
    }
    try {
      fastify.addHook('preSerialization', async (req, reply, payload, done) => {
        t.assert.fail('should have not be called')
      })
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
      t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
    }
    try {
      fastify.addHook('onError', async (req, reply, payload, done) => {
        t.assert.fail('should have not be called')
      })
    } catch (e) {
      t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
      t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
    }
  })
})

test('early termination, onRequest async', async t => {
  const app = Fastify()

  app.addHook('onRequest', async (req, reply) => {
    setImmediate(() => reply.send('hello world'))
    return reply
  })

  app.get('/', (req, reply) => {
    t.assert.fail('should not happen')
  })

  const res = await app.inject('/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.body.toString(), 'hello world')
})

test('The this should be the same of the encapsulation level', async t => {
  const fastify = Fastify()

  fastify.addHook('onRequest', async function (req, reply) {
    if (req.raw.url === '/nested') {
      t.assert.strictEqual(this.foo, 'bar')
    } else {
      t.assert.strictEqual(this.foo, undefined)
    }
  })

  fastify.register(plugin)
  fastify.get('/', (req, reply) => reply.send('ok'))

  async function plugin (fastify, opts) {
    fastify.decorate('foo', 'bar')
    fastify.get('/nested', (req, reply) => reply.send('ok'))
  }

  await fastify.inject({ method: 'GET', path: '/' })
  await fastify.inject({ method: 'GET', path: '/nested' })
  await fastify.inject({ method: 'GET', path: '/' })
  await fastify.inject({ method: 'GET', path: '/nested' })
})

describe('preSerializationEnd should handle errors if the serialize method throws', () => {
  test('works with sync preSerialization', (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.addHook('preSerialization', (request, reply, payload, done) => {
      t.assert.ok('called')
      done(null, payload)
    })

    fastify.post('/', {
      handler (req, reply) { reply.send({ notOk: true }) },
      schema: { response: { 200: { required: ['ok'], properties: { ok: { type: 'boolean' } } } } }
    })

    fastify.inject({
      method: 'POST',
      url: '/'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.notEqual(res.statusCode, 200)
      testDone()
    })
  })

  test('works with async preSerialization', (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.addHook('preSerialization', async (request, reply, payload) => {
      t.assert.ok('called')
      return payload
    })

    fastify.post('/', {
      handler (req, reply) { reply.send({ notOk: true }) },
      schema: { response: { 200: { required: ['ok'], properties: { ok: { type: 'boolean' } } } } }
    })

    fastify.inject({
      method: 'POST',
      url: '/'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.notEqual(res.statusCode, 200)
      testDone()
    })
  })
})

test('nested hooks to do not crash on 404', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/hello', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.register(async function (fastify) {
    fastify.get('/something', (req, reply) => {
      reply.callNotFound()
    })

    fastify.setNotFoundHandler(async (request, reply) => {
      t.assert.ok('called')
      reply.statusCode = 404
      return { status: 'nested-not-found' }
    })

    fastify.setErrorHandler(async (error, request, reply) => {
      t.assert.fail('should have not be called')
      reply.statusCode = 500
      return { status: 'nested-error', error }
    })
  }, { prefix: '/nested' })

  fastify.setNotFoundHandler(async (request, reply) => {
    t.assert.fail('should have not be called')
    reply.statusCode = 404
    return { status: 'not-found' }
  })

  fastify.setErrorHandler(async (error, request, reply) => {
    t.assert.fail('should have not be called')
    reply.statusCode = 500
    return { status: 'error', error }
  })

  fastify.inject({
    method: 'GET',
    url: '/nested/something'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    testDone()
  })
})

test('Register an hook (preHandler) as route option should fail if mixing async and callback style', t => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        preHandler: [
          async (request, reply, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('preHandler mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})

test('Register an hook (onSend) as route option should fail if mixing async and callback style', t => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        onSend: [
          async (request, reply, payload, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('onSend mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})

test('Register an hook (preSerialization) as route option should fail if mixing async and callback style', t => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        preSerialization: [
          async (request, reply, payload, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('preSerialization mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})

test('Register an hook (onError) as route option should fail if mixing async and callback style', t => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        onError: [
          async (request, reply, error, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('onError mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})

test('Register an hook (preParsing) as route option should fail if mixing async and callback style', t => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        preParsing: [
          async (request, reply, payload, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('preParsing mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})

test('Register an hook (onRequestAbort) as route option should fail if mixing async and callback style', (t) => {
  const fastify = Fastify()

  try {
    fastify.get(
      '/',
      {
        onRequestAbort: [
          async (request, done) => {
            done()
          }
        ]
      },
      async (request, reply) => {
        return { hello: 'world' }
      }
    )
    t.assert.fail('onRequestAbort mixing async and callback style')
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
    t.assert.strictEqual(e.message, 'Async function has too many arguments. Async hooks should not use the \'done\' argument.')
  }
})
