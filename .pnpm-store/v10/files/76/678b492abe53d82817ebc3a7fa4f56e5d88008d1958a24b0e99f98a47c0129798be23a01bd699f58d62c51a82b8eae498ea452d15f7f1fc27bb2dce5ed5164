"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _construct;
var _isNativeReflectConstruct = require("./isNativeReflectConstruct.js");
var _setPrototypeOf = require("./setPrototypeOf.js");
function _construct(Parent, args, Class) {
  if ((0, _isNativeReflectConstruct.default)()) {
    return Reflect.construct.apply(null, arguments);
  }
  var a = [null];
  a.push.apply(a, args);
  var instance = new (Parent.bind.apply(Parent, a))();
  if (Class) (0, _setPrototypeOf.default)(instance, Class.prototype);
  return instance;
}

//# sourceMappingURL=construct.js.map
