"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeProviders = composeProviders;
exports.applyProviders = applyProviders;
exports.coalesceProviders = coalesceProviders;
exports.DYNAMIC_PROVIDER = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _lodash2 = _interopRequireDefault(require("lodash.ismatch"));

var _provideValue = require("../provideValue");

var _helpers = require("../matchers/helpers");

var _parseEffect = _interopRequireDefault(require("../parseEffect"));

var _object = require("../../utils/object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DYNAMIC_PROVIDER = '@@redux-saga-test-plan/dynamic-provider';
exports.DYNAMIC_PROVIDER = DYNAMIC_PROVIDER;

function isDynamicallyProvidedValue(value) {
  return !!value && typeof value === 'object' && DYNAMIC_PROVIDER in value;
}

function composeProviders(...providers) {
  return (effect, next) => {
    for (let i = 0, l = providers.length; i < l; i++) {
      const provider = providers[i];
      const result = provider(effect, next);

      if (result !== _provideValue.NEXT) {
        return result;
      }
    }

    return _provideValue.NEXT;
  };
}

function applyProviders(providerFns) {
  return composeProviders(...providerFns);
}

function coalesceProviders(providers) {
  const collected = {};

  function addToCollected(key, value) {
    if (key in collected) {
      collected[key].push(value);
    } else {
      collected[key] = [value];
    }
  }

  providers.forEach(providersObject => {
    if (Array.isArray(providersObject)) {
      const [expectedEffect, providedValue] = providersObject;
      let parsedEffect;
      let comparer;

      if ((0, _helpers.isPartialMatcher)(expectedEffect)) {
        parsedEffect = expectedEffect;
        comparer = _lodash2.default;
      } else {
        parsedEffect = (0, _parseEffect.default)(expectedEffect);
        comparer = _lodash.default;
      }

      if (parsedEffect.providerKey && parsedEffect.effect) {
        addToCollected(parsedEffect.providerKey, (actualEffect, next) => {
          const pass = comparer(actualEffect, parsedEffect.effect);

          if (isDynamicallyProvidedValue(providedValue) && pass) {
            return providedValue.fn(actualEffect, next);
          }

          return pass ? providedValue : next();
        });
      }
    } else {
      Object.keys(providersObject).forEach(providerKey => {
        // $FlowFixMe
        const provider = providersObject[providerKey];
        addToCollected(providerKey, provider);
      });
    }
  });
  return (0, _object.mapValues)(collected, applyProviders);
}