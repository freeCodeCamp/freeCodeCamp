// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Pattern
// ------------------------------------------------------------------
export const BigIntPattern = '-?(?:0|[1-9][0-9]*)n';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a BigInt type. */
export function BigInt(options) {
    return Memory.Create({ '~kind': 'BigInt' }, { type: 'bigint' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TBigInt. */
export function IsBigInt(value) {
    return IsKind(value, 'BigInt');
}
