"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _asyncGeneratorDelegate;
var _OverloadYield = require("./OverloadYield.js");
function _asyncGeneratorDelegate(inner) {
  var iter = {},
    waiting = false;
  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: new _OverloadYield.default(value, 1)
    };
  }
  iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () {
    return this;
  };
  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }
    return pump("next", value);
  };
  if (typeof inner["throw"] === "function") {
    iter["throw"] = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }
      return pump("throw", value);
    };
  }
  if (typeof inner["return"] === "function") {
    iter["return"] = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("return", value);
    };
  }
  return iter;
}

//# sourceMappingURL=asyncGeneratorDelegate.js.map
