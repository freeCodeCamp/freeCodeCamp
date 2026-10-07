// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/**
 * Creates a Promise type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export function _Promise_(item, options) {
    return Memory.Create({ ['~kind']: 'Promise' }, { type: 'promise', item }, options);
}
export { _Promise_ as Promise };
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given type is TPromise. */
export function IsPromise(value) {
    return IsKind(value, 'Promise');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TPromise. */
export function PromiseOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'item']);
}
