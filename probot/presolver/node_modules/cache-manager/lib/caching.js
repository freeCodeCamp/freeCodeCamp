/** @module cacheManager/caching */
/*jshint maxcomplexity:16*/
var CallbackFiller = require('./callback_filler');
var utils = require('./utils');
var parseWrapArguments = utils.parseWrapArguments;

/**
 * Generic caching interface that wraps any caching library with a compatible interface.
 *
 * @param {object} args
 * @param {object|string} args.store - The store must at least have `set` and a `get` functions.
 * @param {function} [args.isCacheableValue] - A callback function which is called
 *   with every value returned from cache or from a wrapped function. This lets you specify
 *   which values should and should not be cached. If the function returns true, it will be
 *   stored in cache. By default it caches everything except undefined.
 */
var caching = function(args) {
    args = args || {};
    var self = {};
    if (typeof args.store === 'object') {
        if (args.store.create) {
            self.store = args.store.create(args);
        } else {
            self.store = args.store;
        }
    } else {
        var storeName = args.store || 'memory';
        self.store = require('./stores/' + storeName).create(args);
    }

    // do we handle a cache error the same as a cache miss?
    self.ignoreCacheErrors = args.ignoreCacheErrors || false;

    var Promise = args.promiseDependency || global.Promise;

    var callbackFiller = new CallbackFiller();

    if (typeof args.isCacheableValue === 'function') {
        self._isCacheableValue = args.isCacheableValue;
    } else if (typeof self.store.isCacheableValue === 'function') {
        self._isCacheableValue = self.store.isCacheableValue.bind(self.store);
    } else {
        self._isCacheableValue = function(value) {
            return value !== undefined;
        };
    }

    function wrapPromise(key, promise, options) {
        return new Promise(function(resolve, reject) {
            self.wrap(key, function(cb) {
                Promise.resolve()
                    .then(promise)
                    .then(function(result) {
                        cb(null, result);
                        return null;
                    })
                    .catch(cb);
            }, options, function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    /**
     * Wraps a function in cache. I.e., the first time the function is run,
     * its results are stored in cache so subsequent calls retrieve from cache
     * instead of calling the function.
     * You can pass any number of keys as long as the wrapped function returns
     * an array with the same number of values and in the same order.
     *
     * @function
     * @name wrap
     *
     * @param {string} key - The cache key to use in cache operations. Can be one or many.
     * @param {function} work - The function to wrap
     * @param {object} [options] - options passed to `set` function
     * @param {function} cb
     *
     * @example
     * var key = 'user_' + userId;
     * cache.wrap(key, function(cb) {
     *     User.get(userId, cb);
     * }, function(err, user) {
     *     console.log(user);
     * });
     *
     * // Multiple keys
     * var key = 'user_' + userId;
     * var key2 = 'user_' + userId2;
     * cache.wrap(key, key2, function(cb) {
     *     User.getMany([userId, userId2], cb);
     * }, function(err, users) {
     *     console.log(users[0]);
     *     console.log(users[1]);
     * });
     */
    self.wrap = function() {
        var parsedArgs = parseWrapArguments(Array.prototype.slice.apply(arguments));
        var keys = parsedArgs.keys;
        var work = parsedArgs.work;
        var options = parsedArgs.options;
        var cb = parsedArgs.cb;

        if (!cb) {
            keys.push(work);
            keys.push(options);
            return wrapPromise.apply(this, keys);
        }

        if (keys.length > 1) {
            /**
             * Handle more than 1 key
             */
            return wrapMultiple(keys, work, options, cb);
        }

        var key = keys[0];

        var hasKey = callbackFiller.has(key);
        callbackFiller.add(key, {cb: cb});
        if (hasKey) { return; }

        self.store.get(key, options, function(err, result) {
            if (err && (!self.ignoreCacheErrors)) {
                callbackFiller.fill(key, err);
            } else if (self._isCacheableValue(result)) {
                callbackFiller.fill(key, null, result);
            } else {
                work(function(err, data) {
                    if (err) {
                        callbackFiller.fill(key, err);
                        return;
                    }

                    if (!self._isCacheableValue(data)) {
                        callbackFiller.fill(key, null, data);
                        return;
                    }

                    if (options && typeof options.ttl === 'function') {
                        options.ttl = options.ttl(data);
                    }

                    self.store.set(key, data, options, function(err) {
                        if (err && (!self.ignoreCacheErrors)) {
                            callbackFiller.fill(key, err);
                        } else {
                            callbackFiller.fill(key, null, data);
                        }
                    });
                });
            }
        });
    };

    function wrapMultiple(keys, work, options, cb) {
        /**
         * We create a unique key for the multiple keys
         * by concatenating them
         */
        var combinedKey = keys.reduce(function(acc, k) {
            return acc + k;
        }, '');

        var hasKey = callbackFiller.has(combinedKey);
        callbackFiller.add(combinedKey, {cb: cb});
        if (hasKey) { return; }

        keys.push(options);
        keys.push(onResult);

        self.store.mget.apply(self.store, keys);

        function onResult(err, result) {
            if (err && (!self.ignoreCacheErrors)) {
                return callbackFiller.fill(combinedKey, err);
            }

            /**
            * If all the values returned are cacheable we don't need
            * to call our "work" method and the values returned by the cache
            * are valid. If one or more of the values is not cacheable
            * the cache result is not valid.
            */
            var cacheOK = Array.isArray(result) && result.filter(function(_result) {
                return self._isCacheableValue(_result);
            }).length === result.length;

            if (cacheOK) {
                return callbackFiller.fill(combinedKey, null, result);
            }

            return work(function(err, data) {
                if (err) {
                    return done(err);
                }

                var _args = [];
                data.forEach(function(value, i) {
                    /**
                     * Add the {key, value} pair to the args
                     * array that we will send to mset()
                     */
                    if (self._isCacheableValue(value)) {
                        _args.push(keys[i]);
                        _args.push(value);
                    }
                });

                // If no key|value, exit
                if (_args.length === 0) {
                    return done(null);
                }

                if (options && typeof options.ttl === 'function') {
                    options.ttl = options.ttl(data);
                }

                _args.push(options);
                _args.push(done);

                self.store.mset.apply(self.store, _args);

                function done(err) {
                    if (err && (!self.ignoreCacheErrors)) {
                        callbackFiller.fill(combinedKey, err);
                    } else {
                        callbackFiller.fill(combinedKey, null, data);
                    }
                }
            });
        }
    }

    /**
     * Binds to the underlying store's `get` function.
     * @function
     * @name get
     */
    self.get = self.store.get.bind(self.store);

    /**
     * Get multiple keys at once.
     * Binds to the underlying store's `mget` function.
     * @function
     * @name mget
     */
    if (typeof self.store.mget === 'function') {
        self.mget = self.store.mget.bind(self.store);
    }

    /**
     * Binds to the underlying store's `set` function.
     * @function
     * @name set
     */
    self.set = self.store.set.bind(self.store);

    /**
     * Set multiple keys at once.
     * It accepts any number of {key, value} pair
     * Binds to the underlying store's `mset` function.
     * @function
     * @name mset
     */
    if (typeof self.store.mset === 'function') {
        self.mset = self.store.mset.bind(self.store);
    }

    /**
     * Binds to the underlying store's `del` function if it exists.
     * @function
     * @name del
     */
    if (typeof self.store.del === 'function') {
        self.del = self.store.del.bind(self.store);
    }

    /**
     * Binds to the underlying store's `setex` function if it exists.
     * @function
     * @name setex
     */
    if (typeof self.store.setex === 'function') {
        self.setex = self.store.setex.bind(self.store);
    }

    /**
     * Binds to the underlying store's `reset` function if it exists.
     * @function
     * @name reset
     */
    if (typeof self.store.reset === 'function') {
        self.reset = self.store.reset.bind(self.store);
    }

    /**
     * Binds to the underlying store's `keys` function if it exists.
     * @function
     * @name keys
     */
    if (typeof self.store.keys === 'function') {
        self.keys = self.store.keys.bind(self.store);
    }

    /**
     * Binds to the underlying store's `ttl` function if it exists.
     * @function
     * @name ttl
     */
    if (typeof self.store.ttl === 'function') {
        self.ttl = self.store.ttl.bind(self.store);
    }

    return self;
};

module.exports = caching;
