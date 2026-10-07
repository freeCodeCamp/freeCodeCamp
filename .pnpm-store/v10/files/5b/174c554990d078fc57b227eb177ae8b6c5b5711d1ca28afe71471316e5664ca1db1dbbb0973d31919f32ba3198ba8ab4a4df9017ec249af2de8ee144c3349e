"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeysWithKeyUpHiddenByCmd = _interopRequireDefault(require("../../const/KeysWithKeyUpHiddenByCmd"));

var _hasKey = _interopRequireDefault(require("../../utils/object/hasKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Whether the specified key, when pressed down with the cmd key, never triggers a keyup
 * event in the browser
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has its keyup event hidden by cmd
 */
function keyupIsHiddenByCmd(keyName) {
  return keyName.length === 1 || (0, _hasKey.default)(_KeysWithKeyUpHiddenByCmd.default, keyName);
}

var _default = keyupIsHiddenByCmd;
exports.default = _default;