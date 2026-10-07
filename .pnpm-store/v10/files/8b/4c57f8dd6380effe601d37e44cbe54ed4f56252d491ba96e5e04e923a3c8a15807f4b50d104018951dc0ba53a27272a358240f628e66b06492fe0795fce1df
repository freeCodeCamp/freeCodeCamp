"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyEventManager = _interopRequireDefault(require("./lib/KeyEventManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @callback keyCombinationListener
 */

/**
 * Adds a listener function that will be called the next time a key combination completes
 * @param {keyCombinationListener} callbackFunction Listener function to be called
 * @returns {function} Function to call to cancel listening to the next key combination
 */
function recordKeyCombination(callbackFunction) {
  var eventManager = _KeyEventManager.default.getInstance();

  return eventManager.addKeyCombinationListener(callbackFunction);
}

var _default = recordKeyCombination;
exports.default = _default;