var fs = require('fs');
var util = require('util');
var assert = require('assert');

var support = {
    random: {
        string: function(strLen) {
            strLen = strLen || 8;
            var chars = "abcdefghiklmnopqrstuvwxyz";
            var randomStr = '';
            for (var i = 0; i < strLen; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomStr += chars.substring(rnum, rnum + 1);
            }
            return randomStr;
        },

        number: function(max) {
            max = max || 1000;
            return Math.floor((Math.random() * max));
        }
    },

    checkErr: function(err) {
        if (err) {
            var msg;

            if (err instanceof Error) {
                msg = err;
            } else if (err.msg) {
                msg = err.msg;
            } else {
                msg = util.inspect(err);
            }

            var error = new Error(msg);
            throw error;
        }
    },

    assertBetween: function(actual, lower, upper) {
        assert.ok(actual >= lower, "Expected " + actual + " to be >= " + lower);
        assert.ok(actual <= upper, "Expected " + actual + " to be <= " + upper);
    },

    assertWithin: function(actual, expected, delta) {
        var lower = expected - delta;
        var upper = expected + delta;
        this.assertBetween(actual, lower, upper);
    },

    walkDir: function(dir, validationFunction, cb) {
        if (arguments.length === 2) {
            cb = validationFunction;
            validationFunction = null;
        }

        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) { return cb(err); }

            var pending = list.length;

            if (!pending) { return cb(null, results); }

            list.forEach(function(file) {
                file = dir + '/' + file;
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        support.walkDir(file, validationFunction, function(err, res) {
                            results = results.concat(res);
                            if (!--pending) { cb(null, results); }
                        });
                    } else {
                        if (typeof validationFunction === 'function') {
                            if (validationFunction(file)) {
                                results.push(file);
                            }
                        } else {
                            results.push(file);
                        }

                        if (!--pending) { cb(null, results); }
                    }
                });
            });
        });
    },

    testSetGetDel: function(cache, cb) {
        var key = 'TEST' + support.random.string();
        var val = support.random.string();

        cache.set(key, val, function(err) {
            if (err) { return cb(err); }

            cache.get(key, function(err, result) {
                if (err) { return cb(err); }
                assert.equal(result, val);

                cache.del(key, function(err) {
                    if (err) { return cb(err); }

                    cache.get(key, function(err, result) {
                        if (err) { return cb(err); }
                        assert.ok(!result);
                        cb();
                    });
                });
            });
        });
    }
};

module.exports = support;
