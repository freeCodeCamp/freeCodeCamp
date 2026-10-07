'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('Should rewrite url', async t => {
  t.plan(4)
  const fastify = Fastify({
    rewriteUrl (req) {
      t.assert.strictEqual(req.url, '/this-would-404-without-url-rewrite')
      this.log.info('rewriting url')
      return '/'
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}/this-would-404-without-url-rewrite`)

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
})

test('Should not rewrite if the url is the same', async t => {
  t.plan(3)
  const fastify = Fastify({
    rewriteUrl (req) {
      t.assert.strictEqual(req.url, '/this-would-404-without-url-rewrite')
      this.log.info('rewriting url')
      return req.url
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => fastify.close())

  const result = await fetch(`${fastifyServer}/this-would-404-without-url-rewrite`)

  t.assert.ok(!result.ok)
  t.assert.strictEqual(result.status, 404)
})

test('Should throw an error', async t => {
  t.plan(2)
  const fastify = Fastify({
    rewriteUrl (req) {
      t.assert.strictEqual(req.url, '/this-would-404-without-url-rewrite')
      this.log.info('rewriting url')
      return undefined
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'world' })
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => fastify.close())

  try {
    await fetch(`${fastifyServer}/this-would-404-without-url-rewrite`)
    t.assert.fail('Expected fetch to throw an error')
  } catch (err) {
    t.assert.ok(err instanceof Error)
  }
})

test('Should rewrite url but keep originalUrl unchanged', async t => {
  t.plan(6)
  const fastify = Fastify({
    rewriteUrl (req) {
      t.assert.strictEqual(req.url, '/this-would-404-without-url-rewrite')
      t.assert.strictEqual(req.originalUrl, '/this-would-404-without-url-rewrite')
      return '/'
    }
  })

  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.send({ hello: 'world', hostname: req.hostname, port: req.port })
      t.assert.strictEqual(req.originalUrl, '/this-would-404-without-url-rewrite')
    }
  })

  await fastify.listen({ port: 0 })
  const port = fastify.server.address().port

  t.after(() => fastify.close())

  const result = await fetch(`http://localhost:${port}/this-would-404-without-url-rewrite`)

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { hello: 'world', hostname: 'localhost', port })
})
