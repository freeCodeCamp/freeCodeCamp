import arrayWithoutHoles from './_array_without_holes.mjs';
import iterableToArray from './_iterable_to_array.mjs';
import nonIterableSpread from './_non_iterable_spread.mjs';
import unsupportedIterableToArray from './_unsupported_iterable_to_array.mjs';

export default function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
