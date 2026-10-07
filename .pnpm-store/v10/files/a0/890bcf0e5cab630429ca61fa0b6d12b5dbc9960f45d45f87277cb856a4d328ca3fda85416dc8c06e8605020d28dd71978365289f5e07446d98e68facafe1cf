// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { IsSchema } from './schema.mjs';
/** Removes Optional from the given type. */
export function OptionalRemove(type) {
    const result = Memory.Discard(type, ['~optional']);
    return result;
}
/** Adds Optional to the given type. */
export function OptionalAdd(type) {
    return Memory.Update(type, { '~optional': true }, {});
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Applies an Optional modifier to the given type. */
export function Optional(type) {
    return OptionalAdd(type);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TOptional */
export function IsOptional(value) {
    return IsSchema(value) && Guard.HasPropertyKey(value, '~optional');
}
