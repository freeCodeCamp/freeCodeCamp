import { _array_without_holes } from "./_array_without_holes.js";
import { _iterable_to_array } from "./_iterable_to_array.js";
import { _non_iterable_spread } from "./_non_iterable_spread.js";
import { _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

export function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
export { _to_consumable_array as _ };
