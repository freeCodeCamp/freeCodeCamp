"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _applyDecoratedDescriptor;
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    return null;
  }
  return desc;
}

//# sourceMappingURL=applyDecoratedDescriptor.js.map
