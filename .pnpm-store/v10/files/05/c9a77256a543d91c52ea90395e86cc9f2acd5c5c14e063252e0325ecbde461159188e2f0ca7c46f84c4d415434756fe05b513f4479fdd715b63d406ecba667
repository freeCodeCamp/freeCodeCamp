// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ReturnTypeAction } from '../engine/return_type/instantiate.mjs';
/** Creates a deferred ReturnType action. */
export function ReturnTypeDeferred(type, options = {}) {
    return Deferred('ReturnType', [type], options);
}
/** Applies a ReturnType action to the given type. */
export function ReturnType(type, options = {}) {
    return ReturnTypeAction(type, options);
}
