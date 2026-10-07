"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hasown = _interopRequireDefault(require("hasown"));
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _jsxAstUtils = require("jsx-ast-utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var getElementType = function getElementType(context) {
  var _settings$jsxA11y, _settings$jsxA11y2, _settings$jsxA11y3;
  var settings = context.settings;
  var polymorphicPropName = (_settings$jsxA11y = settings['jsx-a11y']) === null || _settings$jsxA11y === void 0 ? void 0 : _settings$jsxA11y.polymorphicPropName;
  var polymorphicAllowList = (_settings$jsxA11y2 = settings['jsx-a11y']) === null || _settings$jsxA11y2 === void 0 ? void 0 : _settings$jsxA11y2.polymorphicAllowList;
  var componentMap = (_settings$jsxA11y3 = settings['jsx-a11y']) === null || _settings$jsxA11y3 === void 0 ? void 0 : _settings$jsxA11y3.components;
  return function (node) {
    var polymorphicProp = polymorphicPropName ? (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, polymorphicPropName)) : undefined;
    var rawType = (0, _jsxAstUtils.elementType)(node);
    if (polymorphicProp && (!polymorphicAllowList || (0, _arrayIncludes["default"])(polymorphicAllowList, rawType))) {
      rawType = polymorphicProp;
    }
    if (!componentMap) {
      return rawType;
    }
    return (0, _hasown["default"])(componentMap, rawType) ? componentMap[rawType] : rawType;
  };
};
var _default = exports["default"] = getElementType;
module.exports = exports.default;