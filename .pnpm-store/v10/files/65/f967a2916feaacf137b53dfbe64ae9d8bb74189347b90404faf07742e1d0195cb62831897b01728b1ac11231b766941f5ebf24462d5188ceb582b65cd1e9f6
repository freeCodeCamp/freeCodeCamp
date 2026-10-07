// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Void type. */
export function Void(options) {
    return Memory.Create({ '~kind': 'Void' }, { type: 'void' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TVoid. */
export function IsVoid(value) {
    return IsKind(value, 'Void');
}
