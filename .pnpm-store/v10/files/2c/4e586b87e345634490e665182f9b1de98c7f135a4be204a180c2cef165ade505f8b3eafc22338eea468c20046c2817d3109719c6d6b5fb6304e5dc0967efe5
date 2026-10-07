'use strict'

const { test } = require('tap')
const { isBundledOrTypescriptPlugin } = require('../../lib/is-bundled-or-typescript-plugin')

test('isBundledOrTypescriptPlugin', (t) => {
  t.plan(9)

  t.equal(isBundledOrTypescriptPlugin(1), false)
  t.equal(isBundledOrTypescriptPlugin('function'), false)
  t.equal(isBundledOrTypescriptPlugin({}), false)
  t.equal(isBundledOrTypescriptPlugin([]), false)
  t.equal(isBundledOrTypescriptPlugin(null), false)

  t.equal(isBundledOrTypescriptPlugin(function () {}), false)
  t.equal(isBundledOrTypescriptPlugin(new Promise((resolve) => resolve)), false)
  t.equal(isBundledOrTypescriptPlugin(Promise.resolve()), false)

  t.equal(isBundledOrTypescriptPlugin({ default: () => {} }), true)
})
