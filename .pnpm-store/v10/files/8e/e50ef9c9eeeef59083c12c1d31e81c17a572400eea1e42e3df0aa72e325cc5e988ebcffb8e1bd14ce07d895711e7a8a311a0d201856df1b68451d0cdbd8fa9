"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// eslint-disable-next-line no-unused-vars
function iteratorProxy() {
  var values = this;
  var index = 0;
  var iter = {
    '@@iterator': function iterator() {
      return iter;
    },
    next: function next() {
      if (index < values.length) {
        var value = values[index];
        index = index + 1;
        return {
          done: false,
          value: value
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
  return iter;
}
var _default = iteratorProxy;
exports.default = _default;