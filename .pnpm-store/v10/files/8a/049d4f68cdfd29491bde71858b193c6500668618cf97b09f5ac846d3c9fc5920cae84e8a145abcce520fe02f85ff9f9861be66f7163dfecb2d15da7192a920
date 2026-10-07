// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Intersect type. */
export function Intersect(types, options = {}) {
    return Memory.Create({ '~kind': 'Intersect' }, { allOf: types }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TIntersect. */
export function IsIntersect(value) {
    return IsKind(value, 'Intersect');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TIntersect. */
export function IntersectOptions(type) {
    return Memory.Discard(type, ['~kind', 'allOf']);
}
