import { _array_with_holes } from "./_array_with_holes.js";
import { _iterable_to_array_limit_loose } from "./_iterable_to_array_limit_loose.js";
import { _non_iterable_rest } from "./_non_iterable_rest.js";
import { _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

export function _sliced_to_array_loose(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit_loose(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
export { _sliced_to_array_loose as _ };
