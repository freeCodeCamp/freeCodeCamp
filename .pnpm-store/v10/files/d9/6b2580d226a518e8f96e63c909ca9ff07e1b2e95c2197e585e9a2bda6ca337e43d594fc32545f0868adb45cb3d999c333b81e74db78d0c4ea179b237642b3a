'use strict'

const { test } = require('tap')
const { validatePlugin } = require('../../lib/validate-plugin')
const { AVV_ERR_PLUGIN_NOT_VALID } = require('../../lib/errors')

test('validatePlugin', (t) => {
  t.plan(8)

  t.throws(() => validatePlugin(1), new AVV_ERR_PLUGIN_NOT_VALID('number'))
  t.throws(() => validatePlugin('function'), new AVV_ERR_PLUGIN_NOT_VALID('string'))
  t.throws(() => validatePlugin({}), new AVV_ERR_PLUGIN_NOT_VALID('object'))
  t.throws(() => validatePlugin([]), new AVV_ERR_PLUGIN_NOT_VALID('array'))
  t.throws(() => validatePlugin(null), new AVV_ERR_PLUGIN_NOT_VALID('null'))

  t.doesNotThrow(() => validatePlugin(function () {}))
  t.doesNotThrow(() => validatePlugin(new Promise((resolve) => resolve)))
  t.doesNotThrow(() => validatePlugin(Promise.resolve()))
})
