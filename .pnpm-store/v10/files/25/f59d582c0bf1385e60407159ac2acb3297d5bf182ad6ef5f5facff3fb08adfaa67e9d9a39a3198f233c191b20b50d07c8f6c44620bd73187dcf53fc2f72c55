"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ShiftedKeysDictionary = _interopRequireDefault(require("../../const/ShiftedKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the shift key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          shift key
 */
function resolveShiftedAlias(keyName) {
  return _ShiftedKeysDictionary.default[keyName] || [keyName.length === 1 ? keyName.toUpperCase() : keyName];
}

var _default = resolveShiftedAlias;
exports.default = _default;