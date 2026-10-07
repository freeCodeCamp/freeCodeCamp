// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Null type. */
export function Null(options) {
    return Memory.Create({ '~kind': 'Null' }, { type: 'null' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TNull. */
export function IsNull(value) {
    return IsKind(value, 'Null');
}
