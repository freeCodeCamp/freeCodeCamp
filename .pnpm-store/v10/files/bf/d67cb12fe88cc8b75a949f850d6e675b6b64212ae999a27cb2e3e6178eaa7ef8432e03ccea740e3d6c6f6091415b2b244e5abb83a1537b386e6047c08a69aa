[![npm version](https://img.shields.io/npm/dw/weak-lru-cache)](https://www.npmjs.org/package/weak-lru-cache)
[![npm version](https://img.shields.io/npm/v/weak-lru-cache.svg?style=flat-square)](https://www.npmjs.org/package/weak-lru-cache)
[![license](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

# weak-lru-cache

The weak-lru-cache package provides a powerful cache that works in harmony with the JS garbage collection (GC) and least-recently used (LRU) and least-freqently used (LFU) expiration strategy to help cache data with highly optimized cache retention. It uses LRU/LFU (LRFU) expiration to retain referenced data, and then once data has been inactive, it uses weak references (and finalization registry) to allow GC to remove the cached data as part of the normal GC cycles, but still continue to provide cached access to the data as long as it still resides in memory and hasn't been collected. This provides the best of modern expiration strategies combined with optimal GC interaction.

In a typical GC'ed VM, objects may continue to exist in memory long after they are no longer (strongly) referenced, but using a weak-referencing cached, we allow the GC to collect such data, but the cache can return this data up until the point it is garbaged collected, ensuring much more efficient use of memory.

This can also be used to ensure a single object identity per key. By storing an object in the cache for a given key, we can check the cache whenever we need that object, and before recreating it, thereby giving us the means to ensure we also use the same object for a given key as long as it still exists in memory.

This project is tested and run NodeJS and Deno (requires NodeJS v14.10 or higher or Node v13.0 with --harmony-weak-ref flag).

## Setup

Install with (NPM):

```
npm i weak-lru-cache
```
And `import` or `require` it to access the constructor:
```
import { WeakLRUCache } from 'weak-lru-cache';

let myCache = new WeakLRUCache();
myValue.setValue('key', { greeting: 'hello world' });
myValue.getValue('key') -> return the object above as long as it is still cached
```
Or in Deno, import directly from the [`weakcache` deno.land package](https://deno.land/x/weakcache):
```
import { WeakLRUCache } from 'https://deno.land/x/weakcache/index.js';
...
```

## Basic Usage

The `WeakLRUCache` class extends the native `Map` class and also includes the following methods, which are the primary intended interactions with the cache:

### getValue(key)
Gets the value referenced by the given key and returns it. If the value is no longer cached, will return undefined. 

### setValue(key, value, expirationPriority?)
Sets or inserts the value into the cache, with the given key. This will create a new cache entry to reference your provided value. This also returns the cache entry.

The `key` can be any JS value.

If the `value` is an object, it will be stored in the cache, until it expires (as determined by the LRFU expiration policy), *and* is garbage collected. If you provide a primitive value (string, number, boolean, null, etc.), this can not be weakly referenced, so the value will still be stored in the LRFU cache, but once it expires, it will immediately be removed, rather than waiting for GC.

The `expirationPriority` is an optional directive indicating how quickly the cache entry should expire. A higher value will indicate the entry should expire sooner. This can be used to help limit the amount of memory used by cache if you are loading large objects. Using the default cache size, and entries with varied expirationPriority values, the expiration cache will typically hold a sum of about 100,000 of the expirationPriority values. This means that if you wanted to have a cache to stay around or under 100MB, you could provide the size, divided by 1000 (or using `>> 10` is much faster), as the expirationPriority:
```
myCache.setValue('key', bigObject, sizeOfObject >> 10);
```
The `expirationPriority` can also be set to `-1` that the value should be `pinned` in memory and never expire, until the entry has been changed (with a positive `expirationPriority`).

## `WeakLRUCache(options)` Constructor

The `WeakLRUCache` constructor supports an optional `options` object parameter that allows specific configuration and cache tuning. The following properties (all optional) can be defined on the `options` object:

### cacheSize
This indicates the number of entries to allocate in the cache. This defaults to 32,768, and the maximum allowed value is 16,777,216.

### expirer
By default there is a single shared expiration cache, that is a single instance of `LRFUExpirer`. However, you can define your own expiration cache or create separate instances of LRFUExpirer. Generally using a (the default) single instance is preferable since it naturally gives higher priority/recency to more heavily used caches, and allows lesser used caches to expire more of their entries.

You can also set this to `false` to indicate that no LRU/LRFU cache should be used and the cache should rely entirely on weak-references.

### deferRegister
This flag can be set to true to save key and cache information so that it can defer the finalization registration. This tends to be slightly faster for caches that are more heavily dominated by lots of entry replacements (multiple setValue calls to same entries before they expire). However, for (what is generally considered more typical) usage more dominated by setting values and getting them until they expire, the default setting will probably be faster.


## Using Cache Entries

The `WeakLRUCache` class extends the native `Map` class, and consequently, all the standard Map methods are available. As a Map, all the values are cache entries, which are typically `WeakRef` objects that hold a reference to the cached value, along with retention information. This means that the `get(key)` differs from `getValue(key)` in that it returns the cache entry, which references the value, rather than the value itself.

The cache entries also can contain metadata about the entry, including information about the cache entries position in the LRFU cache that informs when it will expire. However, you can also set your own properties on the cache entry to store you own metadata. This will be retained until the entry is removed/collected.

## License

MIT
