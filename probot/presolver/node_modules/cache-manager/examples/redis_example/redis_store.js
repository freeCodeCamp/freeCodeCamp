/**
 * This is a very basic example of how you can implement your own Redis-based
 * cache store with connection pooling.
 */

var RedisPool = require('sol-redis-pool');

function redisStore(args) {
    args = args || {};
    var self = {};
    var ttlDefault = args.ttl;
    self.name = 'redis';

    var redisOptions = {
        host: args.host || '127.0.0.1',
        port: args.port || 6379
    };

    var pool = new RedisPool(redisOptions, {});

    function connect(cb) {
        pool.acquire(function(err, conn) {
            if (err) {
                pool.release(conn);
                return cb(err);
            }

            if (args.db || args.db === 0) {
                conn.select(args.db);
            }

            cb(null, conn);
        });
    }

    function handleResponse(conn, cb, opts) {
        opts = opts || {};

        return function(err, result) {
            pool.release(conn);

            if (err) { return cb(err); }

            if (opts.parse) {
                result = JSON.parse(result);
            }

            cb(null, result);
        };
    }

    self.get = function(key, options, cb) {
        if (typeof options === 'function') {
            cb = options;
        }

        connect(function(err, conn) {
            if (err) { return cb(err); }
            conn.get(key, handleResponse(conn, cb, {parse: true}));
        });
    };

    self.set = function(key, value, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        options = options || {};

        var ttl = (options.ttl || options.ttl === 0) ? options.ttl : ttlDefault;

        connect(function(err, conn) {
            if (err) { return cb(err); }
            var val = JSON.stringify(value);

            if (ttl) {
                conn.setex(key, ttl, val, handleResponse(conn, cb));
            } else {
                conn.set(key, val, handleResponse(conn, cb));
            }
        });
    };

    self.del = function(key, options, cb) {
        if (typeof options === 'function') {
            cb = options;
        }
        connect(function(err, conn) {
            if (err) { return cb(err); }
            conn.del(key, handleResponse(conn, cb));
        });
    };

    self.ttl = function(key, cb) {
        connect(function(err, conn) {
            if (err) { return cb(err); }
            conn.ttl(key, handleResponse(conn, cb));
        });
    };

    self.keys = function(pattern, cb) {
        if (typeof pattern === 'function') {
            cb = pattern;
            pattern = '*';
        }

        connect(function(err, conn) {
            if (err) { return cb(err); }
            conn.keys(pattern, handleResponse(conn, cb));
        });
    };

    self.isCacheableValue = function(value) {
        return value !== null && value !== undefined;
    };

    return self;
}

module.exports = {
    create: function(args) {
        return redisStore(args);
    }
};
