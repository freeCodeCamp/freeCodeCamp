"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _wrapNativeSuper;
var _getPrototypeOf = require("./getPrototypeOf.js");
var _setPrototypeOf = require("./setPrototypeOf.js");
var _isNativeFunction = require("./isNativeFunction.js");
var _construct = require("./construct.js");
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  exports.default = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0, _isNativeFunction.default)(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (_cache !== undefined) {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0, _construct.default)(Class, arguments, (0, _getPrototypeOf.default)(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0, _setPrototypeOf.default)(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

//# sourceMappingURL=wrapNativeSuper.js.map
