'use strict'

const { test } = require('node:test')

const pluginUtilsPublic = require('../../lib/plugin-utils.js')
const symbols = require('../../lib/symbols.js')
const pluginUtils = require('../../lib/plugin-utils')[symbols.kTestInternals]

test("shouldSkipOverride should check the 'skip-override' symbol", t => {
  t.plan(2)

  yes[Symbol.for('skip-override')] = true

  t.assert.ok(pluginUtils.shouldSkipOverride(yes))
  t.assert.ok(!pluginUtils.shouldSkipOverride(no))

  function yes () {}
  function no () {}
})

test('getPluginName should return plugin name if the file is cached', t => {
  t.plan(1)
  const expectedPluginName = 'example'
  const fn = () => console.log('is just an example')
  require.cache[expectedPluginName] = { exports: fn }
  const pluginName = pluginUtilsPublic.getPluginName(fn)

  t.assert.strictEqual(pluginName, expectedPluginName)
})

test('getPluginName should not throw when require.cache is undefined', t => {
  t.plan(1)
  function example () {
    console.log('is just an example')
  }
  const cache = require.cache
  require.cache = undefined
  t.after(() => {
    require.cache = cache
  })
  const pluginName = pluginUtilsPublic.getPluginName(example)

  t.assert.strictEqual(pluginName, 'example')
})

test("getMeta should return the object stored with the 'plugin-meta' symbol", t => {
  t.plan(1)

  const meta = { hello: 'world' }
  fn[Symbol.for('plugin-meta')] = meta

  t.assert.deepStrictEqual(meta, pluginUtils.getMeta(fn))

  function fn () {}
})

test('checkDecorators should check if the given decorator is present in the instance', t => {
  t.plan(1)

  fn[Symbol.for('plugin-meta')] = {
    decorators: {
      fastify: ['plugin'],
      reply: ['plugin'],
      request: ['plugin']
    }
  }

  function context () {}
  context.plugin = true
  context[symbols.kReply] = { prototype: { plugin: true }, props: [] }
  context[symbols.kRequest] = { prototype: { plugin: true }, props: [] }

  try {
    pluginUtils.checkDecorators.call(context, fn)
    t.assert.ok('Everything ok')
  } catch (err) {
    t.assert.fail(err)
  }

  function fn () {}
})

test('checkDecorators should check if the given decorator is present in the instance (errored)', t => {
  t.plan(1)

  fn[Symbol.for('plugin-meta')] = {
    decorators: {
      fastify: ['plugin'],
      reply: ['plugin'],
      request: ['plugin']
    }
  }

  function context () {}
  context.plugin = true
  context[symbols.kReply] = { prototype: { plugin: true }, props: [] }
  context[symbols.kRequest] = { prototype: {}, props: [] }

  try {
    pluginUtils.checkDecorators.call(context, fn)
    t.assert.fail('should throw')
  } catch (err) {
    t.assert.strictEqual(err.message, "The decorator 'plugin' is not present in Request")
  }

  function fn () {}
})

test('checkDecorators should accept optional decorators', t => {
  t.plan(1)

  fn[Symbol.for('plugin-meta')] = {
    decorators: { }
  }

  function context () {}
  context.plugin = true
  context[symbols.kReply] = { prototype: { plugin: true } }
  context[symbols.kRequest] = { prototype: { plugin: true } }

  try {
    pluginUtils.checkDecorators.call(context, fn)
    t.assert.ok('Everything ok')
  } catch (err) {
    t.assert.fail(err)
  }

  function fn () {}
})

test('checkDependencies should check if the given dependency is present in the instance', t => {
  t.plan(1)

  fn[Symbol.for('plugin-meta')] = {
    dependencies: ['plugin']
  }

  function context () {}
  context[pluginUtilsPublic.kRegisteredPlugins] = ['plugin']

  try {
    pluginUtils.checkDependencies.call(context, fn)
    t.assert.ok('Everything ok')
  } catch (err) {
    t.assert.fail(err)
  }

  function fn () {}
})

test('checkDependencies should check if the given dependency is present in the instance (errored)', t => {
  t.plan(1)

  fn[Symbol.for('plugin-meta')] = {
    name: 'test-plugin',
    dependencies: ['plugin']
  }

  function context () {}
  context[pluginUtilsPublic.kRegisteredPlugins] = []

  try {
    pluginUtils.checkDependencies.call(context, fn)
    t.assert.fail('should throw')
  } catch (err) {
    t.assert.strictEqual(err.message, "The dependency 'plugin' of plugin 'test-plugin' is not registered")
  }

  function fn () {}
})
