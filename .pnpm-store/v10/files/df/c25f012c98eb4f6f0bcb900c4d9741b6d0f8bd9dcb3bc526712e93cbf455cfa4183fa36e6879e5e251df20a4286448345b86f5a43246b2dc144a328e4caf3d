// deno-lint-ignore-file no-explicit-any
// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Ref type. */
export function Ref(ref, options) {
    return Memory.Create({ ['~kind']: 'Ref' }, { $ref: ref }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TRef. */
export function IsRef(value) {
    return IsKind(value, 'Ref');
}
