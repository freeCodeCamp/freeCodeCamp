// @flow
import isEqual from 'lodash.isequal';
import isMatch from 'lodash.ismatch';
import { NEXT } from '../provideValue';
import { isPartialMatcher } from '../matchers/helpers';
import parseEffect from '../parseEffect';
import { mapValues } from '../../utils/object';

export const DYNAMIC_PROVIDER = '@@redux-saga-test-plan/dynamic-provider';

function isDynamicallyProvidedValue(value: any): boolean {
  return !!value && typeof value === 'object' && DYNAMIC_PROVIDER in value;
}

export function composeProviders(...providers: Array<Provider>): Provider {
  return (effect, next) => {
    for (let i = 0, l = providers.length; i < l; i++) {
      const provider = providers[i];
      const result = provider(effect, next);

      if (result !== NEXT) {
        return result;
      }
    }

    return NEXT;
  };
}

export function applyProviders(providerFns: Array<Provider>): Provider {
  return composeProviders(...providerFns);
}

export function coalesceProviders(
  providers: Array<Providers | [Object, any]>,
): Providers {
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

      if (isPartialMatcher(expectedEffect)) {
        parsedEffect = expectedEffect;
        comparer = isMatch;
      } else {
        parsedEffect = parseEffect(expectedEffect);
        comparer = isEqual;
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

  return mapValues(collected, applyProviders);
}
