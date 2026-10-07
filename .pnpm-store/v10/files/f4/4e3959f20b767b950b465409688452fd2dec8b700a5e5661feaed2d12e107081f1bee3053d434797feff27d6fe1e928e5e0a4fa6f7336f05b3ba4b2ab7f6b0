// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
/** Removes Immutable from the given type. */
export function ImmutableRemove(type) {
    return Memory.Discard(type, ['~immutable']);
}
/** Adds Immutable to the given type. */
export function ImmutableAdd(type) {
    return Memory.Update(type, { '~immutable': true }, {});
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Applies an Immutable modifier to the given type. */
export function Immutable(type) {
    return ImmutableAdd(type);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TImmutable */
export function IsImmutable(value) {
    return IsSchema(value) && Guard.HasPropertyKey(value, '~immutable');
}
