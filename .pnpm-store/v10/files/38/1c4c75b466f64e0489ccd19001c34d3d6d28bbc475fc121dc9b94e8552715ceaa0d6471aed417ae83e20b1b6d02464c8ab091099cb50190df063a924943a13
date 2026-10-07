"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _get;
var _superPropBase = require("./superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    exports.default = _get = Reflect.get.bind();
  } else {
    exports.default = _get = function _get(target, property, receiver) {
      var base = (0, _superPropBase.default)(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(null, arguments);
}

//# sourceMappingURL=get.js.map
