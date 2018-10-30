// Setup:
// npm install redis@0.12.1 sol-redis-pool@0.2.0
// node examples/redis_example/example.js

var util = require('util');
var assert = require('assert');
var cacheManager = require('../../');
var redisStore = require('./redis_store');
// Note: ttl is in seconds
var redisCache = cacheManager.caching({store: redisStore, db: 0, ttl: 100});
var ttl = 60;

console.log("set/get/del example:");

redisCache.set('foo', 'bar', {ttl: ttl}, function(err) {
    if (err) { throw err; }

    redisCache.get('foo', function(err, result) {
        if (err) { throw err; }
        console.log("result fetched from cache: " + result);
        // >> 'bar'

        redisCache.ttl('foo', function(err, result) {
            if (err) { throw err; }
            assert.ok(result > 59 && result < 61);

            redisCache.del('foo', function(err) {
                if (err) { throw err; }
            });
        });
    });
});

// TTL defaults to what we passed into the caching function (100)
redisCache.set('foo-no-ttl', 'bar-no-ttl', function(err) {
    if (err) { throw err; }

    redisCache.get('foo-no-ttl', function(err, result) {
        if (err) { throw err; }
        console.log("result fetched from cache: " + result);
        // >> 'bar'

        redisCache.ttl('foo-no-ttl', function(err, result) {
            if (err) { throw err; }
            assert.ok(result > 99 && result < 101);

            redisCache.del('foo-no-ttl', function(err) {
                if (err) { throw err; }
            });
        });
    });
});

// Calls Redis 'set' instead of 'setex'
redisCache.set('foo-zero-ttl', 'bar-zero-ttl', {ttl: 0}, function(err) {
    if (err) { throw err; }

    redisCache.get('foo-zero-ttl', function(err, result) {
        if (err) { throw err; }
        console.log("result fetched from cache: " + result);
        // >> 'bar'

        redisCache.ttl('foo-zero-ttl', function(err, result) {
            if (err) { throw err; }
            assert.ok(result < 0);

            redisCache.del('foo-zero-ttl', function(err) {
                if (err) { throw err; }
            });
        });
    });
});

var userId = 123;

function createKey(id) {
    return 'user_' + id;
}

function getUser(id, cb) {
    setTimeout(function() {
        console.log("\n\nReturning user from slow database.");
        cb(null, {id: id, name: 'Bob'});
    }, 100);
}

function getUserFromCache(id, cb) {
    var key = createKey(id);
    redisCache.wrap(key, function(cacheCb) {
        getUser(userId, cacheCb);
    }, {ttl: ttl}, cb);
}

getUserFromCache(userId, function(err, user) {
    console.log(user);

    // Second time fetches user from redisCache
    getUserFromCache(userId, function(err, user) {
        console.log("user from second cache request:");
        console.log(user);

        redisCache.keys(function(err, keys) {
            console.log("keys: " + util.inspect(keys));

            var key = createKey(userId);
            redisCache.del(key, function(err) {
                if (err) { throw err; }
            });
        });
    });
});

// Outputs:
// { id: 123, name: 'Bob' }
// user from second cache request:
// { id: 123, name: 'Bob' }
// keys: [ 'user_123' ]

var redisCache2 = cacheManager.caching({store: redisStore, db: 1, ttl: 100});
var multiCache = cacheManager.multiCaching([redisCache, redisCache2]);
var userId2 = 456;
var key2 = 'user_' + userId;
var ttl2 = 50;

multiCache.wrap(key2, function(cb) {
    getUser(userId2, cb);
}, {ttl: ttl2}, function(err, user) {
    console.log("user: ", user);

    // Second time fetches user from redisCache, since it's highest priority.
    // If the data expires in the redisCache, the next fetch would pull it from
    // redisCache2, and set the data in redisCache again.
    multiCache.wrap(key2, function(cb) {
        getUser(userId2, cb);
    }, function(err, user) {
        console.log("user, second fetch:", user);
    });

    multiCache.getAndPassUp(key2, function(err, result) {
        console.log("\ngetAndPassUp result: ", result);

        multiCache.del(key2, function(err) {
            if (err) { throw err; }
            process.exit();
        });
    });
});
