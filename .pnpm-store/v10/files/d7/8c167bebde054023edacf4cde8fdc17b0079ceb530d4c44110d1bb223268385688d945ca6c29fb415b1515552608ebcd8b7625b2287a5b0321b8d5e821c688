// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/**
 * Creates a Iterator type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export function Iterator(iteratorItems, options) {
    return Memory.Create({ '~kind': 'Iterator' }, { type: 'iterator', iteratorItems }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TIterator. */
export function IsIterator(value) {
    return IsKind(value, 'Iterator');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TIterator. */
export function IteratorOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'iteratorItems']);
}
