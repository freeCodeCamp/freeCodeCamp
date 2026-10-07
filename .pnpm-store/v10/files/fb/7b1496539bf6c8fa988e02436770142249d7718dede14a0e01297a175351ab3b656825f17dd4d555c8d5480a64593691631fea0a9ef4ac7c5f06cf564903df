// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Action
// ------------------------------------------------------------------
/** Creates an OptionalAddAction. */
export function OptionalAddAction(type) {
    return Memory.Create({ ['~kind']: 'OptionalAddAction' }, { type }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if this value is a OptionalAddAction. */
export function IsOptionalAddAction(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, '~kind')
        && Guard.HasPropertyKey(value, 'type')
        && Guard.IsEqual(value['~kind'], 'OptionalAddAction')
        && IsSchema(value.type);
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a OptionalRemoveAction. */
export function OptionalRemoveAction(type) {
    return Memory.Create({ ['~kind']: 'OptionalRemoveAction' }, { type }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if this value is a OptionalRemoveAction. */
export function IsOptionalRemoveAction(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, '~kind')
        && Guard.HasPropertyKey(value, 'type')
        && Guard.IsEqual(value['~kind'], 'OptionalRemoveAction')
        && IsSchema(value.type);
}
