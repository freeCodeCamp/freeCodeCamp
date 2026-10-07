/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 */
export function isAsyncIterable(maybeAsyncIterable) {
  return (
    typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0
      ? void 0
      : maybeAsyncIterable[Symbol.asyncIterator]) === 'function'
  );
}
