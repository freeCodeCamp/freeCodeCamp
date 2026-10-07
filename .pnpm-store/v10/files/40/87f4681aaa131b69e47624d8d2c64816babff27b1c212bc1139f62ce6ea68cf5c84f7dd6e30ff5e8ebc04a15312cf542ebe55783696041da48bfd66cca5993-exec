"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reportActualEffects;

var _serializeEffect = _interopRequireDefault(require("../shared/serializeEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reportActualEffects(store, storeKey) {
  const values = store.values();

  if (values.length === 0) {
    return '';
  }

  const serializedEffects = values.map((effect, i) => `${i + 1}. ${(0, _serializeEffect.default)(effect, storeKey)}`);
  return `\nActual:\n------\n${serializedEffects.join('\n')}\n`;
}