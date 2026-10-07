// deno-lint-ignore-file
// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// StringPattern
// ------------------------------------------------------------------
export const StringPattern = '.*';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a String type. */
export function String(options) {
    return Memory.Create({ '~kind': 'String' }, { type: 'string' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TString. */
export function IsString(value) {
    return IsKind(value, 'String');
}
