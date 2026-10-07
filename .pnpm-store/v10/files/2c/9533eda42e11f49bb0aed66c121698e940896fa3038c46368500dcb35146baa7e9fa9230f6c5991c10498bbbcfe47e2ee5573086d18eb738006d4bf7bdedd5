// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a This type. */
export function This(options) {
    return Memory.Create({ ['~kind']: 'This' }, { $ref: '#' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TThis. */
export function IsThis(value) {
    return IsKind(value, 'This');
}
