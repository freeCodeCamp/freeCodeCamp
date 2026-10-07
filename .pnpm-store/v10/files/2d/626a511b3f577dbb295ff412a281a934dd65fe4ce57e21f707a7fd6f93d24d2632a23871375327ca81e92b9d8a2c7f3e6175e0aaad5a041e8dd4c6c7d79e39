// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates an Identifier. */
export function Identifier(name) {
    return Memory.Create({ '~kind': 'Identifier' }, { name });
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TIdentifier. */
export function IsIdentifier(value) {
    return IsKind(value, 'Identifier');
}
