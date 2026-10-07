"use strict";

var cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function (bundle) {
  return new Promise(function (resolve, reject) {
    // Don't insert the same script twice (e.g. if it was already in the HTML)
    var existingScripts = document.getElementsByTagName('script');

    if ([].concat(existingScripts).some(function isCurrentBundle(script) {
      return script.src === bundle;
    })) {
      resolve();
      return;
    }

    var preloadLink = document.createElement('link');
    preloadLink.href = bundle;
    preloadLink.rel = 'preload';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = bundle;

    script.onerror = function (e) {
      var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
      script.onerror = script.onload = null;
      script.remove();
      reject(error);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
});