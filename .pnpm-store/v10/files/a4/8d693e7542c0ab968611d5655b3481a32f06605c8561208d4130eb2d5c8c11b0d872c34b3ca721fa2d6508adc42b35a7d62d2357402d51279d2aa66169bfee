"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _withHotKeysIgnoreOverride = _interopRequireDefault(require("./withHotKeysIgnoreOverride"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wraps a React component in a ObserveKeys component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */
function withObserveKeys(Component) {
  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  return (0, _withHotKeysIgnoreOverride.default)(Component, hotKeysIgnoreOptions, 'observeIgnoredEvents');
}

var _default = withObserveKeys;
exports.default = _default;