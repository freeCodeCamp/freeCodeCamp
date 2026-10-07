# Toad Cache

[![NPM Version](https://img.shields.io/npm/v/toad-cache.svg)](https://npmjs.org/package/toad-cache)
[![NPM Downloads](https://img.shields.io/npm/dm/toad-cache.svg)](https://npmjs.org/package/toad-cache)
![](https://github.com/kibertoad/toad-cache/workflows/ci/badge.svg)
[![Coverage Status](https://coveralls.io/repos/kibertoad/toad-cache/badge.svg?branch=main)](https://coveralls.io/r/kibertoad/toad-cache?branch=main)

Least-Recently-Used and First-In-First-Out caches for Client or Server.

## Getting started

```javascript
import { Lru, Fifo } from 'toad-cache'
const lruCache = new Lru(max, ttl = 0)
const fifoCache = new Fifo(max, ttl = 0)
```

## clear

### Method

Clears the contents of the cache

**Example**

```javascript
cache.clear()
```

## delete

### Method

Removes item from cache

    param  {String} key Item key

**Example**

```javascript
cache.delete('myKey')
```

## deleteMany

### Method

Removes items from cache

    param  {String[]} keys Item keys

**Example**

```javascript
cache.deleteMany(['myKey', 'myKey2'])
```

## evict

### Method

Evicts the least recently used item from cache

**Example**

```javascript
cache.evict()
```

## expiresAt

### Method

Gets expiration time for cached item

    param  {String} key Item key
    return {Mixed}      Undefined or number (epoch time)

**Example**

```javascript
const item = cache.expiresAt('myKey')
```

## first

### Property

Item in "first" or "bottom" position

**Example**

```javascript
const cache = new Lru()

cache.first // null - it's a new cache!
```

## get

### Method

Gets cached item and marks it as recently used (pushes to the back of the list of the candidates for the eviction)

    param  {String} key Item key
    return {Mixed}      Undefined or Item value

**Example**

```javascript
const item = cache.get('myKey')
```

## getMany

### Method

Gets multiple cached items and marks them as recently used (pushes to the back of the list of the candidates for the eviction)

    param  {String[]} keys Item keys
    return {Mixed[]}      Undefined or Item values

**Example**

```javascript
const item = cache.getMany(['myKey', 'myKey2'])
```

## keys

### Method

Returns an `Array` of cache item keys.

    return {Array} Array of keys

**Example**

```javascript
console.log(cache.keys())
```

## max

### Property

Max items to hold in cache (1000)

**Example**

```javascript
const cache = new Lru(500)

cache.max // 500
```

## last

### Property

Item in "last" or "top" position

**Example**

```javascript
const cache = new Lru()

cache.last // null - it's a new cache!
```

## set

### Method

Sets item in cache as `first`

    param  {String} key   Item key
    param  {Mixed}  value Item value

**Example**

```javascript
cache.set('myKey', { prop: true })
```

## size

### Property

Number of items in cache

**Example**

```javascript
const cache = new Lru()

cache.size // 0 - it's a new cache!
```

## ttl

### Property

Milliseconds an item will remain in cache; lazy expiration upon next `get()` of an item

**Example**

```javascript
const cache = new Lru()

cache.ttl = 3e4
```

## Hit/miss/expiration tracking

In case you want to gather information on cache hit/miss/expiration ratio, as well as cache size and eviction statistics, you can use LruHitStatistics class:

```js
const sharedRecord = new HitStatisticsRecord() // if you want to use single record object for all of caches, create it manually and pass to each cache

const cache = new LruHitStatistics({
  cacheId: 'some-cache-id',
  globalStatisticsRecord: sharedRecord,
  statisticTtlInHours: 24, // how often to reset statistics. On every rotation previously accumulated data is removed
  max: 1000,
  ttlInMsecs: 0,
})
```

You can retrieve accumulated statistics from the cache, or from the record directly:

```js
// this is the same
const statistics = sharedRecord.getStatistics()
const alsoStatistics = cache.getStatistics()

/*
{
  'some-cache-id': {
    '2023-04-06': {
      cacheSize: 100, // how many elements does cache currently have
      evictions: 5, // how many elements were evicted due to cache being at max capacity    
      expirations: 0, // how many elements were removed during get due to their ttl being exceeded
      hits: 0, // how many times element was successfully retrieved from cache during get
      emptyHits: 0, // out of all hits, how many were null, undefined or ''?
      falsyHits: 0, // out of all hits, how many were falsy?      
      misses: 1, // how many times element was not in cache or expired during get
      invalidateOne: 1, // how many times element was invalidated individually
      invalidateAll: 2, // how many times entire cache was invalidated
      sets: 0, // how many times new element was added      
    },
  },
}

Note that date here reflects start of the rotation. If statistics weren't rotated yet, and another day started, it will still be counted against the day of the rotation start
*/
```

## License

Copyright (c) 2023 Igor Savin

Based on [tiny-lru](https://github.com/avoidwork/tiny-lru), created by Jason Mulligan

Licensed under the MIT license.
