'use strict'

const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const slowRedact = require('../index.js')

// Tests for Issue #2319: @pinojs/redact fails to redact patterns with 3+ consecutive wildcards
test('three consecutive wildcards: *.*.*.password (4 levels deep)', () => {
  const obj = {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } }
  }

  const redact = slowRedact({
    paths: ['*.*.*.password']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Only the 4-level deep password should be redacted
  assert.strictEqual(parsed.simple.password, 'secret-2-levels', '2-level password should NOT be redacted')
  assert.strictEqual(parsed.user.auth.password, 'secret-3-levels', '3-level password should NOT be redacted')
  assert.strictEqual(parsed.nested.deep.auth.password, '[REDACTED]', '4-level password SHOULD be redacted')
})

test('four consecutive wildcards: *.*.*.*.password (5 levels deep)', () => {
  const obj = {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: { user: { auth: { settings: { password: 'secret-5-levels' } } } }
  }

  const redact = slowRedact({
    paths: ['*.*.*.*.password']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Only the 5-level deep password should be redacted
  assert.strictEqual(parsed.simple.password, 'secret-2-levels', '2-level password should NOT be redacted')
  assert.strictEqual(parsed.user.auth.password, 'secret-3-levels', '3-level password should NOT be redacted')
  assert.strictEqual(parsed.nested.deep.auth.password, 'secret-4-levels', '4-level password should NOT be redacted')
  assert.strictEqual(parsed.config.user.auth.settings.password, '[REDACTED]', '5-level password SHOULD be redacted')
})

test('five consecutive wildcards: *.*.*.*.*.password (6 levels deep)', () => {
  const obj = {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: { user: { auth: { settings: { password: 'secret-5-levels' } } } },
    data: {
      reqConfig: {
        data: {
          credentials: {
            settings: {
              password: 'secret-6-levels'
            }
          }
        }
      }
    }
  }

  const redact = slowRedact({
    paths: ['*.*.*.*.*.password']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Only the 6-level deep password should be redacted
  assert.strictEqual(parsed.simple.password, 'secret-2-levels', '2-level password should NOT be redacted')
  assert.strictEqual(parsed.user.auth.password, 'secret-3-levels', '3-level password should NOT be redacted')
  assert.strictEqual(parsed.nested.deep.auth.password, 'secret-4-levels', '4-level password should NOT be redacted')
  assert.strictEqual(parsed.config.user.auth.settings.password, 'secret-5-levels', '5-level password should NOT be redacted')
  assert.strictEqual(parsed.data.reqConfig.data.credentials.settings.password, '[REDACTED]', '6-level password SHOULD be redacted')
})

test('three wildcards with censor function receives correct values', () => {
  const obj = {
    nested: { deep: { auth: { password: 'secret-value' } } }
  }

  const censorCalls = []
  const redact = slowRedact({
    paths: ['*.*.*.password'],
    censor: (value, path) => {
      censorCalls.push({ value, path: [...path] })
      return '[REDACTED]'
    }
  })

  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Should have been called exactly once with the correct value
  assert.strictEqual(censorCalls.length, 1, 'censor should be called once')
  assert.strictEqual(censorCalls[0].value, 'secret-value', 'censor should receive the actual value')
  assert.deepStrictEqual(censorCalls[0].path, ['nested', 'deep', 'auth', 'password'], 'censor should receive correct path')
  assert.strictEqual(parsed.nested.deep.auth.password, '[REDACTED]')
})

test('three wildcards with multiple matches', () => {
  const obj = {
    api1: { v1: { auth: { token: 'token1' } } },
    api2: { v2: { auth: { token: 'token2' } } },
    api3: { v1: { auth: { token: 'token3' } } }
  }

  const redact = slowRedact({
    paths: ['*.*.*.token']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // All three tokens should be redacted
  assert.strictEqual(parsed.api1.v1.auth.token, '[REDACTED]')
  assert.strictEqual(parsed.api2.v2.auth.token, '[REDACTED]')
  assert.strictEqual(parsed.api3.v1.auth.token, '[REDACTED]')
})

test('three wildcards with remove option', () => {
  const obj = {
    nested: { deep: { auth: { password: 'secret', username: 'admin' } } }
  }

  const redact = slowRedact({
    paths: ['*.*.*.password'],
    remove: true
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Password should be removed entirely
  assert.strictEqual('password' in parsed.nested.deep.auth, false, 'password key should be removed')
  assert.strictEqual(parsed.nested.deep.auth.username, 'admin', 'username should remain')
})

test('mixed: two and three wildcards in same redactor', () => {
  const obj = {
    user: { auth: { password: 'secret-3-levels' } },
    config: { deep: { auth: { password: 'secret-4-levels' } } }
  }

  const redact = slowRedact({
    paths: ['*.*.password', '*.*.*.password']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Both should be redacted
  assert.strictEqual(parsed.user.auth.password, '[REDACTED]', '3-level should be redacted by *.*.password')
  assert.strictEqual(parsed.config.deep.auth.password, '[REDACTED]', '4-level should be redacted by *.*.*.password')
})

test('three wildcards should not call censor for non-existent paths', () => {
  const obj = {
    shallow: { data: 'value' },
    nested: { deep: { auth: { password: 'secret' } } }
  }

  let censorCallCount = 0
  const redact = slowRedact({
    paths: ['*.*.*.password'],
    censor: (value, path) => {
      censorCallCount++
      return '[REDACTED]'
    }
  })

  redact(obj)

  // Should only be called once for the path that exists
  assert.strictEqual(censorCallCount, 1, 'censor should only be called for existing paths')
})

test('three wildcards with arrays', () => {
  const obj = {
    users: [
      { auth: { password: 'secret1' } },
      { auth: { password: 'secret2' } }
    ]
  }

  const redact = slowRedact({
    paths: ['*.*.*.password']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Both passwords should be redacted (users[0].auth.password is 4 levels)
  assert.strictEqual(parsed.users[0].auth.password, '[REDACTED]')
  assert.strictEqual(parsed.users[1].auth.password, '[REDACTED]')
})

test('four wildcards with authorization header (real-world case)', () => {
  const obj = {
    requests: {
      api1: {
        config: {
          headers: {
            authorization: 'Bearer secret-token'
          }
        }
      },
      api2: {
        config: {
          headers: {
            authorization: 'Bearer another-token'
          }
        }
      }
    }
  }

  const redact = slowRedact({
    paths: ['*.*.*.*.authorization']
  })
  const result = redact(obj)
  const parsed = JSON.parse(result)

  // Both authorization headers should be redacted
  assert.strictEqual(parsed.requests.api1.config.headers.authorization, '[REDACTED]')
  assert.strictEqual(parsed.requests.api2.config.headers.authorization, '[REDACTED]')
})
