// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Undefined type. */
export function Undefined(options) {
    return Memory.Create({ '~kind': 'Undefined' }, { type: 'undefined' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TUndefined. */
export function IsUndefined(value) {
    return IsKind(value, 'Undefined');
}
