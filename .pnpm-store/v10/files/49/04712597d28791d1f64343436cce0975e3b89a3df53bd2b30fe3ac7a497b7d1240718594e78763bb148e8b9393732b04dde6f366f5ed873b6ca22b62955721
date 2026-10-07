'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const split = require('split2')
const pino = require('pino')
const { sleep } = require('./helper')
const statusCodes = require('node:http').STATUS_CODES

const opts = {
  schema: {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

const optsWithHostnameAndPort = {
  schema: {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          },
          hostname: {
            type: 'string'
          },
          port: {
            type: 'string'
          }
        }
      }
    }
  }
}
test('async await', async t => {
  t.plan(15)
  const fastify = Fastify()
  try {
    fastify.get('/', opts, async function awaitMyFunc (req, reply) {
      await sleep(200)
      return { hello: 'world' }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.get('/no-await', opts, async function (req, reply) {
      return { hello: 'world' }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }

  try {
    fastify.get('/await/hostname_port', optsWithHostnameAndPort, async function awaitMyFunc (req, reply) {
      await sleep(200)
      return { hello: 'world', hostname: req.hostname, port: req.port }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }

  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer)

  const body = await result.text()
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })

  const result1 = await fetch(`${fastifyServer}/no-await`)

  const body1 = await result1.text()
  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.strictEqual(result1.headers.get('content-length'), '' + body1.length)
  t.assert.deepStrictEqual(JSON.parse(body1), { hello: 'world' })

  const result2 = await fetch(`http://localhost:${fastify.server.address().port}/await/hostname_port`)

  const parsedBody = await result2.json()
  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.strictEqual(parsedBody.hostname, 'localhost')
  t.assert.strictEqual(parseInt(parsedBody.port), fastify.server.address().port)
})

test('ignore the result of the promise if reply.send is called beforehand (undefined)', async (t) => {
  t.plan(3)

  const server = Fastify()
  const payload = { hello: 'world' }

  server.get('/', async function awaitMyFunc (req, reply) {
    await reply.send(payload)
  })

  t.after(() => { server.close() })

  const fastifyServer = await server.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(payload, await result.json())
  t.assert.strictEqual(result.status, 200)
})

test('ignore the result of the promise if reply.send is called beforehand (object)', async (t) => {
  t.plan(3)

  const server = Fastify()
  const payload = { hello: 'world2' }

  server.get('/', async function awaitMyFunc (req, reply) {
    await reply.send(payload)
    return { hello: 'world' }
  })

  t.after(() => { server.close() })

  const fastifyServer = await server.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(payload, await result.json())
  t.assert.strictEqual(result.status, 200)
})

test('server logs an error if reply.send is called and a value is returned via async/await', (t, done) => {
  const lines = ['incoming request', 'request completed', 'Reply was already sent, did you forget to "return reply" in "/" (GET)?']
  t.plan(lines.length + 2)

  const splitStream = split(JSON.parse)
  splitStream.on('data', (line) => {
    t.assert.strictEqual(line.msg, lines.shift())
  })

  const logger = pino(splitStream)

  const fastify = Fastify({
    loggerInstance: logger
  })

  fastify.get('/', async (req, reply) => {
    await reply.send({ hello: 'world' })
    return { hello: 'world2' }
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    done()
  })
})

test('ignore the result of the promise if reply.send is called beforehand (undefined)', async (t) => {
  t.plan(3)

  const server = Fastify()
  const payload = { hello: 'world' }

  server.get('/', async function awaitMyFunc (req, reply) {
    await reply.send(payload)
  })

  t.after(() => { server.close() })

  const fastifyServer = await server.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(payload, await result.json())
  t.assert.strictEqual(result.status, 200)
})

test('ignore the result of the promise if reply.send is called beforehand (object)', async (t) => {
  t.plan(3)

  const server = Fastify()
  const payload = { hello: 'world2' }

  server.get('/', async function awaitMyFunc (req, reply) {
    await reply.send(payload)
    return { hello: 'world' }
  })

  t.after(() => { server.close() })

  const fastifyServer = await server.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.deepStrictEqual(payload, await result.json())
  t.assert.strictEqual(result.status, 200)
})

test('await reply if we will be calling reply.send in the future', (t, done) => {
  const lines = ['incoming request', 'request completed']
  t.plan(lines.length + 2)

  const splitStream = split(JSON.parse)
  splitStream.on('data', (line) => {
    t.assert.strictEqual(line.msg, lines.shift())
  })

  const server = Fastify({
    logger: {
      stream: splitStream
    }
  })
  const payload = { hello: 'world' }

  server.get('/', async function awaitMyFunc (req, reply) {
    setImmediate(function () {
      reply.send(payload)
    })

    await reply
  })

  server.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    done()
  })
})

test('await reply if we will be calling reply.send in the future (error case)', (t, done) => {
  const lines = ['incoming request', 'kaboom', 'request completed']
  t.plan(lines.length + 2)

  const splitStream = split(JSON.parse)
  splitStream.on('data', (line) => {
    t.assert.strictEqual(line.msg, lines.shift())
  })

  const server = Fastify({
    logger: {
      stream: splitStream
    }
  })

  server.get('/', async function awaitMyFunc (req, reply) {
    setImmediate(function () {
      reply.send(new Error('kaboom'))
    })

    await reply
  })

  server.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 500)
    done()
  })
})

test('support reply decorators with await', (t, done) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.decorateReply('wow', function () {
    setImmediate(() => {
      this.send({ hello: 'world' })
    })

    return this
  })

  fastify.get('/', async (req, reply) => {
    await sleep(1)
    await reply.wow()
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    done()
  })
})

test('inject async await', async t => {
  t.plan(1)

  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  try {
    const res = await fastify.inject({ method: 'GET', url: '/' })
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res.payload))
  } catch (err) {
    t.assert.fail(err)
  }
})

test('inject async await - when the server equal up', async t => {
  t.plan(2)

  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  try {
    const res = await fastify.inject({ method: 'GET', url: '/' })
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res.payload))
  } catch (err) {
    t.assert.fail(err)
  }

  await sleep(200)

  try {
    const res2 = await fastify.inject({ method: 'GET', url: '/' })
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res2.payload))
  } catch (err) {
    t.assert.fail(err)
  }
})

test('async await plugin', async t => {
  t.plan(1)

  const fastify = Fastify()

  fastify.register(async (fastify, opts) => {
    fastify.get('/', (req, reply) => {
      reply.send({ hello: 'world' })
    })

    await sleep(200)
  })

  try {
    const res = await fastify.inject({ method: 'GET', url: '/' })
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res.payload))
  } catch (err) {
    t.assert.fail(err)
  }
})

test('does not call reply.send() twice if 204 response equal already sent', (t, done) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.get('/', async (req, reply) => {
    reply.code(204).send()
    reply.send = () => {
      throw new Error('reply.send() was called twice')
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 204)
    done()
  })
})

test('promise was fulfilled with undefined', async (t) => {
  t.plan(3)

  let fastify = null
  const stream = split(JSON.parse)
  try {
    fastify = Fastify({
      logger: {
        stream,
        level: 'error'
      }
    })
  } catch (e) {
    t.assert.fail()
  }

  t.after(() => { fastify.close() })

  fastify.get('/', async (req, reply) => {
  })

  stream.once('data', line => {
    t.assert.fail('should not log an error')
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.strictEqual(await result.text(), '')
  t.assert.strictEqual(result.status, 200)
})

test('promise was fulfilled with undefined using inject', async (t) => {
  const stream = split(JSON.parse)
  const fastify = Fastify({
    logger: {
      stream,
      level: 'error'
    }
  })

  fastify.get('/', async (req, reply) => {
  })

  stream.once('data', line => {
    t.assert.fail('should not log an error')
  })

  const res = await fastify.inject('/')

  t.assert.strictEqual(res.body, '')
  t.assert.strictEqual(res.statusCode, 200)
})

test('error is not logged because promise was fulfilled with undefined but response was sent before promise resolution', async (t) => {
  t.plan(3)

  let fastify = null
  const stream = split(JSON.parse)
  const payload = { hello: 'world' }
  try {
    fastify = Fastify({
      logger: {
        stream,
        level: 'error'
      }
    })
  } catch (e) {
    t.assert.fail()
  }

  t.after(() => { fastify.close() })

  fastify.get('/', async (req, reply) => {
    reply.send(payload)
  })

  stream.once('data', line => {
    t.assert.fail('should not log an error')
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer)

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(
    payload,
    await result.json()
  )
})

test('Thrown Error instance sets HTTP status code', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  const err = new Error('winter is coming')
  err.statusCode = 418

  fastify.get('/', async (req, reply) => {
    throw err
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (error, res) => {
    t.assert.ifError(error)
    t.assert.strictEqual(res.statusCode, 418)
    t.assert.deepStrictEqual(
      {
        error: statusCodes['418'],
        message: err.message,
        statusCode: 418
      },
      JSON.parse(res.payload)
    )
    done()
  })
})

test('customErrorHandler support', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', async (req, reply) => {
    const error = new Error('ouch')
    error.statusCode = 400
    throw error
  })

  fastify.setErrorHandler(async err => {
    t.assert.strictEqual(err.message, 'ouch')
    const error = new Error('kaboom')
    error.statusCode = 401
    throw error
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 401)
    t.assert.deepStrictEqual(
      {
        error: statusCodes['401'],
        message: 'kaboom',
        statusCode: 401
      },
      JSON.parse(res.payload)
    )
    done()
  })
})

test('customErrorHandler support without throwing', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', async (req, reply) => {
    const error = new Error('ouch')
    error.statusCode = 400
    throw error
  })

  fastify.setErrorHandler(async (err, req, reply) => {
    t.assert.strictEqual(err.message, 'ouch')
    await reply.code(401).send('kaboom')
    reply.send = t.assert.fail.bind(t, 'should not be called')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 401)
    t.assert.deepStrictEqual(
      'kaboom',
      res.payload
    )
    done()
  })
})

// See https://github.com/fastify/fastify/issues/2653
test('customErrorHandler only called if reply not already sent', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', async (req, reply) => {
    await reply.send('success')
    const error = new Error('ouch')
    error.statusCode = 400
    throw error
  })

  fastify.setErrorHandler(t.assert.fail.bind(t, 'should not be called'))

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(
      'success',
      res.payload
    )
    done()
  })
})

// See https://github.com/fastify/fastify/issues/3209
test('setNotFoundHandler should accept return value', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.get('/', async () => ({ hello: 'world' }))

  fastify.setNotFoundHandler((req, reply) => {
    reply.code(404)
    return {
      error: statusCodes['404'],
      message: 'lost',
      statusCode: 404
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/elsewhere'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 404)
    t.assert.deepStrictEqual(
      {
        error: statusCodes['404'],
        message: 'lost',
        statusCode: 404
      },
      JSON.parse(res.payload)
    )
    done()
  })
})

// See https://github.com/fastify/fastify/issues/3209
test('customErrorHandler should accept return value', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.get('/', async (req, reply) => {
    const error = new Error('ouch')
    error.statusCode = 400
    throw error
  })

  fastify.setErrorHandler((err, req, reply) => {
    t.assert.strictEqual(err.message, 'ouch')
    reply.code(401)
    return {
      error: statusCodes['401'],
      message: 'kaboom',
      statusCode: 401
    }
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 401)
    t.assert.deepStrictEqual(
      {
        error: statusCodes['401'],
        message: 'kaboom',
        statusCode: 401
      },
      JSON.parse(res.payload)
    )
    done()
  })
})

test('await self', async t => {
  const app = Fastify()
  t.assert.strictEqual(await app, app)
})
