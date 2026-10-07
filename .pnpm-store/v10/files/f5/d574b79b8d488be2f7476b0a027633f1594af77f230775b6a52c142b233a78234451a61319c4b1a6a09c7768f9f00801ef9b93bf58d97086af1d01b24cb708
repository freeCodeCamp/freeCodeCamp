"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _getTabIndex = _interopRequireDefault(require("./getTabIndex"));
var _isInteractiveElement = _interopRequireDefault(require("./isInteractiveElement"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns boolean indicating whether an element appears in tab focus.
 * Identifies an element as focusable if it is an interactive element, or an element with a tabIndex greater than or equal to 0.
 */
function isFocusable(type, attributes) {
  var tabIndex = (0, _getTabIndex["default"])((0, _jsxAstUtils.getProp)(attributes, 'tabIndex'));
  if ((0, _isInteractiveElement["default"])(type, attributes)) {
    return tabIndex === undefined || tabIndex >= 0;
  }
  return tabIndex >= 0;
}
var _default = exports["default"] = isFocusable;
module.exports = exports.default;