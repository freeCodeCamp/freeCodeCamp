var assert = require('assert');
var support = require('../support');
var memoryStore = require('../../lib/stores/memory');

describe("memory store", function() {
    describe("instantiating", function() {
        it("lets us pass in no args", function(done) {
            var memoryCache = memoryStore.create();
            support.testSetGetDel(memoryCache, done);
        });
    });

    describe("set()", function() {
        var memoryCache;
        var origPromise;

        beforeEach(function() {
            origPromise = global.Promise;
            delete global.Promise;
            memoryCache = memoryStore.create({noPromises: true});
        });

        afterEach(function() {
            global.Promise = origPromise;
        });

        // This test should pass in node v0.10.x:
        it("does not require a callback or use of Promises", function(done) {
            memoryCache.set('foo', 'bar');

            setTimeout(function() {
                assert.equal(memoryCache.get('foo'), 'bar');
                done();
            }, 10);
        });
    });
});
