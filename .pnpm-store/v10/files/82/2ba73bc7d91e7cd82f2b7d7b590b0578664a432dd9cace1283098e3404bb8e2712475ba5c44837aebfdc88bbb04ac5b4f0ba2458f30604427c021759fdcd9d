// deno-fmt-ignore-file
// deno-lint-ignore-file 
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Any type. */
export function Any(options) {
    return Memory.Create({ ['~kind']: 'Any' }, {}, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TAny. */
export function IsAny(value) {
    return IsKind(value, 'Any');
}
