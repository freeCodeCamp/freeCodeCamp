"use strict";

var cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function (bundle) {
  return new Promise(function (resolve, reject) {
    // Add a global function to handle when the script loads.
    var globalName = "i".concat(('' + Math.random()).slice(2));

    global[globalName] = function (m) {
      resolve(m);
      cleanup();
    }; // Remove script on load or error


    var cleanup = function () {
      delete global[globalName];
      script.onerror = null;
      script.remove();
    }; // Append an inline script tag into the document head


    var script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.charset = 'utf-8';
    script.textContent = "import * as m from '".concat(bundle, "'; ").concat(globalName, "(m);");

    script.onerror = function (e) {
      reject(e);
      cleanup();
    };

    document.head.appendChild(script);
  });
});