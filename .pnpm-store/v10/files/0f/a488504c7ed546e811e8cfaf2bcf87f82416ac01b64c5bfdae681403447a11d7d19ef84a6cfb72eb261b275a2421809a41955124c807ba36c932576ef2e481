"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NonPrintableKeysDictionary = _interopRequireDefault(require("../../const/NonPrintableKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Whether the specified key is a valid key name that is not a single character or
 * symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {boolean} Whether the key is a valid special key
 */
function isNonPrintableKeyName(keyName) {
  return !!_NonPrintableKeysDictionary.default[keyName];
}

var _default = isNonPrintableKeyName;
exports.default = _default;