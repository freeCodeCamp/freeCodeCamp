"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UnaltShiftedKeysDictionary = _interopRequireDefault(require("../../const/reverse-dictionaries/UnaltShiftedKeysDictionary"));

var _resolveUnshiftedAlias = _interopRequireDefault(require("./resolveUnshiftedAlias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the name of the key that must be pressed with the shift and alt keys,
 * to yield the specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */
function resolveUnaltShiftedAlias(keyName) {
  return _UnaltShiftedKeysDictionary.default[keyName] || (0, _resolveUnshiftedAlias.default)(keyName);
}

var _default = resolveUnaltShiftedAlias;
exports.default = _default;