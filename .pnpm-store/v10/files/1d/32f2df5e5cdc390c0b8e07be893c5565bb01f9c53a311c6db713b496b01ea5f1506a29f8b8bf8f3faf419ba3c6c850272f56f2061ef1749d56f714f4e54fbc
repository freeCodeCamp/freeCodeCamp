'use strict'
const { test } = require('node:test')
const { kRouteContext } = require('../lib/symbols')
const fastify = require('..')

test('handlers receive correct `this` context', async (t) => {
  t.plan(4)

  // simulate plugin that uses fastify-plugin
  const plugin = function (instance, opts, done) {
    instance.decorate('foo', 'foo')
    done()
  }
  plugin[Symbol.for('skip-override')] = true

  const instance = fastify()
  instance.register(plugin)

  instance.get('/', function (req, reply) {
    t.assert.ok(this.foo)
    t.assert.strictEqual(this.foo, 'foo')
    reply.send()
  })

  await instance.inject('/')

  t.assert.ok(instance.foo)
  t.assert.strictEqual(instance.foo, 'foo')
})

test('handlers have access to the internal context', async (t) => {
  t.plan(5)

  const instance = fastify()
  instance.get('/', { config: { foo: 'bar' } }, function (req, reply) {
    t.assert.ok(reply[kRouteContext])
    t.assert.ok(reply[kRouteContext].config)
    t.assert.ok(typeof reply[kRouteContext].config, Object)
    t.assert.ok(reply[kRouteContext].config.foo)
    t.assert.strictEqual(reply[kRouteContext].config.foo, 'bar')
    reply.send()
  })

  await instance.inject('/')
})
