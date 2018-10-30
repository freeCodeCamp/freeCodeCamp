/*jshint unused:false*/
// Note: ttls are in seconds
var cacheManager = require('../');
var memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10});
var memoryCache2 = cacheManager.caching({store: 'memory', max: 100, ttl: 100});
var ttl; //Can't use a different ttl per set() call with memory cache

//
// Basic usage
//
memoryCache.set('foo', 'bar', function(err) {
    if (err) { throw err; }

    memoryCache.get('foo', function(err, result) {
        console.log(result);
        // >> 'bar'
        memoryCache.del('foo', function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
});

function getUser(id, cb) {
    setTimeout(function() {
        console.log("Fetching user from slow database.");
        cb(null, {id: id, name: 'Bob'});
    }, 100);
}

var userId = 123;
var key = 'user_' + userId;

//
// wrap() example
//

// Instead of manually managing the cache like this:
function getCachedUserManually(id, cb) {
    memoryCache.get(id, function(err, result) {
        if (err) { return cb(err); }

        if (result) {
            return cb(null, result);
        }

        getUser(id, function(err, result) {
            if (err) { return cb(err); }
            memoryCache.set(id, result);
            cb(null, result);
        });
    });
}

// ... you can instead use the `wrap` function:
function getCachedUser(id, cb) {
    memoryCache.wrap(id, function(cacheCallback) {
        getUser(id, cacheCallback);
    }, cb);
}

getCachedUser(userId, function(err, user) {
    // First time fetches the user from the (fake) database:
    console.log(user);

    getCachedUser(userId, function(err, user) {
        // Second time fetches from cache.
        console.log(user);
    });
});

// Outputs:
// Returning user from slow database.
// { id: 123, name: 'Bob' }
// { id: 123, name: 'Bob' }

// Same as above, but written differently:
memoryCache.wrap(key, function(cb) {
    getUser(userId, cb);
}, function(err, user) {
    console.log(user);

    // Second time fetches user from memoryCache
    memoryCache.wrap(key, function(cb) {
        getUser(userId, cb);
    }, function(err, user) {
        console.log(user);
    });
});

//
// multi-cache example
//
var multiCache = cacheManager.multiCaching([memoryCache, memoryCache2]);
var userId2 = 456;
var key2 = 'user_' + userId;
var ttl2; //Can't use a different ttl per set() call with memory cache

multiCache.wrap(key2, function(cb) {
    getUser(userId2, cb);
}, function(err, user) {
    console.log(user);

    // Second time fetches user from memoryCache, since it's highest priority.
    // If the data expires in memoryCache, the next fetch would pull it from
    // the memoryCache2, and set the data in memoryCache.
    multiCache.wrap(key2, function(cb) {
        getUser(userId2, cb);
    }, function(err, user) {
        console.log(user);
    });

    // Sets in all caches.
    multiCache.set('foo2', 'bar2', {ttl: ttl2}, function(err) {
        if (err) { throw err; }

        // Fetches from highest priority cache that has the key.
        multiCache.get('foo2', function(err, result) {
            console.log(result);
            // >> 'bar2'

            // Delete from all caches
            multiCache.del('foo2', function(err) {
                if (err) {
                    console.log(err);
                }
                process.exit();
            });
        });
    });
});
