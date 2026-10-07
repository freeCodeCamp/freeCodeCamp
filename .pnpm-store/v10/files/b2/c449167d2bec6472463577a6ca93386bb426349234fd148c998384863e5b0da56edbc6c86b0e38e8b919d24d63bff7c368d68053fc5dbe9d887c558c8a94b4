import { _array_with_holes } from "./_array_with_holes.js";
import { _iterable_to_array } from "./_iterable_to_array.js";
import { _non_iterable_rest } from "./_non_iterable_rest.js";
import { _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

export function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
export { _to_array as _ };
