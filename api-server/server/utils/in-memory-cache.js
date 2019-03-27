function isPromiseLike(thing) {
  return !!thing && typeof thing.then === 'function';
}

function InMemoryCache(initialValue, reportError) {
  if (typeof reportError !== 'function') {
    throw new Error(
      'No reportError function specified for this in-memory-cache'
    );
  }
  const cacheKey = Symbol('cacheKey');
  const cache = new Map();
  cache.set(cacheKey, initialValue);

  return {
    get() {
      const value = cache.get(cacheKey);
      return typeof value !== 'undefined' ? value : null;
    },

    update(fn) {
      try {
        const value = fn();
        if (isPromiseLike(value)) {
          return value.then(value => cache.set(cacheKey, value));
        } else {
          cache.set(cacheKey, value);
        }
      } catch (e) {
        const errMsg = `InMemoryCache > update > caught: ${e.message}`;
        e.message = errMsg;
        reportError(e);
      }
      return null;
    },

    clear() {
      return cache.delete(cacheKey);
    }
  };
}

export default InMemoryCache;
