// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates an Array type. */
export function _Array_(items, options) {
    return Memory.Create({ '~kind': 'Array' }, { type: 'array', items }, options);
}
export { _Array_ as Array }; // Prevent Collision With Global Scope
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TArray. */
export function IsArray(value) {
    return IsKind(value, 'Array');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TArray. */
export function ArrayOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'items']);
}
