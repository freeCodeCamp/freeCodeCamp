import arrayWithHoles from './_array_with_holes.mjs';
import iterableToArrayLimitLoose from './_iterable_to_array_limit_loose.mjs';
import nonIterableRest from './_non_iterable_rest.mjs';
import unsupportedIterableToArray from './_unsupported_iterable_to_array.mjs';

export default function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
