'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const jsonParser = require('fast-json-body')

process.removeAllListeners('warning')

test('should be able to use default parser for extra content type', async t => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (request, reply) => {
    reply.send(request.body)
  })

  fastify.addContentTypeParser('text/json', { parseAs: 'string' }, fastify.getDefaultJsonParser('ignore', 'ignore'))

  const fastifyServer = await fastify.listen({ port: 0 })

  const response = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'text/json'
    }
  })
  t.assert.ok(response.ok)
  t.assert.strictEqual(response.status, 200)
  t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
})

test('contentTypeParser should add a custom parser with RegExp value', async (t) => {
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.options('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser(/.*\+json$/, function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  await t.test('in POST', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer, {
      method: 'POST',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'application/vnd.test+json'
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.deepStrictEqual(body.toString(), JSON.stringify({ hello: 'world' }))
  })

  await t.test('in OPTIONS', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer, {
      method: 'OPTIONS',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'weird/content-type+json'
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.deepStrictEqual(body.toString(), JSON.stringify({ hello: 'world' }))
  })
})

test('contentTypeParser should add multiple custom parsers with RegExp values', async t => {
  t.plan(6)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser(/.*\+json$/, function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  fastify.addContentTypeParser(/.*\+xml$/, function (req, payload, done) {
    done(null, 'xml')
  })

  fastify.addContentTypeParser(/.*\+myExtension$/i, function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data + 'myExtension')
    })
  })

  await fastify.ready()

  {
    const response = await fastify.inject({
      method: 'POST',
      url: '/',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'application/vnd.hello+json'
      }
    })
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.payload.toString(), '{"hello":"world"}')
  }

  {
    const response = await fastify.inject({
      method: 'POST',
      url: '/',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'application/test+xml'
      }
    })
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.payload.toString(), 'xml')
  }

  await fastify.inject({
    method: 'POST',
    path: '/',
    payload: 'abcdefg',
    headers: {
      'Content-Type': 'application/+myExtension'
    }
  }).then((response) => {
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.payload.toString(), 'abcdefgmyExtension')
  }).catch((err) => {
    t.assert.ifError(err)
  })
})

test('catch all content type parser should not interfere with content type parser', async t => {
  t.plan(9)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('*', function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })

  fastify.addContentTypeParser(/^application\/.*/, function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  fastify.addContentTypeParser('text/html', function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data + 'html')
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const assertions = [
    { body: '{"myKey":"myValue"}', contentType: 'application/json', expected: JSON.stringify({ myKey: 'myValue' }) },
    { body: 'body', contentType: 'very-weird-content-type/foo', expected: 'body' },
    { body: 'my text', contentType: 'text/html', expected: 'my texthtml' }
  ]

  for (const { body, contentType, expected } of assertions) {
    const response = await fetch(fastifyServer, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': contentType
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), expected)
  }
})
