"use strict";

module.exports = function (workerUrl, origin, isESM) {
  if (origin === self.location.origin) {
    // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
  } else {
    // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
    var source = isESM ? 'import ' + JSON.stringify(workerUrl) + ';' : 'importScripts(' + JSON.stringify(workerUrl) + ');';
    return URL.createObjectURL(new Blob([source], {
      type: 'application/javascript'
    }));
  }
};