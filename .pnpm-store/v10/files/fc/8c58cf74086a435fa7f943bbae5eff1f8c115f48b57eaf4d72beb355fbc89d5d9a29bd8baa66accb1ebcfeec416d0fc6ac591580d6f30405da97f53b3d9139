"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheWrapper = cacheWrapper;
exports.cacheWrapperSync = cacheWrapperSync;

async function cacheWrapper(cache, key, fn) {
  const cached = cache.get(key);

  if (cached !== undefined) {
    return cached;
  }

  const result = await fn();
  cache.set(key, result);
  return result;
}

function cacheWrapperSync(cache, key, fn) {
  const cached = cache.get(key);

  if (cached !== undefined) {
    return cached;
  }

  const result = fn();
  cache.set(key, result);
  return result;
}
//# sourceMappingURL=cacheWrapper.js.map