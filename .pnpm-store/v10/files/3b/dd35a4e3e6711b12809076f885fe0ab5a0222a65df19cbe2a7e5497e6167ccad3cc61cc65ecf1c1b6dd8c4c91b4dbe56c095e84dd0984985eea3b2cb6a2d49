// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Pattern
// ------------------------------------------------------------------
export const NeverPattern = '(?!)';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Never type. */
export function Never(options) {
    return Memory.Create({ '~kind': 'Never' }, { not: {} }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TNever. */
export function IsNever(value) {
    return IsKind(value, 'Never');
}
