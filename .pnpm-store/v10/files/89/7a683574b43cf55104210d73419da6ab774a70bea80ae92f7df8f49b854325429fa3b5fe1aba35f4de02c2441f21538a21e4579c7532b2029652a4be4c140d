'use strict'

const { test } = require('node:test')
const { Hooks } = require('../../lib/hooks')
const { default: fastify } = require('../../fastify')
const noop = () => {}

test('hooks should have 4 array with the registered hooks', t => {
  const hooks = new Hooks()
  t.assert.strictEqual(typeof hooks, 'object')
  t.assert.ok(Array.isArray(hooks.onRequest))
  t.assert.ok(Array.isArray(hooks.onSend))
  t.assert.ok(Array.isArray(hooks.preParsing))
  t.assert.ok(Array.isArray(hooks.preValidation))
  t.assert.ok(Array.isArray(hooks.preHandler))
  t.assert.ok(Array.isArray(hooks.onResponse))
  t.assert.ok(Array.isArray(hooks.onError))
})

test('hooks.add should add a hook to the given hook', t => {
  const hooks = new Hooks()
  hooks.add('onRequest', noop)
  t.assert.strictEqual(hooks.onRequest.length, 1)
  t.assert.strictEqual(typeof hooks.onRequest[0], 'function')

  hooks.add('preParsing', noop)
  t.assert.strictEqual(hooks.preParsing.length, 1)
  t.assert.strictEqual(typeof hooks.preParsing[0], 'function')

  hooks.add('preValidation', noop)
  t.assert.strictEqual(hooks.preValidation.length, 1)
  t.assert.strictEqual(typeof hooks.preValidation[0], 'function')

  hooks.add('preHandler', noop)
  t.assert.strictEqual(hooks.preHandler.length, 1)
  t.assert.strictEqual(typeof hooks.preHandler[0], 'function')

  hooks.add('onResponse', noop)
  t.assert.strictEqual(hooks.onResponse.length, 1)
  t.assert.strictEqual(typeof hooks.onResponse[0], 'function')

  hooks.add('onSend', noop)
  t.assert.strictEqual(hooks.onSend.length, 1)
  t.assert.strictEqual(typeof hooks.onSend[0], 'function')

  hooks.add('onError', noop)
  t.assert.strictEqual(hooks.onError.length, 1)
  t.assert.strictEqual(typeof hooks.onError[0], 'function')
})

test('hooks should throw on unexisting handler', t => {
  t.plan(1)
  const hooks = new Hooks()
  try {
    hooks.add('onUnexistingHook', noop)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('should throw on wrong parameters', t => {
  const hooks = new Hooks()
  t.plan(4)
  try {
    hooks.add(null, () => {})
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_TYPE')
    t.assert.strictEqual(e.message, 'The hook name must be a string')
  }

  try {
    hooks.add('onSend', null)
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_HOOK_INVALID_HANDLER')
    t.assert.strictEqual(e.message, 'onSend hook should be a function, instead got [object Null]')
  }
})

test('Integration test: internal function _addHook should be turned into app.ready() rejection', async (t) => {
  const app = fastify()

  app.register(async function () {
    app.addHook('notRealHook', async () => {})
  })

  try {
    await app.ready()
    t.assert.fail('Expected ready() to throw')
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_HOOK_NOT_SUPPORTED')
    t.assert.match(err.message, /hook not supported/i)
  }
})
