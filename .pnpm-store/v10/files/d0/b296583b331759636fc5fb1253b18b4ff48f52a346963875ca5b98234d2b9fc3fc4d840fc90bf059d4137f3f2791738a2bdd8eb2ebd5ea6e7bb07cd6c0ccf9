// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Boolean type. */
export function Boolean(options) {
    return Memory.Create({ '~kind': 'Boolean' }, { type: 'boolean' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TBoolean. */
export function IsBoolean(value) {
    return IsKind(value, 'Boolean');
}
