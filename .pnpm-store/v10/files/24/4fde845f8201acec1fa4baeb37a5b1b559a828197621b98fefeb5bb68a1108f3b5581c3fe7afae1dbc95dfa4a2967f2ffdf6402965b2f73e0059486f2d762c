const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const slowRedact = require('../index.js')
const fastRedact = require('fast-redact')

test('integration: basic path redaction matches fast-redact', () => {
  const obj = {
    headers: {
      cookie: 'secret-cookie',
      authorization: 'Bearer token'
    },
    body: { message: 'hello' }
  }

  const slowResult = slowRedact({ paths: ['headers.cookie'] })(obj)
  const fastResult = fastRedact({ paths: ['headers.cookie'] })(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: multiple paths match fast-redact', () => {
  const obj = {
    user: { name: 'john', password: 'secret' },
    session: { token: 'abc123' }
  }

  const paths = ['user.password', 'session.token']
  const slowResult = slowRedact({ paths })(obj)
  const fastResult = fastRedact({ paths })(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: custom censor value matches fast-redact', () => {
  const obj = { secret: 'hidden' }
  const options = { paths: ['secret'], censor: '***' }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: bracket notation matches fast-redact', () => {
  const obj = {
    'weird-key': { 'another-weird': 'secret' },
    normal: 'public'
  }

  const options = { paths: ['["weird-key"]["another-weird"]'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: array paths match fast-redact', () => {
  const obj = {
    users: [
      { name: 'john', password: 'secret1' },
      { name: 'jane', password: 'secret2' }
    ]
  }

  const options = { paths: ['users[0].password', 'users[1].password'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: wildcard at end matches fast-redact', () => {
  const obj = {
    secrets: {
      key1: 'secret1',
      key2: 'secret2'
    },
    public: 'data'
  }

  const options = { paths: ['secrets.*'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: wildcard with arrays matches fast-redact', () => {
  const obj = {
    items: ['secret1', 'secret2', 'secret3']
  }

  const options = { paths: ['items.*'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: intermediate wildcard matches fast-redact', () => {
  const obj = {
    users: {
      user1: { password: 'secret1' },
      user2: { password: 'secret2' }
    }
  }

  const options = { paths: ['users.*.password'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: custom serialize function matches fast-redact', () => {
  const obj = { secret: 'hidden', public: 'data' }
  const options = {
    paths: ['secret'],
    serialize: (obj) => `custom:${JSON.stringify(obj)}`
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: nested paths match fast-redact', () => {
  const obj = {
    level1: {
      level2: {
        level3: {
          secret: 'hidden'
        }
      }
    }
  }

  const options = { paths: ['level1.level2.level3.secret'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: non-existent paths match fast-redact', () => {
  const obj = { existing: 'value' }
  const options = { paths: ['nonexistent.path'] }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: null and undefined handling - legitimate difference', () => {
  const obj = {
    nullValue: null,
    undefinedValue: undefined,
    nested: {
      nullValue: null
    }
  }

  const options = { paths: ['nullValue', 'nested.nullValue'] }
  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  // This is a legitimate behavioral difference:
  // @pinojs/redact redacts null values, fast-redact doesn't
  const slowParsed = JSON.parse(slowResult)
  const fastParsed = JSON.parse(fastResult)

  // @pinojs/redact redacts nulls
  assert.strictEqual(slowParsed.nullValue, '[REDACTED]')
  assert.strictEqual(slowParsed.nested.nullValue, '[REDACTED]')

  // fast-redact preserves nulls
  assert.strictEqual(fastParsed.nullValue, null)
  assert.strictEqual(fastParsed.nested.nullValue, null)
})

test('integration: strict mode with primitives - different error handling', () => {
  const options = { paths: ['test'], strict: true }

  const slowRedactFn = slowRedact(options)
  const fastRedactFn = fastRedact(options)

  // @pinojs/redact handles primitives gracefully
  const stringSlowResult = slowRedactFn('primitive')
  assert.strictEqual(stringSlowResult, '"primitive"')

  const numberSlowResult = slowRedactFn(42)
  assert.strictEqual(numberSlowResult, '42')

  // fast-redact throws an error for primitives in strict mode
  assert.throws(() => {
    fastRedactFn('primitive')
  }, /primitives cannot be redacted/)

  assert.throws(() => {
    fastRedactFn(42)
  }, /primitives cannot be redacted/)
})

test('integration: serialize false behavior difference', () => {
  const slowObj = { secret: 'hidden' }
  const fastObj = { secret: 'hidden' }
  const options = { paths: ['secret'], serialize: false }

  const slowResult = slowRedact(options)(slowObj)
  const fastResult = fastRedact(options)(fastObj)

  // Both should redact the secret
  assert.strictEqual(slowResult.secret, '[REDACTED]')
  assert.strictEqual(fastResult.secret, '[REDACTED]')

  // @pinojs/redact always has restore method
  assert.strictEqual(typeof slowResult.restore, 'function')

  // @pinojs/redact should restore to original value
  assert.strictEqual(slowResult.restore().secret, 'hidden')

  // Key difference: original object state
  // fast-redact mutates the original, @pinojs/redact doesn't
  assert.strictEqual(slowObj.secret, 'hidden') // @pinojs/redact preserves original
  assert.strictEqual(fastObj.secret, '[REDACTED]') // fast-redact mutates original
})

test('integration: censor function behavior', () => {
  const obj = { secret: 'hidden' }
  const options = {
    paths: ['secret'],
    censor: (value, path) => `REDACTED:${path}`
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: complex object with mixed patterns', () => {
  const obj = {
    users: [
      {
        id: 1,
        name: 'john',
        credentials: { password: 'secret1', apiKey: 'key1' }
      },
      {
        id: 2,
        name: 'jane',
        credentials: { password: 'secret2', apiKey: 'key2' }
      }
    ],
    config: {
      database: { password: 'db-secret' },
      api: { keys: ['key1', 'key2', 'key3'] }
    }
  }

  const options = {
    paths: [
      'users.*.credentials.password',
      'users.*.credentials.apiKey',
      'config.database.password',
      'config.api.keys.*'
    ]
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

// Remove option integration tests - comparing with fast-redact
test('integration: remove option basic comparison with fast-redact', () => {
  const obj = { username: 'john', password: 'secret123' }
  const options = { paths: ['password'], remove: true }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)

  // Verify the key is actually removed
  const parsed = JSON.parse(slowResult)
  assert.strictEqual(parsed.username, 'john')
  assert.strictEqual('password' in parsed, false)
})

test('integration: remove option multiple paths comparison with fast-redact', () => {
  const obj = {
    user: { name: 'john', password: 'secret' },
    session: { token: 'abc123', id: 'session1' }
  }

  const options = {
    paths: ['user.password', 'session.token'],
    remove: true
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: remove option wildcard comparison with fast-redact', () => {
  const obj = {
    secrets: {
      key1: 'secret1',
      key2: 'secret2'
    },
    public: 'data'
  }

  const options = {
    paths: ['secrets.*'],
    remove: true
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: remove option intermediate wildcard comparison with fast-redact', () => {
  const obj = {
    users: {
      user1: { password: 'secret1', name: 'john' },
      user2: { password: 'secret2', name: 'jane' }
    }
  }

  const options = {
    paths: ['users.*.password'],
    remove: true
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)
})

test('integration: remove option with custom censor comparison with fast-redact', () => {
  const obj = { secret: 'hidden', public: 'data' }
  const options = {
    paths: ['secret'],
    censor: '***',
    remove: true
  }

  const slowResult = slowRedact(options)(obj)
  const fastResult = fastRedact(options)(obj)

  assert.strictEqual(slowResult, fastResult)

  // With remove: true, censor value should be ignored
  const parsed = JSON.parse(slowResult)
  assert.strictEqual('secret' in parsed, false)
  assert.strictEqual(parsed.public, 'data')
})

test('integration: remove option serialize false behavior - @pinojs/redact only', () => {
  // fast-redact doesn't support remove option with serialize: false
  // so we test @pinojs/redact's behavior only
  const obj = { secret: 'hidden', public: 'data' }
  const options = { paths: ['secret'], remove: true, serialize: false }

  const result = slowRedact(options)(obj)

  // Should have the key removed
  assert.strictEqual('secret' in result, false)
  assert.strictEqual(result.public, 'data')

  // Should have restore method
  assert.strictEqual(typeof result.restore, 'function')

  // Original object should be preserved
  assert.strictEqual(obj.secret, 'hidden')

  // Restore should bring back the removed key
  const restored = result.restore()
  assert.strictEqual(restored.secret, 'hidden')
})
