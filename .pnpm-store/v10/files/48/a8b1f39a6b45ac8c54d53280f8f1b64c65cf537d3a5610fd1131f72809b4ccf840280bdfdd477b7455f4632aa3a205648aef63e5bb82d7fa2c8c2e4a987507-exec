// @flow
import serializeEffect from '../shared/serializeEffect';

export default function createErrorMessage(
  header: string,
  stepNumber: number,
  actual?: mixed,
  expected?: mixed,
  effectKey?: ?string,
): string {
  let errorMessage = `\nAssertion ${stepNumber} failed: ${header}\n`;

  if (actual && expected) {
    const serializedExpected = serializeEffect(expected, effectKey);
    const serializedActual = serializeEffect(actual, effectKey);

    errorMessage +=
      `\nExpected\n--------\n${serializedExpected}\n\n` +
      `Actual\n------\n${serializedActual}\n`;
  }

  return errorMessage;
}
