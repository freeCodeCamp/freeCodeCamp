// TODO: These are really a mix of unit and integration tests.

var assert = require('assert');
var async = require('async');
var sinon = require('sinon');
var support = require('./support');
var checkErr = support.checkErr;
var caching = require('../index').caching;
var memoryStore = require('../lib/stores/memory');

var Promise = require('es6-promise').Promise;

var methods = {
    getWidget: function(name, cb) {
        process.nextTick(function() {
            cb(null, {name: name});
        });
    },
    getMultiWidget: function(names, cb) {
        process.nextTick(function() {
            cb(null, names.map(function(name) { return {name: name}; }));
        });
    },
};

describe("caching", function() {
    var cache;
    var key;
    var defaultTtl = 1;
    var name;
    var value;

    describe("get() and set()", function() {
        ['memory'].forEach(function(store) {
            context("using " + store + " store", function() {
                beforeEach(function() {
                    cache = caching({store: store, promiseDependency: Promise});
                    key = support.random.string(20);
                    value = support.random.string();
                });

                it("lets us set and get data in cache", function(done) {
                    cache.set(key, value, {ttl: defaultTtl}, function(err) {
                        checkErr(err);

                        cache.get(key, function(err, result) {
                            checkErr(err);
                            assert.equal(result, value);
                            done();
                        });
                    });
                });

                it("lets us set and get data without a callback", function(done) {
                    cache = caching({store: memoryStore.create({noPromises: true})});
                    cache.set(key, value, {ttl: defaultTtl});

                    setTimeout(function() {
                        var result = cache.get(key);
                        assert.equal(result, value);
                        done();
                    }, 20);
                });

                it("lets us set and get data without a callback, returning a promise", function(done) {
                    cache.set(key, value, {ttl: defaultTtl});
                    setTimeout(function() {
                        cache.get(key)
                        .then(function(result) {
                            assert.equal(result, value);
                            done();
                        });
                    }, 20);
                });

                it("lets us set and get data without options object or callback", function(done) {
                    cache = caching({store: memoryStore.create({noPromises: true})});
                    cache.set(key, value);

                    setTimeout(function() {
                        var result = cache.get(key);
                        assert.equal(result, value);
                        done();
                    }, 20);
                });
            });
        });
    });

    describe("mget() and mset()", function() {
        var key2;
        var value2;
        var store = 'memory';

        beforeEach(function() {
            key = support.random.string(20);
            value = support.random.string();
            key2 = support.random.string(20);
            value2 = support.random.string();

            cache = caching({store: store, ttl: defaultTtl, ignoreCacheErrors: false});
        });

        it("lets us set and get several keys and data in cache", function(done) {
            cache.mset(key, value, key2, value2, {ttl: defaultTtl}, function(err) {
                checkErr(err);

                cache.mget(key, key2, function(err, result) {
                    checkErr(err);
                    assert.equal(result[0], value);
                    assert.equal(result[1], value2);
                    done();
                });
            });
        });

        it("lets us set and get data without a callback", function(done) {
            cache = caching({store: memoryStore.create({noPromises: true})});
            cache.mset(key, value, key2, value2, {ttl: defaultTtl});

            setTimeout(function() {
                var result = cache.mget(key, key2);
                assert.equal(result[0], value);
                assert.equal(result[1], value2);
                done();
            }, 20);
        });

        it("lets us set and get data without a callback, returning a promise", function(done) {
            cache.mset(key, value, key2, value2, {ttl: defaultTtl});
            setTimeout(function() {
                cache.mget(key, key2)
                .then(function(result) {
                    assert.equal(result[0], value);
                    assert.equal(result[1], value2);
                    done();
                });
            }, 20);
        });

        it("lets us set and get data without options object or callback", function(done) {
            cache = caching({store: memoryStore.create({noPromises: true})});
            cache.mset(key, value, key2, value2);

            setTimeout(function() {
                var result = cache.mget(key, key2);
                assert.equal(result[0], value);
                assert.equal(result[1], value2);
                done();
            }, 20);
        });

        it("lets us pass an 'options' object", function(done) {
            cache = caching({store: memoryStore.create({noPromises: true})});
            cache.mset(key, value, key2, value2);

            setTimeout(function() {
                var result = cache.mget(key, key2, {someConfig: true});
                assert.equal(result[0], value);
                assert.equal(result[1], value2);
                done();
            }, 20);
        });
    });

    describe("del()", function() {
        ['memory'].forEach(function(store) {
            context("using " + store + " store", function() {
                beforeEach(function(done) {
                    cache = caching({store: store});
                    key = support.random.string(20);
                    value = support.random.string();
                    cache.set(key, value, {ttl: defaultTtl}, function(err) {
                        checkErr(err);
                        done();
                    });
                });

                it("deletes data from cache", function(done) {
                    cache.get(key, function(err, result) {
                        assert.equal(result, value);

                        cache.del(key, function(err) {
                            checkErr(err);

                            cache.get(key, function(err, result) {
                                assert.ok(!result);
                                done();
                            });
                        });
                    });
                });

                it("lets us delete data without a callback", function(done) {
                    cache.get(key, function(err, result) {
                        assert.equal(result, value);

                        cache.del(key);

                        setTimeout(function() {
                            cache.get(key, function(err, result) {
                                assert.ok(!result);
                                done();
                            });
                        }, 20);
                    });
                });

                it("lets us delete data using promises", function(done) {
                    key = support.random.string();
                    cache.set(key, value)
                    .then(function() {
                        return cache.get(key);
                    }).then(function(val) {
                        assert.equal(val, value);
                    }).then(function() {
                        return cache.del(key);
                    }).then(function() {
                        return cache.get(key);
                    }).then(function(val) {
                        assert.strictEqual(val, undefined);
                    }).then(done)
                    .catch(function(err) {
                        done(err);
                    });
                });

                describe('with multiple keys', function() {
                    var key2;
                    var value2;

                    beforeEach(function(done) {
                        cache = caching({store: store});
                        key2 = support.random.string(20);
                        value2 = support.random.string();
                        cache.mset(key, value, key2, value2, {ttl: defaultTtl}, function(err) {
                            checkErr(err);
                            done();
                        });
                    });

                    it('deletes an unlimited number of key arguments', function(done) {
                        cache.mget(key, key2, function(err, result) {
                            assert.equal(result[0], value);
                            assert.equal(result[1], value2);

                            cache.del(key, key2, function(err) {
                                checkErr(err);

                                cache.mget(key, key2, function(err, result) {
                                    assert.ok(!result[0]);
                                    assert.ok(!result[1]);
                                    done();
                                });
                            });
                        });
                    });

                    it('deletes an array of keys', function(done) {
                        cache.mget(key, key2, function(err, result) {
                            assert.equal(result[0], value);
                            assert.equal(result[1], value2);

                            cache.del([key, key2], function(err) {
                                checkErr(err);

                                cache.mget(key, key2, function(err, result) {
                                    assert.ok(!result[0]);
                                    assert.ok(!result[1]);
                                    done();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    describe("reset()", function() {
        var key2;
        var value2;

        beforeEach(function(done) {
            cache = caching({store: 'memory'});
            key = support.random.string(20);
            value = support.random.string();
            cache.set(key, value, function(err) {
                checkErr(err);

                key2 = support.random.string(20);
                value2 = support.random.string();

                cache.set(key2, value2, done);
            });
        });

        it("clears the cache", function(done) {
            cache.reset(function(err) {
                checkErr(err);

                cache.get(key, function(err, result) {
                    assert.ok(!result);

                    cache.get(key2, function(err, result) {
                        assert.ok(!result);
                        done();
                    });
                });
            });
        });

        it("lets us clear the cache without a callback (memory store only)", function(done) {
            cache.reset();
            setTimeout(function() {
                cache.get(key, function(err, result) {
                    assert.ok(!result);

                    cache.get(key2, function(err, result) {
                        assert.ok(!result);
                        done();
                    });
                });
            }, 10);
        });

        context("when store has no del(), mget() or mset() method", function() {
            var fakeStore;

            beforeEach(function() {
                fakeStore = {
                    get: function() {},
                    set: function() {},
                };
            });

            it("it doesn't throw an error", function() {
                assert.doesNotThrow(function() {
                    caching({store: fakeStore});
                });
            });
        });
    });

    describe("setex()", function() {
        var fakeStore;

        beforeEach(function() {
            fakeStore = {
                get: function() {},
                set: function() {},
                del: function() {},
                setex: function() {}
            };

            sinon.stub(fakeStore, 'setex');

            cache = caching({store: fakeStore});
        });

        it("passes the params to the underlying store's setex() method", function() {
            cache.setex('foo', 'bar', 'blah');
            assert.ok(fakeStore.setex.calledWith('foo', 'bar', 'blah'));
        });
    });

    describe("ttl()", function() {
        var fakeStore;

        beforeEach(function() {
            fakeStore = {
                get: function() {},
                set: function() {},
                del: function() {},
                ttl: function() {}
            };

            sinon.stub(fakeStore, 'ttl');

            cache = caching({store: fakeStore});
        });

        it("passes the params to the underlying store's ttl() method", function() {
            cache.ttl('foo');
            assert.ok(fakeStore.ttl.calledWith('foo'));
        });
    });

    describe("keys()", function() {
        var keyCount;
        var savedKeys;

        beforeEach(function(done) {
            keyCount = 10;
            savedKeys = [];
            var processed = 0;

            cache = caching({store: 'memory'});

            function isDone() {
                return processed === keyCount;
            }

            async.until(isDone, function(cb) {
                processed += 1;
                key = support.random.string(20);
                savedKeys.push(key);
                value = support.random.string();
                cache.set(key, value, cb);
            }, done);
        });

        it("calls back with all keys in cache", function(done) {
            cache.keys(function(err, keys) {
                checkErr(err);
                assert.deepEqual(keys.sort(), savedKeys.sort());
                done();
            });
        });

        it("lets us set and get data without a callback, returning a promise", function(done) {
            cache.keys()
            .then(function(keys) {
                assert.deepEqual(keys.sort(), savedKeys.sort());
                done();
            })
            .catch(function(err) {
                done(err);
            });
        });

        context("when not using promises", function() {
            beforeEach(function(done) {
                savedKeys = [];
                keyCount = 10;
                var processed = 0;

                cache = caching({store: memoryStore.create({noPromises: true})});

                function isDone() {
                    return processed === keyCount;
                }

                async.until(isDone, function(cb) {
                    processed += 1;
                    key = support.random.string(20);
                    savedKeys.push(key);
                    value = support.random.string();
                    cache.set(key, value, cb);
                }, done);
            });

            it("lets us get the keys without a callback (memory store only)", function() {
                var keys = cache.keys();
                assert.deepEqual(keys.sort(), savedKeys.sort());
            });
        });
    });

    describe("wrap()", function() {
        describe("using memory (lru-cache) store", function() {
            var memoryStoreStub;
            var opts;

            beforeEach(function() {
                opts = {ttl: 0.1};
                memoryStoreStub = memoryStore.create(opts);

                sinon.stub(memoryStore, 'create').returns(memoryStoreStub);

                cache = caching({store: 'memory', ttl: opts.ttl, ignoreCacheErrors: false});
                key = support.random.string(20);
                name = support.random.string();
            });

            afterEach(function() {
                memoryStore.create.restore();
            });

            context("calls back with the result of the wrapped function", function() {
                beforeEach(function() {
                    sinon.spy(memoryStoreStub, 'set');
                });

                afterEach(function() {
                    memoryStoreStub.set.restore();
                });

                it("when a ttl is passed in", function(done) {
                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, cb);
                    }, opts, function(err, widget) {
                        checkErr(err);
                        assert.deepEqual(widget, {name: name});
                        sinon.assert.calledWith(memoryStoreStub.set, key, {name: name}, opts);
                        done();
                    });
                });

                it("when a ttl is not passed in", function(done) {
                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, cb);
                    }, function(err, widget) {
                        checkErr(err);
                        assert.deepEqual(widget, {name: name});
                        sinon.assert.calledWith(memoryStoreStub.set, key, {name: name}, {});
                        done();
                    });
                });
            });

            context("ttl function", function() {
                beforeEach(function() {
                    sinon.spy(memoryStoreStub, 'set');
                });

                afterEach(function() {
                    memoryStoreStub.set.restore();
                });

                it("when a ttl function is passed in", function(done) {
                    opts = {
                        ttl: function(widget) {
                            assert.deepEqual(widget, {name: name});
                            return 0.2;
                        }
                    };
                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, cb);
                    }, opts, function(err, widget) {
                        checkErr(err);
                        assert.deepEqual(widget, {name: name});
                        sinon.assert.calledWith(memoryStoreStub.set, key, {name: name}, {ttl: 0.2});
                        done();
                    });
                });
            });

            context("when result is already cached", function() {
                function getCachedWidget(name, cb) {
                    cache.wrap(key, function(cacheCb) {
                        methods.getWidget(name, cacheCb);
                    }, opts, cb);
                }

                beforeEach(function(done) {
                    getCachedWidget(name, function(err, widget) {
                        checkErr(err);
                        assert.ok(widget);

                        memoryStoreStub.get(key, function(err, result) {
                            checkErr(err);
                            assert.ok(result);

                            sinon.spy(memoryStoreStub, 'get');

                            done();
                        });
                    });
                });

                afterEach(function() {
                    memoryStoreStub.get.restore();
                });

                it("retrieves data from cache", function(done) {
                    var funcCalled = false;

                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, function(err, result) {
                            funcCalled = true;
                            cb(err, result);
                        });
                    }, function(err, widget) {
                        checkErr(err);
                        assert.deepEqual(widget, {name: name});
                        assert.ok(memoryStoreStub.get.calledWith(key));
                        assert.ok(!funcCalled);
                        done();
                    });
                });
            });

            var falseyValues = [false, null, 0];

            falseyValues.forEach(function(falseyValue) {
                context("when cached value is `" + falseyValue + "`", function() {
                    function getFalseyValue(cb) {
                        process.nextTick(function() {
                            cb(null, falseyValue);
                        });
                    }

                    function getCachedFalseyValue(cb) {
                        cache.wrap(key, function(cacheCb) {
                            getFalseyValue(cacheCb);
                        }, cb);
                    }

                    beforeEach(function(done) {
                        getCachedFalseyValue(function(err, result) {
                            checkErr(err);
                            assert.strictEqual(result, falseyValue);

                            memoryStoreStub.get(key, function(err, result) {
                                checkErr(err);
                                assert.strictEqual(result, falseyValue);

                                sinon.spy(memoryStoreStub, 'get');

                                done();
                            });
                        });
                    });

                    afterEach(function() {
                        memoryStoreStub.get.restore();
                    });

                    it("retrieves data from cache", function(done) {
                        getCachedFalseyValue(function(err, value) {
                            checkErr(err);
                            assert.strictEqual(value, falseyValue);
                            assert.ok(memoryStoreStub.get.calledWith(key));
                            done();
                        });
                    });
                });
            });

            context("when we pass in an isCacheableValue function to the caching constructor", function() {
                var testCallbacks = {
                    isCacheableValue: function(value) {
                        return value !== 'do_not_store_this' && value !== undefined;
                    }
                };

                function getValue(name, cb) {
                    process.nextTick(function() {
                        if (name === 'foo') {
                            cb(null, 'store_this');
                        } else {
                            cb(null, 'do_not_store_this');
                        }
                    });
                }

                function getCachedValue(name, cb) {
                    cache.wrap(key, function(cacheCb) {
                        getValue(name, function(err, result) {
                            cacheCb(err, result);
                        });
                    }, {ttl: defaultTtl}, cb);
                }

                beforeEach(function() {
                    sinon.spy(testCallbacks, 'isCacheableValue');
                    cache = caching({store: 'memory', isCacheableValue: testCallbacks.isCacheableValue});
                    sinon.spy(memoryStoreStub, 'set');
                });

                afterEach(function() {
                    memoryStoreStub.set.restore();
                    testCallbacks.isCacheableValue.restore();
                });

                it("stores allowed values", function(done) {
                    var name = 'foo';

                    getCachedValue(name, function(err) {
                        checkErr(err);
                        assert.ok(memoryStoreStub.set.called);
                        assert.ok(testCallbacks.isCacheableValue.called);

                        getCachedValue(name, function(err) {
                            checkErr(err);
                            done();
                        });
                    });
                });

                it("does not store non-allowed values", function(done) {
                    var name = 'bar';

                    getCachedValue(name, function(err) {
                        checkErr(err);
                        assert.ok(memoryStoreStub.set.notCalled);
                        assert.ok(testCallbacks.isCacheableValue.called);
                        done();
                    });
                });
            });

            context("when callback called twice by client", function() {
                it("it does not throw an error", function(done) {
                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, cb);
                        methods.getWidget(name, cb);
                    }, opts, function(err, widget) {
                        checkErr(err);
                        assert.deepEqual(widget, {name: name});
                        setTimeout(done, 10);
                    });
                });
            });

            it("lets us make nested calls", function(done) {
                function getCachedWidget(name, cb) {
                    cache.wrap(key, function(cacheCb) {
                        methods.getWidget(name, cacheCb);
                    }, cb);
                }

                getCachedWidget(name, function(err, widget) {
                    checkErr(err);
                    assert.equal(widget.name, name);

                    getCachedWidget(name, function(err, widget) {
                        checkErr(err);
                        assert.equal(widget.name, name);

                        getCachedWidget(name, function(err, widget) {
                            checkErr(err);
                            assert.equal(widget.name, name);
                            done();
                        });
                    });
                });
            });

            it("expires cached result after ttl seconds", function(done) {
                var ttl = 0.1;

                cache.wrap(key, function(cb) {
                    methods.getWidget(name, cb);
                }, {ttl: ttl}, function(err, widget) {
                    checkErr(err);
                    assert.deepEqual(widget, {name: name});

                    memoryStoreStub.get(key, function(err, result) {
                        checkErr(err);
                        assert.ok(result);

                        var funcCalled = false;

                        setTimeout(function() {
                            cache.wrap(key, function(cb) {
                                methods.getWidget(name, function(err, result) {
                                    funcCalled = true;
                                    cb(err, result);
                                });
                            }, function(err, widget) {
                                checkErr(err);
                                assert.ok(funcCalled);
                                assert.deepEqual(widget, {name: name});
                                done();
                            });
                        }, (ttl * 1000 + 10));
                    });
                });
            });

            context("when an error is thrown in the work function", function() {
                var fakeError;

                beforeEach(function() {
                    fakeError = new Error(support.random.string());
                });

                it("does not catch the error", function(done) {
                    var originalExceptionHandler = process.listeners('uncaughtException').pop();
                    process.removeListener('uncaughtException', originalExceptionHandler);

                    process.once('uncaughtException', function(err) {
                        process.on('uncaughtException', originalExceptionHandler);
                        assert.ok(err);
                        done();
                    });

                    cache.wrap(key, function() {
                        throw fakeError;
                    }, function() {
                        done(new Error('Should not have caught error'));
                    });
                });
            });

            context("when store.get() calls back with an error", function() {
                context("and ignoreCacheErrors is not set (default is false)", function() {
                    it("bubbles up that error", function(done) {
                        var fakeError = new Error(support.random.string());

                        sinon.stub(memoryStoreStub, 'get', function(key, options, cb) {
                            cb(fakeError);
                        });

                        cache.wrap(key, function(cb) {
                            methods.getWidget(name, cb);
                        }, function(err) {
                            assert.equal(err, fakeError);
                            memoryStoreStub.get.restore();
                            done();
                        });
                    });
                });

                context("and ignoreCacheErrors is set to true", function() {
                    it("does not bubble up that error", function(done) {
                        cache = caching({store: 'memory', ttl: defaultTtl, ignoreCacheErrors: true});

                        var fakeError = new Error(support.random.string());

                        sinon.stub(memoryStoreStub, 'get', function(key, options, cb) {
                            cb(fakeError);
                        });

                        cache.wrap(key, function(cb) {
                            methods.getWidget(name, cb);
                        }, function(err) {
                            assert.equal(err, null);
                            memoryStoreStub.get.restore();
                            done();
                        });
                    });
                });
            });

            context("when store.set() calls back with an error", function() {
                context("and ignoreCacheErrors is not set", function() {
                    it("bubbles up that error", function(done) {
                        var fakeError = new Error(support.random.string());

                        sinon.stub(memoryStoreStub, 'set', function(key, val, ttl, cb) {
                            cb(fakeError);
                        });

                        cache.wrap(key, function(cb) {
                            methods.getWidget(name, cb);
                        }, function(err) {
                            assert.equal(err, fakeError);
                            memoryStoreStub.set.restore();
                            done();
                        });
                    });
                });

                context("and ignoreCacheErrors is set to true", function() {
                    it("does not bubbles up that error", function(done) {
                        cache = caching({store: 'memory', ttl: defaultTtl, ignoreCacheErrors: true});
                        var fakeError = new Error(support.random.string());

                        sinon.stub(memoryStoreStub, 'set').yields(fakeError);

                        cache.wrap(key, function(cb) {
                            methods.getWidget(name, cb);
                        }, function(err) {
                            assert.equal(err, null);
                            memoryStoreStub.set.restore();
                            done();
                        });
                    });
                });
            });

            context("when wrapped function calls back with an error", function() {
                it("calls back with that error", function(done) {
                    var fakeError = new Error(support.random.string());
                    sinon.stub(methods, 'getWidget', function(name, cb) {
                        cb(fakeError, {name: name});
                    });

                    cache.wrap(key, function(cb) {
                        methods.getWidget(name, cb);
                    }, function(err, widget) {
                        methods.getWidget.restore();
                        assert.equal(err, fakeError);
                        assert.ok(!widget);
                        done();
                    });
                });
            });

            context("when wrapped function returns a non cacheable value once", function() {
                it("second call to 'wrap' triggers the callback", function(done) {
                    var key = support.random.string();

                    // 1.
                    cache.wrap(key, function(cb) {
                        cb(null, undefined);
                    }, function(err, result) {
                        assert.equal(result, undefined);
                    });

                    // 2.
                    cache.wrap(key, function(cb) {
                        cb(null, undefined);
                    }, function(err, result) {
                        assert.equal(result, undefined);
                        done();
                    });
                });
            });

            context("when passing multiple keys", function() {
                var key2;
                var name2;

                beforeEach(function() {
                    key2 = support.random.string(20);
                    name2 = support.random.string();
                    sinon.spy(memoryStoreStub, 'mset');
                });

                afterEach(function() {
                    memoryStoreStub.mset.restore();
                });

                context("when result is already cached", function() {
                    it("retrieves data from cache", function(done) {
                        var funcCalled = false;
                        sinon.stub(memoryStoreStub, 'mget', function() {
                            var args = Array.prototype.slice.apply(arguments);
                            var cb = args.pop();
                            cb(null, [{name: name}, {name: name2}]);
                        });

                        cache.wrap(key, key2, function(cb) {
                            funcCalled = true;
                            cb();
                        }, function(err, widgets) {
                            checkErr(err);
                            assert.deepEqual(widgets[0], {name: name});
                            assert.deepEqual(widgets[1], {name: name2});
                            assert.ok(memoryStoreStub.mget.calledWith(key, key2));
                            assert.ok(!funcCalled);
                            memoryStoreStub.mget.restore();
                            done();
                        });
                    });
                });

                it("when a ttl is passed in", function(done) {
                    cache.wrap(key, key2, function(cb) {
                        methods.getMultiWidget([name, name2], cb);
                    }, opts, function(err, widgets) {
                        checkErr(err);
                        assert.deepEqual(widgets[0], {name: name});
                        assert.deepEqual(widgets[1], {name: name2});
                        sinon.assert.calledWith(memoryStoreStub.mset, key, {name: name}, key2, {name: name2}, opts);
                        done();
                    });
                });

                it("when a ttl is passed in (function)", function(done) {
                    var ttlFunc = function() { return 1234; };
                    opts = {ttl: ttlFunc};

                    cache.wrap(key, key2, function(cb) {
                        methods.getMultiWidget([name, name2], cb);
                    }, opts, function(err) {
                        checkErr(err);
                        sinon.assert.calledWith(
                            memoryStoreStub.mset, key, {name: name}, key2, {name: name2}, {ttl: 1234}
                        );
                        done();
                    });
                });

                it("when a ttl is not passed in", function(done) {
                    cache.wrap(key, key2, function(cb) {
                        methods.getMultiWidget([name, name2], cb);
                    }, function(err, widgets) {
                        checkErr(err);
                        assert.deepEqual(widgets[0], {name: name});
                        assert.deepEqual(widgets[1], {name: name2});
                        sinon.assert.calledWith(memoryStoreStub.mset, key, {name: name}, key2, {name: name2}, {});
                        done();
                    });
                });

                it("does not store non-allowed values", function(done) {
                    var name = 'bar';

                    cache = caching({store: 'memory', isCacheableValue: function() { return false; }});
                    cache.wrap(key, key2, function(cb) {
                        methods.getMultiWidget([name, name2], cb);
                    }, function(err) {
                        checkErr(err);
                        assert.ok(memoryStoreStub.mset.notCalled);
                        done();
                    });
                });

                context("when store.mget() calls back with an error", function() {
                    context("and ignoreCacheErrors is not set (default is false)", function() {
                        it("bubbles up that error", function(done) {
                            var fakeError = new Error(support.random.string());

                            sinon.stub(memoryStoreStub, 'mget', function() {
                                var args = Array.prototype.slice.apply(arguments);
                                var cb = args.pop();
                                cb(fakeError);
                            });

                            cache.wrap(key, key2, function(cb) {
                                methods.getMultiWidget([name, name2], cb);
                            }, function(err) {
                                assert.equal(err, fakeError);
                                memoryStoreStub.mget.restore();
                                done();
                            });
                        });
                    });

                    context("and ignoreCacheErrors is set to true", function() {
                        it("does not bubble up that error", function(done) {
                            cache = caching({store: 'memory', ttl: defaultTtl, ignoreCacheErrors: true});

                            var fakeError = new Error(support.random.string());

                            sinon.stub(memoryStoreStub, 'mget', function() {
                                var args = Array.prototype.slice.apply(arguments);
                                var cb = args.pop();
                                cb(fakeError);
                            });

                            cache.wrap(key, key2, function(cb) {
                                methods.getMultiWidget([name, name2], cb);
                            }, function(err) {
                                assert.equal(err, null);
                                memoryStoreStub.mget.restore();
                                done();
                            });
                        });
                    });
                });

                context("when an error is thrown in the work function", function() {
                    var fakeError;

                    beforeEach(function() {
                        fakeError = new Error(support.random.string());
                    });

                    it("does catch the error ", function(done) {
                        cache = caching({store: 'memory', ttl: defaultTtl, ignoreCacheErrors: false});

                        cache.wrap(key, key2, function(cb) {
                            return cb(fakeError);
                        }, function(err) {
                            assert.equal(err, fakeError);
                            done();
                        });
                    });
                });
            });
        });

        describe("when called multiple times in parallel with same key", function() {
            var construct;
            var constructMultiple;

            beforeEach(function() {
                cache = caching({
                    store: 'memory',
                    max: 50,
                    ttl: 5 * 60
                });

                construct = sinon.spy(function(val, cb) {
                    var timeout = support.random.number(100);
                    setTimeout(function() {
                        cb(null, 'value');
                    }, timeout);
                });

                constructMultiple = sinon.spy(function(val, cb) {
                    var timeout = support.random.number(100);
                    setTimeout(function() {
                        cb(null, ['value', 'value2']);
                    }, timeout);
                });
            });

            it("calls the wrapped function once", function(done) {
                var values = [];
                for (var i = 0; i < 2; i++) {
                    values.push(i);
                }

                async.each(values, function(val, next) {
                    cache.wrap('key', function(cb) {
                        construct(val, cb);
                    }, function(err, result) {
                        assert.equal(result, 'value');
                        next(err);
                    });
                }, function(err) {
                    checkErr(err);
                    assert.equal(construct.callCount, 1);
                    done();
                });
            });

            it("calls the multiWrapped function once", function(done) {
                var values = [];
                for (var i = 0; i < 2; i++) {
                    values.push(i);
                }

                async.each(values, function(val, next) {
                    cache.wrap('key', 'key2', function(cb) {
                        constructMultiple(val, cb);
                    }, function(err, results) {
                        assert.equal(results[0], 'value');
                        assert.equal(results[1], 'value2');
                        next(err);
                    });
                }, function(err) {
                    checkErr(err);
                    assert.equal(constructMultiple.callCount, 1);
                    done();
                });
            });
        });

        describe("using native promises", function() {
            beforeEach(function() {
                cache = caching({
                    store: 'memory',
                    max: 50,
                    ttl: 5 * 60
                });
            });

            it("should be able to chain with simple promise", function(done) {
                cache.wrap('key', function() {
                    return 'OK';
                })
                .then(function(res) {
                    assert.equal(res, 'OK');
                    done();
                });
            });

            it("should be able to chain with cache function as a promise", function(done) {
                cache.wrap('key', function() {
                    return new Promise(function(resolve) {
                        resolve('OK');
                    });
                })
                .then(function(res) {
                    assert.equal(res, 'OK');
                    done();
                });
            });

            it("should be able to catch errors in cache function as a promise", function(done) {
                cache.wrap('key', function() {
                    return new Promise(function(resolve, reject) {
                        reject('NOK');
                    });
                })
                .then(function() {
                    done(new Error('It should not call then since there is an error in the cache function!'));
                })
                .catch(function() {
                    done();
                });
            });

            it("should be able to chain with non-cacheable value", function(done) {
                cache.wrap('key', function() {
                    return;
                })
                .then(function(res) {
                    assert.equal(res, undefined);
                    done();
                });
            });
        });
    });

    describe("instantiating with no store passed in", function() {
        it("defaults to 'memory' store", function() {
            var cache = caching();
            assert.equal(cache.store.name, 'memory');
        });
    });

    describe("instantiating with custom store", function() {
        it("allows us to pass in our own store object", function(done) {
            var store = memoryStore.create({ttl: defaultTtl});
            cache = caching({store: store});
            cache.set(key, value, function(err) {
                checkErr(err);
                cache.get(key, function(err, result) {
                    assert.equal(result, value);
                    done();
                });
            });
        });

        it("allows us to pass in a module (uninstantiated)", function(done) {
            var store = memoryStore;
            cache = caching({store: store});
            cache.set(key, value, {ttl: defaultTtl}, function(err) {
                checkErr(err);
                cache.get(key, function(err, result) {
                    assert.equal(result, value);
                    done();
                });
            });
        });
    });

    describe("overloading with custom store", function() {
        it("allows us to override isCacheableValue", function(done) {
            var store = memoryStore.create({ttl: defaultTtl});
            var onlyOne = true;
            store.isCacheableValue = function(result) {
                if (onlyOne) {
                    onlyOne = false;
                    done();
                }
                return result !== undefined;
            };
            cache = caching({store: store});
            cache.wrap(key, function(cb) {
                methods.getWidget(name, cb);
            }, function(err, widget) {
                checkErr(err);
                assert.deepEqual(widget, {name: name});
            });
        });
    });

    describe("when using store's isCacheableValue method", function() {
        it("should not break its' context", function() {
            var store = {
                isCacheableValue: function() {
                    if (this !== store) {
                        throw new Error("Broken store context");
                    }
                },
                get: function() {},
                set: function() {},
            };

            cache = caching({store: store});

            assert.doesNotThrow(cache._isCacheableValue);
        });
    });
});
