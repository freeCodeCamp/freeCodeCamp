'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('Should export withTypeProvider function', (t, done) => {
  t.plan(1)
  try {
    Fastify().withTypeProvider()
    t.assert.ok('pass')
    done()
  } catch (e) {
    t.assert.fail(e)
  }
})

test('Should return same instance', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  t.assert.strictEqual(fastify, fastify.withTypeProvider())
  done()
})
