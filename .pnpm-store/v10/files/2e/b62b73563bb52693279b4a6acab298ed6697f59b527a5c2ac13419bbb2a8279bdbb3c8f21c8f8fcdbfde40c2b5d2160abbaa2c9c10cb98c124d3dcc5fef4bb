// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates an Unknown type. */
export function Unknown(options) {
    return Memory.Create({ ['~kind']: 'Unknown' }, {}, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TUnknown. */
export function IsUnknown(value) {
    return IsKind(value, 'Unknown');
}
