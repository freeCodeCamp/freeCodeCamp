'use strict'

const { test } = require('node:test')
const noopSet = require('../lib/noop-set')

test('does a lot of nothing', async t => {
  const aSet = noopSet()
  t.assert.ok(aSet, 'object')

  const item = {}
  aSet.add(item)
  aSet.add({ another: 'item' })
  aSet.delete(item)
  t.assert.strictEqual(aSet.has(item), true)

  for (const i of aSet) {
    t.assert.fail('should not have any items: ' + i)
  }
})
