const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const slowRedact = require('../index.js')

test('basic path redaction', () => {
  const obj = {
    headers: {
      cookie: 'secret-cookie',
      authorization: 'Bearer token'
    },
    body: { message: 'hello' }
  }

  const redact = slowRedact({ paths: ['headers.cookie'] })
  const result = redact(obj)

  // Original object should remain unchanged
  assert.strictEqual(obj.headers.cookie, 'secret-cookie')

  // Result should have redacted path
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.headers.cookie, '[REDACTED]')
  assert.strictEqual(parsed.headers.authorization, 'Bearer token')
  assert.strictEqual(parsed.body.message, 'hello')
})

test('multiple paths redaction', () => {
  const obj = {
    user: { name: 'john', password: 'secret' },
    session: { token: 'abc123' }
  }

  const redact = slowRedact({
    paths: ['user.password', 'session.token']
  })
  const result = redact(obj)

  // Original unchanged
  assert.strictEqual(obj.user.password, 'secret')
  assert.strictEqual(obj.session.token, 'abc123')

  // Result redacted
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.user.password, '[REDACTED]')
  assert.strictEqual(parsed.session.token, '[REDACTED]')
  assert.strictEqual(parsed.user.name, 'john')
})

test('custom censor value', () => {
  const obj = { secret: 'hidden' }
  const redact = slowRedact({
    paths: ['secret'],
    censor: '***'
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.secret, '***')
})

test('serialize: false returns object with restore method', () => {
  const obj = { secret: 'hidden' }
  const redact = slowRedact({
    paths: ['secret'],
    serialize: false
  })
  const result = redact(obj)

  // Should be object, not string
  assert.strictEqual(typeof result, 'object')
  assert.strictEqual(result.secret, '[REDACTED]')

  // Should have restore method
  assert.strictEqual(typeof result.restore, 'function')

  const restored = result.restore()
  assert.strictEqual(restored.secret, 'hidden')
})

test('bracket notation paths', () => {
  const obj = {
    'weird-key': { 'another-weird': 'secret' },
    normal: 'public'
  }

  const redact = slowRedact({
    paths: ['["weird-key"]["another-weird"]']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed['weird-key']['another-weird'], '[REDACTED]')
  assert.strictEqual(parsed.normal, 'public')
})

test('array paths', () => {
  const obj = {
    users: [
      { name: 'john', password: 'secret1' },
      { name: 'jane', password: 'secret2' }
    ]
  }

  const redact = slowRedact({
    paths: ['users[0].password', 'users[1].password']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.users[0].password, '[REDACTED]')
  assert.strictEqual(parsed.users[1].password, '[REDACTED]')
  assert.strictEqual(parsed.users[0].name, 'john')
  assert.strictEqual(parsed.users[1].name, 'jane')
})

test('wildcard at end of path', () => {
  const obj = {
    secrets: {
      key1: 'secret1',
      key2: 'secret2'
    },
    public: 'data'
  }

  const redact = slowRedact({
    paths: ['secrets.*']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.secrets.key1, '[REDACTED]')
  assert.strictEqual(parsed.secrets.key2, '[REDACTED]')
  assert.strictEqual(parsed.public, 'data')
})

test('wildcard with arrays', () => {
  const obj = {
    items: ['secret1', 'secret2', 'secret3']
  }

  const redact = slowRedact({
    paths: ['items.*']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.items[0], '[REDACTED]')
  assert.strictEqual(parsed.items[1], '[REDACTED]')
  assert.strictEqual(parsed.items[2], '[REDACTED]')
})

test('intermediate wildcard', () => {
  const obj = {
    users: {
      user1: { password: 'secret1' },
      user2: { password: 'secret2' }
    }
  }

  const redact = slowRedact({
    paths: ['users.*.password']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.users.user1.password, '[REDACTED]')
  assert.strictEqual(parsed.users.user2.password, '[REDACTED]')
})

test('censor function', () => {
  const obj = { secret: 'hidden' }
  const redact = slowRedact({
    paths: ['secret'],
    censor: (value, path) => `REDACTED:${path.join('.')}`
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.secret, 'REDACTED:secret')
})

test('custom serialize function', () => {
  const obj = { secret: 'hidden', public: 'data' }
  const redact = slowRedact({
    paths: ['secret'],
    serialize: (obj) => `custom:${JSON.stringify(obj)}`
  })
  const result = redact(obj)

  assert(result.startsWith('custom:'))
  const parsed = JSON.parse(result.slice(7))
  assert.strictEqual(parsed.secret, '[REDACTED]')
  assert.strictEqual(parsed.public, 'data')
})

test('nested paths', () => {
  const obj = {
    level1: {
      level2: {
        level3: {
          secret: 'hidden'
        }
      }
    }
  }

  const redact = slowRedact({
    paths: ['level1.level2.level3.secret']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.level1.level2.level3.secret, '[REDACTED]')
})

test('non-existent paths are ignored', () => {
  const obj = { existing: 'value' }
  const redact = slowRedact({
    paths: ['nonexistent.path']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.existing, 'value')
  assert.strictEqual(parsed.nonexistent, undefined)
})

test('null and undefined handling', () => {
  const obj = {
    nullValue: null,
    undefinedValue: undefined,
    nested: {
      nullValue: null
    }
  }

  const redact = slowRedact({
    paths: ['nullValue', 'nested.nullValue']
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.nullValue, '[REDACTED]')
  assert.strictEqual(parsed.nested.nullValue, '[REDACTED]')
})

test('original object remains unchanged', () => {
  const original = {
    secret: 'hidden',
    nested: { secret: 'hidden2' }
  }
  const copy = JSON.parse(JSON.stringify(original))

  const redact = slowRedact({
    paths: ['secret', 'nested.secret']
  })
  redact(original)

  // Original should be completely unchanged
  assert.deepStrictEqual(original, copy)
})

test('strict mode with primitives', () => {
  const redact = slowRedact({
    paths: ['test'],
    strict: true
  })

  const stringResult = redact('primitive')
  assert.strictEqual(stringResult, '"primitive"')

  const numberResult = redact(42)
  assert.strictEqual(numberResult, '42')
})

// Path validation tests to match fast-redact behavior
test('path validation - non-string paths should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: [123] })
  }, {
    message: 'Paths must be (non-empty) strings'
  })

  assert.throws(() => {
    slowRedact({ paths: [null] })
  }, {
    message: 'Paths must be (non-empty) strings'
  })

  assert.throws(() => {
    slowRedact({ paths: [undefined] })
  }, {
    message: 'Paths must be (non-empty) strings'
  })
})

test('path validation - empty string should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: [''] })
  }, {
    message: 'Invalid redaction path ()'
  })
})

test('path validation - double dots should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: ['invalid..path'] })
  }, {
    message: 'Invalid redaction path (invalid..path)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['a..b..c'] })
  }, {
    message: 'Invalid redaction path (a..b..c)'
  })
})

test('path validation - unmatched brackets should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: ['invalid[unclosed'] })
  }, {
    message: 'Invalid redaction path (invalid[unclosed)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['invalid]unopened'] })
  }, {
    message: 'Invalid redaction path (invalid]unopened)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['nested[a[b]'] })
  }, {
    message: 'Invalid redaction path (nested[a[b])'
  })
})

test('path validation - comma-separated paths should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: ['req,headers.cookie'] })
  }, {
    message: 'Invalid redaction path (req,headers.cookie)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['user,profile,name'] })
  }, {
    message: 'Invalid redaction path (user,profile,name)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['a,b'] })
  }, {
    message: 'Invalid redaction path (a,b)'
  })
})

test('path validation - mixed valid and invalid should throw', () => {
  assert.throws(() => {
    slowRedact({ paths: ['valid.path', 123, 'another.valid'] })
  }, {
    message: 'Paths must be (non-empty) strings'
  })

  assert.throws(() => {
    slowRedact({ paths: ['valid.path', 'invalid..path'] })
  }, {
    message: 'Invalid redaction path (invalid..path)'
  })

  assert.throws(() => {
    slowRedact({ paths: ['valid.path', 'req,headers.cookie'] })
  }, {
    message: 'Invalid redaction path (req,headers.cookie)'
  })
})

test('path validation - valid paths should work', () => {
  // These should not throw
  assert.doesNotThrow(() => {
    slowRedact({ paths: [] })
  })

  assert.doesNotThrow(() => {
    slowRedact({ paths: ['valid.path'] })
  })

  assert.doesNotThrow(() => {
    slowRedact({ paths: ['user.password', 'data[0].secret'] })
  })

  assert.doesNotThrow(() => {
    slowRedact({ paths: ['["quoted-key"].value'] })
  })

  assert.doesNotThrow(() => {
    slowRedact({ paths: ["['single-quoted'].value"] })
  })

  assert.doesNotThrow(() => {
    slowRedact({ paths: ['array[0]', 'object.property', 'wildcard.*'] })
  })
})

// fast-redact compatibility tests
test('censor function receives path as array (fast-redact compatibility)', () => {
  const obj = {
    headers: {
      authorization: 'Bearer token',
      'x-api-key': 'secret-key'
    }
  }

  const pathsReceived = []
  const redact = slowRedact({
    paths: ['headers.authorization', 'headers["x-api-key"]'],
    censor: (value, path) => {
      pathsReceived.push(path)
      assert(Array.isArray(path), 'Path should be an array')
      return '[REDACTED]'
    }
  })

  redact(obj)

  // Verify paths are arrays
  assert.strictEqual(pathsReceived.length, 2)
  assert.deepStrictEqual(pathsReceived[0], ['headers', 'authorization'])
  assert.deepStrictEqual(pathsReceived[1], ['headers', 'x-api-key'])
})

test('censor function with nested paths receives correct array', () => {
  const obj = {
    user: {
      profile: {
        credentials: {
          password: 'secret123'
        }
      }
    }
  }

  let receivedPath
  const redact = slowRedact({
    paths: ['user.profile.credentials.password'],
    censor: (value, path) => {
      receivedPath = path
      assert.strictEqual(value, 'secret123')
      assert(Array.isArray(path))
      return '[REDACTED]'
    }
  })

  redact(obj)

  assert.deepStrictEqual(receivedPath, ['user', 'profile', 'credentials', 'password'])
})

test('censor function with wildcards receives correct array paths', () => {
  const obj = {
    users: {
      user1: { password: 'secret1' },
      user2: { password: 'secret2' }
    }
  }

  const pathsReceived = []
  const redact = slowRedact({
    paths: ['users.*.password'],
    censor: (value, path) => {
      pathsReceived.push([...path]) // copy the array
      assert(Array.isArray(path))
      return '[REDACTED]'
    }
  })

  redact(obj)

  assert.strictEqual(pathsReceived.length, 2)
  assert.deepStrictEqual(pathsReceived[0], ['users', 'user1', 'password'])
  assert.deepStrictEqual(pathsReceived[1], ['users', 'user2', 'password'])
})

test('censor function with array wildcard receives correct array paths', () => {
  const obj = {
    items: [
      { secret: 'value1' },
      { secret: 'value2' }
    ]
  }

  const pathsReceived = []
  const redact = slowRedact({
    paths: ['items.*.secret'],
    censor: (value, path) => {
      pathsReceived.push([...path])
      assert(Array.isArray(path))
      return '[REDACTED]'
    }
  })

  redact(obj)

  assert.strictEqual(pathsReceived.length, 2)
  assert.deepStrictEqual(pathsReceived[0], ['items', '0', 'secret'])
  assert.deepStrictEqual(pathsReceived[1], ['items', '1', 'secret'])
})

test('censor function with end wildcard receives correct array paths', () => {
  const obj = {
    secrets: {
      key1: 'secret1',
      key2: 'secret2'
    }
  }

  const pathsReceived = []
  const redact = slowRedact({
    paths: ['secrets.*'],
    censor: (value, path) => {
      pathsReceived.push([...path])
      assert(Array.isArray(path))
      return '[REDACTED]'
    }
  })

  redact(obj)

  assert.strictEqual(pathsReceived.length, 2)
  // Sort paths for consistent testing since object iteration order isn't guaranteed
  pathsReceived.sort((a, b) => a[1].localeCompare(b[1]))
  assert.deepStrictEqual(pathsReceived[0], ['secrets', 'key1'])
  assert.deepStrictEqual(pathsReceived[1], ['secrets', 'key2'])
})

test('type safety: accessing properties on primitive values should not throw', () => {
  // Test case from GitHub issue #5
  const redactor = slowRedact({ paths: ['headers.authorization'] })
  const data = {
    headers: 123 // primitive value
  }

  assert.doesNotThrow(() => {
    const result = redactor(data)
    const parsed = JSON.parse(result)
    assert.strictEqual(parsed.headers, 123) // Should remain unchanged
  })

  // Test wildcards with primitives
  const redactor2 = slowRedact({ paths: ['data.*.nested'] })
  const data2 = {
    data: {
      item1: 123, // primitive, trying to access .nested on it
      item2: { nested: 'secret' }
    }
  }

  assert.doesNotThrow(() => {
    const result2 = redactor2(data2)
    const parsed2 = JSON.parse(result2)
    assert.strictEqual(parsed2.data.item1, 123) // Primitive unchanged
    assert.strictEqual(parsed2.data.item2.nested, '[REDACTED]') // Object property redacted
  })

  // Test deep nested access on primitives
  const redactor3 = slowRedact({ paths: ['user.name.first.charAt'] })
  const data3 = {
    user: {
      name: 'John' // string primitive
    }
  }

  assert.doesNotThrow(() => {
    const result3 = redactor3(data3)
    const parsed3 = JSON.parse(result3)
    assert.strictEqual(parsed3.user.name, 'John') // Should remain unchanged
  })
})

// Remove option tests
test('remove option: basic key removal', () => {
  const obj = { username: 'john', password: 'secret123' }
  const redact = slowRedact({ paths: ['password'], remove: true })
  const result = redact(obj)

  // Original object should remain unchanged
  assert.strictEqual(obj.password, 'secret123')

  // Result should have password completely removed
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.username, 'john')
  assert.strictEqual('password' in parsed, false)
  assert.strictEqual(parsed.password, undefined)
})

test('remove option: multiple paths removal', () => {
  const obj = {
    user: { name: 'john', password: 'secret' },
    session: { token: 'abc123', id: 'session1' }
  }

  const redact = slowRedact({
    paths: ['user.password', 'session.token'],
    remove: true
  })
  const result = redact(obj)

  // Original unchanged
  assert.strictEqual(obj.user.password, 'secret')
  assert.strictEqual(obj.session.token, 'abc123')

  // Result has keys completely removed
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.user.name, 'john')
  assert.strictEqual(parsed.session.id, 'session1')
  assert.strictEqual('password' in parsed.user, false)
  assert.strictEqual('token' in parsed.session, false)
})

test('remove option: wildcard removal', () => {
  const obj = {
    secrets: {
      key1: 'secret1',
      key2: 'secret2'
    },
    public: 'data'
  }

  const redact = slowRedact({
    paths: ['secrets.*'],
    remove: true
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.public, 'data')
  assert.deepStrictEqual(parsed.secrets, {}) // All keys removed
})

test('remove option: array wildcard removal', () => {
  const obj = {
    items: ['secret1', 'secret2', 'secret3'],
    meta: 'data'
  }

  const redact = slowRedact({
    paths: ['items.*'],
    remove: true
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.meta, 'data')
  // Array items set to undefined are omitted by JSON.stringify
  assert.deepStrictEqual(parsed.items, [null, null, null])
})

test('remove option: intermediate wildcard removal', () => {
  const obj = {
    users: {
      user1: { password: 'secret1', name: 'john' },
      user2: { password: 'secret2', name: 'jane' }
    }
  }

  const redact = slowRedact({
    paths: ['users.*.password'],
    remove: true
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.users.user1.name, 'john')
  assert.strictEqual(parsed.users.user2.name, 'jane')
  assert.strictEqual('password' in parsed.users.user1, false)
  assert.strictEqual('password' in parsed.users.user2, false)
})

test('remove option: serialize false returns object with removed keys', () => {
  const obj = { secret: 'hidden', public: 'data' }
  const redact = slowRedact({
    paths: ['secret'],
    remove: true,
    serialize: false
  })
  const result = redact(obj)

  // Should be object, not string
  assert.strictEqual(typeof result, 'object')
  assert.strictEqual(result.public, 'data')
  assert.strictEqual('secret' in result, false)

  // Should have restore method
  assert.strictEqual(typeof result.restore, 'function')

  const restored = result.restore()
  assert.strictEqual(restored.secret, 'hidden')
})

test('remove option: non-existent paths are ignored', () => {
  const obj = { existing: 'value' }
  const redact = slowRedact({
    paths: ['nonexistent.path'],
    remove: true
  })
  const result = redact(obj)

  const parsed = JSON.parse(result)
  assert.strictEqual(parsed.existing, 'value')
  assert.strictEqual(parsed.nonexistent, undefined)
})

// Test for Issue #13: Empty string bracket notation paths not being redacted correctly
test('empty string bracket notation path', () => {
  const obj = { '': { c: 'sensitive-data' } }
  const redact = slowRedact({ paths: ["[''].c"] })
  const result = redact(obj)

  // Original object should remain unchanged
  assert.strictEqual(obj[''].c, 'sensitive-data')

  // Result should have redacted path
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed[''].c, '[REDACTED]')
})

test('empty string bracket notation with double quotes', () => {
  const obj = { '': { c: 'sensitive-data' } }
  const redact = slowRedact({ paths: ['[""].c'] })
  const result = redact(obj)

  // Original object should remain unchanged
  assert.strictEqual(obj[''].c, 'sensitive-data')

  // Result should have redacted path
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed[''].c, '[REDACTED]')
})

test('empty string key with nested bracket notation', () => {
  const obj = { '': { '': { secret: 'value' } } }
  const redact = slowRedact({ paths: ["[''][''].secret"] })
  const result = redact(obj)

  // Original object should remain unchanged
  assert.strictEqual(obj[''][''].secret, 'value')

  // Result should have redacted path
  const parsed = JSON.parse(result)
  assert.strictEqual(parsed[''][''].secret, '[REDACTED]')
})

// Test for Pino issue #2313: censor should only be called when path exists
test('censor function not called for non-existent paths', () => {
  let censorCallCount = 0
  const censorCalls = []

  const redact = slowRedact({
    paths: ['a.b.c', 'req.authorization', 'url'],
    serialize: false,
    censor (value, path) {
      censorCallCount++
      censorCalls.push({ value, path: path.slice() })
      return '***'
    }
  })

  // Test case 1: { req: { id: 'test' } }
  // req.authorization doesn't exist, censor should not be called for it
  censorCallCount = 0
  censorCalls.length = 0
  redact({ req: { id: 'test' } })

  // Should not have been called for any path since none exist
  assert.strictEqual(censorCallCount, 0, 'censor should not be called when paths do not exist')

  // Test case 2: { a: { d: 'test' } }
  // a.b.c doesn't exist (a.d exists, but not a.b.c)
  censorCallCount = 0
  redact({ a: { d: 'test' } })
  assert.strictEqual(censorCallCount, 0)

  // Test case 3: paths that do exist should still call censor
  censorCallCount = 0
  censorCalls.length = 0
  const result = redact({ req: { authorization: 'bearer token' } })
  assert.strictEqual(censorCallCount, 1, 'censor should be called when path exists')
  assert.deepStrictEqual(censorCalls[0].path, ['req', 'authorization'])
  assert.strictEqual(censorCalls[0].value, 'bearer token')
  assert.strictEqual(result.req.authorization, '***')
})

test('censor function not called for non-existent nested paths', () => {
  let censorCallCount = 0

  const redact = slowRedact({
    paths: ['headers.authorization'],
    serialize: false,
    censor (value, path) {
      censorCallCount++
      return '[REDACTED]'
    }
  })

  // headers exists but authorization doesn't
  censorCallCount = 0
  const result1 = redact({ headers: { 'content-type': 'application/json' } })
  assert.strictEqual(censorCallCount, 0)
  assert.deepStrictEqual(result1.headers, { 'content-type': 'application/json' })

  // headers doesn't exist at all
  censorCallCount = 0
  const result2 = redact({ body: 'data' })
  assert.strictEqual(censorCallCount, 0)
  assert.strictEqual(result2.body, 'data')
  assert.strictEqual(typeof result2.restore, 'function')

  // headers.authorization exists - should call censor
  censorCallCount = 0
  const result3 = redact({ headers: { authorization: 'Bearer token' } })
  assert.strictEqual(censorCallCount, 1)
  assert.strictEqual(result3.headers.authorization, '[REDACTED]')
})
