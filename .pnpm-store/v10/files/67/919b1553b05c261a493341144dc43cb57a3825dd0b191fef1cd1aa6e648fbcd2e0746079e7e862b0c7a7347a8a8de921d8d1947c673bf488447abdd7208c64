// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { UppercaseAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Uppercase action. */
export function UppercaseDeferred(type, options = {}) {
    return Deferred('Uppercase', [type], options);
}
/** Applies a Uppercase action to the given type. */
export function Uppercase(type, options = {}) {
    return UppercaseAction(type, options);
}
