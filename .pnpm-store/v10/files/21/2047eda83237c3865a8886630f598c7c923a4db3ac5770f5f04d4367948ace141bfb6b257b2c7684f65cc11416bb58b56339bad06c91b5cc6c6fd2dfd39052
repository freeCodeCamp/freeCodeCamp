// deno-fmt-ignore-file
// deno-lint-ignore-file 
import { Guard } from '../../guard/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Unsafe type. */
export function Unsafe(schema) {
    return Memory.Update(schema, { ['~unsafe']: null }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TUnsafe. */
export function IsUnsafe(value) {
    return Guard.IsObjectNotArray(value)
        && Guard.HasPropertyKey(value, '~unsafe')
        && Guard.IsNull(value['~unsafe']);
}
