'use strict'

const { test } = require('node:test')
const Fastify = require('../fastify')
const jsonParser = require('fast-json-body')

process.removeAllListeners('warning')

test('should prefer string content types over RegExp ones', async (t) => {
  t.plan(6)
  const fastify = Fastify()
  t.after(() => { fastify.close() })
  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser(/^application\/.*/, function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })

  fastify.addContentTypeParser('application/json', function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"k1":"myValue", "k2": "myValue"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.equal(await result1.text(), JSON.stringify({ k1: 'myValue', k2: 'myValue' }))

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: 'javascript',
    headers: {
      'Content-Type': 'application/javascript'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.equal(await result2.text(), 'javascript')
})

test('removeContentTypeParser should support arrays of content types to remove', async (t) => {
  t.plan(7)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.addContentTypeParser('application/xml', function (req, payload, done) {
    payload.on('data', () => {})
    payload.on('end', () => {
      done(null, 'xml')
    })
  })

  fastify.addContentTypeParser(/^image\/.*/, function (req, payload, done) {
    payload.on('data', () => {})
    payload.on('end', () => {
      done(null, 'image')
    })
  })

  fastify.removeContentTypeParser([/^image\/.*/, 'application/json'])

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: '<?xml version="1.0">',
    headers: {
      'Content-Type': 'application/xml'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.equal(await result1.text(), 'xml')

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: '',
    headers: {
      'Content-Type': 'image/png'
    }
  })

  t.assert.ok(!result2.ok)
  t.assert.strictEqual(result2.status, 415)

  const result3 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{test: "test"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.ok(!result3.ok)
  t.assert.strictEqual(result3.status, 415)
})

test('removeContentTypeParser should support encapsulation', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.addContentTypeParser('application/xml', function (req, payload, done) {
    payload.on('data', () => {})
    payload.on('end', () => {
      done(null, 'xml')
    })
  })

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.register(function (instance, options, done) {
    instance.removeContentTypeParser('application/xml')

    instance.post('/encapsulated', (req, reply) => {
      reply.send(req.body)
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/encapsulated', {
    method: 'POST',
    body: '<?xml version="1.0">',
    headers: {
      'Content-Type': 'application/xml'
    }
  })

  t.assert.ok(!result1.ok)
  t.assert.strictEqual(result1.status, 415)

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: '<?xml version="1.0">',
    headers: {
      'Content-Type': 'application/xml'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.equal(await result2.text(), 'xml')
})

test('removeAllContentTypeParsers should support encapsulation', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.register(function (instance, options, done) {
    instance.removeAllContentTypeParsers()

    instance.post('/encapsulated', (req, reply) => {
      reply.send(req.body)
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const result1 = await fetch(fastifyServer + '/encapsulated', {
    method: 'POST',
    body: '{}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.ok(!result1.ok)
  t.assert.strictEqual(result1.status, 415)

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"test":1}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.equal(JSON.parse(await result2.text()).test, 1)
})
