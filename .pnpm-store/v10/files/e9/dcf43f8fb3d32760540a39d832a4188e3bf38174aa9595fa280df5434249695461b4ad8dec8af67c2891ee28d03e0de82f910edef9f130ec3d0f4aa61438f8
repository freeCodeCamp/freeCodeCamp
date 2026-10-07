"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toSetter;
function _toSetter(fn, args, thisArg) {
  if (!args) args = [];
  var l = args.length++;
  return Object.defineProperty({}, "_", {
    set: function (v) {
      args[l] = v;
      fn.apply(thisArg, args);
    }
  });
}

//# sourceMappingURL=toSetter.js.map
