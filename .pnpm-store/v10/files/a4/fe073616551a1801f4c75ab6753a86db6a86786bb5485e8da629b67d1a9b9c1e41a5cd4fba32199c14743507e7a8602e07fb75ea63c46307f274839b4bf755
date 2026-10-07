"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Configuration = _interopRequireDefault(require("../../lib/config/Configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Whether the specified key name is among those defined as custom key codes
 * @param {ReactKeyName} keyName Name of the key
 * @returns {boolean} true if keyName matches a custom key name
 */
function isCustomKeyName(keyName) {
  return _Configuration.default.option('_customKeyNamesDict')[keyName];
}

var _default = isCustomKeyName;
exports.default = _default;