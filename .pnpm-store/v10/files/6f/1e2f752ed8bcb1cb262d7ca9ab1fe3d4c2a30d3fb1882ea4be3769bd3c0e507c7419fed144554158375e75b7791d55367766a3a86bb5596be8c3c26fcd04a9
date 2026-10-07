const cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function prefetchJSBundle(bundle, priority) {
  var link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = bundle;
  if (priority) {
    link.as = priority;
  }

  document.getElementsByTagName('head')[0].appendChild(link);
  return Promise.resolve();
}, 'prefetch');
