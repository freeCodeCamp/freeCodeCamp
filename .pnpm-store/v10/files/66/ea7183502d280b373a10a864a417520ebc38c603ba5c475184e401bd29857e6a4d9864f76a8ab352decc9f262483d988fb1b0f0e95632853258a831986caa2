// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { UncapitalizeAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Uncapitalize action. */
export function UncapitalizeDeferred(type, options = {}) {
    return Deferred('Uncapitalize', [type], options);
}
/** Applies a Uncapitalize action to the given type. */
export function Uncapitalize(type, options = {}) {
    return UncapitalizeAction(type, options);
}
