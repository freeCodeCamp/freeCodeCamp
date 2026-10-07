"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UnshiftedKeysDictionary = _interopRequireDefault(require("../../const/reverse-dictionaries/UnshiftedKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the name of the key that must be pressed with the shift key, to yield the
 * specified symbol
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the shift key, to
 *          yield the specified symbol
 */
function resolveUnshiftedAlias(keyName) {
  return _UnshiftedKeysDictionary.default[keyName] || [keyName.length === 1 ? keyName.toLowerCase() : keyName];
}

var _default = resolveUnshiftedAlias;
exports.default = _default;