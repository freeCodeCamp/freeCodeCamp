// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { PartialAction } from '../engine/partial/instantiate.mjs';
/** Creates a deferred Partial action. */
export function PartialDeferred(type, options = {}) {
    return Deferred('Partial', [type], options);
}
/** Applies a Partial action to the given type. */
export function Partial(type, options = {}) {
    return PartialAction(type, options);
}
