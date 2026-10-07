"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createErrorMessage;

var _serializeEffect = _interopRequireDefault(require("../shared/serializeEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createErrorMessage(header, stepNumber, actual, expected, effectKey) {
  let errorMessage = `\nAssertion ${stepNumber} failed: ${header}\n`;

  if (actual && expected) {
    const serializedExpected = (0, _serializeEffect.default)(expected, effectKey);
    const serializedActual = (0, _serializeEffect.default)(actual, effectKey);
    errorMessage += `\nExpected\n--------\n${serializedExpected}\n\n` + `Actual\n------\n${serializedActual}\n`;
  }

  return errorMessage;
}