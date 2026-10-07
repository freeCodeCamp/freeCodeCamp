'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('allow unsafe regex', async t => {
  t.plan(2)

  const fastify = Fastify({
    allowUnsafeRegex: false
  })
  t.after(() => fastify.close())

  fastify.get('/:foo(^[0-9]*$)', (req, reply) => {
    reply.send({ foo: req.params.foo })
  })

  await fastify.listen({ port: 0 })

  const result = await fetch(`http://localhost:${fastify.server.address().port}/1234`)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { foo: '1234' })
})

test('allow unsafe regex not match', async t => {
  t.plan(1)

  const fastify = Fastify({
    allowUnsafeRegex: false
  })
  t.after(() => fastify.close())

  fastify.get('/:foo(^[0-9]*$)', (req, reply) => {
    reply.send({ foo: req.params.foo })
  })

  await fastify.listen({ port: 0 })

  const result = await fetch(`http://localhost:${fastify.server.address().port}/a1234`)
  t.assert.strictEqual(result.status, 404)
})

test('allow unsafe regex not safe', (t, done) => {
  t.plan(1)

  const fastify = Fastify({
    allowUnsafeRegex: false
  })
  t.after(() => fastify.close())

  t.assert.throws(() => {
    fastify.get('/:foo(^([0-9]+){4}$)', (req, reply) => {
      reply.send({ foo: req.params.foo })
    })
  })
  done()
})

test('allow unsafe regex not safe by default', (t, done) => {
  t.plan(1)

  const fastify = Fastify()
  t.after(() => fastify.close())

  t.assert.throws(() => {
    fastify.get('/:foo(^([0-9]+){4}$)', (req, reply) => {
      reply.send({ foo: req.params.foo })
    })
  })
  done()
})

test('allow unsafe regex allow unsafe', async t => {
  t.plan(3)

  const fastify = Fastify({
    allowUnsafeRegex: true
  })
  t.after(() => fastify.close())

  t.assert.doesNotThrow(() => {
    fastify.get('/:foo(^([0-9]+){4}$)', (req, reply) => {
      reply.send({ foo: req.params.foo })
    })
  })

  await fastify.listen({ port: 0 })

  const result = await fetch(`http://localhost:${fastify.server.address().port}/1234`)
  t.assert.strictEqual(result.status, 200)
  t.assert.deepStrictEqual(await result.json(), { foo: '1234' })
})
