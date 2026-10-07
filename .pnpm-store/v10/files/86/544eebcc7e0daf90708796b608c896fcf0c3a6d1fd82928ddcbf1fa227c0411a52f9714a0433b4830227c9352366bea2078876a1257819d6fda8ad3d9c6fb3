"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyEventManager = _interopRequireDefault(require("./lib/KeyEventManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object.<ActionName, KeyEventDescription[]>} ApplicationKeyMap
 */

/**
 * Generates and returns the application's key map, including not only those
 * that are live in the current focus, but all the key maps from all the
 * HotKeys and GlobalHotKeys components that are currently mounted
 * @returns {ApplicationKeyMap} The application's key map
 */
function getApplicationKeyMap() {
  return _KeyEventManager.default.getInstance().getApplicationKeyMap();
}

var _default = getApplicationKeyMap;
exports.default = _default;