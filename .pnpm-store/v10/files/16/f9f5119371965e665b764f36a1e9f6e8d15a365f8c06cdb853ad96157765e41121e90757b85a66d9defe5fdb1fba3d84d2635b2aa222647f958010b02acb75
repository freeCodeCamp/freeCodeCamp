"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyEventState = _interopRequireDefault(require("../../const/KeyEventState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stateFromEvent(event) {
  return event.simulated ? _KeyEventState.default.simulated : _KeyEventState.default.seen;
}

var _default = stateFromEvent;
exports.default = _default;