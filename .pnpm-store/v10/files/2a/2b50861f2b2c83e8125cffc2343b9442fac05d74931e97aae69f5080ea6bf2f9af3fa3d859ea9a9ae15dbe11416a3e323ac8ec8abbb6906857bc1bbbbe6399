// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { NonNullableAction } from '../engine/non_nullable/instantiate.mjs';
/** Creates a deferred NonNullable action. */
export function NonNullableDeferred(type, options = {}) {
    return Deferred('NonNullable', [type], options);
}
/** Applies a NonNullable action to the given type. */
export function NonNullable(type, options = {}) {
    return NonNullableAction(type, options);
}
