"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactsGetEventKey = _interopRequireDefault(require("../../vendor/react-dom/reactsGetEventKey"));

var _Configuration = _interopRequireDefault(require("../../lib/config/Configuration"));

var _hasKey = _interopRequireDefault(require("../../utils/object/hasKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Lowercased string representing a particular keyboard key
 * @typedef {string} NormalizedKeyName
 */

/**
 * Returns key name from native or React keyboard event
 * @param {KeyboardEvent} event - Event containing the key name
 * @returns {NormalizedKeyName} Normalized name of the key
 */
function getKeyName(event) {
  var keyName = function () {
    var customKeyCodes = _Configuration.default.option('customKeyCodes');

    var keyCode = event.keyCode || event.charCode;

    if ((0, _hasKey.default)(customKeyCodes, keyCode)) {
      return customKeyCodes[keyCode];
    }

    if (event.nativeEvent) {
      return event.key;
    } else {
      return (0, _reactsGetEventKey.default)(event);
    }
  }();

  if (keyName === '+') {
    return 'plus';
  } else {
    return keyName;
  }
}

var _default = getKeyName;
exports.default = _default;