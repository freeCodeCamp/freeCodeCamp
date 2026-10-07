// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Pattern
// ------------------------------------------------------------------
export const IntegerPattern = '-?(?:0|[1-9][0-9]*)';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Integer type. */
export function Integer(options) {
    return Memory.Create({ '~kind': 'Integer' }, { type: 'integer' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TInteger. */
export function IsInteger(value) {
    return IsKind(value, 'Integer');
}
