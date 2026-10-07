"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _describeKeyEventType = _interopRequireDefault(require("./describeKeyEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function describeKeyEvent(event, keyName, keyEventType) {
  var eventDescription = "'".concat(keyName, "' ").concat((0, _describeKeyEventType.default)(keyEventType));

  if (event.simulated) {
    return "(simulated) ".concat(eventDescription);
  }

  return eventDescription;
}

var _default = describeKeyEvent;
exports.default = _default;