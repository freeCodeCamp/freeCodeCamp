'use strict';

// This is needed in order to work with RSC Suspense, perhaps they will later provide a wrapper.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "wrapPromiseWithState", {
    enumerable: true,
    get: function() {
        return wrapPromiseWithState;
    }
});
function isStatefulPromise(promise) {
    return 'status' in promise;
}
function wrapPromiseWithState(promise) {
    if (isStatefulPromise(promise)) {
        return promise;
    }
    var pendingPromise = promise;
    pendingPromise.status = 'pending';
    pendingPromise.then(function(value) {
        if (pendingPromise.status === 'pending') {
            var fulfilledPromise = pendingPromise;
            fulfilledPromise.status = 'fulfilled';
            fulfilledPromise.value = value;
        }
    }, function(reason) {
        if (pendingPromise.status === 'pending') {
            var rejectedPromise = pendingPromise;
            rejectedPromise.status = 'rejected';
            rejectedPromise.reason = reason;
        }
    });
    return promise;
}
