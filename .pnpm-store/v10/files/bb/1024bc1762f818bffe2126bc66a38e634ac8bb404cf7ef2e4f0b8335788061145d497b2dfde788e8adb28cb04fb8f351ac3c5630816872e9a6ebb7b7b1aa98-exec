// @flow

const PARTIAL_MATCH = '@@redux-saga-test-plan/partial-matcher';

export function wrapEffectCreator(effectCreator: Function): Function {
  return function wrappedEffectCreator(...args: Array<any>): Object {
    return effectCreator(...args);
  };
}

export function like(providerKey: string, defaults?: Object = {}): Function {
  return function effectMatcher(effect: Object): Object {
    return Object.assign({}, defaults, {
      effect,
      providerKey,
      [PARTIAL_MATCH]: true,
    });
  };
}

export function isPartialMatcher(effect: Object): boolean {
  return PARTIAL_MATCH in effect;
}
