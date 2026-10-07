let cachedBundles = {};
let cachedPreloads = {};
let cachedPrefetches = {};

function getCache(type) {
  switch (type) {
    case 'preload':
      return cachedPreloads;
    case 'prefetch':
      return cachedPrefetches;
    default:
      return cachedBundles;
  }
}

module.exports = function cacheLoader(loader, type) {
  return function (bundle) {
    let cache = getCache(type);

    if (cache[bundle]) {
      return cache[bundle];
    }

    return (cache[bundle] = loader.apply(null, arguments).catch(function (e) {
      delete cache[bundle];
      throw e;
    }));
  };
};
