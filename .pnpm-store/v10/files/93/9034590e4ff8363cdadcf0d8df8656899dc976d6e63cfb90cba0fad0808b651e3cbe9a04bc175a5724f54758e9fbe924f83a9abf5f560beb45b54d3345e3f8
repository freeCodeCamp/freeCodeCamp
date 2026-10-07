// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Symbol type. */
export function Symbol(options) {
    return Memory.Create({ '~kind': 'Symbol' }, { type: 'symbol' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TSymbol. */
export function IsSymbol(value) {
    return IsKind(value, 'Symbol');
}
