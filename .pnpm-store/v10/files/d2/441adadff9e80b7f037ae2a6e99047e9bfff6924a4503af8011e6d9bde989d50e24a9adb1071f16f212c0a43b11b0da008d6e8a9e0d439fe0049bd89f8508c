'use strict';
var $ = require('../internals/export');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});
