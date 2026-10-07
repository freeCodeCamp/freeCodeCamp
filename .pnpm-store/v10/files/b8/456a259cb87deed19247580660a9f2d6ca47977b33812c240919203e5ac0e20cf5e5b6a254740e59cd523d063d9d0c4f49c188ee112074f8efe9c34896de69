// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Tuple type. */
export function Tuple(types, options = {}) {
    const [items, minItems, additionalItems] = [types, types.length, false];
    return Memory.Create({ ['~kind']: 'Tuple' }, { type: 'array', additionalItems, items, minItems }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TTuple. */
export function IsTuple(value) {
    return IsKind(value, 'Tuple');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TTuple. */
export function TupleOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'items', 'minItems', 'additionalItems']);
}
