'use strict'

const { test } = require('node:test')
const fs = require('node:fs')
const Fastify = require('../fastify')

test('should respond with a stream', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', function (req, reply) {
    const stream = fs.createReadStream(__filename, 'utf8')
    reply.code(200).send(stream)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const response = await fetch(fastifyServer)
  t.assert.ok(response.ok)
  t.assert.strictEqual(response.headers.get('content-type'), null)
  t.assert.strictEqual(response.status, 200)

  const data = await response.text()
  const expected = await fs.promises.readFile(__filename, 'utf8')
  t.assert.strictEqual(expected.toString(), data.toString())
})

test('should respond with a stream (error)', async t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.get('/error', function (req, reply) {
    const stream = fs.createReadStream('not-existing-file', 'utf8')
    reply.code(200).send(stream)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const response = await fetch(`${fastifyServer}/error`)
  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 500)
})

test('should trigger the onSend hook', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send(fs.createReadStream(__filename, 'utf8'))
  })

  fastify.addHook('onSend', (req, reply, payload, done) => {
    t.assert.ok(payload._readableState)
    reply.header('Content-Type', 'application/javascript')
    done()
  })

  const res = await fastify.inject({
    url: '/'
  })
  t.assert.strictEqual(res.headers['content-type'], 'application/javascript')
  t.assert.strictEqual(res.payload, fs.readFileSync(__filename, 'utf8'))
  return fastify.close()
})

test('should trigger the onSend hook only twice if pumping the stream fails, first with the stream, second with the serialized error', async t => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send(fs.createReadStream('not-existing-file', 'utf8'))
  })

  let counter = 0
  fastify.addHook('onSend', (req, reply, payload, done) => {
    if (counter === 0) {
      t.assert.ok(payload._readableState)
    } else if (counter === 1) {
      const error = JSON.parse(payload)
      t.assert.strictEqual(error.statusCode, 500)
    }
    counter++
    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  const response = await fetch(fastifyServer)
  t.assert.ok(!response.ok)
  t.assert.strictEqual(response.status, 500)
})
