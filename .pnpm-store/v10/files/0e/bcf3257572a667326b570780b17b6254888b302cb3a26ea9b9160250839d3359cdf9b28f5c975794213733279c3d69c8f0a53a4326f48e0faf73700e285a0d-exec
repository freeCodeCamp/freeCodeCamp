"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertSameEffect;

var _SagaTestError = _interopRequireDefault(require("../shared/SagaTestError"));

var _validateEffects = _interopRequireDefault(require("./validateEffects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertSameEffect(eventChannel, effectName, effectKey, isHelperEffect, actual, expected, stepNumber) {
  const errorMessage = (0, _validateEffects.default)(eventChannel, effectName, effectKey, isHelperEffect, actual, expected, stepNumber);

  if (errorMessage) {
    throw new _SagaTestError.default(errorMessage);
  }
}