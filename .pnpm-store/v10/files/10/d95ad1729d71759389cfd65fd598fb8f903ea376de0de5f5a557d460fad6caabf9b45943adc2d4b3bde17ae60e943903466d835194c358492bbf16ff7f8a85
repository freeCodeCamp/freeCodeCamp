"use strict";

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

module.exports = function (url, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {};

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce = typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  Object.keys(options.attributes).forEach(function (key) {
    link.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(link);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(link);
  }

  return function (newUrl) {
    if (typeof newUrl === 'string') {
      link.href = newUrl;
    } else {
      link.parentNode.removeChild(link);
    }
  };
};