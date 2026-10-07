"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serializeEffect;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_util.default.inspect.defaultOptions = {
  depth: 4
};

function serializeEffect(effect, effectKey) {
  if (effect != null && typeof effect === 'object' && !Array.isArray(effect) && effectKey && effectKey in effect) {
    return _util.default.inspect(effect[effectKey]);
  }

  return _util.default.inspect(effect);
}