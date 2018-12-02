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

    async update(fn) {
      let maybePromisedValue;
      try {
        maybePromisedValue = fn();
      } catch (e) {
        const errMsg = `InMemoryCache > update > caught: ${e.message}`;
        e.message = errMsg;
        reportError(e);
        return null;
      }
      if (isPromiseLike(maybePromisedValue)) {
        return maybePromisedValue.then(value => cache.set(cacheKey, value));
      } else {
        const value = maybePromisedValue;
        cache.set(cacheKey, value);
        return null;
      }
    },

    clear() {
      return cache.delete(cacheKey);
    }
  };
}

export default InMemoryCache;
