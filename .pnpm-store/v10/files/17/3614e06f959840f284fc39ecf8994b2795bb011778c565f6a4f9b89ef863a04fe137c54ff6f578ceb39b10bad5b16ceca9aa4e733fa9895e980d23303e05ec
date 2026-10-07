"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AltShiftedKeysDictionary = _interopRequireDefault(require("../../const/AltShiftedKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the alt and shift keys also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          alt and shit keys
 */
function resolveAltShiftedAlias(keyName) {
  return _AltShiftedKeysDictionary.default[keyName] || [keyName];
}

var _default = resolveAltShiftedAlias;
exports.default = _default;