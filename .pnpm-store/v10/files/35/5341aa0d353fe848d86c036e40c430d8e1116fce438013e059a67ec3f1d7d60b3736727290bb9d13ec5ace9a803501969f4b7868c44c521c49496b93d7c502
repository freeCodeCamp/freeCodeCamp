/*eslint no-unused-vars:0*/
var utils = require('../utils');
var isObject = utils.isObject;

/**
 * Store that do nothing.
 * Can be used for development environment.
 */
var noneStore = function(args) {
    args = args || {};
    var Promise = args.promiseDependency || global.Promise;

    var self = {};
    self.name = 'none';
    self.usePromises = !((typeof Promise === 'undefined' || args.noPromises));

    self.set = function(key, value, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }

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

        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            var values = [];
            for (var i = 0; i < args.length; i += 2) {
                values.push(args[i + 1]);
            }
            return Promise.resolve(values);
        }
    };

    self.get = function(key, options, cb) {
        var value;
        if (typeof options === 'function') {
            cb = options;
        }

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

        var values = args.map(function() {
            return;
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

        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve();
        }
    };

    self.reset = function(cb) {
        if (cb) {
            process.nextTick(cb.bind(null, null));
        } else if (self.usePromises) {
            return Promise.resolve();
        }
    };

    self.keys = function(cb) {
        var keys = [];
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
        return noneStore(args);
    }
};

module.exports = methods;
