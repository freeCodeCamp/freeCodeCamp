// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { CapitalizeAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Capitalize action. */
export function CapitalizeDeferred(type, options = {}) {
    return Deferred('Capitalize', [type], options);
}
/** Applies a Capitalize action to the given type. */
export function Capitalize(type, options = {}) {
    return CapitalizeAction(type, options);
}
