import { _ as _array_with_holes } from "./_array_with_holes.js";
import { _ as _iterable_to_array } from "./_iterable_to_array.js";
import { _ as _non_iterable_rest } from "./_non_iterable_rest.js";
import { _ as _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
export { _to_array as _ };
