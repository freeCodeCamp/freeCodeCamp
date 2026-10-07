'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const { FST_ERR_ERROR_HANDLER_NOT_FN, FST_ERR_ERROR_HANDLER_ALREADY_SET } = require('../lib/errors')

test('setErrorHandler should throw an error if the handler is not a function', t => {
  t.plan(1)
  const fastify = Fastify()

  t.assert.throws(() => fastify.setErrorHandler('not a function'), new FST_ERR_ERROR_HANDLER_NOT_FN())
})

test('setErrorHandler can be set independently in parent and child scopes', async t => {
  t.plan(1)

  const fastify = Fastify()

  t.assert.doesNotThrow(() => {
    fastify.setErrorHandler(() => {})
    fastify.register(async (child) => {
      child.setErrorHandler(() => {})
    })
  })
})

test('setErrorHandler can be overridden if allowErrorHandlerOverride is set to true', async t => {
  t.plan(2)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(async (child) => {
    child.setErrorHandler(() => {})
    t.assert.doesNotThrow(() => child.setErrorHandler(() => {}))
  })

  fastify.setErrorHandler(() => {})
  t.assert.doesNotThrow(() => fastify.setErrorHandler(() => {}))

  await fastify.ready()
})

test('if `allowErrorHandlerOverride` is disabled, setErrorHandler should throw if called more than once in the same scope', t => {
  t.plan(1)

  const fastify = Fastify({
    allowErrorHandlerOverride: false
  })

  fastify.setErrorHandler(() => {})
  t.assert.throws(() => fastify.setErrorHandler(() => {}), new FST_ERR_ERROR_HANDLER_ALREADY_SET())
})

test('if `allowErrorHandlerOverride` is disabled, setErrorHandler should throw if called more than once in the same scope 2', async t => {
  t.plan(1)

  const fastify = Fastify({
    allowErrorHandlerOverride: false
  })
  t.after(() => fastify.close())

  fastify.register(async (child) => {
    child.setErrorHandler(() => {})
    t.assert.throws(() => child.setErrorHandler(() => {}), new FST_ERR_ERROR_HANDLER_ALREADY_SET())
  })

  await fastify.ready()
})
