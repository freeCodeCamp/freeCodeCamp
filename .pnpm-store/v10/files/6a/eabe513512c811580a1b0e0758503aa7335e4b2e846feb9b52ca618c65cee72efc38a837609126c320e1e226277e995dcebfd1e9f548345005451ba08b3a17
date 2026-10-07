'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('sync route', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.get('/', () => 'hello world')
  const res = await fastify.inject('/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.body, 'hello world')
})

test('sync route return null', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.get('/', () => null)
  const res = await fastify.inject('/')
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.body, 'null')
})

test('sync route, error', async t => {
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.get('/', () => {
    throw new Error('kaboom')
  })
  const res = await fastify.inject('/')
  t.assert.strictEqual(res.statusCode, 500)
})
