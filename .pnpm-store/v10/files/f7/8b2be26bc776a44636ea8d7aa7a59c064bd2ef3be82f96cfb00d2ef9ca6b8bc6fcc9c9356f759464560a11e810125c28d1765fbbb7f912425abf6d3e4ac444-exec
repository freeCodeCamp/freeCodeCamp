"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapEffectCreator = wrapEffectCreator;
exports.like = like;
exports.isPartialMatcher = isPartialMatcher;
const PARTIAL_MATCH = '@@redux-saga-test-plan/partial-matcher';

function wrapEffectCreator(effectCreator) {
  return function wrappedEffectCreator(...args) {
    return effectCreator(...args);
  };
}

function like(providerKey, defaults = {}) {
  return function effectMatcher(effect) {
    return Object.assign({}, defaults, {
      effect,
      providerKey,
      [PARTIAL_MATCH]: true
    });
  };
}

function isPartialMatcher(effect) {
  return PARTIAL_MATCH in effect;
}