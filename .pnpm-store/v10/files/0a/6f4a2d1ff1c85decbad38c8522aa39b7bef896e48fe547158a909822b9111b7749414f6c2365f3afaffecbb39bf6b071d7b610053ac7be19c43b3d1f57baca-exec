// @flow
import isEqual from 'lodash.isequal';
import createErrorMessage from './createErrorMessage';

export default function validateEffects(
  eventChannel: Function,
  effectName: string,
  effectKey: ?string,
  isHelperEffect: boolean,
  actual: ?Object,
  expected: Object,
  stepNumber: number,
): ?string {
  if (actual == null) {
    return createErrorMessage(
      `expected ${effectName} effect, but the saga yielded nothing`,
      stepNumber,
      actual,
      expected,
      effectKey,
    );
  }

  const bothEqual = isEqual(actual, expected);

  const effectsDifferent =
    (isHelperEffect && !bothEqual) ||
    (!isHelperEffect &&
      (actual.type !== effectKey || expected.type !== effectKey));

  if (effectsDifferent) {
    return createErrorMessage(
      `expected ${effectName} effect, but the saga yielded a different effect`,
      stepNumber,
      actual,
      expected,
    );
  }

  if (!bothEqual) {
    return createErrorMessage(
      `${effectName} effects do not match`,
      stepNumber,
      actual,
      expected,
      effectKey,
    );
  }

  return null;
}
