'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isAsyncIterable = isAsyncIterable;

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 */
function isAsyncIterable(maybeAsyncIterable) {
  return (
    typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0
      ? void 0
      : maybeAsyncIterable[Symbol.asyncIterator]) === 'function'
  );
}
