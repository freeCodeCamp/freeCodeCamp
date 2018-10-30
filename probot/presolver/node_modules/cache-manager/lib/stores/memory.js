var Lru = require("lru-cache");
var utils = require('../utils');
var isObject = utils.isObject;

var memoryStore = function(args) {
    args = args || {};
    var self = {};
    self.name = 'memory';
    var Promise = args.promiseDependency || global.Promise;
    self.usePromises = (typeof Promise === 'undefined' || args.noPromises) ? false : true;

    var ttl = args.ttl;
    var lruOpts = {
        max: args.max || 500,
        maxAge: (ttl || ttl === 0) ? ttl * 1000 : null,
        dispose: args.dispose,
        length: args.length,
        stale: args.stale
    };

    var lruCache = new Lru(lruOpts);

    var setMultipleKeys = function setMultipleKeys(keysValues, maxAge) {
        var length = keysValues.length;
        var values = [];
        for (var i = 0; i < length; i += 2) {
            lruCache.set(keysValues[i], keysValues[i + 1], maxAge);
            values.push(keysValues[i + 1]);
        }
        return values;
    };

    self.set = function(key, value, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        options = options || {};

        var maxAge = (options.ttl || options.ttl === 0) ? options.ttl * 1000 : lruOpts.maxAge;

        lruCache.set(key, value, maxAge);
        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve(value);
        }
    };

    self.mset = function() {
        var args = Array.prototype.slice.apply(arguments);
        var cb;
        var options = {};

        if (typeof args[args.length - 1] === 'function') {
            cb = args.pop();
        }

        if (args.length % 2 > 0 && isObject(args[args.length - 1])) {
            options = args.pop();
        }

        var maxAge = (options.ttl || options.ttl === 0) ? options.ttl * 1000 : lruOpts.maxAge;

        var values = setMultipleKeys(args, maxAge);

        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve(values);
        }
    };

    self.get = function(key, options, cb) {
        if (typeof options === 'function') {
            cb = options;
        }
        var value = lruCache.get(key);

        if (cb) {
            process.nextTick(cb.bind(null, null, value));
        } else if (self.usePromises) {
            return Promise.resolve(value);
        } else {
            return value;
        }
    };

    self.mget = function() {
        var args = Array.prototype.slice.apply(arguments);
        var cb;
        var options = {};

        if (typeof args[args.length - 1] === 'function') {
            cb = args.pop();
        }

        if (isObject(args[args.length - 1])) {
            options = args.pop();
        }

        var values = args.map(function(key) {
            return lruCache.get(key);
        });

        if (cb) {
            process.nextTick(cb.bind(null, null, values));
        } else if (self.usePromises) {
            return Promise.resolve(values);
        } else {
            return values;
        }
    };

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

        if (Array.isArray(args[0])) {
            args = args[0];
        }

        args.forEach(function(key) {
            lruCache.del(key);
        });

        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve();
        }
    };

    self.reset = function(cb) {
        lruCache.reset();
        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve();
        }
    };

    self.keys = function(cb) {
        var keys = lruCache.keys();
        if (cb) {
            process.nextTick(cb.bind(null, null, keys));
        } else if (self.usePromises) {
            return Promise.resolve(keys);
        } else {
            return keys;
        }
    };

    return self;
};

var methods = {
    create: function(args) {
        return memoryStore(args);
    }
};

module.exports = methods;
