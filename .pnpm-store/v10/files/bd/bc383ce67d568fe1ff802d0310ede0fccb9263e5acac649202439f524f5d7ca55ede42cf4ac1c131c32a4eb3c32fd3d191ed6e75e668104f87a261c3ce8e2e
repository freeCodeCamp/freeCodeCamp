<h1 align="center"><br><img width="380" src="https://cacheable.org/assets/images/cacheable_symbol.svg" alt="cacheable logo"><br><br></h1>

# cacheable-request

> Wrap native HTTP requests with RFC compliant cache support

[![tests](https://github.com/jaredwray/cacheable/actions/workflows/tests.yaml/badge.svg)](https://github.com/jaredwray/cacheable/actions/workflows/tests.yaml)
[![codecov](https://codecov.io/gh/jaredwray/cacheable/branch/master/graph/badge.svg?token=LDLaqe4PsI)](https://codecov.io/gh/jaredwray/cacheable)
[![npm](https://img.shields.io/npm/dm/cacheable-request.svg)](https://www.npmjs.com/package/cacheable-request)
[![npm](https://img.shields.io/npm/v/cacheable-request.svg)](https://www.npmjs.com/package/cacheable-request)

[RFC 7234](http://httpwg.org/specs/rfc7234.html) compliant HTTP caching for native Node.js HTTP/HTTPS requests. Caching works out of the box in memory or is easily pluggable with a wide range of storage adapters.

**Note:** This is a low level wrapper around the core HTTP modules, it's not a high level request library.

# Table of Contents
* [Latest Changes](#latest-changes)
* [Features](#features)
* [Install and Usage](#install-and-usage)
* [Storage Adapters](#storage-adapters)
* [API](#api)
* [Using Hooks](#using-hooks)
* [Contributing](#contributing)
* [Ask a Question](#ask-a-question)
* [License](#license) (MIT)

# Latest Changes

## Breaking Changes with v10.0.0
This release contains breaking changes. This is the new way to use this package.

### Usage Before v10
```js
import http from 'http';
import CacheableRequest from 'cacheable-request';

// Then instead of
const req = http.request('http://example.com', cb);
req.end();

// You can do
const cacheableRequest = new CacheableRequest(http.request);
const cacheReq = cacheableRequest('http://example.com', cb);
cacheReq.on('request', req => req.end());
// Future requests to 'example.com' will be returned from cache if still valid

// You pass in any other http.request API compatible method to be wrapped with cache support:
const cacheableRequest = new CacheableRequest(https.request);
const cacheableRequest = new CacheableRequest(electron.net);
```

### Usage After v10.1.0
```js

import CacheableRequest from 'cacheable-request';

// Now You can do
const cacheableRequest = new CacheableRequest(http.request).request();
const cacheReq = cacheableRequest('http://example.com', cb);
cacheReq.on('request', req => req.end());
// Future requests to 'example.com' will be returned from cache if still valid

// You pass in any other http.request API compatible method to be wrapped with cache support:
const cacheableRequest = new CacheableRequest(https.request).request();
const cacheableRequest = new CacheableRequest(electron.net).request();
```

The biggest change is that when you do a `new` CacheableRequest you now want to call `request` method will give you the instance to use. 

```diff
- const cacheableRequest = new CacheableRequest(http.request);
+ const cacheableRequest = new CacheableRequest(http.request).request();
```

### ESM Support in version 9 and higher. 

We are now using pure esm support in our package. If you need to use commonjs you can use v8 or lower. To learn more about using ESM please read this from `sindresorhus`: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

## Features

- Only stores cacheable responses as defined by RFC 7234
- Fresh cache entries are served directly from cache
- Stale cache entries are revalidated with `If-None-Match`/`If-Modified-Since` headers
- 304 responses from revalidation requests use cached body
- Updates `Age` header on cached responses
- Can completely bypass cache on a per request basis
- In memory cache by default
- Official support for Redis, Memcache, Etcd, MongoDB, SQLite, PostgreSQL and MySQL storage adapters
- Easily plug in your own or third-party storage adapters
- If DB connection fails, cache is automatically bypassed ([disabled by default](#optsautomaticfailover))
- Adds cache support to any existing HTTP code with minimal changes
- Uses [http-cache-semantics](https://github.com/pornel/http-cache-semantics) internally for HTTP RFC 7234 compliance

## Install and Usage

```shell
npm install cacheable-request
```

```js
import http from 'http';
import CacheableRequest from 'cacheable-request';

// Then instead of
const req = http.request('http://example.com', cb);
req.end();

// You can do
const cacheableRequest = new CacheableRequest(http.request).createCacheableRequest();
const cacheReq = cacheableRequest('http://example.com', cb);
cacheReq.on('request', req => req.end());
// Future requests to 'example.com' will be returned from cache if still valid

// You pass in any other http.request API compatible method to be wrapped with cache support:
const cacheableRequest = new CacheableRequest(https.request).createCacheableRequest();
const cacheableRequest = new CacheableRequest(electron.net).createCacheableRequest();
```

## Storage Adapters

`cacheable-request` uses [Keyv](https://github.com/jaredwray/keyv) to support a wide range of storage adapters.

For example, to use Redis as a cache backend, you just need to install the official Redis Keyv storage adapter:

```
npm install @keyv/redis
```

And then you can pass `CacheableRequest` your connection string:

```js
const cacheableRequest = new CacheableRequest(http.request, 'redis://user:pass@localhost:6379').createCacheableRequest();
```

[View all official Keyv storage adapters.](https://github.com/jaredwray/keyv#official-storage-adapters)

Keyv also supports anything that follows the Map API so it's easy to write your own storage adapter or use a third-party solution.

e.g The following are all valid storage adapters

```js
const storageAdapter = new Map();
// or
const storageAdapter = require('./my-storage-adapter');
// or
const QuickLRU = require('quick-lru');
const storageAdapter = new QuickLRU({ maxSize: 1000 });

const cacheableRequest = new CacheableRequest(http.request, storageAdapter).createCacheableRequest();
```

View the [Keyv docs](https://github.com/jaredwray/keyv) for more information on how to use storage adapters.

## API

### new cacheableRequest(request, [storageAdapter])

Returns the provided request function wrapped with cache support.

#### request

Type: `function`

Request function to wrap with cache support. Should be [`http.request`](https://nodejs.org/api/http.html#http_http_request_options_callback) or a similar API compatible request function.

#### storageAdapter

Type: `Keyv storage adapter`<br>
Default: `new Map()`

A [Keyv](https://github.com/jaredwray/keyv) storage adapter instance, or connection string if using with an official Keyv storage adapter.

### Instance

#### cacheableRequest(opts, [cb])

Returns an event emitter.

##### opts

Type: `object`, `string`

- Any of the default request functions options.
- Any [`http-cache-semantics`](https://github.com/kornelski/http-cache-semantics#constructor-options) options.
- Any of the following:

###### opts.cache

Type: `boolean`<br>
Default: `true`

If the cache should be used. Setting this to false will completely bypass the cache for the current request.

###### opts.strictTtl

Type: `boolean`<br>
Default: `false`

If set to `true` once a cached resource has expired it is deleted and will have to be re-requested.

If set to `false` (default), after a cached resource's TTL expires it is kept in the cache and will be revalidated on the next request with `If-None-Match`/`If-Modified-Since` headers.

###### opts.maxTtl

Type: `number`<br>
Default: `undefined`

Limits TTL. The `number` represents milliseconds.

###### opts.automaticFailover

Type: `boolean`<br>
Default: `false`

When set to `true`, if the DB connection fails we will automatically fallback to a network request. DB errors will still be emitted to notify you of the problem even though the request callback may succeed.

###### opts.forceRefresh

Type: `boolean`<br>
Default: `false`

Forces refreshing the cache. If the response could be retrieved from the cache, it will perform a new request and override the cache instead.

##### cb

Type: `function`

The callback function which will receive the response as an argument.

The response can be either a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage) or a [responselike object](https://github.com/lukechilds/responselike). The response will also have a `fromCache` property set with a boolean value.

##### .on('request', request)

`request` event to get the request object of the request.

**Note:** This event will only fire if an HTTP request is actually made, not when a response is retrieved from cache. However, you should always handle the `request` event to end the request and handle any potential request errors.

##### .on('response', response)

`response` event to get the response object from the HTTP request or cache.

##### .on('error', error)

`error` event emitted in case of an error with the cache.

Errors emitted here will be an instance of `CacheableRequest.RequestError` or `CacheableRequest.CacheError`. You will only ever receive a `RequestError` if the request function throws (normally caused by invalid user input). Normal request errors should be handled inside the `request` event.

To properly handle all error scenarios you should use the following pattern:

```js
cacheableRequest('example.com', cb)
  .on('error', err => {
    if (err instanceof CacheableRequest.CacheError) {
      handleCacheError(err); // Cache error
    } else if (err instanceof CacheableRequest.RequestError) {
      handleRequestError(err); // Request function thrown
    }
  })
  .on('request', req => {
    req.on('error', handleRequestError); // Request error emitted
    req.end();
  });
```
**Note:** Database connection errors are emitted here, however `cacheable-request` will attempt to re-request the resource and bypass the cache on a connection error. Therefore a database connection error doesn't necessarily mean the request won't be fulfilled.


## Using Hooks
Hooks have been implemented since version `v9` and are very useful to modify response before saving it in cache. You can use hooks to modify response before saving it in cache.

### Add Hooks

The hook will pre compute response right before saving it in cache. You can include many hooks and it will run in order you add hook on response object.

```js
import http from 'http';
import CacheableRequest from 'cacheable-request';

const cacheableRequest = new CacheableRequest(request, cache).request();

// adding a hook to decompress response
cacheableRequest.addHook('onResponse', async (value: CacheValue, response: any) => {
  const buffer = await pm(gunzip)(value.body);
  value.body = buffer.toString();
  return value;
});
```

here is also an example of how to add in the remote address

```js
import CacheableRequest, {CacheValue} from 'cacheable-request';

const cacheableRequest = new CacheableRequest(request, cache).request();
cacheableRequest.addHook('onResponse', (value: CacheValue, response: any) => {
  if (response.connection) {
    value.remoteAddress = response.connection.remoteAddress;
  }

  return value;
});
```

### Remove Hooks

You can also remove hook by using below

```js
CacheableRequest.removeHook('onResponse');
```

## How to Contribute

Cacheable-Request is an open source package and community driven that is maintained regularly. In addtion we have a couple of other guidelines for review:

* [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Our code of conduct
* [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute to this project
* [SECURITY.md](SECURITY.md) - Security guidelines and supported versions 

## Post an Issue

To post an issue, navigate to the "Issues" tab in the main repository, and then select "New Issue." Enter a clear title describing the issue, as well as a description containing additional relevant information. Also select the label that best describes your issue type. For a bug report, for example, create an issue with the label "bug." In the description field, Be sure to include replication steps, as well as any relevant error messages.

If you're reporting a security violation, be sure to check out the project's [security policy](SECURITY.md).

Please also refer to our [Code of Conduct](CODE_OF_CONDUCT.md) for more information on how to report issues.

## Ask a Question

To ask a question, create an issue with the label "question." In the issue description, include the related code and any context that can help us answer your question.

## License

This project is under the [MIT](LICENSE) license. 

MIT © Luke Childs 2017-2021 and Jared Wray 2022+
