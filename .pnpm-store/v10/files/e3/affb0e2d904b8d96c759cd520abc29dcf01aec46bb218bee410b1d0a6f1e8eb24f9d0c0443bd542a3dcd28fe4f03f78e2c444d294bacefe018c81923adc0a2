"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _interopRequireWildcard;
function _interopRequireWildcard(obj, nodeInterop) {
  if (typeof WeakMap === "function") {
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
  }
  return (exports.default = _interopRequireWildcard = function (obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    var _;
    var newObj = {
      __proto__: null,
      default: obj
    };
    var desc;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return newObj;
    }
    _ = nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    if (_) {
      if (_.has(obj)) return _.get(obj);
      _.set(obj, newObj);
    }
    for (const key in obj) {
      if (key !== "default" && {}.hasOwnProperty.call(obj, key)) {
        desc = (_ = Object.defineProperty) && Object.getOwnPropertyDescriptor(obj, key);
        if (desc && (desc.get || desc.set)) {
          _(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  })(obj, nodeInterop);
}

//# sourceMappingURL=interopRequireWildcard.js.map
