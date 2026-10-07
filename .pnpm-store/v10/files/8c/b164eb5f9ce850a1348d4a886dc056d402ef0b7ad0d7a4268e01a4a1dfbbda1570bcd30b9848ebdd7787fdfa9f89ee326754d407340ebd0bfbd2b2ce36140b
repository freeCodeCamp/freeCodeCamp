# @pinojs/redact

> Smart object redaction for JavaScript applications - safe AND fast!

Redact JS objects with the same API as [fast-redact](https://github.com/davidmarkclements/fast-redact), but uses innovative **selective cloning** instead of mutating the original. This provides immutability guarantees with **performance competitive** to fast-redact for real-world usage patterns.

## Install

```bash
npm install @pinojs/redact
```

## Usage

```js
const slowRedact = require('@pinojs/redact')

const redact = slowRedact({
  paths: ['headers.cookie', 'headers.authorization', 'user.password']
})

const obj = {
  headers: {
    cookie: 'secret-session-token',
    authorization: 'Bearer abc123',
    'x-forwarded-for': '192.168.1.1'
  },
  user: {
    name: 'john',
    password: 'secret123'
  }
}

console.log(redact(obj))
// Output: {"headers":{"cookie":"[REDACTED]","authorization":"[REDACTED]","x-forwarded-for":"192.168.1.1"},"user":{"name":"john","password":"[REDACTED]"}}

// Original object is completely unchanged:
console.log(obj.headers.cookie) // 'secret-session-token'
```

## API

### slowRedact(options) → Function

Creates a redaction function with the specified options.

#### Options

- **paths** `string[]` (required): An array of strings describing the nested location of a key in an object
- **censor** `any` (optional, default: `'[REDACTED]'`): The value to replace sensitive data with. Can be a static value or function.
- **serialize** `Function|boolean` (optional, default: `JSON.stringify`): Serialization function. Set to `false` to return the redacted object.
- **remove** `boolean` (optional, default: `false`): Remove redacted keys from serialized output
- **strict** `boolean` (optional, default: `true`): Throw on non-object values or pass through primitives

#### Path Syntax

Supports the same path syntax as fast-redact:

- **Dot notation**: `'user.name'`, `'headers.cookie'`
- **Bracket notation**: `'user["password"]'`, `'headers["X-Forwarded-For"]'`
- **Array indices**: `'users[0].password'`, `'items[1].secret'`
- **Wildcards**:
  - Terminal: `'users.*.password'` (redacts password for all users)
  - Intermediate: `'*.password'` (redacts password at any level)
  - Array wildcard: `'items.*'` (redacts all array elements)

#### Examples

**Custom censor value:**
```js
const redact = slowRedact({
  paths: ['password'],
  censor: '***HIDDEN***'
})
```

**Dynamic censor function:**
```js
const redact = slowRedact({
  paths: ['password'],
  censor: (value, path) => `REDACTED:${path}`
})
```

**Return object instead of JSON string:**
```js
const redact = slowRedact({
  paths: ['secret'],
  serialize: false
})

const result = redact({ secret: 'hidden', public: 'data' })
console.log(result.secret) // '[REDACTED]'
console.log(result.public) // 'data'

// Restore original values
const restored = result.restore()
console.log(restored.secret) // 'hidden'
```

**Custom serialization:**
```js
const redact = slowRedact({
  paths: ['password'],
  serialize: obj => JSON.stringify(obj, null, 2)
})
```

**Remove keys instead of redacting:**
```js
const redact = slowRedact({
  paths: ['password', 'user.secret'],
  remove: true
})

const obj = { username: 'john', password: 'secret123', user: { name: 'Jane', secret: 'hidden' } }
console.log(redact(obj))
// Output: {"username":"john","user":{"name":"Jane"}}
// Note: 'password' and 'user.secret' are completely absent, not redacted
```

**Wildcard patterns:**
```js
// Redact all properties in secrets object
const redact1 = slowRedact({ paths: ['secrets.*'] })

// Redact password for any user
const redact2 = slowRedact({ paths: ['users.*.password'] })

// Redact all items in an array
const redact3 = slowRedact({ paths: ['items.*'] })

// Remove all secrets instead of redacting them
const redact4 = slowRedact({ paths: ['secrets.*'], remove: true })
```

## Key Differences from fast-redact

### Safety First
- **No mutation**: Original objects are never modified
- **Selective cloning**: Only clones paths that need redaction, shares references for everything else
- **Restore capability**: Can restore original values when `serialize: false`

### Feature Compatibility
- **Remove option**: Full compatibility with fast-redact's `remove: true` option to completely omit keys from output
- **All path patterns**: Supports same syntax including wildcards, bracket notation, and array indices
- **Censor functions**: Dynamic censoring with path information passed as arrays
- **Serialization**: Custom serializers and `serialize: false` mode

### Smart Performance Approach
- **Selective cloning**: Analyzes redaction paths and only clones necessary object branches
- **Reference sharing**: Non-redacted properties maintain original object references
- **Memory efficiency**: Dramatically reduced memory usage for large objects with minimal redaction
- **Setup-time optimization**: Path analysis happens once during setup, not per redaction

### When to Use @pinojs/redact
- When immutability is critical
- When you need to preserve original objects
- When objects are shared across multiple contexts
- In functional programming environments
- When debugging and you need to compare before/after
- **Large objects with selective redaction** (now performance-competitive!)
- When memory efficiency with reference sharing is important

### When to Use fast-redact
- When absolute maximum performance is critical
- In extremely high-throughput scenarios (>100,000 ops/sec)
- When you control the object lifecycle and mutation is acceptable
- Very small objects where setup overhead matters

## Performance Benchmarks

@pinojs/redact uses **selective cloning** that provides good performance while maintaining immutability guarantees:

### Performance Results

| Operation Type | @pinojs/redact | fast-redact | Performance Ratio |
|---------------|-------------|-------------|-------------------|
| **Small objects** | ~690ns | ~200ns | ~3.5x slower |
| **Large objects (minimal redaction)** | **~18μs** | ~17μs | **~same performance** |
| **Large objects (wildcards)** | **~48μs** | ~37μs | **~1.3x slower** |
| **No redaction (large objects)** | **~18μs** | ~17μs | **~same performance** |

### Performance Improvements

@pinojs/redact is performance-competitive with fast-redact for large objects.

1. **Selective cloning approach**: Only clones object paths that need redaction
2. **Reference sharing**: Non-redacted properties share original object references
3. **Setup-time optimization**: Path analysis happens once, not per redaction
4. **Memory efficiency**: Dramatically reduced memory usage for typical use cases

### Benchmark Details

**Small Objects (~180 bytes)**:
- @pinojs/redact: **690ns** per operation
- fast-redact: **200ns** per operation
- **Slight setup overhead for small objects**

**Large Objects (~18KB, minimal redaction)**:
- @pinojs/redact: **18μs** per operation
- fast-redact: **17μs** per operation
- Near-identical performance

**Large Objects (~18KB, wildcard patterns)**:
- @pinojs/redact: **48μs** per operation
- fast-redact: **37μs** per operation
- Competitive performance for complex patterns

**Memory Considerations**:
- @pinojs/redact: **Selective reference sharing** (much lower memory usage than before)
- fast-redact: Mutates in-place (lowest memory usage)
- Large objects with few redacted paths now share most references

### When Performance Matters

Choose **fast-redact** when:
- Absolute maximum performance is critical (>100,000 ops/sec)
- Working with very small objects frequently
- Mutation is acceptable and controlled
- Every microsecond counts

Choose **@pinojs/redact** when:
- Immutability is required (with competitive performance)
- Objects are shared across contexts
- Large objects with selective redaction
- Memory efficiency through reference sharing is important
- Safety and functionality are priorities
- Most production applications (performance gap is minimal)

Run benchmarks yourself:
```bash
npm run bench
```

## How Selective Cloning Works

@pinojs/redact uses an innovative **selective cloning** approach that provides immutability guarantees while dramatically improving performance:

### Traditional Approach (before optimization)
```js
// Old approach: Deep clone entire object, then redact
const fullClone = deepClone(originalObject)  // Clone everything
redact(fullClone, paths)                     // Then redact specific paths
```

### Selective Cloning Approach (current)
```js
// New approach: Analyze paths, clone only what's needed
const pathStructure = buildPathStructure(paths)  // One-time setup
const selectiveClone = cloneOnlyNeededPaths(obj, pathStructure)  // Smart cloning
redact(selectiveClone, paths)  // Redact pre-identified paths
```

### Key Innovations

1. **Path Analysis**: Pre-processes redaction paths into an efficient tree structure
2. **Selective Cloning**: Only creates new objects for branches that contain redaction targets
3. **Reference Sharing**: Non-redacted properties maintain exact same object references
4. **Setup Optimization**: Path parsing happens once during redactor creation, not per redaction

### Example: Reference Sharing in Action

```js
const largeConfig = {
  database: { /* large config object */ },
  api: { /* another large config */ },
  secrets: { password: 'hidden', apiKey: 'secret' }
}

const redact = slowRedact({ paths: ['secrets.password'] })
const result = redact(largeConfig)

// Only secrets object is cloned, database and api share original references
console.log(result.database === largeConfig.database)  // true - shared reference!
console.log(result.api === largeConfig.api)            // true - shared reference!
console.log(result.secrets === largeConfig.secrets)    // false - cloned for redaction
```

This approach provides **immutability where it matters** while **sharing references where it's safe**.

## Remove Option

The `remove: true` option provides full compatibility with fast-redact's key removal functionality:

```js
const redact = slowRedact({
  paths: ['password', 'secrets.*', 'users.*.credentials'],
  remove: true
})

const data = {
  username: 'john',
  password: 'secret123',
  secrets: { apiKey: 'abc', token: 'xyz' },
  users: [
    { name: 'Alice', credentials: { password: 'pass1' } },
    { name: 'Bob', credentials: { password: 'pass2' } }
  ]
}

console.log(redact(data))
// Output: {"username":"john","secrets":{},"users":[{"name":"Alice"},{"name":"Bob"}]}
```

### Remove vs Redact Behavior

| Option | Behavior | Output Example |
|--------|----------|----------------|
| Default (redact) | Replaces values with censor | `{"password":"[REDACTED]"}` |
| `remove: true` | Completely omits keys | `{}` |

### Compatibility Notes

- **Same output as fast-redact**: Identical JSON output when using `remove: true`
- **Wildcard support**: Works with all wildcard patterns (`*`, `users.*`, `items.*.secret`)
- **Array handling**: Array items are set to `undefined` (omitted in JSON output)
- **Nested paths**: Supports deep removal (`users.*.credentials.password`)
- **Serialize compatibility**: Only works with `JSON.stringify` serializer (like fast-redact)

## Testing

```bash
# Run unit tests
npm test

# Run integration tests comparing with fast-redact
npm run test:integration

# Run all tests (unit + integration)
npm run test:all

# Run benchmarks
npm run bench
```

### Test Coverage

- **16 unit tests**: Core functionality and edge cases
- **16 integration tests**: Output compatibility with fast-redact
- **All major features**: Paths, wildcards, serialization, custom censors
- **Performance benchmarks**: Direct comparison with fast-redact

## License

MIT

## Contributing

Pull requests welcome! Please ensure all tests pass and add tests for new features.