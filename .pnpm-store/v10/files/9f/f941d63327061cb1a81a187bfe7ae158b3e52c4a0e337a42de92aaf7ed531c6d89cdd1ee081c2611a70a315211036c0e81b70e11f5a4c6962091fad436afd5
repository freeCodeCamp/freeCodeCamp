'use strict'

const assert = require('node:assert')

module.exports = function (fastify, opts, done) {
  assert.strictEqual(fastify.pluginName, 'test-plugin')
  done()
}

module.exports[Symbol.for('fastify.display-name')] = 'test-plugin'
