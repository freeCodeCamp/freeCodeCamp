"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MousetrapToReactKeyNamesDictionary = _interopRequireDefault(require("../../const/MousetrapToReactKeyNamesDictionary"));

var _KeyShorthandDictionary = _interopRequireDefault(require("../../const/KeyShorthandDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {string} KeyName Name of the keyboard key
 */

/**
 * @typedef {string} ReactKeyName Name used by React to refer to key
 */

/**
 * Returns the name for the specified key used by React. Supports translating key aliases
 * used by mousetrap to their counterparts in React
 * @param {KeyName} keyName Name of the key to resolve to the React equivalent
 * @returns {ReactKeyName} Name used by React to refer to the key
 */
function standardizeKeyName(keyName) {
  var _keyName = keyName.toLowerCase();

  return _MousetrapToReactKeyNamesDictionary.default[_keyName] || _KeyShorthandDictionary.default[_keyName] || (keyName.match(/^f\d+$/) ? keyName.toUpperCase() : keyName);
}

var _default = standardizeKeyName;
exports.default = _default;