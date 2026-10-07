// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/**
 * Creates a AsyncIterator type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export function AsyncIterator(iteratorItems, options) {
    return Memory.Create({ '~kind': 'AsyncIterator' }, { type: 'asyncIterator', iteratorItems }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TAsyncIterator */
export function IsAsyncIterator(value) {
    return IsKind(value, 'AsyncIterator');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TAsyncIterator. */
export function AsyncIteratorOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'iteratorItems']);
}
