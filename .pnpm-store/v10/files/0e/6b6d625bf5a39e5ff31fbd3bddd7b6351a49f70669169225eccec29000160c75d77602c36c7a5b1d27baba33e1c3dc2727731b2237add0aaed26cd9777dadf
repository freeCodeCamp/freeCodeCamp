'use strict'

const { test } = require('node:test')
const fp = require('../plugin')

test('webpack removes require.main.filename', t => {
  const filename = require.main.filename
  const info = console.info
  t.after(() => {
    require.main.filename = filename
    console.info = info
  })

  require.main.filename = null

  console.info = function (msg) {
    t.assert.fail('logged: ' + msg)
  }

  fp((_fastify, _opts, next) => {
    next()
  }, {
    fastify: '^5.0.0'
  })
})

test('support faux modules', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(plugin.default, plugin)
})

test('support faux modules does not override existing default field in babel module', (t) => {
  const module = {
    default: (_fastify, _opts, next) => next()
  }

  module.default.default = 'Existing default field'

  const plugin = fp(module)

  t.assert.strictEqual(plugin.default, 'Existing default field')
})

test('support ts named imports', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  }, {
    name: 'hello'
  })

  t.assert.strictEqual(plugin.hello, plugin)
})

test('from kebab-case to camelCase', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  }, {
    name: 'hello-world'
  })

  t.assert.strictEqual(plugin.helloWorld, plugin)
})

test('from @-prefixed named imports', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  }, {
    name: '@hello/world'
  })

  t.assert.strictEqual(plugin.helloWorld, plugin)
})

test('from @-prefixed named kebab-case to camelCase', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  }, {
    name: '@hello/my-world'
  })

  t.assert.strictEqual(plugin.helloMyWorld, plugin)
})

test('from kebab-case to camelCase multiple words', (t) => {
  const plugin = fp((_fastify, _opts, next) => {
    next()
  }, {
    name: 'hello-long-world'
  })

  t.assert.strictEqual(plugin.helloLongWorld, plugin)
})

test('from kebab-case to camelCase multiple words does not override', (t) => {
  const fn = (_fastify, _opts, next) => {
    next()
  }

  const foobar = {}
  fn.helloLongWorld = foobar

  const plugin = fp(fn, {
    name: 'hello-long-world'
  })

  t.assert.strictEqual(plugin.helloLongWorld, foobar)
})
