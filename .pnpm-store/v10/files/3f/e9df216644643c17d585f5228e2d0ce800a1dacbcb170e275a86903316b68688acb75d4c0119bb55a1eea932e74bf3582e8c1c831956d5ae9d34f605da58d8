"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isNonPrintableKeyName = _interopRequireDefault(require("../parsing-key-maps/isNonPrintableKeyName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Whether the specified key name is for a key that has a native keypress event
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has a native keypress event
 */
function hasKeyPressEvent(keyName) {
  return !(0, _isNonPrintableKeyName.default)(keyName);
}

var _default = hasKeyPressEvent;
exports.default = _default;