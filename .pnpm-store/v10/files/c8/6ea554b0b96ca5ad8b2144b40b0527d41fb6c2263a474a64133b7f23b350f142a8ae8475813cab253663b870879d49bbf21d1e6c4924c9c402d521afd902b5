const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const slowRedact = require('../index.js')

test('selective cloning shares references for non-redacted paths', () => {
  const sharedObject = { unchanged: 'data' }
  const obj = {
    toRedact: 'secret',
    shared: sharedObject,
    nested: {
      toRedact: 'secret2',
      shared: sharedObject
    }
  }

  const redact = slowRedact({
    paths: ['toRedact', 'nested.toRedact'],
    serialize: false
  })

  const result = redact(obj)

  // Redacted values should be different
  assert.strictEqual(result.toRedact, '[REDACTED]')
  assert.strictEqual(result.nested.toRedact, '[REDACTED]')

  // Non-redacted references should be shared (same object reference)
  assert.strictEqual(result.shared, obj.shared)
  assert.strictEqual(result.nested.shared, obj.nested.shared)

  // The shared object should be the exact same reference
  assert.strictEqual(result.shared, sharedObject)
  assert.strictEqual(result.nested.shared, sharedObject)
})

test('selective cloning works with arrays', () => {
  const sharedItem = { unchanged: 'data' }
  const obj = {
    items: [
      { secret: 'hidden1', shared: sharedItem },
      { secret: 'hidden2', shared: sharedItem },
      sharedItem
    ]
  }

  const redact = slowRedact({
    paths: ['items.*.secret'],
    serialize: false
  })

  const result = redact(obj)

  // Secrets should be redacted
  assert.strictEqual(result.items[0].secret, '[REDACTED]')
  assert.strictEqual(result.items[1].secret, '[REDACTED]')

  // Shared references should be preserved where possible
  // Note: array items with secrets will be cloned, but their shared properties should still reference the original
  assert.strictEqual(result.items[0].shared, sharedItem)
  assert.strictEqual(result.items[1].shared, sharedItem)

  // The third item gets cloned due to wildcard, but should have the same content
  assert.deepStrictEqual(result.items[2], sharedItem)
  // Note: Due to wildcard '*', all array items are cloned, even if they don't need redaction
  // This is still a significant optimization for object properties that aren't in wildcard paths
})

test('selective cloning with no paths returns original object', () => {
  const obj = { data: 'unchanged' }
  const redact = slowRedact({
    paths: [],
    serialize: false
  })

  const result = redact(obj)

  // Should return the exact same object reference
  assert.strictEqual(result, obj)
})

test('selective cloning performance - large objects with minimal redaction', () => {
  // Create a large object with mostly shared data
  const sharedData = { large: 'data'.repeat(1000) }
  const obj = {
    secret: 'hidden',
    shared1: sharedData,
    shared2: sharedData,
    nested: {
      secret: 'hidden2',
      shared3: sharedData,
      deep: {
        shared4: sharedData,
        moreShared: sharedData
      }
    }
  }

  const redact = slowRedact({
    paths: ['secret', 'nested.secret'],
    serialize: false
  })

  const result = redact(obj)

  // Verify redaction worked
  assert.strictEqual(result.secret, '[REDACTED]')
  assert.strictEqual(result.nested.secret, '[REDACTED]')

  // Verify shared references are preserved
  assert.strictEqual(result.shared1, sharedData)
  assert.strictEqual(result.shared2, sharedData)
  assert.strictEqual(result.nested.shared3, sharedData)
  assert.strictEqual(result.nested.deep.shared4, sharedData)
  assert.strictEqual(result.nested.deep.moreShared, sharedData)
})
