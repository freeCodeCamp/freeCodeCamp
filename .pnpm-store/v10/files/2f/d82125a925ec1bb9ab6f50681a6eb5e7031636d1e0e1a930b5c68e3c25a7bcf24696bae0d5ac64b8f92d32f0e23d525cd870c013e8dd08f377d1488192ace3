export function when(promise, callback, errback) {
  if (promise && promise.then) {
    return errback ?
      promise.then(callback, errback) :
      promise.then(callback);
  }
  return callback(promise);
}
