"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateEffects;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _createErrorMessage = _interopRequireDefault(require("./createErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateEffects(eventChannel, effectName, effectKey, isHelperEffect, actual, expected, stepNumber) {
  if (actual == null) {
    return (0, _createErrorMessage.default)(`expected ${effectName} effect, but the saga yielded nothing`, stepNumber, actual, expected, effectKey);
  }

  const bothEqual = (0, _lodash.default)(actual, expected);
  const effectsDifferent = isHelperEffect && !bothEqual || !isHelperEffect && (actual.type !== effectKey || expected.type !== effectKey);

  if (effectsDifferent) {
    return (0, _createErrorMessage.default)(`expected ${effectName} effect, but the saga yielded a different effect`, stepNumber, actual, expected);
  }

  if (!bothEqual) {
    return (0, _createErrorMessage.default)(`${effectName} effects do not match`, stepNumber, actual, expected, effectKey);
  }

  return null;
}