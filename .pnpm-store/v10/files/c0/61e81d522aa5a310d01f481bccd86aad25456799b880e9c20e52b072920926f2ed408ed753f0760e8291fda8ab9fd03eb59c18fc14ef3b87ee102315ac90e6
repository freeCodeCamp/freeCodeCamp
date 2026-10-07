'use strict'

const Fastify = require('../fastify')
const zlib = require('node:zlib')
const { test } = require('node:test')

test('bodyLimit', async t => {
  t.plan(4)

  try {
    Fastify({ bodyLimit: 1.3 })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  try {
    Fastify({ bodyLimit: [] })
    t.assert.fail('option must be an integer')
  } catch (err) {
    t.assert.ok(err)
  }

  const fastify = Fastify({ bodyLimit: 1 })

  fastify.post('/', (request, reply) => {
    reply.send({ error: 'handler should not be called' })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([])
  })

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 413)
})

test('bodyLimit is applied to decoded content', async (t) => {
  t.plan(6)

  const body = { x: 'x'.repeat(30000) }
  const json = JSON.stringify(body)
  const encoded = zlib.gzipSync(json)

  const fastify = Fastify()

  fastify.addHook('preParsing', async (req, reply, payload) => {
    t.assert.strictEqual(req.headers['content-length'], `${encoded.length}`)
    const unzip = zlib.createGunzip()
    Object.defineProperty(unzip, 'receivedEncodedLength', {
      get () {
        return unzip.bytesWritten
      }
    })
    payload.pipe(unzip)
    return unzip
  })

  fastify.post('/body-limit-40k', {
    bodyLimit: 40000,
    onError: async (req, res, err) => {
      t.fail('should not be called')
    }
  }, (request, reply) => {
    reply.send({ x: request.body.x })
  })

  fastify.post('/body-limit-20k', {
    bodyLimit: 20000,
    onError: async (req, res, err) => {
      t.assert.strictEqual(err.code, 'FST_ERR_CTP_BODY_TOO_LARGE')
      t.assert.strictEqual(err.statusCode, 413)
    }
  }, (request, reply) => {
    reply.send({ x: 'handler should not be called' })
  })

  await t.test('bodyLimit 40k', async (t) => {
    const result = await fastify.inject({
      method: 'POST',
      url: '/body-limit-40k',
      headers: {
        'content-encoding': 'gzip',
        'content-type': 'application/json'
      },
      payload: encoded
    })
    t.assert.strictEqual(result.statusCode, 200)
    t.assert.deepStrictEqual(result.json(), body)
  })

  await t.test('bodyLimit 20k', async (t) => {
    const result = await fastify.inject({
      method: 'POST',
      url: '/body-limit-20k',
      headers: {
        'content-encoding': 'gzip',
        'content-type': 'application/json'
      },
      payload: encoded
    })
    t.assert.strictEqual(result.statusCode, 413)
  })
})

test('default request.routeOptions.bodyLimit should be 1048576', async t => {
  t.plan(3)
  const fastify = Fastify()
  fastify.post('/default-bodylimit', {
    handler (request, reply) {
      t.assert.strictEqual(1048576, request.routeOptions.bodyLimit)
      reply.send({ })
    }
  })
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer + '/default-bodylimit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([])
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})

test('request.routeOptions.bodyLimit should be equal to route limit', async t => {
  t.plan(3)
  const fastify = Fastify({ bodyLimit: 1 })
  fastify.post('/route-limit', {
    bodyLimit: 1000,
    handler (request, reply) {
      t.assert.strictEqual(1000, request.routeOptions.bodyLimit)
      reply.send({})
    }
  })
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer + '/route-limit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([])
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})

test('request.routeOptions.bodyLimit should be equal to server limit', async t => {
  t.plan(3)
  const fastify = Fastify({ bodyLimit: 100 })
  fastify.post('/server-limit', {
    handler (request, reply) {
      t.assert.strictEqual(100, request.routeOptions.bodyLimit)
      reply.send({})
    }
  })
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const result = await fetch(fastifyServer + '/server-limit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([])
  })
  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
})

test('bodyLimit should use byte length for UTF-8 strings, not character length', async t => {
  t.plan(4)

  // Create a string with multi-byte UTF-8 characters
  // Use Japanese characters that are 3 bytes each in UTF-8
  const multiByteString = 'あああ' // 3 characters, 9 bytes in UTF-8
  t.assert.strictEqual(multiByteString.length, 3) // 3 characters
  t.assert.strictEqual(Buffer.byteLength(multiByteString, 'utf8'), 9) // 9 bytes

  const fastify = Fastify()

  // Add a custom text parser that returns the string as-is
  fastify.addContentTypeParser('text/plain', { parseAs: 'string' }, (req, body, done) => {
    done(null, body)
  })

  // Set body limit to 7 bytes - this should reject the string (9 bytes)
  // even though string.length (3) would be under any reasonable limit
  fastify.post('/test-utf8', {
    bodyLimit: 7
  }, (request, reply) => {
    reply.send({ body: request.body, length: request.body.length })
  })

  await t.test('should reject body when byte length exceeds limit', async (t) => {
    const result = await fastify.inject({
      method: 'POST',
      url: '/test-utf8',
      headers: { 'Content-Type': 'text/plain', 'Content-Length': null },
      payload: multiByteString
    })

    t.assert.strictEqual(result.statusCode, 413)
  })

  await t.test('should accept body when byte length is within limit', async (t) => {
    const smallString = 'あ' // 1 character, 3 bytes, under the 7 byte limit

    const result = await fastify.inject({
      method: 'POST',
      url: '/test-utf8',
      headers: { 'Content-Type': 'text/plain' },
      payload: smallString
    })

    t.assert.strictEqual(result.statusCode, 200)
    t.assert.strictEqual(result.json().body, smallString)
    t.assert.strictEqual(result.json().length, 1) // 1 character
  })
})
