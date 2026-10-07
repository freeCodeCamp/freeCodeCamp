const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const slowRedact = require('../index.js')

/* eslint-disable no-proto */

test('prototype pollution: __proto__ path should not pollute Object prototype', () => {
  const obj = {
    user: { name: 'john' },
    __proto__: { isAdmin: true }
  }

  const redact = slowRedact({
    paths: ['__proto__.isAdmin'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should redact the __proto__ property if it exists as a regular property
  assert.strictEqual(result.__proto__.isAdmin, '[REDACTED]')
})

test('prototype pollution: constructor.prototype path should not pollute', () => {
  const obj = {
    user: { name: 'john' },
    constructor: {
      prototype: { isAdmin: true }
    }
  }

  const redact = slowRedact({
    paths: ['constructor.prototype.isAdmin'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should redact the constructor.prototype property if it exists as a regular property
  assert.strictEqual(result.constructor.prototype.isAdmin, '[REDACTED]')
})

test('prototype pollution: nested __proto__ should not pollute', () => {
  const obj = {
    user: {
      settings: {
        __proto__: { isAdmin: true }
      }
    }
  }

  const redact = slowRedact({
    paths: ['user.settings.__proto__.isAdmin'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should redact the nested __proto__ property
  assert.strictEqual(result.user.settings.__proto__.isAdmin, '[REDACTED]')
})

test('prototype pollution: bracket notation __proto__ should not pollute', () => {
  const obj = {
    user: { name: 'john' },
    __proto__: { isAdmin: true }
  }

  const redact = slowRedact({
    paths: ['["__proto__"]["isAdmin"]'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should redact the __proto__ property when accessed via bracket notation
  assert.strictEqual(result.__proto__.isAdmin, '[REDACTED]')
})

test('prototype pollution: wildcard with __proto__ should not pollute', () => {
  const obj = {
    users: {
      __proto__: { isAdmin: true },
      user1: { name: 'john' },
      user2: { name: 'jane' }
    }
  }

  const redact = slowRedact({
    paths: ['users.*'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should redact only own properties
  assert.strictEqual(result.users.user1, '[REDACTED]')
  assert.strictEqual(result.users.user2, '[REDACTED]')

  // __proto__ should only be redacted if it's an own property, not inherited
  if (Object.prototype.hasOwnProperty.call(obj.users, '__proto__')) {
    assert.strictEqual(result.users.__proto__, '[REDACTED]')
  }
})

test('prototype pollution: malicious JSON payload should not pollute', () => {
  // Simulate a malicious payload that might come from JSON.parse
  const maliciousObj = JSON.parse('{"user": {"name": "john"}, "__proto__": {"isAdmin": true}}')

  const redact = slowRedact({
    paths: ['__proto__.isAdmin'],
    serialize: false
  })

  const result = redact(maliciousObj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // The malicious payload should have been redacted
  assert.strictEqual(result.__proto__.isAdmin, '[REDACTED]')
})

test('prototype pollution: verify prototype chain is preserved', () => {
  function CustomClass () {
    this.data = 'test'
  }
  CustomClass.prototype.method = function () { return 'original' }

  const obj = new CustomClass()

  const redact = slowRedact({
    paths: ['data'],
    serialize: false
  })

  const result = redact(obj)

  // Should redact the data property
  assert.strictEqual(result.data, '[REDACTED]')

  // Should preserve the original prototype chain
  assert.strictEqual(result.method(), 'original')
  assert.strictEqual(Object.getPrototypeOf(result), CustomClass.prototype)
})

test('prototype pollution: setValue should not create prototype pollution', () => {
  const obj = { user: { name: 'john' } }

  // Try to pollute via non-existent path that could create __proto__
  const redact = slowRedact({
    paths: ['__proto__.isAdmin'],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual({}.isAdmin, undefined)

  // Should not create the path if it doesn't exist
  // The __proto__ property may exist due to Object.create, but should not contain our redacted value
  if (result.__proto__) {
    assert.strictEqual(result.__proto__.isAdmin, undefined)
  }
})

test('prototype pollution: deep nested prototype properties should not pollute', () => {
  const obj = {
    level1: {
      level2: {
        level3: {
          __proto__: { isAdmin: true },
          constructor: {
            prototype: { isEvil: true }
          }
        }
      }
    }
  }

  const redact = slowRedact({
    paths: [
      'level1.level2.level3.__proto__.isAdmin',
      'level1.level2.level3.constructor.prototype.isEvil'
    ],
    serialize: false
  })

  const result = redact(obj)

  // Should not pollute Object.prototype
  assert.strictEqual(Object.prototype.isAdmin, undefined)
  assert.strictEqual(Object.prototype.isEvil, undefined)
  assert.strictEqual({}.isAdmin, undefined)
  assert.strictEqual({}.isEvil, undefined)

  // Should redact the deep nested properties
  assert.strictEqual(result.level1.level2.level3.__proto__.isAdmin, '[REDACTED]')
  assert.strictEqual(result.level1.level2.level3.constructor.prototype.isEvil, '[REDACTED]')
})
