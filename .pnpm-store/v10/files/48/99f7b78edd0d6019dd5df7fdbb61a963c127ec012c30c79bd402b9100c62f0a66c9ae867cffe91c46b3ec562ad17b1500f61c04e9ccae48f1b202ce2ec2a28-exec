// @flow
import SagaTestError from '../shared/SagaTestError';
import validateEffects from './validateEffects';

export default function assertSameEffect(
  eventChannel: Function,
  effectName: string,
  effectKey: ?string,
  isHelperEffect: boolean,
  actual: Object,
  expected: Object,
  stepNumber: number,
) {
  const errorMessage = validateEffects(
    eventChannel,
    effectName,
    effectKey,
    isHelperEffect,
    actual,
    expected,
    stepNumber,
  );

  if (errorMessage) {
    throw new SagaTestError(errorMessage);
  }
}
