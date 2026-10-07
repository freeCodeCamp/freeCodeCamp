'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createConcurrentSafePromise", {
    enumerable: true,
    get: function() {
        return createConcurrentSafePromise;
    }
});
function createConcurrentSafePromise() {
    var basePromiseId = -1;
    var latestResolvedId = -1;
    var latestResolvedValue = undefined;
    return function runConcurrentSafePromise(promise) {
        var currentPromiseId = ++basePromiseId;
        return Promise.resolve(promise).then(function(x) {
            // The promise might take too long to resolve and get outdated. This would
            // result in resolving stale values.
            // When this happens, we ignore the promise value and return the one
            // coming from the latest resolved value.
            //
            // +----------------------------------+
            // |        100ms                     |
            // | run(1) +--->  R1                 |
            // |        300ms                     |
            // | run(2) +-------------> R2 (SKIP) |
            // |        200ms                     |
            // | run(3) +--------> R3             |
            // +----------------------------------+
            if (latestResolvedValue && currentPromiseId < latestResolvedId) {
                return latestResolvedValue;
            }
            latestResolvedId = currentPromiseId;
            latestResolvedValue = x;
            return x;
        });
    };
}
