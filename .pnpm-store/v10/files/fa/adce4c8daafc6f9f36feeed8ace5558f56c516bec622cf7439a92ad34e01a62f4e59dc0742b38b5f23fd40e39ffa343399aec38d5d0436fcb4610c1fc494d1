// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Union type. */
export function Union(anyOf, options = {}) {
    return Memory.Create({ '~kind': 'Union' }, { anyOf }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TUnion. */
export function IsUnion(value) {
    return IsKind(value, 'Union');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TUnion. */
export function UnionOptions(type) {
    return Memory.Discard(type, ['~kind', 'anyOf']);
}
