const cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function loadCSSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    // Don't insert the same link element twice (e.g. if it was already in the HTML)
    let existingLinks = document.getElementsByTagName('link');
    let isCurrentBundle = function (link) {
      return link.href === bundle && link.rel.indexOf('stylesheet') > -1;
    };

    if ([].concat(existingLinks).some(isCurrentBundle)) {
      resolve();
      return;
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bundle;
    link.onerror = function (e) {
      link.onerror = link.onload = null;
      link.remove();
      reject(e);
    };

    link.onload = function () {
      link.onerror = link.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(link);
  });
});
