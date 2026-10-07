[<img align="center" src="https://cacheable.org/logo.svg" alt="Cacheable" />](https://github.com/jaredwray/cacheable)

> High Performance Layer 1 / Layer 2 Caching with Keyv Storage

[![codecov](https://codecov.io/gh/jaredwray/cacheable/branch/main/graph/badge.svg?token=lWZ9OBQ7GM)](https://codecov.io/gh/jaredwray/cacheable)
[![tests](https://github.com/jaredwray/cacheable/actions/workflows/tests.yml/badge.svg)](https://github.com/jaredwray/cacheable/actions/workflows/tests.yml)
[![npm](https://img.shields.io/npm/dm/@cacheable/memory.svg)](https://www.npmjs.com/package/@cacheable/memory)
[![npm](https://img.shields.io/npm/v/@cacheable/memory.svg)](https://www.npmjs.com/package/@cacheable/memory)
[![license](https://img.shields.io/github/license/jaredwray/cacheable)](https://github.com/jaredwray/cacheable/blob/main/LICENSE)

You can use `CacheableMemory` as a standalone cache or as a primary store for `cacheable`. You can also set the `useClones` property to `false` if you want to use the same reference for the values. This is useful if you are using large objects and want to save memory. The `lruSize` property is the size of the LRU cache and is set to `0` by default which is unlimited. When setting the `lruSize` property it will limit the number of keys in the cache.

This simple in-memory cache uses multiple Map objects and a with `expiration` and `lru` policies if set to manage the in memory cache at scale.

By default we use lazy expiration deletion which means on `get` and `getMany` type functions we look if it is expired and then delete it. If you want to have a more aggressive expiration policy you can set the `checkInterval` property to a value greater than `0` which will check for expired keys at the interval you set.

Here are some of the main features of `CacheableMemory`:
* High performance in-memory cache with a robust API and feature set. 🚀
* Can scale past the `16,777,216 (2^24) keys` limit of a single `Map` via `hashStoreSize`. Default is `16` Map objects.
* LRU (Least Recently Used) cache feature to limit the number of keys in the cache via `lruSize`. Limit to `16,777,216 (2^24) keys` total.
* Expiration policy to delete expired keys with lazy deletion or aggressive deletion via `checkInterval`.
* `Wrap` feature to memoize `sync` and `async` functions with stampede protection.
* Ability to do many operations at once such as `setMany`, `getMany`, `deleteMany`, and `takeMany`.
* Supports `raw` data retrieval with `getRaw` and `getManyRaw` methods to get the full metadata of the cache entry.

# Table of Contents
* [Getting Started](#getting-started)
* [CacheableMemory - In-Memory Cache](#cacheablememory---in-memory-cache)
* [CacheableMemory Store Hashing](#cacheablememory-store-hashing)
* [CacheableMemory LRU Feature](#cacheablememory-lru-feature)
* [CacheableMemory Performance](#cacheablememory-performance)
* [CacheableMemory Options](#cacheablememory-options)
* [CacheableMemory - API](#cacheablememory---api)
* [Keyv Storage Adapter - KeyvCacheableMemory](#keyv-storage-adapter---keyvcacheablememory)
* [Wrap / Memoization for Sync and Async Functions](#wrap--memoization-for-sync-and-async-functions)
* [Get Or Set Memoization Function](#get-or-set-memoization-function)
* [How to Contribute](#how-to-contribute)
* [License and Copyright](#license-and-copyright)

# Getting Started

```bash
npm install @cacheable/memory
```

# Basic Usage

```javascript
import { CacheableMemory } from '@cacheable/memory';

const cacheable = new CacheableMemory();
await cacheable.set('key', 'value', 1000);
const value = await cacheable.get('key');
```

In this example, the primary store we will use `lru-cache` and the secondary store is Redis. You can also set multiple stores in the options:

```javascript
import { CacheableMemory } from '@cacheable/memory';

// we set the storeHashSize to 1 so that we only use a single Map object as the lru is limited to a single Map size
const cache = new CacheableMemory({storeHashSize: 1, lruSize: 80000});

cache.set('key1', 'value1');
const result = cache.get('key1');
console.log(result); // 'value1' 
```

This is a more advanced example and not needed for most use cases.

# Shorthand for Time to Live (ttl)

By default `Cacheable` and `CacheableMemory` the `ttl` is in milliseconds but you can use shorthand for the time to live. Here are the following shorthand values:

* `ms`: Milliseconds such as (1ms = 1)
* `s`: Seconds such as (1s = 1000)
* `m`: Minutes such as (1m = 60000)
* `h` or `hr`: Hours such as (1h = 3600000)
* `d`: Days such as (1d = 86400000)

Here is an example of how to use the shorthand for the `ttl`:

```javascript
import { CacheableMemory } from 'cacheable';
const cache = new CacheableMemory({ ttl: '15m' }); //sets the default ttl to 15 minutes (900000 ms)
cache.set('key', 'value', '1h'); //sets the ttl to 1 hour (3600000 ms) and overrides the default
```

if you want to disable the `ttl` you can set it to `0` or `undefined`:

```javascript
import { CacheableMemory } from 'cacheable';
const cache = new CacheableMemory({ ttl: 0 }); //sets the default ttl to 0 which is disabled
cache.set('key', 'value', 0); //sets the ttl to 0 which is disabled
```

If you set the ttl to anything below `0` or `undefined` it will disable the ttl for the cache and the value that returns will be `undefined`. With no ttl set the value will be stored `indefinitely`.

```javascript
import { CacheableMemory } from 'cacheable';
const cache = new CacheableMemory({ ttl: 0 }); //sets the default ttl to 0 which is disabled
console.log(cache.ttl); // undefined
cache.ttl = '1h'; // sets the default ttl to 1 hour (3600000 ms)
console.log(cache.ttl); // '1h'
cache.ttl = -1; // sets the default ttl to 0 which is disabled
console.log(cache.ttl); // undefined
```

## Retrieving raw cache entries

The `getRaw` and `getManyRaw` methods return the full stored metadata (`StoredDataRaw<T>`) instead of just the value:

```typescript
import { CacheableMemory } from 'cacheable';

const cache = new CacheableMemory();

// store a value
await cache.set('user:1', { name: 'Alice' }, '1h'); // 1 hour

// default: only the value
const user = await cache.get<{ name: string }>('user:1');
console.log(user); // { name: 'Alice' }

// with raw: full record including expiration
const raw = await cache.getRaw('user:1');
console.log(raw.value);   // { name: 'Alice' }
console.log(raw.expires); // e.g. 1677628495000 or null
```

## CacheableMemory Store Hashing

`CacheableMemory` uses `Map` objects to store the keys and values. To make this scale past the `16,777,216 (2^24) keys` limit of a single `Map` we use a hash to balance the data across multiple `Map` objects. This is done by hashing the key and using the hash to determine which `Map` object to use. The default hashing algorithm is `djb2` but you can change it by setting the `storeHashAlgorithm` property in the options. Supported algorithms include DJB2, FNV1, MURMER, and CRC32. By default we set the amount of `Map` objects to `16`. 

NOTE: if you are using the LRU cache feature the `lruSize` no matter how many `Map` objects you have it will be limited to the `16,777,216 (2^24) keys` limit of a single `Map` object. This is because we use a double linked list to manage the LRU cache and it is not possible to have more than `16,777,216 (2^24) keys` in a single `Map` object.

Here is an example of how to set the number of `Map` objects and the hashing algorithm:

```javascript
import { CacheableMemory } from '@cacheable/memory';
const cache = new CacheableMemory({
  storeSize: 32, // set the number of Map objects to 32
});
cache.set('key', 'value');
const value = cache.get('key'); // value
```

Here is an example of how to use the `storeHashAlgorithm` property with supported algorithms:

```javascript
import { CacheableMemory, HashAlgorithm } from '@cacheable/memory';

// Using DJB2 (default)
const cache = new CacheableMemory({ storeHashAlgorithm: HashAlgorithm.DJB2 });

// Or other non-cryptographic algorithms for better performance
const cache2 = new CacheableMemory({ storeHashAlgorithm: HashAlgorithm.FNV1 });
const cache3 = new CacheableMemory({ storeHashAlgorithm: HashAlgorithm.MURMER });
const cache4 = new CacheableMemory({ storeHashAlgorithm: HashAlgorithm.CRC32 });

cache.set('key', 'value');
const value = cache.get('key'); // value
```

**Available algorithms:** DJB2 (default), FNV1, MURMER, CRC32. Note: Cryptographic algorithms (SHA-256, SHA-384, SHA-512) are not recommended for store hashing due to performance overhead.

If you want to provide your own hashing function you can set the `storeHashAlgorithm` property to a function that takes an object and returns a `number` that is in the range of the amount of `Map` stores you have.

```javascript
import { CacheableMemory } from 'cacheable';
/**
 * Custom hash function that takes a key and the size of the store
 * and returns a number between 0 and storeHashSize - 1.
 * @param {string} key - The key to hash.
 * @param {number} storeHashSize - The size of the store (number of Map objects).
 * @returns {number} - A number between 0 and storeHashSize - 1.
 */
const customHash = (key, storeHashSize) => {
  // custom hashing logic
  return key.length % storeHashSize; // returns a number between 0 and 31 for 32 Map objects
};
const cache = new CacheableMemory({ storeHashAlgorithm: customHash, storeSize: 32 });
cache.set('key', 'value');
const value = cache.get('key'); // value
```

## CacheableMemory LRU Feature

You can enable the LRU (Least Recently Used) feature in `CacheableMemory` by setting the `lruSize` property in the options. This will limit the number of keys in the cache to the size you set. When the cache reaches the limit it will remove the least recently used keys from the cache. This is useful if you want to limit the memory usage of the cache.

When you set the `lruSize` we use a double linked list to manage the LRU cache and also set the `hashStoreSize` to `1` which means we will only use a single `Map` object for the LRU cache. This is because the LRU cache is managed by the double linked list and it is not possible to have more than `16,777,216 (2^24) keys` in a single `Map` object.

```javascript
import { CacheableMemory } from 'cacheable';
const cache = new CacheableMemory({ lruSize: 1 }); // sets the LRU cache size to 1000 keys and hashStoreSize to 1
cache.set('key1', 'value1');
cache.set('key2', 'value2');
const value1 = cache.get('key1');
console.log(value1); // undefined if the cache is full and key1 is the least recently used
const value2 = cache.get('key2');
console.log(value2); // value2 if key2 is still in the cache
console.log(cache.size()); // 1
```

NOTE: if you set the `lruSize` property to `0` after it was enabled it will disable the LRU cache feature and will not limit the number of keys in the cache. This will remove the `16,777,216 (2^24) keys` limit of a single `Map` object and will allow you to store more keys in the cache.

## CacheableMemory Performance

Our goal with `cacheable` and `CacheableMemory` is to provide a high performance caching engine that is simple to use and has a robust API. We test it against other cacheing engines such that are less feature rich to make sure there is little difference. Here are some of the benchmarks we have run:

*Memory Benchmark Results:*
|                   name                   |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|------------------------------------------|:---------:|----------:|----------:|:--------:|----------:|
|  Cacheable Memory (v1.10.0) - set / get  |    🥇     |     152K  |      7µs  |  ±0.94%  |     147K  |
|  Map (v22) - set / get                   |   -1.1%   |     151K  |      7µs  |  ±0.69%  |     145K  |
|  Node Cache - set / get                  |   -4.3%   |     146K  |      7µs  |  ±1.13%  |     142K  |
|  bentocache (v1.4.0) - set / get         |   -20%    |     121K  |      8µs  |  ±0.40%  |     119K  |

*Memory LRU Benchmark Results:*
|                   name                   |  summary  |  ops/sec  |  time/op  |  margin  |  samples  |
|------------------------------------------|:---------:|----------:|----------:|:--------:|----------:|
|  quick-lru (v7.0.1) - set / get          |    🥇     |     118K  |      9µs  |  ±0.85%  |     112K  |
|  Map (v22) - set / get                   |  -0.56%   |     117K  |      9µs  |  ±1.35%  |     110K  |
|  lru.min (v1.1.2) - set / get            |   -1.7%   |     116K  |      9µs  |  ±0.90%  |     110K  |
|  Cacheable Memory (v1.10.0) - set / get  |   -3.3%   |     114K  |      9µs  |  ±1.16%  |     108K  |

As you can see from the benchmarks `CacheableMemory` is on par with other caching engines such as `Map`, `Node Cache`, and `bentocache`. We have also tested it against other LRU caching engines such as `quick-lru` and `lru.min` and it performs well against them too.

## CacheableMemory Options

* `ttl`: The time to live for the cache in milliseconds. Default is `undefined` which is means indefinitely.
* `useClones`: If the cache should use clones for the values. Default is `true`.
* `lruSize`: The size of the LRU cache. Default is `0` which is unlimited.
* `checkInterval`: The interval to check for expired keys in milliseconds. Default is `0` which is disabled.
* `storeHashSize`: The number of `Map` objects to use for the cache. Default is `16`.
* `storeHashAlgorithm`: The hashing algorithm to use for the cache. Default is `djb2`. Supported: DJB2, FNV1, MURMER, CRC32.

## CacheableMemory - API

* `set(key, value, ttl?)`: Sets a value in the cache.
* `setMany([{key, value, ttl?}])`: Sets multiple values in the cache from `CacheableItem`.
* `get(key)`: Gets a value from the cache.
* `getMany([keys])`: Gets multiple values from the cache.
* `getRaw(key)`: Gets a value from the cache as `CacheableStoreItem`.
* `getManyRaw([keys])`: Gets multiple values from the cache as `CacheableStoreItem`.
* `has(key)`: Checks if a value exists in the cache.
* `hasMany([keys])`: Checks if multiple values exist in the cache.
* `delete(key)`: Deletes a value from the cache.
* `deleteMany([keys])`: Deletes multiple values from the cache.
* `take(key)`: Takes a value from the cache and deletes it.
* `takeMany([keys])`: Takes multiple values from the cache and deletes them.
* `wrap(function, WrapSyncOptions)`: Wraps a `sync` function in a cache.
* `clear()`: Clears the cache.
* `ttl`: The default time to live for the cache in milliseconds. Default is `undefined` which is disabled.
* `useClones`: If the cache should use clones for the values. Default is `true`.
* `lruSize`: The size of the LRU cache. Default is `0` which is unlimited.
* `size`: The number of keys in the cache.
* `checkInterval`: The interval to check for expired keys in milliseconds. Default is `0` which is disabled.
* `storeHashSize`: The number of `Map` objects to use for the cache. Default is `16`.
* `storeHashAlgorithm`: The hashing algorithm to use for the cache. Default is `djb2`. Supported: DJB2, FNV1, MURMER, CRC32.
* `keys`: Get the keys in the cache. Not able to be set.
* `items`: Get the items in the cache as `CacheableStoreItem` example `{ key, value, expires? }`.
* `store`: The hash store for the cache which is an array of `Map` objects.
* `checkExpired()`: Checks for expired keys in the cache. This is used by the `checkInterval` property.
* `startIntervalCheck()`: Starts the interval check for expired keys if `checkInterval` is above 0 ms.
* `stopIntervalCheck()`: Stops the interval check for expired keys.

# Keyv Storage Adapter - KeyvCacheableMemory

`cacheable` comes with a built-in storage adapter for Keyv called `KeyvCacheableMemory`. This takes `CacheableMemory` and creates a storage adapter for Keyv. This is useful if you want to use `CacheableMemory` as a storage adapter for Keyv. Here is an example of how to use `KeyvCacheableMemory`:

```javascript
import { Keyv } from 'keyv';
import { KeyvCacheableMemory } from 'cacheable';

const keyv = new Keyv({ store: new KeyvCacheableMemory() });
await keyv.set('foo', 'bar');
const value = await keyv.get('foo');
console.log(value); // bar 
```

# Wrap / Memoization for Sync and Async Functions

`CacheableMemory` has a feature called `wrap` that allows you to wrap a function in a cache. This is useful for memoization and caching the results of a function. You can wrap a `sync` function in a cache. Here is an example of how to use the `wrap` function:

```javascript
import { CacheableMemory } from 'cacheable';
const syncFunction = (value: number) => {
  return value * 2;
};

const cache = new CacheableMemory();
const wrappedFunction = cache.wrap(syncFunction, { ttl: '1h', key: 'syncFunction' });
console.log(wrappedFunction(2)); // 4
console.log(wrappedFunction(2)); // 4 from cache
```

In this example we are wrapping a `sync` function in a cache with a `ttl` of `1 hour`. This will cache the result of the function for `1 hour` and then expire the value. You can also set the `key` property in the `wrap()` options to set a custom key for the cache.

When an error occurs in the function it will not cache the value and will return the error. This is useful if you want to cache the results of a function but not cache the error. If you want it to cache the error you can set the `cacheError` property to `true` in the `wrap()` options. This is disabled by default.

```javascript
import { CacheableMemory } from 'cacheable';
const syncFunction = (value: number) => {
  throw new Error('error');
};

const cache = new CacheableMemory();
const wrappedFunction = cache.wrap(syncFunction, { ttl: '1h', key: 'syncFunction', cacheError: true });
console.log(wrappedFunction()); // error
console.log(wrappedFunction()); // error from cache
```

If you would like to generate your own key for the wrapped function you can set the `createKey` property in the `wrap()` options. This is useful if you want to generate a key based on the arguments of the function or any other criteria.

```javascript
  const cache = new CacheableMemory();
  const options: WrapOptions = {
    cache,
    keyPrefix: 'test',
    createKey: (function_, arguments_, options: WrapOptions) => `customKey:${options?.keyPrefix}:${arguments_[0]}`,
  };

  const wrapped = wrap((argument: string) => `Result for ${argument}`, options);

  const result1 = wrapped('arg1');
  const result2 = wrapped('arg1'); // Should hit the cache

  console.log(result1); // Result for arg1
  console.log(result2); // Result for arg1 (from cache)
```

We will pass in the `function` that is being wrapped, the `arguments` passed to the function, and the `options` used to wrap the function. You can then use these to generate a custom key for the cache.

# How to Contribute

You can contribute by forking the repo and submitting a pull request. Please make sure to add tests and update the documentation. To learn more about how to contribute go to our main README [https://github.com/jaredwray/cacheable](https://github.com/jaredwray/cacheable). This will talk about how to `Open a Pull Request`, `Ask a Question`, or `Post an Issue`.

# License and Copyright
[MIT © Jared Wray](./LICENSE)
