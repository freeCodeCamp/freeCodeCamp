'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')
const jsonParser = require('fast-json-body')
const { plainTextParser } = require('./helper')

process.removeAllListeners('warning')

test('cannot remove all content type parsers after binding', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  t.assert.throws(() => fastify.removeAllContentTypeParsers())
})

test('cannot remove content type parsers after binding', async (t) => {
  t.plan(1)

  const fastify = Fastify()
  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  t.assert.throws(() => fastify.removeContentTypeParser('application/json'))
})

test('should be able to override the default json parser after removeAllContentTypeParsers', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.removeAllContentTypeParsers()

  fastify.addContentTypeParser('application/json', function (req, payload, done) {
    t.assert.ok('called')
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.text(), JSON.stringify({ hello: 'world' }))
  await fastify.close()
})

test('should be able to override the default plain text parser after removeAllContentTypeParsers', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.removeAllContentTypeParsers()

  fastify.addContentTypeParser('text/plain', function (req, payload, done) {
    t.assert.ok('called')
    plainTextParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello world',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), 'hello world')
  await fastify.close()
})

test('should be able to add a custom content type parser after removeAllContentTypeParsers', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser('application/jsoff', function (req, payload, done) {
    t.assert.ok('called')
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.text(), JSON.stringify({ hello: 'world' }))
  await fastify.close()
})
