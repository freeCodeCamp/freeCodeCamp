// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { RequiredAction } from '../engine/required/instantiate.mjs';
/** Creates a deferred Required action. */
export function RequiredDeferred(type, options = {}) {
    return Deferred('Required', [type], options);
}
/** Applies a Required action to the given type. */
export function Required(type, options = {}) {
    return RequiredAction(type, options);
}
