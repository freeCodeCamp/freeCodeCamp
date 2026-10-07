"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AltedKeysDictionary = _interopRequireDefault(require("../../const/AltedKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the alt key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          alt key
 */
function resolveAltedAlias(keyName) {
  return _AltedKeysDictionary.default[keyName] || [keyName];
}

var _default = resolveAltedAlias;
exports.default = _default;