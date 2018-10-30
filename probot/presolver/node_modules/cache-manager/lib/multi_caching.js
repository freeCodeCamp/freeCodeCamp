/** @module cacheManager/multiCaching */
var async = require('async');
var CallbackFiller = require('./callback_filler');
var utils = require('./utils');
var isObject = utils.isObject;
var parseWrapArguments = utils.parseWrapArguments;

/**
 * Module that lets you specify a hierarchy of caches.
 *
 * @param {array} caches - Array of caching objects.
 * @param {object} [options]
 * @param {function} [options.isCacheableValue] - A callback function which is called
 *   with every value returned from cache or from a wrapped function. This lets you specify
 *   which values should and should not be cached. If the function returns true, it will be
 *   stored in cache. By default it caches everything except undefined.
 *
 *   If an underlying cache specifies its own isCacheableValue function, that function will
 *   be used instead of the multiCaching's _isCacheableValue function.
 */
var multiCaching = function(caches, options) {
    var self = {};
    options = options || {};

    var Promise = options.promiseDependency || global.Promise;

    if (!Array.isArray(caches)) {
        throw new Error('multiCaching requires an array of caches');
    }

    var callbackFiller = new CallbackFiller();

    if (typeof options.isCacheableValue === 'function') {
        self._isCacheableValue = options.isCacheableValue;
    } else {
        self._isCacheableValue = function(value) {
            return value !== undefined;
        };
    }

    /**
     * If the underlying cache specifies its own isCacheableValue function (such
     * as how node-cache-manager-redis does), use that function, otherwise use
     * self._isCacheableValue function.
     */
    function getIsCacheableValueFunction(cache) {
        if (cache.store && typeof cache.store.isCacheableValue === 'function') {
            return cache.store.isCacheableValue;
        } else {
            return self._isCacheableValue;
        }
    }

    function getFromHighestPriorityCachePromise() {
        var args = Array.prototype.slice.apply(arguments).filter(function(v) {
            return typeof v !== 'undefined';
        });

        return new Promise(function(resolve, reject) {
            var cb = function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            };
            args.push(cb);
            getFromHighestPriorityCache.apply(null, args);
        });
    }

    function getFromHighestPriorityCache() {
        var args = Array.prototype.slice.apply(arguments).filter(function(v) {
            return typeof v !== 'undefined';
        });
        var cb;
        var options = {};

        if (typeof args[args.length - 1] === 'function') {
            cb = args.pop();
        }

        if (!cb) {
            return getFromHighestPriorityCachePromise.apply(this, args);
        }

        if (isObject(args[args.length - 1])) {
            options = args.pop();
        }

        /**
         * Keep a copy of the keys to retrieve
         */
        var keys = Array.prototype.slice.apply(args);
        var multi = keys.length > 1;

        /**
         * Then put back the options in the args Array
         */
        args.push(options);

        if (multi) {
            /**
             * Keep track of the keys left to fetch accross the caches
             */
            var keysToFetch = Array.prototype.slice.apply(keys);

            /**
             * Hash to save our multi keys result
             */
            var mapResult = {};
        }

        var i = 0;
        async.eachSeries(caches, function(cache, next) {
            var callback = function(err, result) {
                if (err) {
                    return next(err);
                }

                var _isCacheableValue = getIsCacheableValueFunction(cache);

                if (multi) {
                    addResultToMap(result, _isCacheableValue);

                    if (keysToFetch.length === 0 || i === caches.length - 1) {
                        // Return an Array with the values merged from all the caches
                        return cb(null, keys.map(function(k) {
                            return mapResult[k] || undefined;
                        }), i);
                    }
                } else if (_isCacheableValue(result)) {
                    // break out of async loop.
                    return cb(err, result, i);
                }

                i += 1;
                next();
            };

            if (multi) {
                if (typeof cache.store.mget !== 'function') {
                    /**
                     * Silently fail for store that don't support mget()
                     */
                    return callback(null, []);
                }
                var _args = Array.prototype.slice.apply(keysToFetch);
                _args.push(options);
                _args.push(callback);
                cache.store.mget.apply(cache.store, _args);
            } else {
                cache.store.get(args[0], options, callback);
            }
        }, function(err, result) {
            return cb(err, result);
        });

        function addResultToMap(result, isCacheable) {
            var key;
            var diff = 0;

            /**
             * We loop through the result and if the value
             * is cacheable we add it to the mapResult hash
             * and remove the key to fetch from the "keysToFetch" array
             */
            result.forEach(function(res, i) {
                if (isCacheable(res)) {
                    key = keysToFetch[i - diff];

                    // Add the result to our map
                    mapResult[key] = res;

                    // delete key from our keysToFetch array
                    keysToFetch.splice(i - diff, 1);
                    diff += 1;
                }
            });
        }
    }

    function setInMultipleCachesPromise() {
        var args = Array.prototype.slice.apply(arguments);

        return new Promise(function(resolve, reject) {
            var cb = function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            };
            args.push(cb);
            setInMultipleCaches.apply(null, args);
        });
    }

    function setInMultipleCaches() {
        var args = Array.prototype.slice.apply(arguments);
        var _caches = Array.isArray(args[0]) ? args.shift() : caches;

        var cb;
        var options = {};

        if (typeof args[args.length - 1] === 'function') {
            cb = args.pop();
        }

        if (!cb) {
            return setInMultipleCachesPromise.apply(this, args);
        }

        if (args.length % 2 > 0 && isObject(args[args.length - 1])) {
            options = args.pop();
        }

        var length = args.length;
        var multi = length > 2;
        var i;

        async.each(_caches, function(cache, next) {
            var _isCacheableValue = getIsCacheableValueFunction(cache);
            var keysValues = Array.prototype.slice.apply(args);

            /**
             * We filter out the keys *not* cacheable
             */
            for (i = 0; i < length; i += 2) {
                if (!_isCacheableValue(keysValues[i + 1])) {
                    keysValues.splice(i, 2);
                }
            }

            if (keysValues.length === 0) {
                return next();
            }

            var cacheOptions = options;
            if (typeof options.ttl === 'function') {
                /**
                 * Dynamically set the ttl by context depending of the store
                 */
                cacheOptions = {};
                cacheOptions.ttl = options.ttl(keysValues, cache.store.name);
            }

            if (multi) {
                if (typeof cache.store.mset !== 'function') {
                    /**
                     * Silently fail for store that don't support mset()
                     */
                    return next();
                }
                keysValues.push(cacheOptions);
                keysValues.push(next);

                cache.store.mset.apply(cache.store, keysValues);
            } else {
                cache.store.set(keysValues[0], keysValues[1], cacheOptions, next);
            }
        }, function(err, result) {
            cb(err, result);
        });
    }

    function getAndPassUpPromise(key) {
        return new Promise(function(resolve, reject) {
            self.getAndPassUp(key, function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    /**
     * Looks for an item in cache tiers.
     * When a key is found in a lower cache, all higher levels are updated.
     *
     * @param {string} key
     * @param {function} cb
     */
    self.getAndPassUp = function(key, cb) {
        if (!cb) {
            return getAndPassUpPromise(key);
        }

        getFromHighestPriorityCache(key, function(err, result, index) {
            if (err) {
                return cb(err);
            }

            if (index) {
                var cachesToUpdate = caches.slice(0, index);
                async.each(cachesToUpdate, function(cache, next) {
                    var _isCacheableValue = getIsCacheableValueFunction(cache);
                    if (_isCacheableValue(result)) {
                        // We rely on the cache module's default TTL
                        cache.set(key, result, next);
                    }
                });
            }

            return cb(err, result);
        });
    };

    function wrapPromise(key, promise, options) {
        return new Promise(function(resolve, reject) {
            self.wrap(key, function(cb) {
                Promise.resolve()
                .then(promise)
                .then(function(result) {
                    cb(null, result);
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
     * Wraps a function in one or more caches.
     * Has same API as regular caching module.
     *
     * If a key doesn't exist in any cache, it gets set in all caches.
     * If a key exists in a high-priority (e.g., first) cache, it gets returned immediately
     * without getting set in other lower-priority caches.
     * If a key doesn't exist in a higher-priority cache but exists in a lower-priority
     * cache, it gets set in all higher-priority caches.
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

        getFromHighestPriorityCache(key, function(err, result, index) {
            if (err) {
                return callbackFiller.fill(key, err);
            } else if (self._isCacheableValue(result)) {
                var cachesToUpdate = caches.slice(0, index);
                var args = [cachesToUpdate, key, result, options, function(err) {
                    callbackFiller.fill(key, err, result);
                }];

                setInMultipleCaches.apply(null, args);
            } else {
                work(function(err, data) {
                    if (err) {
                        return callbackFiller.fill(key, err);
                    }

                    if (!self._isCacheableValue(data)) {
                        return callbackFiller.fill(key, err, data);
                    }

                    var args = [caches, key, data, options, function(err) {
                        callbackFiller.fill(key, err, data);
                    }];

                    setInMultipleCaches.apply(null, args);
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

        /**
         * Get from all the caches. If multiple keys have been passed,
         * we'll go through all the caches and merge the result
         */
        getFromHighestPriorityCache.apply(this, keys);

        function onResult(err, result, index) {
            if (err) {
                return done(err);
            }

            /**
             * If all the values returned are cacheable we don't need
             * to call our "work" method and the values returned by the cache
             * are valid. If one or more of the values is not cacheable
             * the cache result is not valid.
             */
            var cacheOK = result.filter(function(_result) {
                return self._isCacheableValue(_result);
            }).length === result.length;

            if (!cacheOK) {
                /**
                 * We need to fetch the data first
                 */
                return work(workCallback);
            }

            var cachesToUpdate = caches.slice(0, index);

            /**
             * Prepare arguments to set the values in
             * higher priority caches
             */
            var _args = [cachesToUpdate];

            /**
             * Add the {key, value} pair
             */
            result.forEach(function(value, i) {
                _args.push(keys[i]);
                _args.push(value);
            });

            /**
             * Add options and final callback
             */
            _args.push(options);
            _args.push(function(err) {
                done(err, result);
            });

            return setInMultipleCaches.apply(null, _args);

            /**
             * Wrapped function callback
             */
            function workCallback(err, data) {
                if (err) {
                    return done(err);
                }

                /**
                 * Prepare arguments for "setInMultipleCaches"
                 */
                var _args;

                _args = [];
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
                // If no key,value --> exit
                if (_args.length === 0) {
                    return done(null);
                }

                /**
                 * Add options and final callback
                 */
                _args.push(options);
                _args.push(function(err) {
                    done(err, data);
                });

                setInMultipleCaches.apply(null, _args);
            }

            /**
             * Final callback
             */
            function done(err, data) {
                callbackFiller.fill(combinedKey, err, data);
            }
        }
    }

    /**
     * Set value in all caches
     *
     * @function
     * @name set
     *
     * @param {string} key
     * @param {*} value
     * @param {object} [options] to pass to underlying set function.
     * @param {function} [cb]
     */
    self.set = setInMultipleCaches;

    /**
     * Set multiple values in all caches
     * Accepts an unlimited pair of {key, value}
     *
     * @function
     * @name mset
     *
     * @param {string} key
     * @param {*} value
     * @param {string} [key2]
     * @param {*} [value2]
     * @param {object} [options] to pass to underlying set function.
     * @param {function} [cb]
     */
    self.mset = setInMultipleCaches;

    /**
     * Get value from highest level cache that has stored it.
     *
     * @function
     * @name get
     *
     * @param {string} key
     * @param {object} [options] to pass to underlying get function.
     * @param {function} cb
     */
    self.get = getFromHighestPriorityCache;

    /**
     * Get multiple value from highest level cache that has stored it.
     * If some values are not found, the next highest cache is used
     * until either all keys are found or all caches have been fetched.
     * Accepts an unlimited number of keys.
     *
     * @function
     * @name mget
     *
     * @param {string} key key to get (any number)
     * @param {object} [options] to pass to underlying get function.
     * @param {function} cb optional callback
     */
    self.mget = getFromHighestPriorityCache;

    /**
     * Delete value from all caches.
     *
     * @function
     * @name del
     *
     * @param {string} key
     * @param {object} [options] to pass to underlying del function.
     * @param {function} cb
     */
    self.del = function() {
        var args = Array.prototype.slice.apply(arguments);
        var cb;
        var options = {};

        if (typeof args[args.length - 1] === 'function') {
            cb = args.pop();
        }

        if (isObject(args[args.length - 1])) {
            options = args.pop();
        }

        args.push(options);
        async.each(caches, function(cache, next) {
            var _args = Array.prototype.slice.apply(args);
            _args.push(next);
            cache.store.del.apply(cache.store, _args);
        }, cb);
    };

    /**
     * Reset all caches.
     *
     * @function
     * @name reset
     *
     * @param {function} cb
     */
    self.reset = function(cb) {
        async.each(caches, function(cache, next) {
            cache.store.reset(next);
        }, cb);
    };

    return self;
};

module.exports = multiCaching;
