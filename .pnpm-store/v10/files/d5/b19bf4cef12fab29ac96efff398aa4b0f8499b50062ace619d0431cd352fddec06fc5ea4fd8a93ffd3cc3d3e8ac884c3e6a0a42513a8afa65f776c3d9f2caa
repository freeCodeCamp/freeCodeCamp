// @flow

const buildCaches: Array<Map<any, any>> = [];

export function createBuildCache<K, V>(): Map<K, V> {
  let cache = new Map<K, V>();
  buildCaches.push(cache);
  return cache;
}

export function clearBuildCaches() {
  for (let cache of buildCaches) {
    cache.clear();
  }
}
