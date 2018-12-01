function isPromiseLike(thing) {
  return !!thing && typeof thing.then === 'function';
}

function InMemoryCache(initialValue) {
  const cacheKey = Symbol('cacheKey');
  const cache = new Map();

  if (typeof initialValue !== 'undefined') {
    cache.set(cacheKey, initialValue);
  }

  return {
    get() {
      const value = cache.get(cacheKey);
      return typeof value !== 'undefined' ? value : null;
    },
    async update(fn) {
      const maybePromisedValue = fn();
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
