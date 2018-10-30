[![build status](https://secure.travis-ci.org/BryanDonovan/node-cache-manager.svg)](http://travis-ci.org/BryanDonovan/node-cache-manager)
[![Coverage Status](https://coveralls.io/repos/BryanDonovan/node-cache-manager/badge.svg?branch=master)](https://coveralls.io/r/BryanDonovan/node-cache-manager?branch=master)

node-cache-manager
======================

# Flexible NodeJS cache module

A cache module for nodejs that allows easy wrapping of functions in cache,
tiered caches, and a consistent interface.

## Features

* Easy way to wrap any function in cache.
* Tiered caches -- data gets stored in each cache and fetched from the highest
priority cache(s) first.
* Use any cache you want, as long as it has the same API.
* 100% test coverage via [mocha](https://github.com/visionmedia/mocha),
  [istanbul](https://github.com/yahoo/istanbul), and [sinon](http://sinonjs.org).


## Express.js Example

See the [Express.js cache-manager example app](https://github.com/BryanDonovan/node-cache-manager-express-example) to see how to use
``node-cache-manager`` in your applications.

## Installation

    npm install cache-manager

## Store Engines
* [node-cache-manager-redis](https://github.com/dial-once/node-cache-manager-redis) (uses [sol-redis-pool](https://github.com/joshuah/sol-redis-pool))

* [node-cache-manager-redis-store](https://github.com/dabroek/node-cache-manager-redis-store) (uses [node_redis](https://github.com/NodeRedis/node_redis))

* [node-cache-manager-ioredis](https://github.com/dabroek/node-cache-manager-ioredis) (uses [ioredis](https://github.com/luin/ioredis))

* [node-cache-manager-mongodb](https://github.com/v4l3r10/node-cache-manager-mongodb)

* [node-cache-manager-mongoose](https://github.com/disjunction/node-cache-manager-mongoose)

* [node-cache-manager-fs](https://github.com/hotelde/node-cache-manager-fs)

* [node-cache-manager-fs-binary](https://github.com/sheershoff/node-cache-manager-fs-binary)

* [node-cache-manager-fs-hash](https://github.com/rolandstarke/node-cache-manager-fs-hash)

* [node-cache-manager-hazelcast](https://github.com/marudor/node-cache-manager-hazelcast)

* [node-cache-manager-memcached-store](https://github.com/theogravity/node-cache-manager-memcached-store)

* [node-cache-manager-memory-store](https://github.com/theogravity/node-cache-manager-memory-store)

## Overview

**First**, it includes a `wrap` function that lets you wrap any function in cache.
(Note, this was inspired by [node-caching](https://github.com/mape/node-caching).)
This is probably the feature you're looking for.  As an example, where you might have to do this:

```javascript
function getCachedUser(id, cb) {
    memoryCache.get(id, function (err, result) {
        if (err) { return cb(err); }

        if (result) {
            return cb(null, result);
        }

        getUser(id, function (err, result) {
            if (err) { return cb(err); }
            memoryCache.set(id, result);
            cb(null, result);
        });
    });
}
```
... you can instead use the `wrap` function:

```javascript
function getCachedUser(id, cb) {
    memoryCache.wrap(id, function (cacheCallback) {
        getUser(id, cacheCallback);
    }, {ttl: ttl}, cb);
}
```

**Second**, node-cache-manager features a built-in memory cache (using [node-lru-cache](https://github.com/isaacs/node-lru-cache)),
with the standard functions you'd expect in most caches:

    set(key, val, {ttl: ttl}, cb) // * see note below
    get(key, cb)
    del(key, cb)
    mset(key1, val1, key2, val2, {ttl: ttl}, cb) // set several keys at once
    mget(key1, key2, key3, cb) // get several keys at once

    // * Note that depending on the underlying store, you may be able to pass the
    // ttl as the third param, like this:
    set(key, val, ttl, cb)
    // ... or pass no ttl at all:
    set(key, val, cb)

**Third**, node-cache-manager lets you set up a tiered cache strategy.  This may be of
limited use in most cases, but imagine a scenario where you expect tons of
traffic, and don't want to hit your primary cache (like Redis) for every request.
You decide to store the most commonly-requested data in an in-memory cache,
perhaps with a very short timeout and/or a small data size limit.  But you
still want to store the data in Redis for backup, and for the requests that
aren't as common as the ones you want to store in memory. This is something
node-cache-manager handles easily and transparently.


**Fourth**, it allows you to get and set multiple keys at once for caching store that support it. This means that when getting muliple keys it will go through the different caches starting from the highest priority one (see multi store below) and merge the values it finds at each level.

## Usage Examples

See examples below and in the examples directory.  See ``examples/redis_example`` for an example of how to implement a
Redis cache store with connection pooling.

### Single Store

```javascript
var cacheManager = require('cache-manager');
var memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10/*seconds*/});
var ttl = 5;
// Note: callback is optional in set() and del().

memoryCache.set('foo', 'bar', {ttl: ttl}, function(err) {
    if (err) { throw err; }

    memoryCache.get('foo', function(err, result) {
        console.log(result);
        // >> 'bar'
        memoryCache.del('foo', function(err) {});
    });
});

function getUser(id, cb) {
    setTimeout(function () {
        console.log("Returning user from slow database.");
        cb(null, {id: id, name: 'Bob'});
    }, 100);
}

var userId = 123;
var key = 'user_' + userId;

// Note: ttl is optional in wrap()
memoryCache.wrap(key, function (cb) {
    getUser(userId, cb);
}, {ttl: ttl}, function (err, user) {
    console.log(user);

    // Second time fetches user from memoryCache
    memoryCache.wrap(key, function (cb) {
        getUser(userId, cb);
    }, function (err, user) {
        console.log(user);
    });
});

// Outputs:
// Returning user from slow database.
// { id: 123, name: 'Bob' }
// { id: 123, name: 'Bob' }
```

The `ttl` can also be computed dynamically by passing in a function. E.g.,

```javascript
var opts = {
    ttl: function(user) {
        if (user.id === 1) {
            return 0.1;
        } else {
            return 0.5;
        }
    }
};

memoryCache.wrap(key, function(cb) {
    getUser(userId, cb);
}, opts, function(err, user) {
    console.log(user);
}
```

You can get several keys at once. E.g.

```js

var key1 = 'user_1';
var key2 = 'user_1';

memoryCache.wrap(key1, key2, function (cb) {
    getManyUser([key1, key2], cb);
}, function (err, users) {
    console.log(users[0]);
    console.log(users[1]);
});
```

#### Example setting/getting several keys with mset() and mget()

```js
memoryCache.mset('foo', 'bar', 'foo2', 'bar2' {ttl: ttl}, function(err) {
    if (err) { throw err; }

    memoryCache.mget('foo', 'foo2', function(err, result) {
        console.log(result);
        // >> ['bar', 'bar2']

        // Delete keys with del() passing arguments...
        memoryCache.del('foo', 'foo2', function(err) {});

        // ...passing an Array of keys
        memoryCache.del(['foo', 'foo2'], function(err) {});
    });
});

```

#### Example Using Promises

```javascript
memoryCache.wrap(key, function() {
    return getUserPromise(userId);
})
.then(function(user) {
    console.log('User:', user);
});
```

If you are using a Node version that does not include native promises, you can
specify your promise dependency in the options passed to the cache module.
E.g.,

```javascript

var Promise = require('es6-promise').Promise;
cache = caching({store: store, promiseDependency: Promise});

```

#### Example Using async/await

```javascript

try {
  let user = await memoryCache.wrap(key, function() {
    return getUserPromise(userId);
  });
} catch (err) {
  // error handling
}
```

Hint: should wrap `await` call with `try` - `catch` to handle `promise` error.


#### Example Express App Usage

(Also see the [Express.js cache-manager example app](https://github.com/BryanDonovan/node-cache-manager-express-example)).

```javascript
function respond(res, err, data) {
    if (err) {
        res.json(500, err);
    } else {
        res.json(200, data);
    }
}

app.get('/foo/bar', function(req, res) {
    var cacheKey = 'foo-bar:' + JSON.stringify(req.query);
    var ttl = 10;
    memoryCache.wrap(cacheKey, function(cacheCallback) {
        DB.find(req.query, cacheCallback);
    }, {ttl: ttl}, function(err, result) {
        respond(res, err, result);
    });
});
```

#### Custom Stores

You can use your own custom store by creating one with the same API as the
built-in memory stores (such as a redis or memcached store).  To use your own store just pass
in an instance of it.

E.g.,

```javascript
var myStore = require('your-homemade-store');
var cache = cacheManager.caching({store: myStore});
```

### Multi-Store

```javascript
var multiCache = cacheManager.multiCaching([memoryCache, someOtherCache]);
userId2 = 456;
key2 = 'user_' + userId;
ttl = 5;

// Sets in all caches.
// The "ttl" option can also be a function (see example below)
multiCache.set('foo2', 'bar2', {ttl: ttl}, function(err) {
    if (err) { throw err; }

    // Fetches from highest priority cache that has the key.
    multiCache.get('foo2', function(err, result) {
        console.log(result);
        // >> 'bar2'

        // Delete from all caches
        multiCache.del('foo2');
    });
});

// Set the ttl value by context depending on the store.
function getTTL(data, store) {
    if (store === 'redis') {
        return 6000;
    }
    return 3000;
}

// Sets multiple keys in all caches.
// You can pass as many key,value pair as you want
multiCache.mset('key', 'value', 'key2', 'value2', {ttl: getTTL}, function(err) {
    if (err) { throw err; }

    // mget() fetches from highest priority cache.
    // If the first cache does not return all the keys,
    // the next cache is fetched with the keys that were not found.
    // This is done recursively until either:
    // - all have been found
    // - all caches has been fetched
    multiCache.mget('key', 'key2', function(err, result) {
        console.log(result[0]);
        console.log(result[1]);
        // >> 'bar2'
        // >> 'bar3'

        // Delete from all caches
        multiCache.del('key', 'key2');
        // ...or with an Array
        multiCache.del(['key', 'key2']);
    });
});

// Note: options with ttl are optional in wrap()
multiCache.wrap(key2, function (cb) {
    getUser(userId2, cb);
}, {ttl: ttl}, function (err, user) {
    console.log(user);

    // Second time fetches user from memoryCache, since it's highest priority.
    // If the data expires in the memory cache, the next fetch would pull it from
    // the 'someOtherCache', and set the data in memory again.
    multiCache.wrap(key2, function (cb) {
        getUser(userId2, cb);
    }, function (err, user) {
        console.log(user);
    });
});

// Multiple keys
multiCache.wrap('key1', 'key2', function (cb) {
    getManyUser(['key1', 'key2'], cb);
}, {ttl: ttl}, function (err, users) {
    console.log(users[0]);
    console.log(users[1]);
});
```

### Specifying What to Cache in `wrap` Function

Both the `caching` and `multicaching` modules allow you to pass in a callback function named
`isCacheableValue` which is called by the `wrap` function with every value returned from cache or from the wrapped function.
This lets you specify which values should and should not be cached by `wrap`. If the function returns true, it will be
stored in cache. By default the caches cache everything except `undefined`.

NOTE: The `set` functions in `caching` and `multicaching` do *not* use `isCacheableValue`.

For example, if you don't want to cache `false` and `null`, you can pass in a function like this:

```javascript

var isCacheableValue = function(value) {
    return value !== null && value !== false && value !== undefined;
};

```

Then pass it to `caching` like this:

```javascript

var memoryCache = cacheManager.caching({store: 'memory', isCacheableValue: isCacheableValue});

```

And pass it to `multicaching` like this:

```javascript

var multiCache = cacheManager.multiCaching([memoryCache, someOtherCache], {
    isCacheableValue: isCacheableValue
});

```

## Docs

To generate JSDOC 3 documentation:

    make docs

## Tests

To run tests, first run:

    npm install -d

Run the tests and JShint:

    make


## Contribute

If you would like to contribute to the project, please fork it and send us a pull request.  Please add tests
for any new features or bug fixes.  Also run `make` before submitting the pull request.


## License

node-cache-manager is licensed under the MIT license.
