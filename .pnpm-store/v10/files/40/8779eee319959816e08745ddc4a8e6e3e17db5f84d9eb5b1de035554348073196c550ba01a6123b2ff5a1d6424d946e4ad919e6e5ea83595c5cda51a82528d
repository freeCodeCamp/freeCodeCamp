// Number.isNaN as it is not supported in IE11 so conditionally using ponyfill
// Using Number.isNaN where possible as it is ~10% faster

const safeIsNaN =
  Number.isNaN ||
  function ponyfill(value: unknown): boolean {
    return typeof value === 'number' && value !== value;
  };

function isEqual(first: unknown, second: unknown): boolean {
  if (first === second) {
    return true;
  }

  // Special case for NaN (NaN !== NaN)
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }

  return false;
}

export default function areInputsEqual(
  newInputs: readonly unknown[],
  lastInputs: readonly unknown[],
): boolean {
  // no checks needed if the inputs length has changed
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  // Using for loop for speed. It generally performs better than array.every
  // https://github.com/alexreardon/memoize-one/pull/59
  for (let i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
