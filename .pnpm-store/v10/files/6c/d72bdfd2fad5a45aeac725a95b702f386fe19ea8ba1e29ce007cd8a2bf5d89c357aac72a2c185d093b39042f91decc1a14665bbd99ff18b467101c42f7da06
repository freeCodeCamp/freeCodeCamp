<div align="center"><img src="./site/logo.svg" width="80%" height="80%" /></div>

# hashery
Browser / Nodejs Compatible Object Hashing

[![tests](https://github.com/jaredwray/hashery/actions/workflows/tests.yml/badge.svg)](https://github.com/jaredwray/hashery/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/jaredwray/hashery/branch/main/graph/badge.svg?token=JTuDzWoTRn)](https://codecov.io/gh/jaredwray/hashery)
[![GitHub license](https://img.shields.io/github/license/jaredwray/hashery)](https://github.com/jaredwray/hashery/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dm/hashery)](https://npmjs.com/package/hashery)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/hashery/badge)](https://www.jsdelivr.com/package/npm/hashery)
[![npm](https://img.shields.io/npm/v/hashery)](https://npmjs.com/package/hashery)

# Features
- **Simple and Easy Object Hashing** - Object hashing based on multiple algorithms.
- **Browser and Node.js Compatible** - Built using `WebCrypto` API for both environments
- **Multiple Hash Algorithms** - Supports SHA-256, SHA-384, SHA-512 (WebCrypto), plus DJB2, FNV1, Murmur, and CRC32
- **Synchronous & Asynchronous** - Both sync and async methods for flexible integration
- **Custom Serialization** - Easily replace JSON `parse` and `stringify` with custom functions
- **Deterministic Hashing** - Generate consistent hashes for the same input
- **Hash to Number** - Convert hashes to deterministic numbers within a specified range. Great for slot management
- **Provider System** - Extensible hash provider architecture for custom algorithms
- **Fuzzy Provider Matching** - Case-insensitive and dash-tolerant algorithm name matching
- **Hooks Support** - Extends Hookified for event-based functionality
- **Maintained on a Regular Basis** - Active maintenance and updates

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Hashing](#basic-hashing)
  - [Synchronous Hashing](#synchronous-hashing)
  - [Using Different Hash Algorithms](#using-different-hash-algorithms)
  - [Using Providers Directly](#using-providers-directly)
  - [Setting a Default Algorithm](#setting-a-default-algorithm)
  - [Truncating Hash Output](#truncating-hash-output)
  - [Hash to Number (Great for Slot Management)](#hash-to-number-great-for-slot-management)
  - [Hash to Number Synchronous](#hash-to-number-synchronous)
  - [Browser Usage](#browser-usage)
- [Hooks](#hooks)
  - [Warning Events for Invalid Algorithms](#warning-events-for-invalid-algorithms)
- [Caching](#caching)
- [Web Crypto](#web-crypto)
  - [Browser Support](#browser-support)
  - [Node.js Support](#nodejs-support)
- [DJB2 Hashing](#djb2-hashing)
- [FNV1 Hashing](#fnv1-hashing)
- [CRC Hashing](#crc-hashing)
- [API - Properties](#api---properties)
  - [parse](#parse)
  - [stringify](#stringify)
  - [providers](#providers)
  - [names](#names)
  - [defaultAlgorithm](#defaultalgorithm)
  - [defaultAlgorithmSync](#defaultalgorithmsync)
- [API - Functions](#api---functions)
  - [toHash(data, options?)](#toHashdata-options)
  - [toHashSync(data, options?)](#toHashsyncdata-options)
  - [toNumber(data, options?)](#tonumberdata-options)
  - [toNumberSync(data, options?)](#tonumbersyncdata-options)
  - [loadProviders(providers?, options?)](#loadprovidersproviders-options)
- [API - Types](#api---types)
  - [HashAlgorithm](#hashalgorithm)
- [Benchmarks](#benchmarks)
- [Code of Conduct and Contributing](#code-of-conduct-and-contributing)
- [License and Copyright](#license-and-copyright)

# Installation

```bash
npm install hashery
```

# Usage

## Basic Hashing

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Hash an object (defaults to SHA-256)
const hash = await hashery.toHash({ name: 'John', age: 30 });
console.log(hash); // SHA-256 hash string

// Hash a string
const stringHash = await hashery.toHash('hello world');

// Hash any value (numbers, arrays, etc.)
const numberHash = await hashery.toHash(42);
const arrayHash = await hashery.toHash([1, 2, 3, 4, 5]);
```

## Synchronous Hashing

For performance-critical applications or when you need to avoid async/await, use the synchronous hashing methods. These work with non-cryptographic hash algorithms (djb2, fnv1, murmur, crc32) and are significantly faster than WebCrypto methods.

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Synchronous hash (defaults to djb2)
const hash = hashery.toHashSync({ name: 'John', age: 30 });
console.log(hash); // djb2 hash string (8 hex characters)

// Sync with specific algorithm
const fnv1Hash = hashery.toHashSync({ data: 'example' }, { algorithm: 'fnv1' });
const murmurHash = hashery.toHashSync({ data: 'example' }, { algorithm: 'murmur' });
const crcHash = hashery.toHashSync({ data: 'example' }, { algorithm: 'crc32' });

// Note: WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are NOT supported in sync mode
// This will throw an error:
// hashery.toHashSync({ data: 'example' }, { algorithm: 'SHA-256' }); // ❌ Error!
```

## Using Different Hash Algorithms

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Use SHA-384
const hash384 = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-384' });

// Use SHA-512
const hash512 = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-512' });

// Use non-crypto hash algorithms
const fastHash = await hashery.toHash({ data: 'example' }, { algorithm: 'djb2' });
```

## Using Providers Directly

You can import and use the hash provider classes directly without the `Hashery` wrapper. This gives you direct access to the underlying hash algorithms.

```typescript
import { DJB2, FNV1, Murmur, CRC, WebCrypto } from 'hashery';

// Use DJB2 directly
const djb2 = new DJB2();
const encoder = new TextEncoder();
const data = encoder.encode('hello world');
const hash = djb2.toHashSync(data); // "7c9dc9e0"

// Use FNV1 directly
const fnv1 = new FNV1();
const fnv1Hash = fnv1.toHashSync(data);

// Use Murmur directly (with optional seed)
const murmur = new Murmur(); // default seed: 0
const murmurHash = murmur.toHashSync(data);

const murmurSeeded = new Murmur(42); // custom seed
const murmurSeededHash = murmurSeeded.toHashSync(data);

// Use CRC32 directly
const crc = new CRC();
const crcHash = crc.toHashSync(data);

// Use WebCrypto directly (async only)
const sha256 = new WebCrypto({ algorithm: 'SHA-256' });
const sha512 = new WebCrypto({ algorithm: 'SHA-512' });
const cryptoHash = await sha256.toHash(data);
const cryptoHash512 = await sha512.toHash(data);
```

### Managing Providers with HashProviders

You can also import the `HashProviders` class to manage a collection of providers:

```typescript
import { HashProviders, DJB2, FNV1, Murmur } from 'hashery';

const providers = new HashProviders();
providers.add(new DJB2());
providers.add(new FNV1());
providers.add(new Murmur());

// Get a provider by name (supports fuzzy matching)
const djb2Provider = providers.get('djb2');
const alsoWorks = providers.get('DJB2'); // case-insensitive

// Both variables point to the same provider instance
console.log(djb2Provider.name); // 'djb2'
console.log(alsoWorks.name); // 'djb2'

// List all provider names
console.log(providers.names); // ['djb2', 'fnv1', 'murmur']
```

### Creating Custom Providers

Implement the `HashProvider` interface to create your own providers:

```typescript
import { Hashery, type HashProvider } from 'hashery';

const myProvider: HashProvider = {
  name: 'my-hash',
  async toHash(data: BufferSource): Promise<string> {
    // Your hashing logic here
    return 'custom-hash-value';
  },
  toHashSync(data: BufferSource): string {
    // Optional: synchronous version
    return 'custom-hash-value';
  }
};

const hashery = new Hashery({ providers: [myProvider] });
const hash = await hashery.toHash({ data: 'test' }, { algorithm: 'my-hash' });
console.log(hash); // 'custom-hash-value'
```

## Setting a Default Algorithm

You can set a default algorithm for all hash operations via constructor or property:

```typescript
import { Hashery } from 'hashery';

// Set default algorithm via constructor
const hashery = new Hashery({ defaultAlgorithm: 'SHA-512' });

// Now all hashes use SHA-512 by default
const hash1 = await hashery.toHash({ data: 'example' }); // Uses SHA-512
console.log(hash1.length); // 128 (SHA-512 produces 128 hex characters)

// You can still override it per call
const hash2 = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-256' });
console.log(hash2.length); // 64 (SHA-256 produces 64 hex characters)

// Change default algorithm at runtime
hashery.defaultAlgorithm = 'djb2';
const hash3 = await hashery.toHash({ data: 'example' }); // Uses djb2
```

## Truncating Hash Output

You can limit the length of the hash output using the `maxLength` option:

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Get a shorter hash (16 characters instead of 64)
const shortHash = await hashery.toHash(
  { data: 'example' },
  { algorithm: 'SHA-256', maxLength: 16 }
);
console.log(shortHash); // "3f79bb7b435b0518" (16 chars)

// Full hash for comparison
const fullHash = await hashery.toHash({ data: 'example' });
console.log(fullHash); // "3f79bb7b435b05181e4ccf0d4e8..." (64 chars)
```

## Hash to Number (Great for Slot Management)

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Convert hash to a number within a range
const slot = await hashery.toNumber({ userId: 123 }, { min: 0, max: 100 });
console.log(slot); // Deterministic number between 0-100

// Use for consistent slot assignment
const userSlot = await hashery.toNumber({ userId: 'user@example.com' }, { min: 0, max: 9 });
// Same user will always get the same slot number
```

## Hash to Number Synchronous

Generate deterministic numbers synchronously for high-performance scenarios. Perfect for A/B testing, sharding, and load balancing without async overhead.

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Synchronous number generation (defaults to djb2)
const slot = hashery.toNumberSync({ userId: 123 }, { min: 0, max: 100 });
console.log(slot); // Deterministic number between 0-100

// A/B testing without async/await
const variant = hashery.toNumberSync({ userId: 'user123' }, { min: 0, max: 1 });
console.log(variant === 0 ? 'Group A' : 'Group B');

// Load balancing across servers
const serverIndex = hashery.toNumberSync(
  { requestId: 'req_abc123' },
  { min: 0, max: 9, algorithm: 'fnv1' } // 10 servers
);

// Sharding assignment
const shardId = hashery.toNumberSync(
  { customerId: 'cust_xyz' },
  { min: 0, max: 15, algorithm: 'murmur' } // 16 shards
);

// Set default sync algorithm for all sync operations
const hashery2 = new Hashery({ defaultAlgorithmSync: 'fnv1' });
const num = hashery2.toNumberSync({ data: 'test' }); // Uses fnv1 by default
```

## Browser Usage

Hashery works seamlessly in the browser using the Web Crypto API. You can include it via CDN or bundle it with your application.

### Using via CDN (jsDelivr)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Hashery Browser Example</title>
</head>
<body>
  <script type="module">
    import { Hashery } from 'https://cdn.jsdelivr.net/npm/hashery@latest/dist/browser/index.js';

    const hashery = new Hashery();

    // Hash data in the browser
    const hash = await hashery.toHash({ page: 'home', userId: 123 });
    console.log('Hash:', hash);

    // Generate slot numbers for A/B testing
    const variant = await hashery.toNumber({ userId: 'user123' }, { min: 0, max: 1 });
    console.log('A/B Test Variant:', variant === 0 ? 'A' : 'B');
  </script>
</body>
</html>
```

# Hooks

Hashery extends [Hookified](https://github.com/jaredwray/hookified) to provide event-based functionality through hooks. Hooks allow you to intercept and modify behavior during the hashing process.

## Available Hooks

### Asynchronous Method Hooks

#### `before:toHash`

Fired before hashing occurs. This hook receives a context object containing:
- `data` - The data to be hashed (can be modified)
- `algorithm` - The hash algorithm to use (can be modified)
- `maxLength` - Optional maximum length for the hash output

#### `after:toHash`

Fired after hashing completes. This hook receives a result object containing:
- `hash` - The generated hash (can be modified)
- `data` - The data that was hashed
- `algorithm` - The algorithm that was used

### Synchronous Method Hooks

#### `before:toHashSync`

Fired before synchronous hashing occurs. This hook receives a context object containing:
- `data` - The data to be hashed (can be modified)
- `algorithm` - The hash algorithm to use (can be modified)
- `maxLength` - Optional maximum length for the hash output

**Note:** This hook executes synchronously (blocking). Only synchronous hook handlers will run; async handlers are skipped.

#### `after:toHashSync`

Fired after synchronous hashing completes. This hook receives a result object containing:
- `hash` - The generated hash (can be modified)
- `data` - The data that was hashed
- `algorithm` - The algorithm that was used

**Note:** This hook executes synchronously (blocking). Only synchronous hook handlers will run; async handlers are skipped.

## Basic Hook Usage

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Listen to before:toHash hook
hashery.onHook('before:toHash', async (context) => {
  console.log('About to hash:', context.data);
  console.log('Using algorithm:', context.algorithm);
});

// Listen to after:toHash hook
hashery.onHook('after:toHash', async (result) => {
  console.log('Hash generated:', result.hash);
  console.log('Original data:', result.data);
});

await hashery.toHash({ name: 'John', age: 30 });
```

## Modifying Data with Hooks

You can modify the data before it's hashed:

```typescript
const hashery = new Hashery();

// Add a timestamp to all hashed data
hashery.onHook('before:toHash', async (context) => {
  context.data = {
    original: context.data,
    timestamp: new Date().toISOString()
  };
});

const hash = await hashery.toHash({ userId: 123 });
// Data will be hashed with timestamp included
```

## Modifying Algorithms with Hooks

You can force a specific algorithm regardless of what's requested:

```typescript
const hashery = new Hashery();

// Force all hashes to use SHA-512
hashery.onHook('before:toHash', async (context) => {
  context.algorithm = 'SHA-512';
});

// Even though we request SHA-256, it will use SHA-512
const hash = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-256' });
console.log(hash.length); // 128 (SHA-512 hash length)
```

## Modifying Hash Results

You can transform the hash after it's generated:

```typescript
const hashery = new Hashery();

// Convert all hashes to uppercase
hashery.onHook('after:toHash', async (result) => {
  result.hash = result.hash.toUpperCase();
});

const hash = await hashery.toHash({ data: 'example' });
console.log(hash); // Hash will be in uppercase
```

## Logging and Debugging

Hooks are perfect for logging and debugging:

```typescript
const hashery = new Hashery();

hashery.onHook('before:toHash', async (context) => {
  console.log(`[DEBUG] Hashing data with ${context.algorithm}:`, context.data);
});

hashery.onHook('after:toHash', async (result) => {
  console.log(`[DEBUG] Hash generated: ${result.hash.substring(0, 8)}...`);
});

await hashery.toHash({ userId: 'user123' });
```

## Multiple Hooks

You can register multiple hooks, and they will execute in the order they were registered:

```typescript
const hashery = new Hashery();

hashery.onHook('before:toHash', async (context) => {
  console.log('First hook');
  context.data = { step: 1, original: context.data };
});

hashery.onHook('before:toHash', async (context) => {
  console.log('Second hook');
  context.data = { step: 2, previous: context.data };
});

await hashery.toHash({ name: 'test' });
// Output: "First hook" then "Second hook"
// Data will be wrapped twice
```

## Synchronous Method Hooks

Synchronous methods (`toHashSync`, `toNumberSync`) support hooks that execute synchronously (blocking). Hook handlers can modify context and results just like their async counterparts.

**Important:** Only synchronous hook handlers will run. Async handlers (functions that return a Promise) are skipped. Use synchronous functions when registering hooks for sync methods.

```typescript
const hashery = new Hashery();

// Listen to synchronous hash hooks (use synchronous handlers)
hashery.onHook('before:toHashSync', (context) => {
  console.log('About to hash synchronously:', context.data);
  console.log('Using algorithm:', context.algorithm);
});

hashery.onHook('after:toHashSync', (result) => {
  console.log('Sync hash generated:', result.hash);
});

const hash = hashery.toHashSync({ name: 'John', age: 30 });
```

You can modify data and results in sync hooks, just like async hooks:

```typescript
const hashery = new Hashery();

// Modify input data before hashing
hashery.onHook('before:toHashSync', (context) => {
  context.data = { wrapped: true, original: context.data };
});

// Modify the result after hashing
hashery.onHook('after:toHashSync', (result) => {
  result.hash = result.hash.toUpperCase();
});

const hash = hashery.toHashSync({ name: 'test' });
// hash will be uppercase and based on the modified data
```

## Warning Events for Invalid Algorithms

When an invalid or unknown hash algorithm is provided to `toHash()` or `toHashSync()`, Hashery emits a 'warn' event and automatically falls back to the default algorithm instead of throwing an error. This ensures your application continues to work even when invalid algorithms are specified.

### Listening to Warnings

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Listen for warning events
hashery.on('warn', (message: string) => {
  console.log('Warning:', message);
});

// Using an invalid algorithm will trigger the warning
const hash = await hashery.toHash({ data: 'test' }, { algorithm: 'invalid-algo' });
// Warning: Invalid algorithm 'invalid-algo' not found. Falling back to default algorithm 'SHA-256'.

// Hash is still generated using SHA-256 (the default)
console.log(hash); // Valid SHA-256 hash
```

### Behavior

**For async methods (`toHash`, `toNumber`):**
- Emits 'warn' event with descriptive message
- Falls back to `defaultAlgorithm` (SHA-256 by default)
- Returns a valid hash using the fallback algorithm

**For sync methods (`toHashSync`, `toNumberSync`):**
- Emits 'warn' event with descriptive message
- Falls back to `defaultAlgorithmSync` (djb2 by default)
- Returns a valid hash using the fallback algorithm
- **Note:** If the default sync algorithm is also not found, an error will be thrown

### Warning Message Format

The warning message includes both the invalid algorithm name and the fallback algorithm being used:

```
Invalid algorithm '<requested-algorithm>' not found. Falling back to default algorithm '<default-algorithm>'.
```

### Example Use Cases

**Development/Debugging:**
```typescript
const hashery = new Hashery();

hashery.on('warn', (message) => {
  console.error('[Hashery Warning]', message);
  // Log to monitoring service, etc.
});
```

**Production Monitoring:**
```typescript
const hashery = new Hashery();

hashery.on('warn', (message) => {
  // Send to error tracking service
  errorTracker.captureMessage(message, 'warning');
});
```

**Graceful Degradation:**
```typescript
const hashery = new Hashery();
let hasWarnings = false;

hashery.on('warn', () => {
  hasWarnings = true;
});

const hash = await hashery.toHash(userData, { algorithm: userPreferredAlgo });

if (hasWarnings) {
  // Notify user that their preferred algorithm is not available
  console.log('Using default algorithm instead of your preference');
}
```

## Removing Hooks

You can remove hooks when they're no longer needed:

```typescript
const hashery = new Hashery();

const myHook = async (context: any) => {
  console.log('Hook called');
};

// Add the hook
hashery.onHook('before:toHash', myHook);

// Remove the hook
hashery.offHook('before:toHash', myHook);

// Same works for sync hooks
hashery.onHook('before:toHashSync', myHook);
hashery.offHook('before:toHashSync', myHook);
```

## Error Handling in Hooks

Control how errors in hooks are handled using the `throwOnEmitError` option:

```typescript
// Throw errors that occur in hooks
const hashery1 = new Hashery({ throwOnEmitError: true });

hashery1.onHook('before:toHash', async (context) => {
  throw new Error('Hook error');
});

// This will throw the error
await hashery1.toHash({ data: 'example' }); // Throws Error: Hook error

// Silently handle errors in hooks
const hashery2 = new Hashery({ throwOnEmitError: false });

hashery2.onHook('before:toHash', async (context) => {
  throw new Error('Hook error');
});

// This will not throw, hashing continues
const hash = await hashery2.toHash({ data: 'example' }); // Returns hash successfully
```

# Caching

Hashery includes a built-in FIFO (First In, First Out) cache that stores computed hash values. When the same data is hashed with the same algorithm, the cached result is returned instead of recomputing. Caching is enabled by default with a max size of 4000 entries.

```typescript
import { Hashery } from 'hashery';

// Default: cache enabled with maxSize of 4000
const hashery = new Hashery();

// Or customize cache settings
const hashery2 = new Hashery({ cache: { enabled: true, maxSize: 10000 } });

// Hashing results are automatically cached
const hash1 = await hashery.toHash({ user: 'john' }); // computed
const hash2 = await hashery.toHash({ user: 'john' }); // served from cache

// Cache management
hashery.cache.size;           // number of cached entries
hashery.cache.clear();        // clear all cached entries
hashery.cache.enabled = false; // disable caching at runtime
```

# Web Crypto

Hashery is built on top of the Web Crypto API, which provides cryptographic operations in both browser and Node.js environments. This ensures consistent, secure hashing across all platforms.

## Browser Support

The Web Crypto API is supported in all modern browsers:
- Chrome 37+
- Firefox 34+
- Safari 11+
- Edge 12+

## Node.js Support

Web Crypto API was introduced in Node.js 15.0.0. Hashery is tested against Node.js LTS 20+ and automatically detects and uses the appropriate crypto implementation for your environment via the `crypto.webcrypto` global.

## Available Algorithms

### Web Crypto Algorithms (Async Only)
These algorithms use the Web Crypto API and are only available asynchronously:
- **SHA-256** - Secure Hash Algorithm 256-bit (default for async methods)
- **SHA-384** - Secure Hash Algorithm 384-bit
- **SHA-512** - Secure Hash Algorithm 512-bit

These are cryptographically secure and suitable for security-sensitive applications.

### Non-Crypto Algorithms (Async & Sync)
These algorithms support both synchronous and asynchronous operation:
- **djb2** - Fast hash function by Daniel J. Bernstein (default for sync methods)
- **fnv1** - Fowler-Noll-Vo hash function
- **murmur** - MurmurHash algorithm
- **crc32** - Cyclic Redundancy Check 32-bit

**Async methods** (`toHash`, `toNumber`):
- Default to `SHA-256`
- Can use any algorithm (WebCrypto or non-crypto)
- Return Promises

**Sync methods** (`toHashSync`, `toNumberSync`):
- Default to `djb2`
- Only work with non-crypto algorithms (djb2, fnv1, murmur, crc32)
- Return values immediately
- Throw an error if you try to use WebCrypto algorithms

## Example: Using Web Crypto

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Web Crypto algorithms
const sha256 = await hashery.toHash({ data: 'example' }); // Default SHA-256
const sha384 = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-384' });
const sha512 = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-512' });

// Non-crypto algorithms (faster, but not cryptographically secure)
const djb2Hash = await hashery.toHash({ data: 'example' }, { algorithm: 'djb2' });
const fnv1Hash = await hashery.toHash({ data: 'example' }, { algorithm: 'fnv1' });
```

# DJB2 Hashing

DJB2 is a non-cryptographic hash function created by Daniel J. Bernstein. It's known for its simplicity and speed, making it ideal for hash tables, checksums, and other non-security applications.

## Why Use DJB2?

- **Fast Performance** - Significantly faster than cryptographic hash functions
- **Good Distribution** - Provides good hash distribution for most data
- **Simple Algorithm** - Easy to understand and implement
- **Low Collision Rate** - Works well for hash tables and data structures
- **Deterministic** - Same input always produces the same output

## When to Use DJB2

**Good for:**
- Hash tables and data structures
- Non-security checksums
- Fast data lookups
- Cache keys
- General-purpose hashing where security isn't a concern

**Not suitable for:**
- Password hashing
- Cryptographic signatures
- Security-sensitive applications
- Data integrity verification where tampering is a concern

## DJB2 vs Cryptographic Hashes

| Feature | DJB2 | SHA-256 |
|---------|------|---------|
| Speed | Very Fast | Slower |
| Security | Not Secure | Cryptographically Secure |
| Hash Length | 32-bit | 256-bit |
| Collision Resistance | Good | Excellent |
| Use Case | General Purpose | Security |

## Example: Using DJB2

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Hash with DJB2 (fast, non-cryptographic)
const djb2Hash = await hashery.toHash({ userId: 123, action: 'login' }, { algorithm: 'djb2' });

// Use for cache keys
const cacheKey = await hashery.toHash({
  endpoint: '/api/users',
  params: { page: 1, limit: 10 }
}, { algorithm: 'djb2' });

// Generate slot numbers with DJB2
const slot = await hashery.toNumber({ userId: 'user123' }, { min: 0, max: 99, algorithm: 'djb2' });
```

## Algorithm Details

DJB2 uses a simple formula:
```
hash = 5381
for each character c:
    hash = ((hash << 5) + hash) + c
```

This translates to: `hash * 33 + c`, where 5381 is the magic initial value chosen by Daniel J. Bernstein for its distribution properties.

# FNV1 Hashing

FNV1 (Fowler-Noll-Vo) is a non-cryptographic hash function designed for fast hash table and checksum use. Created by Glenn Fowler, Landon Curt Noll, and Kiem-Phong Vo, it's known for its excellent distribution properties and simplicity.

## Why Use FNV1?

- **Excellent Distribution** - Superior hash distribution reduces collisions
- **Fast Performance** - Very fast computation with minimal operations
- **Simple Implementation** - Easy to understand and implement
- **Public Domain** - No licensing restrictions
- **Well-Tested** - Extensively used and tested in production systems
- **Deterministic** - Same input always produces the same output

## When to Use FNV1

**Good for:**
- Hash tables and associative arrays
- Checksums and fingerprints
- Data deduplication
- Bloom filters
- Fast lookups and indexing
- Non-cryptographic applications

**Not suitable for:**
- Password hashing
- Cryptographic signatures
- Security-critical applications
- Digital signatures
- Data integrity in adversarial environments

## FNV1 vs Other Hash Functions

| Feature | FNV1 | DJB2 | SHA-256 |
|---------|------|------|---------|
| Speed | Very Fast | Very Fast | Slower |
| Distribution | Excellent | Good | Excellent |
| Security | Not Secure | Not Secure | Cryptographically Secure |
| Collision Resistance | Good | Good | Excellent |
| Use Case | Hash Tables | General Purpose | Security |

## Example: Using FNV1

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Hash with FNV1 (fast, excellent distribution)
const fnv1Hash = await hashery.toHash({ productId: 'ABC123', variant: 'red' }, { algorithm: 'fnv1' });

// Use for hash table keys
const tableKey = await hashery.toHash({
  userId: 'user@example.com',
  resource: 'profile'
}, { algorithm: 'fnv1' });

// Generate distributed slot numbers with FNV1
const slot = await hashery.toNumber({ sessionId: 'sess_xyz789' }, { min: 0, max: 999, algorithm: 'fnv1' });

// Use for data deduplication
const fingerprint = await hashery.toHash({
  content: 'document content here',
  metadata: { author: 'John', date: '2024-01-01' }
}, { algorithm: 'fnv1' });
```

## Algorithm Details

FNV1 uses the following formula:
```
hash = FNV_offset_basis
for each byte b:
    hash = hash * FNV_prime
    hash = hash XOR b
```

Where:
- **FNV_offset_basis**: Initial hash value (different for 32-bit, 64-bit, etc.)
- **FNV_prime**: A carefully chosen prime number for good distribution
- **XOR**: Bitwise exclusive OR operation

The algorithm multiplies by a prime and XORs with each input byte, creating excellent avalanche properties where small input changes result in very different hash values.

# CRC Hashing

CRC (Cyclic Redundancy Check) is a non-cryptographic hash function designed primarily for detecting accidental changes to data. CRC32 is a 32-bit variant widely used in network protocols, file formats, and data integrity verification.

## Why Use CRC?

- **Error Detection** - Excellent at detecting accidental data corruption
- **Industry Standard** - Widely used in ZIP, PNG, Ethernet, and many other standards
- **Fast Performance** - Very efficient computation using lookup tables
- **Hardware Support** - Often implemented in hardware for maximum speed
- **Well-Understood** - Decades of use and mathematical analysis
- **Deterministic** - Same input always produces the same output

## When to Use CRC

**Good for:**
- Data integrity verification
- Error detection in network protocols
- File format checksums (ZIP, PNG, etc.)
- Storage integrity checks
- Detecting accidental corruption
- Quick data validation

**Not suitable for:**
- Cryptographic applications
- Password hashing
- Digital signatures
- Security-sensitive checksums
- Protection against intentional tampering
- Hash tables (not designed for this use case)

## CRC vs Other Hash Functions

| Feature | CRC32 | DJB2 | FNV1 | SHA-256 |
|---------|-------|------|------|---------|
| Primary Use | Error Detection | Hash Tables | Hash Tables | Security |
| Speed | Very Fast | Very Fast | Very Fast | Slower |
| Security | Not Secure | Not Secure | Not Secure | Cryptographically Secure |
| Hash Length | 32-bit | 32-bit | 32-bit/64-bit | 256-bit |
| Error Detection | Excellent | Poor | Poor | Excellent |
| Use Case | Data Integrity | General Purpose | Hash Tables | Security |

## Example: Using CRC

```typescript
import { Hashery } from 'hashery';

const hashery = new Hashery();

// Hash with CRC32 for data integrity
const crcHash = await hashery.toHash({ fileData: 'content here' }, { algorithm: 'crc32' });

// Verify file integrity
const fileChecksum = await hashery.toHash({
  filename: 'document.pdf',
  size: 1024000,
  modified: '2024-01-01'
}, { algorithm: 'crc32' });

// Network packet validation
const packetChecksum = await hashery.toHash({
  header: { type: 'data', seq: 123 },
  payload: 'packet payload data'
}, { algorithm: 'crc32' });

// Quick data validation
const dataIntegrity = await hashery.toHash({
  recordId: 'rec_123',
  data: { field1: 'value1', field2: 'value2' }
}, { algorithm: 'crc32' });
```

## Algorithm Details

CRC32 uses polynomial division in a finite field (GF(2)):

```
CRC32 polynomial: 0x04C11DB7 (IEEE 802.3 standard)

for each byte b:
    crc = (crc >> 8) XOR table[(crc XOR b) & 0xFF]
```

Key characteristics:
- **Polynomial**: Uses a standardized polynomial for consistent results
- **Lookup Table**: Pre-computed table for fast calculation
- **Bit Shifting**: Efficient XOR and shift operations
- **Finite Field**: Mathematical properties ensure good error detection

## Important Notes

⚠️ **Security Warning**: CRC is NOT cryptographically secure. It's designed to detect accidental errors, not intentional tampering. For security applications, use SHA-256 or other cryptographic hash functions.

✅ **Best Practice**: Use CRC32 for checksums and error detection in non-adversarial environments. Use cryptographic hashes (SHA-256, SHA-512) when security matters.

# API - Properties

## `parse`

Gets or sets the parse function used to deserialize stored values.

**Type:** `ParseFn`

**Default:** `JSON.parse`

```typescript
const hashery = new Hashery();
hashery.parse = customParseFunction;
```

## `stringify`

Gets or sets the stringify function used to serialize values for storage.

**Type:** `StringifyFn`

**Default:** `JSON.stringify`

```typescript
const hashery = new Hashery();
hashery.stringify = customStringifyFunction;
```

## `providers`

Gets or sets the HashProviders instance used to manage hash providers.

**Type:** `HashProviders`

```typescript
const hashery = new Hashery();
console.log(hashery.providers);
```

## `names`

Gets the names of all registered hash algorithm providers.

**Type:** `Array<string>`

**Returns:** An array of provider names (e.g., ['SHA-256', 'SHA-384', 'SHA-512', 'djb2', 'fnv1', 'murmur', 'crc32'])

```typescript
const hashery = new Hashery();
console.log(hashery.names); // ['SHA-256', 'SHA-384', 'SHA-512', 'djb2', 'fnv1', 'murmur', 'crc32']
```

## `defaultAlgorithm`

Gets or sets the default hash algorithm to use when none is specified for async methods.

**Type:** `string`

**Default:** `'SHA-256'`

```typescript
const hashery = new Hashery();

// Get default algorithm
console.log(hashery.defaultAlgorithm); // 'SHA-256'

// Set default algorithm
hashery.defaultAlgorithm = 'SHA-512';

// Now all async hashes use SHA-512 by default
const hash = await hashery.toHash({ data: 'example' });
console.log(hash.length); // 128 (SHA-512 produces 128 hex characters)
```

## `defaultAlgorithmSync`

Gets or sets the default hash algorithm to use when none is specified for synchronous methods.

**Type:** `string`

**Default:** `'djb2'`

```typescript
const hashery = new Hashery();

// Get default sync algorithm
console.log(hashery.defaultAlgorithmSync); // 'djb2'

// Set default sync algorithm
hashery.defaultAlgorithmSync = 'fnv1';

// Now all sync hashes use fnv1 by default
const hash = hashery.toHashSync({ data: 'example' });

// You can also set it in the constructor
const hashery2 = new Hashery({ defaultAlgorithmSync: 'murmur' });
const hash2 = hashery2.toHashSync({ data: 'test' }); // Uses murmur
```

# API - Functions

## `toHash(data, options?)`

Generates a cryptographic hash of the provided data using the specified algorithm (async). The data is first stringified using the configured stringify function, then hashed.

**Parameters:**
- `data` (unknown) - The data to hash (will be stringified before hashing)
- `options` (object, optional) - Configuration options
  - `algorithm` (string, optional) - The hash algorithm to use (defaults to 'SHA-256')
  - `maxLength` (number, optional) - Maximum length for the hash output (truncates from the start)

**Returns:** `Promise<string>` - A Promise that resolves to the hexadecimal string representation of the hash

**Example:**

```typescript
const hashery = new Hashery();

// Using default SHA-256
const hash = await hashery.toHash({ name: 'John', age: 30 });

// Using a different algorithm
const hash512 = await hashery.toHash({ name: 'John' }, { algorithm: 'SHA-512' });
const fastHash = await hashery.toHash({ name: 'John' }, { algorithm: 'djb2' });

// Truncating hash output
const shortHash = await hashery.toHash(
  { name: 'John' },
  { algorithm: 'SHA-256', maxLength: 16 }
);
```

## `toHashSync(data, options?)`

Generates a hash of the provided data synchronously using a non-cryptographic hash algorithm. The data is first stringified using the configured stringify function, then hashed.

**Important:** This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32). WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported and will throw an error.

**Parameters:**
- `data` (unknown) - The data to hash (will be stringified before hashing)
- `options` (object, optional) - Configuration options
  - `algorithm` (string, optional) - The hash algorithm to use (defaults to 'djb2')
  - `maxLength` (number, optional) - Maximum length for the hash output (truncates from the start)

**Returns:** `string` - The hexadecimal string representation of the hash

**Throws:** `Error` if the specified algorithm does not support synchronous hashing

**Example:**

```typescript
const hashery = new Hashery();

// Using default djb2
const hash = hashery.toHashSync({ name: 'John', age: 30 });

// Using a different algorithm
const hashFnv1 = hashery.toHashSync({ name: 'John' }, { algorithm: 'fnv1' });
const hashMurmur = hashery.toHashSync({ name: 'John' }, { algorithm: 'murmur' });
const hashCrc = hashery.toHashSync({ name: 'John' }, { algorithm: 'crc32' });

// Truncating hash output
const shortHash = hashery.toHashSync(
  { name: 'John' },
  { algorithm: 'djb2', maxLength: 4 }
);

// This will throw an error (WebCrypto not supported in sync mode)
// const invalid = hashery.toHashSync({ name: 'John' }, { algorithm: 'SHA-256' }); // ❌
```

## `toNumber(data, options?)`

Generates a deterministic number within a specified range based on the hash of the provided data (async). This method uses the toHash function to create a consistent hash, then maps it to a number between min and max (inclusive).

**Parameters:**
- `data` (unknown) - The data to hash (will be stringified before hashing)
- `options` (object, optional) - Configuration options
  - `min` (number, optional) - The minimum value of the range (inclusive, defaults to 0)
  - `max` (number, optional) - The maximum value of the range (inclusive, defaults to 100)
  - `algorithm` (string, optional) - The hash algorithm to use (defaults to 'SHA-256')
  - `hashLength` (number, optional) - Number of characters from hash to use for conversion (defaults to 16)

**Returns:** `Promise<number>` - A Promise that resolves to a number between min and max (inclusive)

**Throws:** Error if min is greater than max

**Example:**

```typescript
const hashery = new Hashery();

// Generate a number between 0 and 100 (default range)
const num = await hashery.toNumber({ user: 'john' });

// Generate a number with custom range
const num2 = await hashery.toNumber({ user: 'john' }, { min: 0, max: 100 });

// Using a different algorithm
const num512 = await hashery.toNumber({ user: 'john' }, { min: 0, max: 255, algorithm: 'SHA-512' });
```

## `toNumberSync(data, options?)`

Generates a deterministic number within a specified range based on the hash of the provided data synchronously. This method uses the toHashSync function to create a consistent hash, then maps it to a number between min and max (inclusive).

**Important:** This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32).

**Parameters:**
- `data` (unknown) - The data to hash (will be stringified before hashing)
- `options` (object, optional) - Configuration options
  - `min` (number, optional) - The minimum value of the range (inclusive, defaults to 0)
  - `max` (number, optional) - The maximum value of the range (inclusive, defaults to 100)
  - `algorithm` (string, optional) - The hash algorithm to use (defaults to 'djb2')
  - `hashLength` (number, optional) - Number of characters from hash to use for conversion (defaults to 16)

**Returns:** `number` - A number between min and max (inclusive)

**Throws:**
- Error if min is greater than max
- Error if the specified algorithm does not support synchronous hashing

**Example:**

```typescript
const hashery = new Hashery();

// Generate a number between 0 and 100 (default range)
const num = hashery.toNumberSync({ user: 'john' });

// Generate a number with custom range
const slot = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 9 });

// Using a different algorithm
const numFnv1 = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 255, algorithm: 'fnv1' });

// A/B testing
const variant = hashery.toNumberSync({ userId: 'user123' }, { min: 0, max: 1 });
console.log(variant === 0 ? 'Group A' : 'Group B');

// Load balancing
const serverId = hashery.toNumberSync(
  { requestId: 'req_abc' },
  { min: 0, max: 9, algorithm: 'murmur' } // 10 servers
);

// This will throw an error (WebCrypto not supported in sync mode)
// const invalid = hashery.toNumberSync({ user: 'john' }, { algorithm: 'SHA-256' }); // ❌
```

## `loadProviders(providers?, options?)`

Loads hash providers into the Hashery instance. This allows you to add custom hash providers or replace the default ones.

**Parameters:**
- `providers` (Array<HashProvider>, optional) - Array of hash providers to add
- `options` (HasheryLoadProviderOptions, optional) - Options object
  - `includeBase` (boolean) - Whether to include base providers (default: true)

**Returns:** `void`

**Example:**

```typescript
const hashery = new Hashery();

// Add a custom provider
const customProvider = {
  name: 'custom',
  toHash: async (data: BufferSource) => 'custom-hash'
};

hashery.loadProviders([customProvider]);

// Load without base providers
hashery.loadProviders([customProvider], { includeBase: false });
```

# API - Types

## `HashAlgorithm`

A string literal union type representing all built-in hash algorithm names. Provides autocomplete in IDEs while still accepting custom provider names as strings.

**Type:** `"SHA-256" | "SHA-384" | "SHA-512" | "djb2" | "fnv1" | "murmur" | "crc32"`

```typescript
import { Hashery, type HashAlgorithm } from 'hashery';

const hashery = new Hashery();

// Use the type for your own variables and functions
const algorithm: HashAlgorithm = 'SHA-256';
const hash = await hashery.toHash({ data: 'example' }, { algorithm });

// All option fields accept HashAlgorithm with full autocomplete
const hashery2 = new Hashery({ defaultAlgorithm: 'SHA-512' }); // autocomplete for algorithm names
```

# Benchmarks

Overall view of the current algorithm's and their performance using simple hashing with random data. `Sync` is when we use `toHashSync` and `Async` is the `toHash` function which requires `await`.

**NOTE: Many of these are not secure and should be used only for object hashing. Read about each one in the documentation and pick what works best for your use case.**

## toHash
|      name       |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|-----------------|:---------:|----------:|----------:|:--------:|----------:|
|  DJB2 Sync      |    🥇     |     649K  |      2µs  |  ±0.01%  |     645K  |
|  FNV1 Sync      |  -0.64%   |     644K  |      2µs  |  ±0.01%  |     635K  |
|  CRC32 Sync     |   -1.4%   |     639K  |      2µs  |  ±0.02%  |     615K  |
|  MURMUR Sync    |   -2.3%   |     634K  |      2µs  |  ±0.01%  |     629K  |
|  CRC32 Async    |   -19%    |     524K  |      2µs  |  ±0.02%  |     514K  |
|  SHA-384 Async  |   -20%    |     519K  |      2µs  |  ±0.03%  |     481K  |
|  MURMUR Async   |   -20%    |     518K  |      2µs  |  ±0.02%  |     512K  |
|  SHA-512 Async  |   -21%    |     513K  |      2µs  |  ±0.03%  |     473K  |
|  SHA-256 Async  |   -21%    |     513K  |      2µs  |  ±0.03%  |     472K  |
|  DJB2 Async     |   -21%    |     512K  |      2µs  |  ±0.02%  |     504K  |
|  FNV1 Async     |   -22%    |     508K  |      2µs  |  ±0.02%  |     501K  |

## toNumber
|      name       |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|-----------------|:---------:|----------:|----------:|:--------:|----------:|
|  CRC32 Sync     |    🥇     |     601K  |      2µs  |  ±0.01%  |     591K  |
|  DJB2 Sync      |  -0.51%   |     598K  |      2µs  |  ±0.01%  |     588K  |
|  MURMUR Sync    |   -1.4%   |     593K  |      2µs  |  ±0.02%  |     582K  |
|  FNV1 Sync      |    -2%    |     589K  |      2µs  |  ±0.01%  |     583K  |
|  CRC32 Async    |   -24%    |     457K  |      2µs  |  ±0.02%  |     446K  |
|  DJB2 Async     |   -25%    |     449K  |      2µs  |  ±0.02%  |     441K  |
|  MURMUR Async   |   -25%    |     448K  |      2µs  |  ±0.02%  |     434K  |
|  SHA-512 Async  |   -27%    |     439K  |      2µs  |  ±0.03%  |     404K  |
|  SHA-384 Async  |   -27%    |     437K  |      2µs  |  ±0.03%  |     406K  |
|  SHA-256 Async  |   -28%    |     433K  |      2µs  |  ±0.03%  |     404K  |
|  FNV1 Async     |   -35%    |     392K  |      3µs  |  ±0.08%  |     296K  |

## Hashery vs Others
|           name            |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|---------------------------|:---------:|----------:|----------:|:--------:|----------:|
|  node:crypto SHA-256      |    🥇     |     529K  |      2µs  |  ±0.03%  |     470K  |
|  Hashery SHA-512 (Cache)  |   -3.7%   |     509K  |      2µs  |  ±0.03%  |     473K  |
|  Hashery SHA-384 (Cache)  |   -4.7%   |     505K  |      2µs  |  ±0.03%  |     471K  |
|  Hashery SHA-256 (Cache)  |   -4.7%   |     504K  |      2µs  |  ±0.03%  |     471K  |
|  node:crypto SHA-512      |    -5%    |     502K  |      2µs  |  ±0.02%  |     471K  |
|  node:crypto SHA-384      |   -5.5%   |     500K  |      2µs  |  ±0.02%  |     489K  |
|  object-hash SHA1         |   -87%    |      71K  |     14µs  |  ±0.04%  |      70K  |
|  object-hash SHA256       |   -87%    |      70K  |     15µs  |  ±0.04%  |      69K  |
|  Hashery SHA-256          |   -88%    |      63K  |     16µs  |  ±0.08%  |      61K  |
|  Hashery SHA-384          |   -89%    |      60K  |     17µs  |  ±0.08%  |      58K  |
|  Hashery SHA-512          |   -89%    |      56K  |     19µs  |  ±0.09%  |      54K  |

In this benchmark it shows the performance comparison between Hashery, `node:crypto`, and the `object-hash` package. By default `node:crypto` has significant performance natively and doesnt use `async/await` to perform its hash. With caching enabled we start to see the performance become more similar. The `object-hash` package is included for comparison as a popular alternative.

## toNumber
|      name       |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|-----------------|:---------:|----------:|----------:|:--------:|----------:|
|  CRC32 Sync     |    🥇     |     601K  |      2µs  |  ±0.01%  |     594K  |
|  FNV1 Sync      |  -0.67%   |     597K  |      2µs  |  ±0.01%  |     588K  |
|  MURMUR Sync    |  -0.76%   |     597K  |      2µs  |  ±0.01%  |     592K  |
|  DJB2 Sync      |   -1.6%   |     592K  |      2µs  |  ±0.02%  |     576K  |
|  FNV1 Async     |   -24%    |     456K  |      2µs  |  ±0.02%  |     447K  |
|  CRC32 Async    |   -25%    |     453K  |      2µs  |  ±0.03%  |     426K  |
|  DJB2 Async     |   -25%    |     451K  |      2µs  |  ±0.02%  |     440K  |
|  MURMUR Async   |   -28%    |     433K  |      2µs  |  ±0.03%  |     420K  |
|  SHA-384 Async  |   -28%    |     432K  |      3µs  |  ±0.03%  |     394K  |
|  SHA-256 Async  |   -29%    |     425K  |      3µs  |  ±0.03%  |     393K  |
|  SHA-512 Async  |   -29%    |     425K  |      3µs  |  ±0.04%  |     384K  |

# Code of Conduct and Contributing
Please use our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing](CONTRIBUTING.md) guidelines for development and testing. We appreciate your contributions!

# License and Copyright

[MIT](LICENSE) & © [Jared Wray](https://jaredwray.com)