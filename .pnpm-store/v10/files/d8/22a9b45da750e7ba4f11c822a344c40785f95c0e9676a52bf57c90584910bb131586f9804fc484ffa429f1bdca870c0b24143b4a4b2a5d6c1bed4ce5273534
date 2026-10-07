"use strict";

// initializing global here for unsafe builtin usage at import time
global.unsafeBuiltinUsage = [];
function createProxyHandler(prefix, options) {
  return {
    get: function (target, key) {
      const value = target[key];
      const path = key && key.toString ? `${prefix}.${key.toString()}` : prefix;
      if (options.ignore.includes(path)) {
        return value;
      }
      const fieldDescriptor = Object.getOwnPropertyDescriptor(target, key);
      if (fieldDescriptor && !fieldDescriptor.writable) {
        // this is to prevent errors like:
        // ```
        // TypeError: 'get' on proxy: property 'constants' is a read - only and
        // non - configurable data property on the proxy target but the proxy
        // did not return its actual value
        // (expected '[object Object]' but got '[object Object]')
        // ```
        return value;
      }
      if (typeof value === `function`) {
        return function wrapper(...args) {
          const myErrorHolder = {
            name: `Unsafe builtin usage ${path}`
          };
          Error.captureStackTrace(myErrorHolder, wrapper);

          // - loadPageDataSync already is tracked with dedicated warning messages,
          // so skipping marking it to avoid multiple messages for same usage
          // - node-gyp-build will use fs.readDirSync in attempt to load binaries
          // this should be ok to ignore.
          if (!myErrorHolder.stack.includes(`loadPageDataSync`) && !myErrorHolder.stack.includes(`node-gyp-build`)) {
            global.unsafeBuiltinUsage.push(myErrorHolder.stack);
          }
          return value.apply(target, args);
        };
      } else if (typeof value === `object` && value !== null) {
        return new Proxy(value, createProxyHandler(path, options));
      }
      return value;
    }
  };
}
function wrapModuleWithTracking(moduleName, options = {}) {
  if (!options.ignore) {
    options.ignore = [];
  }
  const mod = require(moduleName);
  return new Proxy(mod, createProxyHandler(moduleName, options));
}
exports.wrapModuleWithTracking = wrapModuleWithTracking;
//# sourceMappingURL=tracking-unsafe-module-wrapper.js.map