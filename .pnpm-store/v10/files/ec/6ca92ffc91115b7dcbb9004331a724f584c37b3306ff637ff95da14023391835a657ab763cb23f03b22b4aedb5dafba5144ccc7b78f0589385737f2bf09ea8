import { _ as _array_without_holes } from "./_array_without_holes.js";
import { _ as _iterable_to_array } from "./_iterable_to_array.js";
import { _ as _non_iterable_spread } from "./_non_iterable_spread.js";
import { _ as _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
export { _to_consumable_array as _ };
