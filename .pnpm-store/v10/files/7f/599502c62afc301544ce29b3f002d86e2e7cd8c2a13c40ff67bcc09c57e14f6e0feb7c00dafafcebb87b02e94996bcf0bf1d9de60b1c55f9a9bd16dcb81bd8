// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Type
// ------------------------------------------------------------------
/** Creates a Rest instruction type. */
export function Rest(type) {
    return Memory.Create({ '~kind': 'Rest' }, { type: 'rest', items: type }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TRest. */
export function IsRest(value) {
    return IsKind(value, 'Rest');
}
