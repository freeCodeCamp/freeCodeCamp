// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Pattern
// ------------------------------------------------------------------
export const NumberPattern = '-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Number type. */
export function Number(options) {
    return Memory.Create({ '~kind': 'Number' }, { type: 'number' }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TNumber. */
export function IsNumber(value) {
    return IsKind(value, 'Number');
}
