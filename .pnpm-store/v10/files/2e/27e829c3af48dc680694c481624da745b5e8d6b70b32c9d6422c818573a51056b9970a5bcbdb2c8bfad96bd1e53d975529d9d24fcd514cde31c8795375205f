// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
// ------------------------------------------------------------------
// ResolveRef
// ------------------------------------------------------------------
function ResolveRef(direction, context, type, value) {
    return Guard.HasPropertyKey(context, type.$ref)
        ? FromType(direction, context, context[type.$ref], value)
        : value;
}
// ------------------------------------------------------------------
// FromRef
//
// Decode and Encode apply the Callback and the referenced type's
// codec pipeline in opposite orders, since the two operations are
// inverses of each other.
//
// Decode: referenced type resolves first, Callback runs after.
//   wire value -> resolve $ref -> Callback -> decoded value
//
// Encode: Callback runs first, referenced type resolves after.
//   encoded value -> Callback -> resolve $ref -> wire value
//
// ------------------------------------------------------------------
export function FromRef(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode')
        ? Callback(direction, context, type, ResolveRef(direction, context, type, value))
        : ResolveRef(direction, context, type, Callback(direction, context, type, value));
}
