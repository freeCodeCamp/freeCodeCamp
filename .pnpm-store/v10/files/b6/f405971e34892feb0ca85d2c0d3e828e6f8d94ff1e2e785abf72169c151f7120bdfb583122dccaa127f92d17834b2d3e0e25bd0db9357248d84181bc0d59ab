"use strict";

exports.__esModule = true;
exports.getCache = void 0;
const caches = new Map();
const getCache = name => {
  let cache = caches.get(name);
  if (!cache) {
    const GatsbyCacheLmdb = require(`./cache-lmdb`).default;
    cache = new GatsbyCacheLmdb({
      name
    }).init();
    caches.set(name, cache);
  }
  return cache;
};
exports.getCache = getCache;
//# sourceMappingURL=get-cache.js.map