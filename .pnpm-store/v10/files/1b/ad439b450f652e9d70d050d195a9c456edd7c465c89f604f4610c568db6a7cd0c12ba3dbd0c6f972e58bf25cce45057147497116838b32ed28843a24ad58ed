"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectWithoutProperties;
var _objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0, _objectWithoutPropertiesLoose.default)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) !== -1) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

//# sourceMappingURL=objectWithoutProperties.js.map
