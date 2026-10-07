'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')
const jsonParser = require('fast-json-body')

process.removeAllListeners('warning')

test('Should have typeof body object with no custom parser defined, null body and content type = \'text/plain\'', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: null,
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), '')
})

test('Should have typeof body object with no custom parser defined, undefined body and content type = \'text/plain\'', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: undefined,
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), '')
})

test('Should get the body as string /1', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('text/plain', { parseAs: 'string' }, function (req, body, done) {
    t.assert.ok('called')
    t.assert.ok(typeof body === 'string')
    try {
      const plainText = body
      done(null, plainText)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello world',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), 'hello world')
})

test('Should get the body as buffer', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/json', { parseAs: 'buffer' }, function (req, body, done) {
    t.assert.ok('called')
    t.assert.ok(body instanceof Buffer)
    try {
      const json = JSON.parse(body)
      done(null, json)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), '{"hello":"world"}')
})

test('Should get the body as buffer', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('text/plain', { parseAs: 'buffer' }, function (req, body, done) {
    t.assert.ok('called')
    t.assert.ok(body instanceof Buffer)
    try {
      const plainText = body
      done(null, plainText)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello world',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), 'hello world')
})

test('Should parse empty bodies as a string', async (t) => {
  t.plan(8)
  const fastify = Fastify()

  fastify.addContentTypeParser('text/plain', { parseAs: 'string' }, (req, body, done) => {
    t.assert.strictEqual(body, '')
    done(null, body)
  })

  fastify.route({
    method: ['POST', 'DELETE'],
    url: '/',
    handler (request, reply) {
      reply.send(request.body)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const postResult = await fetch(fastifyServer, {
    method: 'POST',
    body: '',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.ok(postResult.ok)
  t.assert.strictEqual(postResult.status, 200)
  t.assert.strictEqual(await postResult.text(), '')

  const deleteResult = await fetch(fastifyServer, {
    method: 'DELETE',
    body: '',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': '0'
    }
  })

  t.assert.ok(deleteResult.ok)
  t.assert.strictEqual(deleteResult.status, 200)
  t.assert.strictEqual(await deleteResult.text(), '')
})

test('Should parse empty bodies as a buffer', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('text/plain', { parseAs: 'buffer' }, function (req, body, done) {
    t.assert.ok(body instanceof Buffer)
    t.assert.strictEqual(body.length, 0)
    done(null, body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual((await result.arrayBuffer()).byteLength, 0)
})

test('The charset should not interfere with the content type handling', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/json', function (req, payload, done) {
    t.assert.ok('called')
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), '{"hello":"world"}')
})
