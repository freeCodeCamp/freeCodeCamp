'use strict'

const { test } = require('node:test')
const proxyquire = require('proxyquire')

test('diagnostics_channel when present and subscribers', t => {
  t.plan(3)

  let fastifyInHook

  const diagnostics = {
    channel (name) {
      t.assert.strictEqual(name, 'fastify.initialization')
      return {
        hasSubscribers: true,
        publish (event) {
          t.assert.ok(event.fastify)
          fastifyInHook = event.fastify
        }
      }
    },
    '@noCallThru': true
  }

  const fastify = proxyquire('../../fastify', {
    'node:diagnostics_channel': diagnostics
  })()
  t.assert.strictEqual(fastifyInHook, fastify)
})

test('diagnostics_channel when present and no subscribers', t => {
  t.plan(1)

  const diagnostics = {
    channel (name) {
      t.assert.strictEqual(name, 'fastify.initialization')
      return {
        hasSubscribers: false,
        publish () {
          t.assert.fail('publish should not be called')
        }
      }
    },
    '@noCallThru': true
  }

  proxyquire('../../fastify', {
    'node:diagnostics_channel': diagnostics
  })()
})
