var assert = require('assert');
// var support = require('../support');
var noneStore = require('../../lib/stores/none');

describe('none store', function() {
    var key = 'test-key';
    var value = 'test-value';
    var key2 = 'test-key-2';
    var value2 = 'test-value-2';

    describe('with callback', function() {
        var origPromise;
        var noneCache;

        beforeEach(function() {
            origPromise = global.Promise;
            delete global.Promise;
            noneCache = noneStore.create({noPromises: true});
        });

        afterEach(function() {
            global.Promise = origPromise;
        });

        it('set()', function(done) {
            assert.strictEqual(noneCache.set(key, value), undefined);
            noneCache.set(key, value, function(err) {
                assert.strictEqual(err, null);
                noneCache.set(key, value, {}, done);
            });
        });

        it('mset()', function(done) {
            assert.strictEqual(noneCache.mset(key, value), undefined);
            noneCache.mset(key, value, key2, value2, function(err) {
                assert.strictEqual(err, null);
                noneCache.mset(key, value, {}, done);
            });
        });

        it('get()', function(done) {
            assert.strictEqual(noneCache.get(key), undefined);
            noneCache.get(key2, function(err, result) {
                assert.strictEqual(err, null);
                assert.strictEqual(result, undefined);
                noneCache.get(key2, {}, done);
            });
        });

        it('mget()', function(done) {
            assert.deepEqual(noneCache.mget(key, key2), [undefined, undefined]);
            noneCache.mget(key, key2, function(err, result) {
                assert.strictEqual(err, null);
                assert.deepEqual(result, [undefined, undefined]);
                noneCache.mget(key, key2, key, {}, function(err, result) {
                    assert.strictEqual(err, null);
                    assert.deepEqual(result, [undefined, undefined, undefined]);
                    done();
                });
            });
        });

        it('del()', function(done) {
            assert.strictEqual(noneCache.del(), undefined);
            noneCache.del(function() {
                noneCache.del({}, done);
            });
        });

        it('reset()', function(done) {
            assert.strictEqual(noneCache.reset(), undefined);
            noneCache.reset(done);
        });

        it('keys()', function(done) {
            assert.deepEqual(noneCache.keys(), []);
            noneCache.keys(function(err, keys) {
                assert.deepEqual(keys, []);
                done();
            });
        });
    });

    describe('with promise', function() {
        var noneCache;

        beforeEach(function() {
            noneCache = noneStore.create({promiseDependency: global.Promise});
        });

        it('get() global promise', function(done) {
            noneStore.create()
                .get(key)
                .then(function(result) {
                    assert.strictEqual(result, undefined);
                    done();
                });
        });

        it('set()', function(done) {
            noneCache.set(key, value)
                .then(function(result) {
                    assert.equal(result, value);
                    done();
                });
        });

        it('mset()', function(done) {
            noneCache.mset(key, value, key2, value2)
                .then(function(result) {
                    assert.deepEqual(result, [value, value2]);
                    done();
                });
        });

        it('get()', function(done) {
            noneCache.get(key)
                .then(function(result) {
                    assert.strictEqual(result, undefined);
                    done();
                });
        });

        it('mget()', function(done) {
            noneCache.mget(key, key2)
                .then(function(result) {
                    assert.deepEqual(result, [undefined, undefined]);
                    done();
                });
        });

        it('del()', function(done) {
            noneCache.del(key).then(done);
        });

        it('reset()', function(done) {
            noneCache.reset().then(done);
        });

        it('keys()', function(done) {
            noneCache.keys()
                .then(function(result) {
                    assert.deepEqual(result, []);
                    done();
                });
        });
    });
});
