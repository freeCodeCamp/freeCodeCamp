// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Action
// ------------------------------------------------------------------
/** Creates a ReadonlyAddAction. */
export function ReadonlyAddAction(type) {
    return Memory.Create({ ['~kind']: 'ReadonlyAddAction' }, { type }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if this value is a ReadonlyAddAction. */
export function IsReadonlyAddAction(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, '~kind')
        && Guard.HasPropertyKey(value, 'type')
        && Guard.IsEqual(value['~kind'], 'ReadonlyAddAction')
        && IsSchema(value.type);
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a ReadonlyRemoveAction. */
export function ReadonlyRemoveAction(type) {
    return Memory.Create({ ['~kind']: 'ReadonlyRemoveAction' }, { type }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if this value is a ReadonlyRemoveAction. */
export function IsReadonlyRemoveAction(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, '~kind')
        && Guard.HasPropertyKey(value, 'type')
        && Guard.IsEqual(value['~kind'], 'ReadonlyRemoveAction')
        && IsSchema(value.type);
}
