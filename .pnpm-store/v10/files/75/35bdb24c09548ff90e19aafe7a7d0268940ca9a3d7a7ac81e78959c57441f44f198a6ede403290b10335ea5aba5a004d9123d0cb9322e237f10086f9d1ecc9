"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prelude = exports.helpers = void 0;

const prelude = parcelRequireName => `var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global[${JSON.stringify(parcelRequireName)}];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global[${JSON.stringify(parcelRequireName)}] = parcelRequire;
}
`;

exports.prelude = prelude;
const helpers = {
  $parcel$export: `function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
`,
  $parcel$exportWildcard: `function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
`,
  $parcel$interopDefault: `function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
`,
  $parcel$global: `var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
`,
  $parcel$defineInteropFlag: `function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
`
};
exports.helpers = helpers;