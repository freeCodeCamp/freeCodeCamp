'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const sinon = require('sinon')
const pino = require('../')

test('child logger methods should be independently wrappable with sinon when created with options', () => {
  // Create parent logger
  const parent = pino({ level: 'info' }, { write () {} })

  // Wrap parent's info method with sinon
  sinon.spy(parent, 'info')

  // Create child logger with options (same level)
  // This triggers the bug: child inherits parent's wrapped method
  const child = parent.child({ name: 'child' }, { level: 'info' })

  // Try to wrap child's info method - this should NOT throw
  // In the bug, child.info is the same reference as parent.info (which is already wrapped)
  assert.doesNotThrow(() => {
    sinon.spy(child, 'info')
  }, 'should be able to wrap child logger methods independently')

  // Verify they are different function references
  assert.strictEqual(child.info === parent.info, false, 'child and parent should have different method references')

  // Cleanup
  sinon.restore()
})

test('child logger info method should be independently wrappable after parent is spied', () => {
  // This closely mimics the real-world scenario from the bug report
  const parent = pino({ level: 'info' }, { write () {} })

  // Spy on parent's info method
  sinon.spy(parent, 'info')

  // Create child with explicit level option (even though it's the same)
  const child = parent.child({ name: 'child' }, { level: 'info' })

  // Try to spy on child's info method - this should NOT throw
  assert.doesNotThrow(() => {
    sinon.spy(child, 'info')
  }, 'should be able to wrap child info method independently')

  // Verify they are different function references
  assert.strictEqual(child.info === parent.info, false, 'child and parent should have different info method references')

  // Cleanup
  sinon.restore()
})

test('child logger without explicit level gets own methods when parent is tampered', () => {
  // When parent methods have been wrapped, child should get its own methods
  // even without explicit level option to prevent Sinon wrapping errors
  const parent = pino({ level: 'info' }, { write () {} })

  // Spy on parent's info method (this makes it an own property)
  sinon.spy(parent, 'info')

  // Create child WITHOUT level option
  const child = parent.child({ name: 'child' })

  // Child should have different method reference due to tampering detection
  assert.strictEqual(child.info === parent.info, false, 'child should have own methods when parent is tampered')

  // Should be able to wrap child's method independently
  assert.doesNotThrow(() => {
    sinon.spy(child, 'info')
  }, 'should be able to wrap child method independently')

  // Cleanup
  sinon.restore()
})
