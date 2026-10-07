import arrayWithHoles from './_array_with_holes.mjs';
import iterableToArray from './_iterable_to_array.mjs';
import nonIterableRest from './_non_iterable_rest.mjs';
import unsupportedIterableToArray from './_unsupported_iterable_to_array.mjs';

export default function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
