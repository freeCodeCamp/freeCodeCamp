"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UnaltedKeysDictionary = _interopRequireDefault(require("../../const/reverse-dictionaries/UnaltedKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the name of the key that must be pressed with the alt key, to yield the
 * specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */
function resolveUnaltedAlias(keyName) {
  return _UnaltedKeysDictionary.default[keyName] || [keyName];
}

var _default = resolveUnaltedAlias;
exports.default = _default;