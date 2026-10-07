"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyOSAndLayoutAliasesDictionary = _interopRequireDefault(require("../../const/KeyOSAndLayoutAliasesDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a list of accepted aliases for the specified key
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} List of key aliases
 */
function resolveKeyAlias(keyName) {
  return _KeyOSAndLayoutAliasesDictionary.default[keyName] || [keyName];
}

var _default = resolveKeyAlias;
exports.default = _default;