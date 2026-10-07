// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
/** Removes a Readonly property modifier from the given type. */
export function ReadonlyRemove(type) {
    return Memory.Discard(type, ['~readonly']);
}
/** Adds a Readonly property modifier to the given type. */
export function ReadonlyAdd(type) {
    return Memory.Update(type, { '~readonly': true }, {});
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Applies an Readonly property modifier to the given type. */
export function Readonly(type) {
    return ReadonlyAdd(type);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TReadonly */
export function IsReadonly(value) {
    return IsSchema(value) && Guard.HasPropertyKey(value, '~readonly');
}
