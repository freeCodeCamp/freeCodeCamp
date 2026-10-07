import Promise from './index';
import promiseFinally from './finally';
import allSettled from './allSettled';
import any from './any';

/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = Promise;
} else {
  if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = promiseFinally;
  }
  if (!globalNS.Promise.allSettled) {
    globalNS.Promise.allSettled = allSettled;
  }
  if (!globalNS.Promise.any) {
    globalNS.Promise.any = any;
  }
}
