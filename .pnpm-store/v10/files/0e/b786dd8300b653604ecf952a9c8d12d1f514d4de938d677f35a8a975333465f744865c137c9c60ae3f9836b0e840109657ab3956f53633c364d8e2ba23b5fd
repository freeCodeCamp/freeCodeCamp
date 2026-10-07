// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Type
// ------------------------------------------------------------------
/** Creates a Generic type. */
export function Generic(parameters, expression) {
    return Memory.Create({ '~kind': 'Generic' }, { type: 'generic', parameters, expression });
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TGeneric. */
export function IsGeneric(value) {
    return IsKind(value, 'Generic');
}
