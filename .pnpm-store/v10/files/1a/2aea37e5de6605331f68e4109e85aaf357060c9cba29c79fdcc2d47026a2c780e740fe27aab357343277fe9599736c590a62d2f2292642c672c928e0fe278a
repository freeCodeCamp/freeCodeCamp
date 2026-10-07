# cacheable-lookup

> A cacheable [`dns.lookup(…)`](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback) that respects TTL :tada:

[![Node CI](https://github.com/szmarczak/cacheable-lookup/workflows/Node%20CI/badge.svg)](https://github.com/szmarczak/cacheable-lookup/actions)
[![codecov](https://codecov.io/gh/szmarczak/cacheable-lookup/branch/master/graph/badge.svg)](https://codecov.io/gh/szmarczak/cacheable-lookup)
[![npm](https://img.shields.io/npm/dm/cacheable-lookup.svg)](https://www.npmjs.com/package/cacheable-lookup)
[![install size](https://packagephobia.now.sh/badge?p=cacheable-lookup)](https://packagephobia.now.sh/result?p=cacheable-lookup)

Making lots of HTTP requests? You can save some time by caching DNS lookups :zap:

## Usage

### Using the `lookup` option

```js
import http from 'node:http';
import CacheableLookup from 'cacheable-lookup';

const cacheable = new CacheableLookup();

http.get('http://example.com', {lookup: cacheable.lookup}, response => {
	// Handle the response here
});
```

### Attaching CacheableLookup to an Agent

```js
import http from 'node:http';
import https from 'node:https';
import CacheableLookup from 'cacheable-lookup';

const cacheable = new CacheableLookup();

cacheable.install(http.globalAgent);
cacheable.install(https.globalAgent);

http.get('http://example.com', response => {
	// Handle the response here
});
```

## API

### new CacheableLookup(options)

Returns a new instance of `CacheableLookup`.

#### options

Type: `object`\
Default: `{}`

Options used to cache the DNS lookups.

##### cache

Type: `Map` | [`Keyv`](https://github.com/lukechilds/keyv/)\
Default: `new Map()`

Custom cache instance. If `undefined`, it will create a new one.

**Note**: If you decide to use Keyv instead of the native implementation, the performance will drop by 10x. Memory leaks may occur as it doesn't provide any way to remove all the deprecated values at once.

**Tip**: [`QuickLRU`](https://github.com/sindresorhus/quick-lru) is fully compatible with the Map API, you can use it to limit the amount of cached entries. Example:

```js
import http from 'node:http';
import CacheableLookup from 'cacheable-lookup';
import QuickLRU from 'quick-lru';

const cacheable = new CacheableLookup({
	cache: new QuickLRU({maxSize: 1000})
});

http.get('http://example.com', {lookup: cacheable.lookup}, response => {
	// Handle the response here
});
```

##### options.maxTtl

Type: `number`\
Default: `Infinity`

The maximum lifetime of the entries received from the specifed DNS server (TTL in seconds).

If set to `0`, it will make a new DNS query each time.

**Pro Tip**: This shouldn't be lower than your DNS server response time in order to prevent bottlenecks. For example, if you use Cloudflare, this value should be greater than `0.01`.

##### options.fallbackDuration

Type: `number`\
Default: `3600` (1 hour)

When the DNS server responds with `ENOTFOUND` or `ENODATA` and the OS reports that the entry is available, it will use `dns.lookup(...)` directly for the requested hostnames for the specified amount of time (in seconds).

**Note**: You should avoid setting this to `0` unless the provided DNS servers' database is limited to few domains.

##### options.errorTtl

Type: `number`\
Default: `0.15`

The time how long it needs to remember queries that threw `ENOTFOUND` or `ENODATA` (TTL in seconds).

**Note**: This option is independent, `options.maxTtl` does not affect this.

**Pro Tip**: This shouldn't be lower than your DNS server response time in order to prevent bottlenecks. For example, if you use Cloudflare, this value should be greater than `0.01`.

##### options.resolver

Type: `dns.Resolver | dns.promises.Resolver`\
Default: [`new dns.promises.Resolver()`](https://nodejs.org/api/dns.html#dns_class_dns_resolver)

An instance of [DNS Resolver](https://nodejs.org/api/dns.html#dns_class_dns_resolver) used to make DNS queries.

##### options.lookup

Type: `Function`\
Default: [`dns.lookup`](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback)

The fallback function to use when the DNS server responds with `ENOTFOUND` or `ENODATA`.

If you don't query internal hostnames (such as `localhost`, `database.local` etc.), it is strongly recommended to set this to `false`.

### Entry object

Type: `object`

#### address

Type: `string`

The IP address (can be an IPv4 or IPv6 address).

#### family

Type: `number`

The IP family (`4` or `6`).

##### expires

Type: `number`

**Note**: This is not present when falling back to `dns.lookup(...)`!

The timestamp (`Date.now() + ttl * 1000`) when the entry expires.

#### ttl

**Note**: This is not present when falling back to `dns.lookup(...)`!

The time in seconds for its lifetime.

#### source

**Note**: This is not present when falling back to `dns.lookup(...)`!

Whether this entry was loaded from the cache or came from a query (`cache` or `query`)

### Entry object (callback-style)

When `options.all` is `false`, then `callback(error, address, family, expires, ttl)` is called.\
When `options.all` is `true`, then `callback(error, entries)` is called.

### CacheableLookup instance

#### servers

Type: `Array`

The DNS servers used to make queries. Can be overridden - doing so will clear the cache.

#### [lookup(hostname, options, callback)](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback)

#### lookupAsync(hostname, options)

The asynchronous version of `dns.lookup(…)`.

Returns an [entry object](#entry-object).\
If `options.all` is true, returns an array of entry objects.

##### hostname

Type: `string`

##### options

Type: `object`

The same as the [`dns.lookup(…)`](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback) options.

#### query(hostname)

An asynchronous function which returns cached DNS lookup entries.\
This is the base for `lookupAsync(hostname, options)` and `lookup(hostname, options, callback)`.

**Note**: This function has no options.

Returns an array of objects with `address`, `family`, `ttl` and `expires` properties.

#### queryAndCache(hostname)

An asynchronous function which makes two DNS queries: A and AAAA. The result is cached.\
This is used by `query(hostname)` if no entry in the database is present.

Returns an array of objects with `address`, `family`, `ttl` and `expires` properties.

#### updateInterfaceInfo()

Updates interface info. For example, you need to run this when you plug or unplug your WiFi driver.

**Note:** Running `updateInterfaceInfo()` will trigger `clear()` only on network interface removal.

#### clear(hostname?)

Clears the cache for the given hostname. If the hostname argument is not present, the entire cache will be emptied.

## High performance

Performed on:
- Query: `example.com`
- CPU: i7-7700k
- CPU governor: performance

```
CacheableLookup#lookupAsync                x 2,896,251 ops/sec ±1.07% (85 runs sampled)
CacheableLookup#lookupAsync.all            x 2,842,664 ops/sec ±1.11% (88 runs sampled)
CacheableLookup#lookupAsync.all.ADDRCONFIG x 2,598,283 ops/sec ±1.21% (88 runs sampled)
CacheableLookup#lookup                     x 2,565,913 ops/sec ±1.56% (85 runs sampled)
CacheableLookup#lookup.all                 x 2,609,039 ops/sec ±1.01% (86 runs sampled)
CacheableLookup#lookup.all.ADDRCONFIG      x 2,416,242 ops/sec ±0.89% (85 runs sampled)
dns#lookup                                 x 7,272     ops/sec ±0.36% (86 runs sampled)
dns#lookup.all                             x 7,249     ops/sec ±0.40% (86 runs sampled)
dns#lookup.all.ADDRCONFIG                  x 5,693     ops/sec ±0.28% (85 runs sampled)
Fastest is CacheableLookup#lookupAsync.all
```

## Related

- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Wrap native HTTP requests with RFC compliant cache support
